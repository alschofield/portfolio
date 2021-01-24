import React from 'react';
import NavItem from './components/NavItem.js';
import Container from '../../components/Container/Container';
import { withTheme } from '../../../themes';

class Nav extends React.Component {
  render() {
    return (
      <Container theme={this.props.theme.nav.container} data-testid='nav-container'>
        <NavItem theme={this.props.theme.nav.item} type='image' src={`${process.env.PUBLIC_URL}/scho-logo.png`} href='/' />
        {/* <NavItem type="anchor" value="Merch" href="https://scho.clothing" /> */}
        <NavItem theme={this.props.theme.nav.item} type='icon' icon='paint' onClick={this.props.handleThemeToggle} />
      </Container>
    );
  }
}

export default withTheme(Nav)
