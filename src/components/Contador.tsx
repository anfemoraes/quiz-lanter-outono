import { useIdioma } from './IdiomaContext';
import mooncakeImg from '../assets/artes/mooncake.png';

interface ContadorProps {
  acertos: number;
  total: number;
}

export function Contador({ acertos, total }: ContadorProps) {
  const { idioma } = useIdioma();

  return (
    <div className="contador__wrapper">
      <span className="contador__rotulo">
        {idioma === 'pt' ? 'Pontuação' : '得分'}
      </span>
      <div
        className="contador"
        aria-live="polite"
        title={idioma === 'pt' ? `${acertos} de ${total} pontos` : `${acertos} / ${total} 分`}
      >
        <img
          src={mooncakeImg}
          alt={idioma === 'pt' ? 'Bolo da Lua' : '月饼'}
          className="contador__icone-mooncake"
        />
        <span className="contador__valor">{acertos}</span>
        <span className="contador__separador">/</span>
        <span className="contador__total">{total}</span>
      </div>
    </div>
  );
}