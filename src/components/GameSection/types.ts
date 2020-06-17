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
  date: Date;
  gameMode: GameMode;
  winner: string;
}
