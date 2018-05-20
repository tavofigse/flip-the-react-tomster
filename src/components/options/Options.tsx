import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';
import { GoBack } from '../Utils/GoBack';
import { Option, OptionLabel, OptionsContainer } from './OptionUtils';
import { Range } from './Range';
import { Switch } from './Switch';

const Section = styled.div`
  font-size: ${Variables.em(1)};
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

export const Options: React.StatelessComponent<{}> = () => (
  <React.Fragment>
    <Section>
      <SectionTitle>Options</SectionTitle>
    </Section>
    <Section>
      <OptionLabel>Figure</OptionLabel>
      <OptionsContainer>
        <Option imagePath="images/tomster14.png" selected={false} />
        <Option imagePath="images/dog14.png" selected={true} />
      </OptionsContainer>
    </Section>
    <Section>
      <OptionLabel>Size</OptionLabel>
      <OptionsContainer>
        <Option imagePath="images/option-grid.png" selected={false}>
          4 x 4
        </Option>
        <Option imagePath="images/option-grid.png" selected={true}>
          6 x 6
        </Option>
        <Option imagePath="images/option-grid.png" selected={false}>
          8 x 8
        </Option>
      </OptionsContainer>
    </Section>
    <Section>
      <OptionLabel>Music</OptionLabel>
      <OptionsContainer>
        <Switch />
      </OptionsContainer>
    </Section>
    <Section>
      <OptionLabel>Music Volume</OptionLabel>
      <OptionsContainer>
        <Range />
      </OptionsContainer>
    </Section>
    <Section>
      <OptionLabel>Sounds Effects</OptionLabel>
      <OptionsContainer>
        <Switch />
      </OptionsContainer>
    </Section>
    <Section>
      <OptionLabel>Effects Volume</OptionLabel>
      <OptionsContainer>
        <Range />
      </OptionsContainer>
    </Section>
    <Section>
      <GoBack />
    </Section>
  </React.Fragment>
);
