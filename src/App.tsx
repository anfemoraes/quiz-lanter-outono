import { Lanterna } from './components/Lanterna';
import { PerguntaModal } from './components/PerguntaModal';
import { useQuizState } from './hooks/useQuizState';
import { PERGUNTAS } from './data/perguntas';
import { Contador } from './components/Contador';
import { IdiomaToggle } from './components/IdiomasToggle';
import { useIdioma } from './components/IdiomaContext';
import './styles/lanterna.css';
import './styles/ceu.css';
import './styles/pergunta-modal.css';
import './styles/contador.css';
import './styles/idioma-toggle.css';

const posicoes = [
  { top: 12, left: 20 }, { top: 20, left: 60 }, { top: 32, left: 35 },
  { top: 42, left: 78 }, { top: 52, left: 15 }, { top: 58, left: 50 },
  { top: 68, left: 25 }, { top: 74, left: 68 }, { top: 15, left: 45 },
  { top: 84, left: 40 },
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
  const { perguntaAtual, respondidas, acertos, quizCompleto, abrirPergunta, fecharPergunta, responder } = useQuizState();
  const { idioma } = useIdioma();

  return (
    <div className="ceu-noturno">
      <div className="ceu-noturno__estrelas" />
      <div className="ceu-noturno__nuvens" />
      <div className="ceu-noturno__lua" />

      <IdiomaToggle />
      <Contador acertos={acertos} total={PERGUNTAS.length} />

      {PERGUNTAS.map((pergunta, index) => (
        <Lanterna
          key={pergunta.id}
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
        <div className="pergunta-overlay">
          <div className="pergunta-card pergunta-card--final">
            <p className="pergunta-card__ideograma-final">中秋节快乐</p>
            <p className="pergunta-card__resultado-numero">{acertos}/{PERGUNTAS.length}</p>
            <p className="pergunta-card__enigma">{mensagemFinal(acertos, PERGUNTAS.length, idioma)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;