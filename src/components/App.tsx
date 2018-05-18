import * as React from 'react';
import styled from 'styled-components';
import { RoutesContainer } from '../routes';
import * as Variables from '../styles/variables';
import { Footer, Header } from './home';

const Container = styled.div`
  font-size: 1em;
  background: ${Variables.COLOR_YELLOW};
  min-height: 100vh;
  padding-bottom: ${Variables.rem(20)};
  min-width: ${Variables.rem(700)};
`;

export const App: React.StatelessComponent<{}> = () => (
    <Container>
        <Header />
        <RoutesContainer />
        <Footer />
    </Container>
);