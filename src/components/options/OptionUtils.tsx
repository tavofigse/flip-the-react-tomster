import * as React from 'react';
import { Field } from 'redux-form';
import styled, { css } from 'styled-components';
import * as Variables from '../../styles/variables';

export const OptionLabel = styled.div`
  flex: 1 1;
  line-height: ${Variables.rem(60)};
  font-family: ${Variables.FONT_SECONDARY}, cursive;
  font-size: ${Variables.rem(30)};
  font-weight: bold;
`;

export const OptionsContainer = styled.div`
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
  }
`;

interface IOptionProps {
    imagePath: string;
    selected: boolean;
    name: string;
    value: string;
    className?: string;
    children?: React.ReactNode;
}

const OptionComponent: React.StatelessComponent<IOptionProps> = (
  {value, className, imagePath, name, children}
) => (
    <div className={className}>
      <label htmlFor={value}>
        <div className="option-body">
          {children}
        </div>
        <img src={imagePath} className="options-button-figure" />
      </label>
      <Field id={value} name={name} component="input" type="radio" value={value} />
    </div>
);


export const Option = styled(OptionComponent)`
  display: inline-block;
  height: ${Variables.rem(70)};
  margin-right: ${Variables.rem(20)};
  width: ${Variables.rem(70)};
  background-color: ${Variables.COLOR_WHITE};
  border: ${Variables.rem(4)} solid ${Variables.COLOR_TRANSPARENT};
  ${Variables.boxShadowEffect}
  position: relative;
  /* selected */
  :hover {
    border: ${Variables.rem(4)} solid ${Variables.COLOR_AQUA};
  }
  /* image */
  input {
    display: none;
  }
  img {
    border-radius: ${Variables.rem(10)};
    height: 100%;
    padding: ${Variables.em(2)};
    width: 100%;
    line-height: ${Variables.rem(60)};
    cursor: pointer;

  }
  /* props */
  ${props => props.selected && css`
      border: ${Variables.rem(4)} solid ${Variables.COLOR_AQUA};
  `}
  ${props => props.children && css`
    .option-body {
      background-size: 100%;
      font-size: ${Variables.rem(25)};
      margin: ${Variables.rem(20)} ${Variables.rem(8)};
      position: absolute;
      white-space: nowrap;
      cursor: pointer;
    }
  `}
`;
