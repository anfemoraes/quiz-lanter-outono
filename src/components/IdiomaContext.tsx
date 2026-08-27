import { createContext, useContext, useState, type ReactNode } from 'react';

type Idioma = 'pt' | 'zh';

interface IdiomaContextType {
  idioma: Idioma;
  alternarIdioma: () => void;
  definirIdioma: (idioma: Idioma) => void;
}

const IdiomaContext = createContext<IdiomaContextType | null>(null);

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>('pt');

  const alternarIdioma = () => setIdioma((atual) => (atual === 'pt' ? 'zh' : 'pt'));
  const definirIdioma = (novo: Idioma) => setIdioma(novo);

  return (
    <IdiomaContext.Provider value={{ idioma, alternarIdioma, definirIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export function useIdioma() {
  const contexto = useContext(IdiomaContext);
  if (!contexto) throw new Error('useIdioma precisa estar dentro de um IdiomaProvider');
  return contexto;
}