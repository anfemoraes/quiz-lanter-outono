import { useEffect, useRef, useState } from 'react';
import { useIdioma } from './IdiomaContext';
import { IconeSom, IconeSemSom } from './Icones';

export function MusicaFundo() {
  const { idioma } = useIdioma();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tocando, setTocando] = useState(false);
  const usuarioInteragiuRef = useRef(false);

  useEffect(() => {
    const audio = new Audio('/musica-fundo.webm');
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    // Tentar iniciar suavemente no primeiro toque ou clique na página
    const iniciarComInteracao = () => {
      if (usuarioInteragiuRef.current || !audioRef.current) return;
      usuarioInteragiuRef.current = true;
      audioRef.current
        .play()
        .then(() => setTocando(true))
        .catch(() => {
          // Navegador bloqueou ou áudio requer clique direto
        });
      removerListeners();
    };

    const removerListeners = () => {
      window.removeEventListener('click', iniciarComInteracao);
      window.removeEventListener('touchstart', iniciarComInteracao);
      window.removeEventListener('keydown', iniciarComInteracao);
    };

    window.addEventListener('click', iniciarComInteracao, { once: true });
    window.addEventListener('touchstart', iniciarComInteracao, { once: true });
    window.addEventListener('keydown', iniciarComInteracao, { once: true });

    return () => {
      removerListeners();
      audio.pause();
      audio.src = '';
    };
  }, []);

  const alternarMusica = () => {
    const audio = audioRef.current;
    if (!audio) return;
    usuarioInteragiuRef.current = true;

    if (tocando) {
      audio.pause();
      setTocando(false);
    } else {
      audio
        .play()
        .then(() => setTocando(true))
        .catch((err) => console.log('Erro ao reproduzir áudio:', err));
    }
  };

  return (
    <div className="musica-toggle__wrapper">
      <span className="musica-toggle__rotulo">
        {idioma === 'pt' ? 'Música' : '音乐'}
      </span>
      <button
        type="button"
        className={`musica-toggle__botao ${tocando ? 'ativo' : ''}`}
        onClick={alternarMusica}
        aria-label={
          tocando
            ? idioma === 'pt'
              ? 'Silenciar música de fundo'
              : '静音背景音乐'
            : idioma === 'pt'
              ? 'Tocar música de fundo'
              : '播放背景音乐'
        }
        title={
          tocando
            ? idioma === 'pt'
              ? 'Música ligada (clique para mutar)'
              : '音乐已开启 (点击静音)'
            : idioma === 'pt'
              ? 'Música desligada (clique para tocar)'
              : '音乐已静音 (点击播放)'
        }
      >
        {tocando ? <IconeSom size={19} /> : <IconeSemSom size={19} />}
      </button>
    </div>
  );
}
