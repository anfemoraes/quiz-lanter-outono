import { useIdioma } from './IdiomaContext';

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
      <div className="contador" aria-live="polite">
        <span className="contador__valor">{acertos}</span>
        <span className="contador__separador">/</span>
        <span className="contador__total">{total}</span>
      </div>
    </div>
  );
}