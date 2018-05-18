import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

const Section = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  + .section {
    margin-top: ${Variables.rem(30)};
  }
`;

const SectionTitle = styled.div`
    ${Variables.headingFont(55)}

    ${Variables.textShadowEffect()}
    text-align: center;
    flex: 1 1 auto;
    text-transform: smallcaps;
`;

export const Options: React.StatelessComponent<{}> = () => (
  <React.Fragment>
    <Section>
      <SectionTitle>Options</SectionTitle>
    </Section>
  </React.Fragment>
);
