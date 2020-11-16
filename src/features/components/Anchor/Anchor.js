import React from 'react';
import styled from 'styled-components'

export default function Anchor(props) {
  const Item = styled.a`
    position: relative;
    display: block;
    background: purple;
    min-width: 40px;
    height: 40px;
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}
