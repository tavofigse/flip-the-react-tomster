import { List } from 'immutable';
import { FormStateMap } from "redux-form";
import { ICard } from "../models/game/Card";

export interface IGameState {
    cards: List<ICard>;
    matches: List<ICard>;
    prevCard: ICard | null;
}

export const InitialGameState: IGameState = {
    cards: List<ICard>(),
    matches: List<ICard>(),
    prevCard: null
}

export interface IStoreState {
    form: FormStateMap;
    game: IGameState;
}
