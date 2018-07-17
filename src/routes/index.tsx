import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../components/home';
import { Board } from '../containers/game';
import { Options } from '../containers/options';

function renderBoard(props: any): JSX.Element {
    return (
        <Board {...props} />
    );
}

export const RoutesContainer: React.StatelessComponent<{}> = () => (
    <React.Fragment>
        <Route exact={true} path={`/`} component={Home} />
        <Route exact={true} path={`/options`} component={Options} />
        <Route exact={true} path={`/play`} render={renderBoard} />
    </React.Fragment>
);
