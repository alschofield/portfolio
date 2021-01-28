import React from 'react';
import Container from '../../components/Container/Container';

import { withTheme } from '../../../themes';

class Footer extends React.Component {
  render() {
    return (
      <Container theme={this.props.theme.footer.container} data-testid='footer-container'>
        Portfolio
      </Container>
    );
  }
}

export default withTheme(Footer);
