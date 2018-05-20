import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../components/home';
import { Options } from '../containers/options';

export const RoutesContainer: React.StatelessComponent<{}> = () => (
    <React.Fragment>
        <Route exact={true} path={`/`} component={Home} />
        <Route exact={true} path={`/options`} component={Options} />
    </React.Fragment>
);
