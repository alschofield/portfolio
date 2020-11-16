import React from 'react';
import styled from 'styled-components'

export default function Button(props) {
  const Item = styled.button`
    position: relative;
    display: block;
    background: purple;
    min-width: 40px;
    height: 40px;
  `;

  return (
    <Item {...props}>
      { props.value }
    </Item>
  );
}
