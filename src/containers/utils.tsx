export const figures = {
    dog: 32,
    tomster: 48
}

export function range(min: number, max: number): number[] {
    return [...Array.from(Array(max - min + 1).keys())].map(n => n + min);
}

export function shuffle(array: number[]): number[] {
    let tmp;
    let current;
    let top = array.length;
  
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
  