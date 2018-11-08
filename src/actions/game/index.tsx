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

// Action Types
export type GameActions = Initialize | IFlipCard | IAddPrevCard;

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

// Thunks
export const checkCard = (boardPosition: number): ThunkResult<void> =>
    async (dispatch, getState) => {
        const state = getState();
        const { game: { prevCard } } = state;
        if (prevCard) {
            dispatch(flipCard(boardPosition));
        } else {
            const selectedCard = state.game.cards.find(
                (card: ICard) => card.boardPosition === boardPosition
            );
            dispatch(flipCard(boardPosition));
            dispatch(addPrevCard(selectedCard));
        }
    }
