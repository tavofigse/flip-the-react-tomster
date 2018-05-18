import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

const HeaderContainer = styled.div`
    font-size: 1em;
    min-height: ${Variables.rem(110)};
    background:
      linear-gradient(${Variables.COLOR_WHITE} ${Variables.em(90)},
        ${Variables.COLOR_TRANSPARENT} ${Variables.em(0)}),
      radial-gradient(circle closest-side,
        ${Variables.COLOR_WHITE} ${Variables.em(30)},${Variables.COLOR_TRANSPARENT} 0),
      radial-gradient(circle closest-side,
        ${Variables.COLOR_WHITE} ${Variables.em(30)},${Variables.COLOR_TRANSPARENT} 0)
        ${Variables.em(55)} 0 ${Variables.COLOR_TRANSPARENT};
    background-color: ${Variables.COLOR_TRANSPARENT};
    background-repeat: repeat-x;
    background-size: ${Variables.em(110)} ${Variables.em(155)};
`;

const HeaderTitle = styled.h1`
    color: ${Variables.COLOR_RED};
    font-family: Lobster, Georgia, Times, serif;;
    font-size: ${Variables.em(80)};
    text-align: center;
    text-decoration: none;

    ${Variables.textShadowEffect}
`;

export const Header: React.StatelessComponent<{}> = () => (
    <HeaderContainer>
        <HeaderTitle>
            Flip The Reactomster
        </HeaderTitle>
    </HeaderContainer>
);
