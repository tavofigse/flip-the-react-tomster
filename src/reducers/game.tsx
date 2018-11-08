import { List } from 'immutable';
import { GameActions } from "../actions/game";
import { FLIP_CARD, INITIALIZE } from "../constants/game";
import { ICard } from '../models/game/Card';
import { IGameState } from "../types/index"
import { genereateCards } from './utils';

export const PAIR = 2;

export const gameReducer = (
    state: IGameState = {cards: List<ICard>(), prevCard: null},
    action: GameActions
) => {
    switch (action.type) {
        case INITIALIZE: {
            return {
                ...state,
                cards: genereateCards(
                    Number(action.size) || 4,
                    action.figure
                ),
            };
        }
        case FLIP_CARD: {
            return {
                ...state,
                cards: state.cards.update(
                    state.cards.findIndex((card: ICard) => card.boardPosition === action.boardPosition),
                    card => ({...card, show: !card.show})
                  )
            };
        }
        default:
            return state;
    }
}