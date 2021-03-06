import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

export interface IFlipCardProps {
    cardId: string;
    figure: string;
    size: number;
    className?: string;
    checkCard: (boardPosition: number) => void;
    show: boolean;
    boardPosition: number;
}

export class CardComponent extends React.Component<IFlipCardProps> {
    public static defaultProps: Partial<IFlipCardProps> = {
        figure: "tomster",
        size: 4,
    };
    public render(): JSX.Element {
        const {className, figure, cardId, size, show} = this.props;
        return (
            <div onClick={this.handleChange} 
                 className={`${className} game-board-card-container game-board-size-${size}`}
            >
                <div className={`flip-card ${show ? "show": "veil"} animated`}>
                    <div className="flip-card-cover" />
                    <div className="flip-card-figure">
                        <div className={`figure-${figure}${cardId}`} />
                    </div>
                </div>
            </div>
        );
    }
    private handleChange: (event: React.MouseEvent<HTMLDivElement>) => void =
    (event) => {
        event.preventDefault();
        this.props.checkCard(this.props.boardPosition);
    }
}

export const Card = styled(CardComponent)`
cursor: pointer;

${Variables.tomsterFigure()}
${Variables.dogFigure()}

.flip-card {
    backface-visibility: hidden;
    border: none;
    position: relative;
    width: 100%;
    height: 100%;
}

.flip-card:after {
    content: "";
    display: block;
    padding-top: 100%;
}

.animated {
    .flip-card-cover,
    .flip-card-figure {
        animation-duration: .3s;
    }
}

.flip-card-cover,
.flip-card-figure {
    animation-fill-mode: forwards;
    backface-visibility: hidden;
    background-color: ${Variables.COLOR_WHITE};
    ${Variables.boxShadowEffect()}
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    animation-duration: 0s;
}

.flip-card-cover {
    background: ${Variables.COLOR_AQUA};
}

.flip-card-figure {
    border: ${Variables.em(2)} solid ${Variables.COLOR_AQUA};
    transform: rotateY(-180deg);
}

.flip-card.show {
    .flip-card-figure {
        animation-name: show;
    }

    .flip-card-cover {
        animation-name: hide;
    }
}

.flip-card.veil {
    .flip-card-figure {
        animation-name: hide;
    }

    .flip-card-cover {
        animation-name: show;
    }
}

/* Images */
.flip-card-figure div {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
}

@keyframes show {
    0% {
        transform: rotateY(-180deg);
    }

    100% {
        transform: rotateY(0);
    }
}

@keyframes hide {
    0% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(-180deg);
    }
}
`;