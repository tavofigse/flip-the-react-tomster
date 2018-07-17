import * as React from 'react';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';
import { Section } from '../layout/Section';
import { GoBack } from '../utils/GoBack';
import { Card } from './Card';

export interface IBoardComponentProps {
    className?: string;
    size: string;
}

export class BoardComponent extends React.Component<IBoardComponentProps> {
    public static defaultProps: Partial<IBoardComponentProps> = {
        size: "4"
    };
    public render(): JSX.Element {
        const {className, size} = this.props;
        return  (
            <>
                <Section className={className}>
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                    <Card figure="tomster" value="3" size={size} />
                </Section>
                <Section>
                    <GoBack />
                </Section>
            </>
        );
    }
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