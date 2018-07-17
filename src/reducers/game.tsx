import { GameAction } from "../actions/game";
import { FLIP_CARD } from "../constants/game";
import { IGameState } from "../types/index"

export const gameReducer = (state: IGameState = {cards: []}, action: GameAction) => {
    switch (action.type) {
        case FLIP_CARD:
            return state;

        default:
            return state;
    }
}