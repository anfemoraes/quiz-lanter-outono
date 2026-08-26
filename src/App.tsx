import { Lanterna } from './components/Lanterna';
import { PerguntaModal } from './components/PerguntaModal';
import { useQuizState } from './hooks/useQuizState';
import { PERGUNTAS } from './data/perguntas';
import { Contador } from './components/Contador';
import './styles/lanterna.css';
import './styles/ceu.css';
import './styles/pergunta-modal.css';
import './styles/contador.css';

const posicoes = [
  { top: 12, left: 20 }, { top: 20, left: 60 }, { top: 32, left: 35 },
  { top: 42, left: 78 }, { top: 52, left: 15 }, { top: 58, left: 50 },
  { top: 68, left: 25 }, { top: 74, left: 68 }, { top: 15, left: 45 },
  { top: 84, left: 40 },
];

const numerosChineses = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

function App() {
  const { perguntaAtual, respondidas, acertos, quizCompleto, abrirPergunta, fecharPergunta, responder } = useQuizState();

  return (
    <div className="ceu-noturno">
      <div className="ceu-noturno__estrelas" />
      <div className="ceu-noturno__nuvens" />
      <div className="ceu-noturno__lua" />

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
          <div className="pergunta-card">
            <p>Você acertou {acertos} de {PERGUNTAS.length}!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;