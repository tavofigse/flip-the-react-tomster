import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import * as Variables from '../../styles/variables';

interface IGoBackProps extends RouteComponentProps<{}, {}> {
    className?: string;
}

class GoBackComponent extends React.Component<IGoBackProps> {
    public render(): JSX.Element {
        const { className } = this.props; 
        return (
            <a className={className} onClick={this.handleClick}>{`< Go Back`}</a>
        );
    }

    private handleClick: (event: React.MouseEvent<HTMLElement>) => void = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }
}

export const GoBack = styled(withRouter(GoBackComponent))`
    ${Variables.headingFont(35)}
    ${Variables.textShadowEffect()}

    &:hover {
      color: ${Variables.COLOR_AQUA};
    }
`;