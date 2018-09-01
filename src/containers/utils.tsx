import { List, Range } from 'immutable';
import { ICard } from '../models/game/Card';

export const figures = {
    dog: 32,
    tomster: 48
}

export function range(min: number, max: number): List<number> {
    return List(Range(min, max));
}

export function shuffle(array: List<ICard>): List<ICard> {
    return array.sortBy(Math.random).toList();
  }
  