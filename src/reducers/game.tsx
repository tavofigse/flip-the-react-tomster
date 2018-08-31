import { List } from 'immutable';
import { formValueSelector } from 'redux-form';
import { GameActions } from "../actions/game";
import { FORM_NAME } from "../components/options";
import { FLIP_CARD, INITIALIZE } from "../constants/game";
import { ICard } from '../models/game/Card';
import { IGameState } from "../types/index"
import { genereateCards } from './utils';

export const PAIR = 2;

const selector = formValueSelector(FORM_NAME);

export const gameReducer = (
    state: IGameState = {cards: List<ICard>()},
    action: GameActions
) => {
    switch (action.type) {
        case INITIALIZE: {
            return {
                cards: genereateCards(
                    Number(action.size) || 4,
                    selector(action.figure, 'character')
                ),
            };
        }
        case FLIP_CARD: {
            const selectedCard = state.cards.findIndex(
                (card: ICard) => card.cardId === action.cardId
            );
            const newCards = state.cards
                .update(
                    selectedCard,
                    value => ({...value, show: !value.show})
                )
            return {
                cards: newCards
            };
        }
        default:
            return state;
    }
}