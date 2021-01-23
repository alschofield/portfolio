import React from 'react';
import styled from 'styled-components';

import TableHeader from './components/TableHeader/TableHeader';
import TableBody from './components/TableBody/TableBody';
import TableRow from './components/TableRow/TableRow';
import TableItem from './components/TableItem/TableItem';

const Item = styled.table`
`;

// similar to list tag, i want to be able to have the option to export a default table that accepts a data prop as well as export the table wrapper and the individual table components
export default function Table(props) {
  if (props.data) {
    const headers = Object.keys(props.data[0])

    return (
      <Item {...props}>
        <TableHeader>
          <TableRow>
            {
              headers.map((item) => (
                <TableItem type="th">item</TableItem>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            props.data.map((item) => (
              <TableRow>
                {
                  headers.map((key) => (
                    <TableItem>{ item[key] }</TableItem>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
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

Table.defaultProps = {
  'data-testid': 'table-container'
}
