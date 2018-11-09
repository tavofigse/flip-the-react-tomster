import { List } from 'immutable';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as constants from '../../constants/game'
import { ICard } from '../../models/game/Card';
import { IStoreState } from '../../types';

// action
export interface Initialize extends Action {
    figure: string;
    size: string;
    type: constants.INITIALIZE;
}

export interface IFlipCard extends Action {
    boardPosition: number;
    type: constants.FLIP_CARD;
}

export interface IAddPrevCard extends Action {
    prevCard: ICard;
    type: constants.ADD_PREV_CARD;
}

export interface IRemovePrevCard extends Action {
    type: constants.REMOVE_PREV_CARD;
}

export interface IAddMatch extends Action {
    type: constants.ADD_MATCH;
    matches: List<ICard>;
}

// Action Types
export type GameActions =
    Initialize | IFlipCard | IAddPrevCard | IRemovePrevCard | IAddMatch;

// Thunk type
export type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, GameActions>;

// Action creators
export const initialize = (size: string, figure: string): Initialize => ({
    figure,
    size,
    type: constants.INITIALIZE
})

export const flipCard = (boardPosition: number): IFlipCard => ({
    boardPosition,
    type: constants.FLIP_CARD
})

export const addPrevCard = (prevCard: ICard): IAddPrevCard => ({
    prevCard,
    type: constants.ADD_PREV_CARD
})

export const removePrevCard = (): IRemovePrevCard => ({
    type: constants.REMOVE_PREV_CARD
})

export const addMatch = (matches: List<ICard>): IAddMatch => ({
    matches,
    type: constants.ADD_MATCH
})

// Thunks
export const checkCard = (boardPosition: number): ThunkResult<void> =>
    async (dispatch, getState) => {
        const state = getState();
        const { game: { prevCard, matches } } = state;

        let selectedCard = state.game.cards.find(
            (card: ICard) => card.boardPosition === boardPosition
        );

        // if the selected card it's already in matches return.
        if (matches.size > 0 && matches.find((card: ICard) => card.boardPosition === selectedCard.boardPosition)) {
            console.log("ENTRO");
            return;
        }

        if (prevCard) {
            // prevCard is equal to selectedCard. return.
            if (prevCard.boardPosition === selectedCard.boardPosition) {
                return;
            }

            // flip selected card
            dispatch(flipCard(selectedCard.boardPosition));

            if (selectedCard.cardId === prevCard.cardId) {
                // is a match
                dispatch(addMatch(List([selectedCard, prevCard])));
                dispatch(removePrevCard());
            } else {
                // is not a match
                setTimeout(() => {
                    dispatch(flipCard(selectedCard.boardPosition));
                    dispatch(flipCard(prevCard.boardPosition));
                    dispatch(removePrevCard());
                }, 800)
            }
        } else {
            selectedCard = state.game.cards.find(
                (card: ICard) => card.boardPosition === boardPosition
            );
            dispatch(flipCard(boardPosition));
            dispatch(addPrevCard(selectedCard));
        }
    }
