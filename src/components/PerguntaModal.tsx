import { useMemo, useState } from 'react';
import type { Pergunta } from '../data/perguntas';
import { embaralharPergunta } from '../utils/embaralhar';

interface PerguntaModalProps {
  pergunta: Pergunta;
  onResponder: (acertou: boolean) => void;
  onFechar: () => void;
}

export function PerguntaModal({ pergunta, onResponder, onFechar }: PerguntaModalProps) {
  const perguntaEmbaralhada = useMemo(() => embaralharPergunta(pergunta), [pergunta.id]);
  const [escolhida, setEscolhida] = useState<number | null>(null);

  const escolher = (index: number) => {
    if (escolhida !== null) return;
    setEscolhida(index);
    onResponder(index === perguntaEmbaralhada.correta);
  };

  return (
    <div className="pergunta-overlay" role="dialog" aria-modal="true">
      <div className="pergunta-card">
        <button
          className="pergunta-card__fechar"
          onClick={onFechar}
          aria-label="Fechar sem responder"
        >
          ×
        </button>

        <p className="pergunta-card__enigma">{perguntaEmbaralhada.enigma}</p>

        <div className="pergunta-card__opcoes">
          {perguntaEmbaralhada.opcoes.map((opcao, index) => {
            const respondeu = escolhida !== null;
            const ehCorreta = index === perguntaEmbaralhada.correta;
            const ehEscolhida = index === escolhida;

            let estado = '';
            if (respondeu && ehCorreta) estado = 'correta';
            else if (respondeu && ehEscolhida && !ehCorreta) estado = 'errada';

            return (
              <button
                key={index}
                className={`pergunta-card__opcao ${estado}`}
                onClick={() => escolher(index)}
                disabled={respondeu}
              >
                <span className="pergunta-card__icone">{opcao.icone}</span>
                <span className="pergunta-card__ideograma">{opcao.ideograma}</span>
                <span className="pergunta-card__texto">{opcao.texto}</span>
              </button>
            );
          })}
        </div>

        {escolhida !== null && (
          <button className="pergunta-card__continuar" onClick={onFechar}>
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}