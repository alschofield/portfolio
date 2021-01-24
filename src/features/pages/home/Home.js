import React from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';

import { withTheme } from '../../../themes';

class Home extends React.Component {
  render() {
    return (
      <Container theme={this.props.theme.home.container} data-testid='home-container'>
        <Header>Current Projects</Header>
        <List list={['learn rust (programming language)', 'new take on new releases site/app']} />
        <Header>Projects on Hold</Header>
        <List list={['DWC (direct water capture) (need to study more math and engineering first)', 'study math (waiting on books)']} />
        <Header>Future Projects</Header>
        <List list={['chatbot', 'study engineering']} />
      </Container>
    );
  }
}

export default withTheme(Home)
