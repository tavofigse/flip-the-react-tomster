import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

interface ISwitchProps {
    className?: string;
}

export const SwitchComponent: React.StatelessComponent<ISwitchProps> = (props) => (
    <label className={props.className}>
      <input type="checkbox" id="ember471" className="options-switch-checkbox ember-checkbox ember-view" />
      <div className="options-switch-slider" />
    </label>
);

export const Switch = styled(SwitchComponent)`
    position: relative;
    display: inline-block;
    width: ${Variables.rem(60)};
    height: ${Variables.rem(34)};

    .options-switch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${Variables.COLOR_RED};
        transition: .4s;
        ${Variables.boxShadowEffect()}
    }

    .options-switch-slider:before {
        position: absolute;
        content: "";
        height: ${Variables.rem(23)};
        width: ${Variables.rem(23)};
        left: ${Variables.rem(4)};
        bottom: ${Variables.rem(4)};
        background-color: ${Variables.COLOR_WHITE};
        transition: .4s;
        border-radius: 50%;
        border: ${Variables.rem(2)} solid ${Variables.COLOR_BLACK};
    }

    .options-switch-checkbox {
        display: none;
    }
    .options-switch-checkbox:checked + .options-switch-slider {
        background-color: ${Variables.COLOR_AQUA};
    }

    .options-switch-checkbox:focus + .options-switch-slider {
        box-shadow: 0 0 ${Variables.rem(1)} ${Variables.COLOR_BLACK};
    }

    .options-switch-checkbox:checked + .options-switch-slider:before {
        transform: translateX(${Variables.rem(26)});
    }
`;