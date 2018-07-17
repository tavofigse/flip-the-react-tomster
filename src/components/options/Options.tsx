import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Section, SectionTitle } from '../layout/Section';
import { GoBack } from '../utils/GoBack';
import { Option, OptionLabel, OptionsContainer } from './OptionUtils';
import { Range } from './Range';
import { Switch } from './Switch';

export const FORM_NAME = 'options';

export interface IOptionsProps {
  options: any;
}

export const OptionsComponent: React.StatelessComponent<IOptionsProps & InjectedFormProps> = props => {
  const { options: { character, grid, music, musicVolume, sound, soundVolume }} = props;
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
          <Switch name="music" value={music}/>
        </OptionsContainer>
      </Section>
      <Section>
        <OptionLabel>Music Volume</OptionLabel>
        <OptionsContainer>
          <Range name="musicVolume" value={musicVolume}/>
        </OptionsContainer>
      </Section>
      <Section>
        <OptionLabel>Sounds Effects</OptionLabel>
        <OptionsContainer>
          <Switch name="sound" value={sound} />
        </OptionsContainer>
      </Section>
      <Section>
        <OptionLabel>Effects Volume</OptionLabel>
        <OptionsContainer>
          <Range name="soundVolume" value={soundVolume}/>
        </OptionsContainer>
      </Section>
      <Section>
        <GoBack />
      </Section>
    </form>
  );
};

export const Options = reduxForm({
  destroyOnUnmount: false,
  form: FORM_NAME
})(OptionsComponent)
