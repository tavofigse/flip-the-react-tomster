import * as React from "react";
import styled from "styled-components";
import * as Variables from "../../styles/variables";

interface IRangeProps {
    className?: string;
}

export const RangeComponent: React.StatelessComponent<IRangeProps> = props => (
    <div className={props.className}>
        <input
            className={props.className}
            type="range"
            step="0.1"
            min="0.1"
            max="1"
        />
    </div>
);

export const Range = styled(RangeComponent)`
    input[type="range"] {
        -webkit-appearance: none;
        margin: ${Variables.rem(19)} 0;
        width: ${Variables.rem(300)};
    }

    input[type="range"]:focus {
        outline: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: ${Variables.rem(8.4)};
        cursor: pointer;
        background: ${Variables.COLOR_AQUA};
        border-radius: ${Variables.rem(1.3)};
        border: ${Variables.rem(0.2)} solid ${Variables.COLOR_TRANSPARENT};
        ${Variables.boxShadowEffect()};
    }

    input[type="range"]::-webkit-slider-thumb {
        box-shadow: ${Variables.rem(1)} ${Variables.rem(1)} ${Variables.rem(1)}
                #000000,
            0 0 ${Variables.rem(1)} #0d0d0d;
        border: ${Variables.rem(1)} solid #000000;
        height: ${Variables.rem(36)};
        width: ${Variables.rem(16)};
        border-radius: ${Variables.rem(3)};
        background: ${Variables.COLOR_WHITE};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: ${Variables.rem(-14)};
    }

    input[type="range"]:focus::-webkit-slider-runnable-track {
        background: ${Variables.COLOR_AQUA};
    }

    input[type="range"]::-moz-range-track {
        width: 100%;
        height: ${Variables.rem(8.4)};
        cursor: pointer;
        background: ${Variables.COLOR_AQUA};
        border-radius: ${Variables.rem(1.3)};
        border: ${Variables.rem(0.2)} solid ${Variables.COLOR_TRANSPARENT};
        ${Variables.boxShadowEffect()};
    }

    input[type="range"]::-moz-range-thumb {
        background-color: green;
        box-shadow: ${Variables.rem(1)} ${Variables.rem(1)} ${Variables.rem(1)}
                #000000,
            0 0 ${Variables.rem(1)} #0d0d0d;
        border: ${Variables.rem(1)} solid #000000;
        height: ${Variables.rem(36)};
        width: ${Variables.rem(16)};
        border-radius: ${Variables.rem(3)};
        background: ${Variables.COLOR_WHITE};
        cursor: pointer;
    }
`;
