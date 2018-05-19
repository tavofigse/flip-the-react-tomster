import * as React from 'react';
import styled, { css } from 'styled-components';
import * as Variables from '../../styles/variables';

export const OptionLabel = styled.div`
  flex: 1 1;
  line-height: ${Variables.rem(60)};
  font-size: ${Variables.rem(40)};
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

interface IOptionProps {
    imagePath: string;
    selected: boolean;
    className?: string;
    children?: React.ReactNode;
}

const OptionComponent: React.StatelessComponent<IOptionProps> = (props) => (
    <div className={props.className}>
      <div className="option-body">
        {props.children}
      </div>
      <img src={props.imagePath} className="options-button-figure" />
    </div>
);


export const Option = styled(OptionComponent)`
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
  /* props */
  ${props => props.selected && css`
      border: ${Variables.rem(4)} solid ${Variables.COLOR_AQUA};
  `}
  ${props => props.children && css`
    .option-body {
      background-size: 100%;
      font-size: ${Variables.rem(38)};
      margin: ${Variables.rem(20)} ${Variables.rem(5)};
      position: absolute;
      white-space: nowrap;
    }
  `}
`;
