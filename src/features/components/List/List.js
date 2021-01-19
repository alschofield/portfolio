import React from 'react';
import styled from 'styled-components';

const Item = styled.ul`
`;

// add ability to do ul or ol
// i think this should accept data passed to it for a defulat list as well as have the list wrapper exported
//  so if there is a data prop it renders list items, if not it will accept children
export default function List(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

List.defaultProps = {
  'data-testid': 'list-container'
}
