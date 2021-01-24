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
        <List list={['portfolio website']} />
        <Header>Projects on Hold</Header>
        <List list={['DWC (direct water capture)']} />
        <Header>Future Projects</Header>
        <List list={['Chatbot', 'Learn Java/C/or something', 'some sort of website for my portfolio']} />
      </Container>
    );
  }
}

export default withTheme(Home)
