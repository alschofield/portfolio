import React from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';

import { withTheme } from '../../../themes';

const Home = ({ theme }) => {
  return (
    <Container theme={theme.home.container} data-testid='home-container'>
      <Header>Current Projects</Header>
      <List list={['learn rust (programming language)', 'create shopping site', 'finish up nft coin']} />
      <Header>Current Projects - Long Term</Header>
      <List list={['study math']} />
      <Header>Projects on Hold</Header>
      <List list={['DWC (direct water capture) (need to study more math and engineering first)', 'study engineering (want to refresh/learn more math first)']} />
      <Header>Future Projects</Header>
      <List list={['add tests to web apps', 'npm publish components and ingest in apps', 'improvements on todo list styling', 'improvements on portfolio style and ideas for adding more stuff or flashy styling', 'aws lambda', 'pontificate on the potential of a podcast/talk show/interview thing', 'pontificate on wearables ive thought up in the past and maybe some new ones', 'pontificate on DWC and climate change in general more', 'learn assembly language', 'learn c', 'learn java']} />
    </Container>
  );
}

export default withTheme(Home)
