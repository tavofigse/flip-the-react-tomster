import styled from 'styled-components';
import * as Variables from '../../styles/variables';

export const Section = styled.div`
  font-size: ${Variables.em(1)};
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${Variables.rem(30)};
`;

export const SectionTitle = styled.div`
    ${Variables.headingFont(55)}
    ${Variables.textShadowEffect()}
    text-align: center;
    flex: 1 1 auto;
    text-transform: smallcaps;
`;