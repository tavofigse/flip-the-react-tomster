import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

const FooterContainer = styled.div`
  text-align: center;
`;

const FooterLabel = styled.p`
  color: ${Variables.COLOR_BLACK};
  font-family: ${Variables.FONT_SECONDARY};
  font-weight: bold;
  margin-left: 3.6vw;
  margin-top: 15vw;
`;

const Heart = styled.p`
  margin-left: 3.2vw;
  font-size: 25px;
`;

export const Footer: React.StatelessComponent<{}> = () => (
  <FooterContainer className="Footer">
    <FooterLabel>Made with</FooterLabel>
    <Heart>❤️</Heart>
  </FooterContainer>
);
