export enum GameStatus {
  START,
  PLAYING,
  END,
}

export interface GameInfo {
  playerName: string;
  gameStatus: GameStatus;
  playerTime: string;
}
