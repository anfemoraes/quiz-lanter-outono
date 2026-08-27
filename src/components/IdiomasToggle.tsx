import { useIdioma } from '../components/IdiomaContext';

function BandeiraBrasil() {
  return (
    <svg viewBox="0 0 30 21" className="idioma-toggle__bandeira">
      <rect width="30" height="21" fill="#009739" />
      <polygon points="15,3 27,10.5 15,18 3,10.5" fill="#FEDD00" />
      <circle cx="15" cy="10.5" r="5" fill="#012169" />
    </svg>
  );
}

function BandeiraChina() {
  return (
    <svg viewBox="0 0 30 21" className="idioma-toggle__bandeira">
      <rect width="30" height="21" fill="#DE2910" />
      <polygon points="6,3 7,6 10,6 7.5,8 8.5,11 6,9 3.5,11 4.5,8 2,6 5,6" fill="#FFDE00" />
    </svg>
  );
}

export function IdiomaToggle() {
  const { idioma, definirIdioma } = useIdioma();

  return (
    <div className="idioma-toggle__wrapper">
      <span className="idioma-toggle__rotulo">
        {idioma === 'pt' ? 'Idiomas' : '语言'}
      </span>
      <div className="idioma-toggle">
        <button
          className={`idioma-toggle__botao ${idioma === 'pt' ? 'ativo' : ''}`}
          onClick={() => definirIdioma('pt')}
          aria-label="Mudar para português"
          aria-pressed={idioma === 'pt'}
        >
          <BandeiraBrasil />
        </button>
        <button
          className={`idioma-toggle__botao ${idioma === 'zh' ? 'ativo' : ''}`}
          onClick={() => definirIdioma('zh')}
          aria-label="切换到中文"
          aria-pressed={idioma === 'zh'}
        >
          <BandeiraChina />
        </button>
      </div>
    </div>
  );
}