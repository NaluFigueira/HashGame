export enum CellContentType {
  EMPTY,
  CIRCLE,
  X,
}

export enum GameMode {
  HumanoVSHumano,
  ComputadorVSHumano,
  HumanoVSComputador,
}

export interface Round {
  date: string;
  gameMode: GameMode;
  winner: string;
}
