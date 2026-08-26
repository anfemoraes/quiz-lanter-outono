export interface Opcao {
  texto: string;
  icone: string; // emoji por enquanto — trocar por SVG no estilo da lanterna.svg depois
  ideograma: string; // caractere chinês correspondente à resposta
}

export interface Pergunta {
  id: string;
  enigma: string;
  ideograma?: string;
  opcoes: Opcao[];
  correta: number;
}

export const PERGUNTAS: Pergunta[] = [
  {
    id: "bolo-da-lua",
    ideograma: "饼",
    enigma:
      "Sou redondo como a lua cheia, mas caibo na palma da mão. Trago um recheio escondido e viajo em bandejas até a mesa da família.",
    opcoes: [
      { texto: "Bolo da lua", icone: "🥮", ideograma: "饼" },
      { texto: "Lanterna", icone: "🏮", ideograma: "灯" },
      { texto: "Coelho da lua", icone: "🐇", ideograma: "兔" },
    ],
    correta: 0,
  },
  {
    id: "lanterna",
    ideograma: "灯",
    enigma:
      "À noite eu acordo e balanço no vento. Não tenho chama, mas pareço arder em vermelho e dourado. Quanto mais escuro o céu, mais bonito eu fico.",
    opcoes: [
      { texto: "Lanterna", icone: "🏮", ideograma: "灯" },
      { texto: "Lua cheia", icone: "🌕", ideograma: "月" },
      { texto: "Dragão", icone: "🐉", ideograma: "龙" },
    ],
    correta: 0,
  },
  {
    id: "chang-e",
    ideograma: "嫦",
    enigma:
      "Subi ao céu depois de beber algo proibido. Moro sozinha na lua e fico observando quem ficou na Terra.",
    opcoes: [
      { texto: "Chang'e", icone: "👸", ideograma: "嫦" },
      { texto: "Coelho da lua", icone: "🐇", ideograma: "兔" },
      { texto: "Lua cheia", icone: "🌕", ideograma: "月" },
    ],
    correta: 0,
  },
  {
    id: "lua-cheia",
    ideograma: "月",
    enigma:
      "Uma vez por mês fico do jeito que todo mundo espera: inteira, brilhante, sem nenhum pedaço faltando.",
    opcoes: [
      { texto: "Lua cheia", icone: "🌕", ideograma: "月" },
      { texto: "Bolo da lua", icone: "🥮", ideograma: "饼" },
      { texto: "Lanterna", icone: "🏮", ideograma: "灯" },
    ],
    correta: 0,
  },
  {
    id: "vermelho",
    ideograma: "红",
    enigma:
      "Nas portas, nas roupas, nos envelopes — eu apareço sempre que alguém quer desejar sorte a outra pessoa.",
    opcoes: [
      { texto: "Vermelho", icone: "🔴", ideograma: "红" },
      { texto: "Dourado", icone: "🟡", ideograma: "金" },
      { texto: "Branco", icone: "⚪", ideograma: "白" },
    ],
    correta: 0,
  },
  {
    id: "dragao",
    ideograma: "龙",
    enigma:
      "Tenho corpo comprido e escamas, mas nunca voo sozinho — preciso de várias pessoas embaixo de mim pra ganhar vida nas ruas.",
    opcoes: [
      { texto: "Dragão", icone: "🐉", ideograma: "龙" },
      { texto: "Leão", icone: "🦁", ideograma: "狮" },
      { texto: "Coelho da lua", icone: "🐇", ideograma: "兔" },
    ],
    correta: 0,
  },
  {
    id: "reuniao-familiar",
    ideograma: "圆",
    enigma:
      "Não sou um objeto, sou um sentimento. Aconteço quando todo mundo volta pra mesma mesa, nem que seja de longe.",
    opcoes: [
      { texto: "Reunião em família", icone: "👨‍👩‍👧‍👦", ideograma: "圆" },
      { texto: "Bolo da lua", icone: "🥮", ideograma: "饼" },
      { texto: "Lua cheia", icone: "🌕", ideograma: "月" },
    ],
    correta: 0,
  },
  {
    id: "colheita",
    ideograma: "收",
    enigma:
      "Antes de qualquer festa, alguém plantou, esperou e recolheu. Sem mim, a mesa da celebração ficaria vazia.",
    opcoes: [
      { texto: "Colheita", icone: "🌾", ideograma: "收" },
      { texto: "Chá", icone: "🍵", ideograma: "茶" },
      { texto: "Bolo da lua", icone: "🥮", ideograma: "饼" },
    ],
    correta: 0,
  },
  {
    id: "enigma",
    ideograma: "谜",
    enigma:
      "Eu me escondo dentro de palavras bonitas. Quanto mais você pensa, mais perto chega de mim.",
    opcoes: [
      { texto: "Enigma (charada)", icone: "❓", ideograma: "谜" },
      { texto: "Lua cheia", icone: "🌕", ideograma: "月" },
      { texto: "Lanterna", icone: "🏮", ideograma: "灯" },
    ],
    correta: 0,
  },
  {
    id: "coelho-da-lua",
    ideograma: "兔",
    enigma:
      "Vivo na lua, bato um pilão o dia inteiro, e dizem que preparo um remédio que nunca acaba.",
    opcoes: [
      { texto: "Coelho da lua", icone: "🐇", ideograma: "兔" },
      { texto: "Chang'e", icone: "👸", ideograma: "嫦" },
      { texto: "Dragão", icone: "🐉", ideograma: "龙" },
    ],
    correta: 0,
  },
];