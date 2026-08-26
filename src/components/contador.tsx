interface ContadorProps {
  acertos: number;
  total: number;
}

export function Contador({ acertos, total }: ContadorProps) {
  return (
    <div className="contador" aria-live="polite">
      <span className="contador__valor">{acertos}</span>
      <span className="contador__separador">/</span>
      <span className="contador__total">{total}</span>
    </div>
  );
}