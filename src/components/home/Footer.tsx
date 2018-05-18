import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Variables from '../../styles/variables';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const FooterContainer = styled.div`
  text-align: center;
`;

const FooterLabel = styled.p`
  color: ${Variables.COLOR_BLACK};
  font-family: ${Variables.FONT_FOOTER};
  font-weight: bold;
  margin-left: 3.6vw;
  margin-top: 15vw;
`;

const Heart = styled.p`
  animation: ${rotate360} 2s linear infinite;
  margin-left: 3.2vw;
  font-size: 25px;
`;

export const Footer: React.StatelessComponent<{}> = () => (
  <FooterContainer>
    <FooterLabel>Made with</FooterLabel>
    <Heart>❤️</Heart>
  </FooterContainer>
);
