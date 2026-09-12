import { useMemo, useState } from 'react';
import type { Pergunta } from '../data/perguntas';
import { embaralharPergunta } from '../utils/embaralhar';
import { useIdioma } from '../components/IdiomaContext';
import { IconeFechar } from './Icones';

interface PerguntaModalProps {
  pergunta: Pergunta;
  onResponder: (acertou: boolean) => void;
  onFechar: () => void;
}

export function PerguntaModal({ pergunta, onResponder, onFechar }: PerguntaModalProps) {
  const { idioma } = useIdioma();
  const perguntaEmbaralhada = useMemo(() => embaralharPergunta(pergunta), [pergunta]);
  const [escolhida, setEscolhida] = useState<number | null>(null);

  const escolher = (index: number) => {
    if (escolhida !== null) return;
    setEscolhida(index);
    onResponder(index === perguntaEmbaralhada.correta);
  };

  return (
    <div className="pergunta-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-enigma">
      <div className="pergunta-card">
        <button
          className="pergunta-card__fechar"
          onClick={onFechar}
          aria-label={idioma === 'pt' ? 'Fechar janela' : '关闭窗口'}
        >
          <IconeFechar size={18} />
        </button>

        <p id="modal-enigma" className="pergunta-card__enigma">{perguntaEmbaralhada.enigma[idioma]}</p>

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
                <span className="pergunta-card__ideograma">{opcao.ideograma}</span>
                <span className="pergunta-card__texto">{opcao.texto[idioma]}</span>
              </button>
            );
          })}
        </div>

        {escolhida !== null && (
          <button className="pergunta-card__continuar" onClick={onFechar}>
            {idioma === 'pt' ? 'Continuar' : '继续'}
          </button>
        )}
      </div>
    </div>
  );
}