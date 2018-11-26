import * as React from 'react';
import Confetti from 'react-confetti';
import { withSize } from 'react-sizeme';

interface IConfettiProps {
  size: {
    width: number;
    height: number;
  }
}

export const ConfettiRain = withSize({
  monitorHeight: true,
  monitorWidth: true,
})(class extends React.Component<IConfettiProps> {
  public render(): JSX.Element {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Confetti {...this.props.size}/>
      </div>
    );
  }
})

