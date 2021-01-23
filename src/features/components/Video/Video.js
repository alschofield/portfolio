import React from 'react';
import styled from 'styled-components';
import Source from './Source/Source';

const Item = styled.video`
`;

export default function Video(props) {
  if (props.sources && !props.src) {
    return (
      <Item {...props}>
        {
          props.sources.map((item) => (
            <Source src={item} type={item.split('.')[-1]} />
          ))
        }
      </Item>
    );
  } else {
    return (
      <Item {...props}>
        { props.children }
      </Item>
    );
  }
}

Video.defaultProps = {
  'data-testid': 'video-container',
  autoplay: true,
  controls: true,
  loop: true,
  muted: true,
  preload: 'auto'
}
