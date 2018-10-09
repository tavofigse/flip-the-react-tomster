import { List } from 'immutable';
import { FormStateMap } from "redux-form";
import { ICard } from "../models/game/Card";

export interface IGameState {
    cards: List<ICard>;
    prevCard: ICard | null;
}

export interface IStoreState {
    form: FormStateMap;
    game: IGameState;
}
