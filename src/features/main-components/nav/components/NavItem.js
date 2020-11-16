import React from 'react';
import Anchor from '../../../components/Anchor/Anchor';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';

export default function NavItem(props) {
  console.log(props)
  if (props.type === 'anchor') {
    return (
      <Anchor {...props} />
    );
  } else if (props.type === 'button') {
    return (
      <Button {...props} />
    );
  } else {
    return (
      <Container {...props}>

      </Container>
    );
  }
}
