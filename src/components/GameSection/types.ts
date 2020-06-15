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

export interface GameSectionProps {
  mode: GameMode;
}
