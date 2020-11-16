import React from 'react';
import styled from 'styled-components'

export default function Container(props) {
  const Item = styled.div`
    position: ${props => props.position || 'relative'};
    display: ${props => props.display || 'block'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    top: ${props => props.top || '0px'};
    left: ${props => props.left || '0px'};
    background: ${props => props.background || 'transparent'};
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}
