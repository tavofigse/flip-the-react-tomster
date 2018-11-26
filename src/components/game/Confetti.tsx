import * as React from 'react';
import Confetti from 'react-confetti';

export class ConfettiRain extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.2} numberOfPieces={250} />
      </div>
    );
  }
}

