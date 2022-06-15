export interface ISalas {
  id: number;
  name: string;
  time: string;
  participantes: number;
}

export interface ITemas {
  id: number;
  idsala: number;
  tema: Array<string>;
}

export const salas: Array<ISalas> = [];

export const temas: Array<ITemas> = [
  {
    id: 1,
    idsala: 1,
    tema: ["matematicas", "otro"]
  },
  {
    id: 2,
    idsala: 2,
    tema: ["matematicas", "otro"]
  },
  {
    id: 3,
    idsala: 1,
    tema: ["matematicas", "otr"]
  },
  {
    id: 4,
    idsala: 2,
    tema: ["matematicas", "otro"]
  }
];
