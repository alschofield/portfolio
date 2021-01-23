import React from 'react';
import styled from 'styled-components';

const TableItems = {
  td: styled.td``,
  th: styled.th``
};

// make it so th or td is configurable
export default function TableItem(props) {
  const Item = TableItems[props.type]

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

TableItem.defaultProps = {
  type: 'td',
  'data-testid': 'tableitem-container'
}
