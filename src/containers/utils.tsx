import { List, Range } from 'immutable';

export const figures = {
    dog: 32,
    tomster: 48
}

export function range(min: number, max: number): List<number> {
    return List(Range(min, max));
}

export function shuffle(array: List<number>): List<number> {
    let tmp;
    let current;
    let top = array.size;
  
    if(top) {
      while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }
  
    return array;
  }
  