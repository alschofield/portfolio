import React from 'react';
import styled from 'styled-components';

const Item = styled.source`
`;

export default function Source(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Source.defaultProps = {
  'data-testid': 'source-container'
}
