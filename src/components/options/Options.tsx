import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

const Section = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${Variables.rem(30)};
`;

const SectionTitle = styled.div`
    ${Variables.headingFont(55)}
    ${Variables.textShadowEffect()}
    text-align: center;
    flex: 1 1 auto;
    text-transform: smallcaps;
`;

const PageContent = styled.div`
  width: ${Variables.rem(700)};
  margin: ${Variables.rem(30)} auto 0;
  font-family: arial;
`;

const OptionLabel = styled.div`
  flex: 1 1;
  line-height: ${Variables.rem(60)};
  font-size: ${Variables.rem(40)};
`;

const OptionsContainer = styled.div`
  flex: 2 1;

  .options-button {
    display: inline-block;
    height: ${Variables.rem(90)};
    margin-right: ${Variables.rem(20)};
    width: ${Variables.rem(90)};
    background-color: ${Variables.COLOR_WHITE};
    border: ${Variables.rem(4)} solid ${Variables.COLOR_TRANSPARENT};
    ${Variables.boxShadowEffect}
    cursor: pointer;
    position: relative;
    /* selected */

    :hover {
      border: ${Variables.rem(4)} solid ${Variables.COLOR_AQUA};
    }
  }

  img {
    border-radius: ${Variables.rem(10)};
    height: 100%;
    padding: ${Variables.em(2)};
    width: 100%;
    line-height: ${Variables.rem(60)};

  }
`;

export const Options: React.StatelessComponent<{}> = () => (
  <PageContent>
    <Section>
      <SectionTitle>Options</SectionTitle>
    </Section>
    <Section>
      <OptionLabel>Figure</OptionLabel>
      <OptionsContainer>
        <div className="options-button selected ember-view">
          <img src="images/tomster14.png" className="options-button-figure" />
        </div>
        <div className="options-button selected ember-view">
          <img src="images/dog14.png" className="options-button-figure" />
        </div>
      </OptionsContainer>
    </Section>
  </PageContent>
);
