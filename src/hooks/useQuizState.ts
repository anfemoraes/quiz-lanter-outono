import { useState } from 'react';
import { PERGUNTAS } from '../data/perguntas';

export function useQuizState() {
  const [perguntaAtualId, setPerguntaAtualId] = useState<string | null>(null);
  const [respondidas, setRespondidas] = useState<Set<string>>(new Set());
  const [acertos, setAcertos] = useState(0);

  const abrirPergunta = (id: string) => setPerguntaAtualId(id);
  const fecharPergunta = () => setPerguntaAtualId(null);

  const responder = (id: string, acertou: boolean) => {
  setRespondidas((prev) => new Set(prev).add(id));
  if (acertou) setAcertos((prev) => prev + 1);
};

  const perguntaAtual = PERGUNTAS.find((p) => p.id === perguntaAtualId) ?? null;
  const quizCompleto = respondidas.size === PERGUNTAS.length;

  return { perguntaAtual, respondidas, acertos, quizCompleto, abrirPergunta, fecharPergunta, responder };
}