import React from 'react';
import { Container, Header, List } from 'schofield-common-components';

import { withTheme } from 'schofield-themes';

const Home = ({ theme }) => {


  return (
    <Container theme={theme.home.container} data-testid='home-container'>
      <Container theme={{ ...theme.home.section, ...theme.home.recommendations }}>
        song recommendations
      </Container>
      <Container theme={{ ...theme.home.section, ...theme.home.cryptunes }}>
        working title
      </Container>
      <Container theme={{ ...theme.home.section, ...theme.home.proxy }}>
        rust proxy
      </Container>
      <Container theme={{ ...theme.home.section, ...theme.home.dwc }}>
        dwc
      </Container>
      <Container theme={{ ...theme.home.section, ...theme.home.react }}>
        react stuff
      </Container>
      <Container theme={{ ...theme.home.section, ...theme.home.updates }}>
        <Header>Current Projects</Header>
        <List list={['implement auth in nav and apps']} />
        <Header>Current Projects - Long Term</Header>
        <List list={['learn rust (programming language)', 'study math']} />
        <Header>Projects on Hold</Header>
        <List list={['DWC (direct water capture) (need to study more math and engineering first)', 'study engineering (want to refresh/learn more math first)']} />
        <Header>Future Projects</Header>
        <List list={['improvements on portfolio style and ideas for adding more stuff or flashy styling', 'finish up nft coin', 'pontificate on the potential of a podcast/talk show/interview thing', 'pontificate on wearables ive thought up in the past and maybe some new ones', 'pontificate on DWC and climate change in general more', 'learn assembly language', 'learn c', 'learn java']} />
      </Container>
  </Container>
  );
}

export default withTheme(Home)
