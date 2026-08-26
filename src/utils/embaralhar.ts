import type { Pergunta, Opcao } from '../data/perguntas';

export interface PerguntaEmbaralhada {
  id: string;
  enigma: string;
  opcoes: Opcao[];
  correta: number;
}

export function embaralharPergunta(pergunta: Pergunta): PerguntaEmbaralhada {
  const opcoesComIndice = pergunta.opcoes.map((opcao, index) => ({ opcao, ehCorreta: index === pergunta.correta }));

  // Fisher-Yates
  for (let i = opcoesComIndice.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opcoesComIndice[i], opcoesComIndice[j]] = [opcoesComIndice[j], opcoesComIndice[i]];
  }

  return {
    id: pergunta.id,
    enigma: pergunta.enigma,
    opcoes: opcoesComIndice.map((o) => o.opcao),
    correta: opcoesComIndice.findIndex((o) => o.ehCorreta),
  };
}