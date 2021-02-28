import React from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';

import { withTheme } from '../../../themes';

const Home = ({ theme }) => {
  return (
    <Container theme={theme.home.container} data-testid='home-container'>
      <Header>Current Projects</Header>
      <List list={['learn rust (programming language)', 'study math (one of the bags has been secured)', 'create comments app', 'create comments server']} />
      <Header>Projects on Hold</Header>
      <List list={['DWC (direct water capture) (need to study more math and engineering first)', 'study engineering (want to refresh/learn more math first)']} />
      <Header>Future Projects</Header>
      <List list={['create shopping site', 'pontificate on inequality', 'pontificate on the potential of a podcast/talk show/interview thing', 'pontificate on wearables ive thought up in the past and maybe some new ones', 'pontificate on DWC and climate change in general more', 'improvements on todo list styling', 'improvements on portfolio style and ideas for adding more stuff or flashy styling', 'learn assembly language', 'learn c', 'learn java']} />
    </Container>
  );
}

export default withTheme(Home)
