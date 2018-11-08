import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as constants from '../../constants/game'
import { IStoreState } from '../../types';

// action
export interface IFlipCard extends Action {
    boardPosition: number;
    type: constants.FLIP_CARD;
}

export interface Initialize extends Action {
    figure: string;
    size: string;
    type: constants.INITIALIZE;
}

// Action Types
export type GameActions = Initialize | IFlipCard;

// Action creators
export function initialize(size: string, figure: string): Initialize {
    return {
        figure,
        size,
        type: constants.INITIALIZE
    }
}

export const flipCard = (boardPosition: number): IFlipCard => ({
    boardPosition,
    type: constants.FLIP_CARD
})

// types
export type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, GameActions>;

export const checkCard = (boardPosition: number): ThunkResult<void> =>
    async (dispatch, getState) => {
        dispatch(flipCard(boardPosition))
    }
