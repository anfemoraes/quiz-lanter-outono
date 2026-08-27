export interface Opcao {
  texto: { pt: string; zh: string };
  icone: string;
  ideograma: string; // caractere-resposta, igual nos dois idiomas
}

export interface Pergunta {
  id: string;
  enigma: { pt: string; zh: string };
  ideograma?: string;
  opcoes: Opcao[];
  correta: number;
}

export const PERGUNTAS: Pergunta[] = [
  {
    id: "bolo-da-lua",
    ideograma: "饼",
    enigma: {
      pt: "Sou redondo como a lua cheia, mas caibo na palma da mão. Trago um recheio escondido e viajo em bandejas até a mesa da família.",
      zh: "我像满月一样圆,却能装进手心。我藏着秘密的馅料,坐着托盘去与家人团聚。",
    },
    opcoes: [
      { texto: { pt: "Bolo da lua", zh: "月饼" }, icone: "🥮", ideograma: "饼" },
      { texto: { pt: "Lanterna", zh: "灯笼" }, icone: "🏮", ideograma: "灯" },
      { texto: { pt: "Coelho da lua", zh: "玉兔" }, icone: "🐇", ideograma: "兔" },
    ],
    correta: 0,
  },
  {
    id: "lanterna",
    ideograma: "灯",
    enigma: {
      pt: "À noite eu acordo e balanço no vento. Não tenho chama, mas pareço arder em vermelho e dourado. Quanto mais escuro o céu, mais bonito eu fico.",
      zh: "夜晚我醒来,在风中摇摆。我没有火焰,却好像燃烧着红与金。天越黑,我越美丽。",
    },
    opcoes: [
      { texto: { pt: "Lanterna", zh: "灯笼" }, icone: "🏮", ideograma: "灯" },
      { texto: { pt: "Lua cheia", zh: "满月" }, icone: "🌕", ideograma: "月" },
      { texto: { pt: "Dragão", zh: "龙" }, icone: "🐉", ideograma: "龙" },
    ],
    correta: 0,
  },
  {
    id: "chang-e",
    ideograma: "嫦",
    enigma: {
      pt: "Subi ao céu depois de beber algo proibido. Moro sozinha na lua e fico observando quem ficou na Terra.",
      zh: "喝下禁药后我飞上了天。我独自住在月亮上,望着留在人间的人。",
    },
    opcoes: [
      { texto: { pt: "Chang'e", zh: "嫦娥" }, icone: "👸", ideograma: "嫦" },
      { texto: { pt: "Coelho da lua", zh: "玉兔" }, icone: "🐇", ideograma: "兔" },
      { texto: { pt: "Lua cheia", zh: "满月" }, icone: "🌕", ideograma: "月" },
    ],
    correta: 0,
  },
  {
    id: "lua-cheia",
    ideograma: "月",
    enigma: {
      pt: "Uma vez por mês fico do jeito que todo mundo espera: inteira, brilhante, sem nenhum pedaço faltando.",
      zh: "每个月一次,我变成大家期待的样子:圆满、明亮,没有一处缺失。",
    },
    opcoes: [
      { texto: { pt: "Lua cheia", zh: "满月" }, icone: "🌕", ideograma: "月" },
      { texto: { pt: "Bolo da lua", zh: "月饼" }, icone: "🥮", ideograma: "饼" },
      { texto: { pt: "Lanterna", zh: "灯笼" }, icone: "🏮", ideograma: "灯" },
    ],
    correta: 0,
  },
  {
    id: "vermelho",
    ideograma: "红",
    enigma: {
      pt: "Nas portas, nas roupas, nos envelopes — eu apareço sempre que alguém quer desejar sorte a outra pessoa.",
      zh: "在门上,在衣服上,在红包里——只要有人想祝福别人,我就会出现。",
    },
    opcoes: [
      { texto: { pt: "Vermelho", zh: "红色" }, icone: "🔴", ideograma: "红" },
      { texto: { pt: "Dourado", zh: "金色" }, icone: "🟡", ideograma: "金" },
      { texto: { pt: "Branco", zh: "白色" }, icone: "⚪", ideograma: "白" },
    ],
    correta: 0,
  },
  {
    id: "dragao",
    ideograma: "龙",
    enigma: {
      pt: "Tenho corpo comprido e escamas, mas nunca voo sozinho — preciso de várias pessoas embaixo de mim pra ganhar vida nas ruas.",
      zh: "我身体修长,布满鳞片,但从不独自飞翔——需要很多人在我身下,我才能在街上活起来。",
    },
    opcoes: [
      { texto: { pt: "Dragão", zh: "龙" }, icone: "🐉", ideograma: "龙" },
      { texto: { pt: "Leão", zh: "狮" }, icone: "🦁", ideograma: "狮" },
      { texto: { pt: "Coelho da lua", zh: "玉兔" }, icone: "🐇", ideograma: "兔" },
    ],
    correta: 0,
  },
  {
    id: "reuniao-familiar",
    ideograma: "圆",
    enigma: {
      pt: "Não sou um objeto, sou um sentimento. Aconteço quando todo mundo volta pra mesma mesa, nem que seja de longe.",
      zh: "我不是物品,是一种感觉。当所有人重新回到同一张桌子旁,哪怕从很远的地方赶来,我就会发生。",
    },
    opcoes: [
      { texto: { pt: "Reunião em família", zh: "团圆" }, icone: "👨‍👩‍👧‍👦", ideograma: "圆" },
      { texto: { pt: "Bolo da lua", zh: "月饼" }, icone: "🥮", ideograma: "饼" },
      { texto: { pt: "Lua cheia", zh: "满月" }, icone: "🌕", ideograma: "月" },
    ],
    correta: 0,
  },
  {
    id: "colheita",
    ideograma: "收",
    enigma: {
      pt: "Antes de qualquer festa, alguém plantou, esperou e recolheu. Sem mim, a mesa da celebração ficaria vazia.",
      zh: "在任何节日之前,总有人播种、等待、收获。没有我,庆典的桌子将是空的。",
    },
    opcoes: [
      { texto: { pt: "Colheita", zh: "收成" }, icone: "🌾", ideograma: "收" },
      { texto: { pt: "Chá", zh: "茶" }, icone: "🍵", ideograma: "茶" },
      { texto: { pt: "Bolo da lua", zh: "月饼" }, icone: "🥮", ideograma: "饼" },
    ],
    correta: 0,
  },
  {
    id: "enigma",
    ideograma: "谜",
    enigma: {
      pt: "Eu me escondo dentro de palavras bonitas. Quanto mais você pensa, mais perto chega de mim.",
      zh: "我藏在美丽的字句之中。你想得越多,就越接近我。",
    },
    opcoes: [
      { texto: { pt: "Enigma (charada)", zh: "谜语" }, icone: "❓", ideograma: "谜" },
      { texto: { pt: "Lua cheia", zh: "满月" }, icone: "🌕", ideograma: "月" },
      { texto: { pt: "Lanterna", zh: "灯笼" }, icone: "🏮", ideograma: "灯" },
    ],
    correta: 0,
  },
  {
    id: "coelho-da-lua",
    ideograma: "兔",
    enigma: {
      pt: "Vivo na lua, bato um pilão o dia inteiro, e dizem que preparo um remédio que nunca acaba.",
      zh: "我住在月亮上,整天捣着药杵,据说我准备的药永远用不完。",
    },
    opcoes: [
      { texto: { pt: "Coelho da lua", zh: "玉兔" }, icone: "🐇", ideograma: "兔" },
      { texto: { pt: "Chang'e", zh: "嫦娥" }, icone: "👸", ideograma: "嫦" },
      { texto: { pt: "Dragão", zh: "龙" }, icone: "🐉", ideograma: "龙" },
    ],
    correta: 0,
  },
];