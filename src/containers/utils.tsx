import { List, Range } from 'immutable';

export const figures = {
    dog: 32,
    tomster: 48
}

export function range(min: number, max: number): List<number> {
    return List(Range(min, max));
}

export function shuffle(array: List<number>): List<number> {
    return array.sortBy(Math.random).toList();
  }
  