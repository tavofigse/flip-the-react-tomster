import { Action } from 'redux';
import * as constants from '../../constants/game'

export interface IFlipCard extends Action {
    type: constants.FLIP_CARD;
}

export type GameAction = IFlipCard;

export function flipCard(): IFlipCard {
    return {
        type: constants.FLIP_CARD
    }
}
