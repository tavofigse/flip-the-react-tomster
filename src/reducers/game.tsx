import { List } from 'immutable';
import { GameActions } from "../actions/game";
import {
    ADD_PREV_CARD,
    FLIP_CARD,
    INITIALIZE,
    REMOVE_PREV_CARD
} from "../constants/game";
import { ICard } from '../models/game/Card';
import { IGameState } from "../types/index"
import { genereateCards } from './utils';

export const PAIR = 2;

export const gameReducer = (
    state: IGameState = {cards: List<ICard>(), prevCard: null},
    action: GameActions
): IGameState => {
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

        case ADD_PREV_CARD: {
            return {
                ...state,
                prevCard: action.prevCard,
            }
        }

        case REMOVE_PREV_CARD: {
            return {
                ...state,
                prevCard: null,
            }
        }

        default:
            return state;
    }
}