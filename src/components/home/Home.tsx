import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

const Options = styled.ul`
  font-size: 1em;
  list-style: none;
  margin: 0 auto;
  text-align: center;

  li {
    min-height: ${Variables.rem(80)};

    + li {
      margin-top: ${Variables.rem(30)};
    }

    a {
      ${Variables.headingFont(55)}
      ${Variables.textShadowEffect()}

      &:visited {
        color: ${Variables.COLOR_WHITE};
      }

      &:hover {
        color: ${Variables.COLOR_AQUA};
        font-size: ${Variables.em(60)};
      }
    }
}
`;

export const Home: React.StatelessComponent<{}> = () => (
    <Options>
      <li><Link to="play">New Game</Link></li>
      <li><Link to="options">Options</Link></li>
      <li><Link to="credits">Credits</Link></li>
    </Options>
);
