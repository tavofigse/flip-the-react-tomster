import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form'
import styled from 'styled-components';
import * as Variables from '../../styles/variables';
import { GoBack } from '../Utils/GoBack';
import { Option, OptionLabel, OptionsContainer } from './OptionUtils';
import { Range } from './Range';
import { Switch } from './Switch';

export const FORM_NAME = 'options';

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

export interface IOptionsProps {
  options: any;
}

export const OptionsComponent: React.StatelessComponent<IOptionsProps & InjectedFormProps> = props => {
  const { options: { character, grid }} = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <Section>
        <SectionTitle>Options</SectionTitle>
      </Section>
      <Section>
        <OptionLabel>Figure</OptionLabel>
        <OptionsContainer>
          <Option value="tomster" name="character" imagePath="images/tomster14.png" selected={character === "tomster"} />
          <Option value="dog" name="character" imagePath="images/dog14.png" selected={character === "dog"} />
        </OptionsContainer>
      </Section>
      <Section>
        <OptionLabel>Size</OptionLabel>
        <OptionsContainer>
          <Option value="4" name="grid" imagePath="images/option-grid.png" selected={grid === "4"}>
            4 x 4
          </Option>
          <Option value="6" name="grid" imagePath="images/option-grid.png" selected={grid === "6"}>
            6 x 6
          </Option>
          <Option value="8" name="grid" imagePath="images/option-grid.png" selected={grid === "8"}>
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
    </form>
  );
};

export const Options = reduxForm({
  form: FORM_NAME
})(OptionsComponent)