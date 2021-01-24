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
        <List list={['portfolio website', 'DWC (direct water capture)']} />
        <Header>Future Projects</Header>
        <List list={['podcast sounds cool', 'music sounds cool', 'AI/ML is cool']} />
      </Container>
    );
  }
}

export default withTheme(Home)
