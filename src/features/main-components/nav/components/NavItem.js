import React from 'react';
import Anchor from '../../../components/Anchor/Anchor';
import Button from '../../../components/Button/Button';
import Image from '../../../components/Image/Image';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';

import { withTheme } from '../../../../themes';

class NavItem extends React.Component {
  render () {
    if (this.props.type === 'anchor') {
      return (
        <Anchor {...this.props}>
          <Text {...this.props}>{ this.props.value }</Text>
        </Anchor>
      );
    } else if (this.props.type === 'image') {
      return (
        <Anchor {...this.props}>
          <Image {...this.props} />
        </Anchor>
      );
    } else if (this.props.type === 'button') {
      return (
        <Button {...this.props}>
          <Text {...this.props}>{ this.props.value }</Text>
        </Button>
      );
    } else {
      return (
        <Container {...this.props}>
          <Text {...this.props}>{ this.props.value }</Text>
        </Container>
      );
    }
  }
}

NavItem.defaultProps = {
  'data-testid': 'navitem-container'
}

export default withTheme(NavItem)
