import { Action } from 'redux';
import * as constants from '../../constants/game'

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

export function flipCard(boardPosition: number): IFlipCard {
    return {
        boardPosition,
        type: constants.FLIP_CARD
    }
}
