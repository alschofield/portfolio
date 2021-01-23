import React from 'react';
import styled from 'styled-components';

const Item = styled.a`
  position: ${props => props.position || 'relative'};
  display: ${props => props.display || 'inline'};
  height: ${props => props.height || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};
  width: ${props => props.width || 'auto'};
  min-width: ${props => props.minWidth || '40px'};
  padding: ${props => props.padding || '0px'};
  padding-top: ${props => props.paddingTop || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};
  margin: ${props => props.margin || '0px'};
  margin-top: ${props => props.marginTop || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
`;

export default function Anchor(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Anchor.defaultProps = {
  'data-testid': 'anchor-container'
}
