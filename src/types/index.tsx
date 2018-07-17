import { FormStateMap } from "redux-form";

export interface IGameState {
    cards: string[];
    matchs?: [string, string];
}

export interface IStoreState {
    form: FormStateMap;
    game: IGameState;
}
