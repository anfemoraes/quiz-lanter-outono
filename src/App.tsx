import { Lanterna } from './components/Lanterna';
import { PerguntaModal } from './components/PerguntaModal';
import { useQuizState } from './hooks/useQuizState';
import { PERGUNTAS } from './data/perguntas';
import { Contador } from './components/Contador';
import { IdiomaToggle } from './components/IdiomasToggle';
import { MusicaFundo } from './components/MusicaFundo';
import { useIdioma } from './components/IdiomaContext';
import { IconeReiniciar } from './components/Icones';
import luaCheiaImg from './assets/artes/lua-cheia.png';
import coelhoJadeImg from './assets/artes/coelho-jade.png';
import mooncakeImg from './assets/artes/mooncake.png';
import nuvem1Img from './assets/artes/nuvem-1.png';
import nuvem2Img from './assets/artes/nuvem-2.png';

import './styles/lanterna.css';
import './styles/ceu.css';
import './styles/pergunta-modal.css';
import './styles/contador.css';
import './styles/idioma-toggle.css';
import './styles/musica-toggle.css';

const posicoes = [
  { top: 16, left: 28 }, { top: 22, left: 62 }, { top: 34, left: 38 },
  { top: 44, left: 80 }, { top: 54, left: 16 }, { top: 60, left: 52 },
  { top: 70, left: 26 }, { top: 76, left: 70 }, { top: 18, left: 45 },
  { top: 84, left: 42 },
];

const numerosChineses = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

function mensagemFinal(acertos: number, total: number, idioma: 'pt' | 'zh'): string {
  const proporcao = acertos / total;
  const mensagens = {
    pt: {
      perfeito: 'Perfeito! Você conhece o Festival do Meio-Outono de cor.',
      bom: 'Muito bem! Você já sabe boa parte das tradições da festa.',
      ok: 'Bom começo! Ainda dá pra descobrir mais sobre o Meio-Outono.',
      inicio: 'Toda jornada começa em algum lugar — volte e explore as lanternas de novo!',
    },
    zh: {
      perfeito: '太棒了!你完全了解中秋节的传统。',
      bom: '做得好!你已经了解了不少中秋节的习俗。',
      ok: '好的开始!还有更多关于中秋节的知识等着你发现。',
      inicio: '每段旅程都有起点——再去看看那些灯笼吧!',
    },
  };
  const m = mensagens[idioma];
  if (proporcao === 1) return m.perfeito;
  if (proporcao >= 0.7) return m.bom;
  if (proporcao >= 0.4) return m.ok;
  return m.inicio;
}

function App() {
  const {
    perguntaAtual,
    respondidas,
    acertos,
    quizCompleto,
    rodada,
    abrirPergunta,
    fecharPergunta,
    responder,
    reiniciar,
  } = useQuizState();
  const { idioma } = useIdioma();

  return (
    <div className="ceu-noturno">
      <div className="ceu-noturno__estrelas" />

      {/* Lua Cheia em destaque suave no céu noturno */}
      <div className="ceu-noturno__lua-wrapper" aria-hidden="true">
        <img
          src={luaCheiaImg}
          alt=""
          className="ceu-noturno__lua-img"
        />
        <div className="ceu-noturno__lua-halo" />
      </div>

      {/* Nuvens tradicionais com amplo espaço negativo */}
      <div className="ceu-noturno__nuvem ceu-noturno__nuvem--1" aria-hidden="true">
        <img src={nuvem1Img} alt="" />
      </div>
      <div className="ceu-noturno__nuvem ceu-noturno__nuvem--2" aria-hidden="true">
        <img src={nuvem2Img} alt="" />
      </div>

      <div className="topo-esquerda">
        <IdiomaToggle />
        <MusicaFundo />
      </div>
      <Contador acertos={acertos} total={PERGUNTAS.length} />

      {PERGUNTAS.map((pergunta, index) => (
        <Lanterna
          key={`${pergunta.id}-${rodada}`}
          id={pergunta.id}
          top={posicoes[index]?.top ?? 50}
          left={posicoes[index]?.left ?? 50}
          ideograma={numerosChineses[index] ?? String(index + 1)}
          respondida={respondidas.has(pergunta.id)}
          onTocar={abrirPergunta}
        />
      ))}

      {perguntaAtual && (
        <PerguntaModal
          pergunta={perguntaAtual}
          onResponder={(acertou) => responder(perguntaAtual.id, acertou)}
          onFechar={fecharPergunta}
        />
      )}

      {quizCompleto && (
        <div className="pergunta-overlay" role="dialog" aria-modal="true" aria-labelledby="titulo-final">
          <div className="pergunta-card pergunta-card--final">
            <div className="pergunta-card__ilustracao-final">
              <img
                src={coelhoJadeImg}
                alt={idioma === 'pt' ? 'Coelho de Jade com Mooncake' : '玉兔抱月饼'}
                className="pergunta-card__coelho-final"
              />
            </div>

            <p id="titulo-final" className="pergunta-card__ideograma-final">中秋节快乐</p>
            <p className="pergunta-card__subtitulo-final">
              {idioma === 'pt' ? 'Feliz Festival do Meio-Outono!' : '中秋佳节 · 团圆美满'}
            </p>

            <div className="pergunta-card__pontuacao-final">
              <img
                src={mooncakeImg}
                alt=""
                className="pergunta-card__mooncake-final-ico"
                aria-hidden="true"
              />
              <span className="pergunta-card__resultado-numero">{acertos}/{PERGUNTAS.length}</span>
              <span className="pergunta-card__pontos-rotulo">{idioma === 'pt' ? 'pontos' : '分'}</span>
            </div>

            <p className="pergunta-card__enigma">{mensagemFinal(acertos, PERGUNTAS.length, idioma)}</p>

            <button className="pergunta-card__reiniciar" onClick={reiniciar}>
              <IconeReiniciar size={18} />
              <span>{idioma === 'pt' ? 'Reiniciar o jogo' : '重新开始'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;