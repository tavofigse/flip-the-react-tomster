import * as React from 'react';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
  }

function getExclamationMarks(enthusiasmLevel: number) {
    return enthusiasmLevel;
}

export default function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps): JSX.Element {
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
  
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }