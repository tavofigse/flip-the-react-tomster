import { List } from 'immutable';
import * as React from 'react';
import styled from 'styled-components';
import { ICard } from '../../models/game/Card';
import * as Variables from '../../styles/variables';
import { Section } from '../layout/Section';
import { GoBack } from '../utils/GoBack';
import { Card } from './Card';
import { ConfettiRain } from './Confetti';

export interface IBoardComponentProps {
    className?: string;
    size: string;
    cards: List<ICard>;
    figure: string;
    gameEnded: boolean;
}

export interface IBoardHandlers {
    checkCard: (boardPosition: number) => void;
    initializeBoard: (size: string, figure: string) => void;
}

export type BoardProps = IBoardComponentProps & IBoardHandlers;

export class BoardComponent extends React.Component<BoardProps> {
    public componentWillMount(): void {
        this.props.initializeBoard(
            this.props.size, 
            this.props.figure
        );
    }
    public render(): JSX.Element {
        const {className, cards, gameEnded} = this.props;
        return  (
            <>
                {gameEnded &&  <ConfettiRain />}
                <Section className={className}>
                    {cards.map(this.renderCard)}
                </Section>
                <Section>
                    <GoBack />
                </Section>
            </>
        );
    }
    private renderCard: (card: ICard, index: number) => JSX.Element =
    (card, index) => 
        <Card
            key={index}
            boardPosition={card.boardPosition}
            figure={card.figure}
            cardId={card.cardId}
            size={card.size}
            checkCard={this.props.checkCard}
            show={card.show}
        />
}

export const Board = styled(BoardComponent)`
font-size: 1em;

.game-board-size-4 {
    flex: 0 0 22%;
    padding: ${Variables.rem(10)};
}

.game-board-size-6 {
    flex: 0 0 14.6%;
    padding: ${Variables.rem(6)};
}

.game-board-size-8 {
    flex: 0 0 10.5%;
    padding: ${Variables.rem(5)};
}

.score {
    font-size: ${Variables.em(25)};

    .score-label {
        margin-left: ${Variables.em(10)};
        margin-right: ${Variables.em(5)};
    }

    .score-value {
        ${Variables.headingFont(25)}

        &.hits {
            color: ${Variables.COLOR_AQUA};
        }

        &.misses {
            color: ${Variables.COLOR_RED};
        }
    }
}
`;