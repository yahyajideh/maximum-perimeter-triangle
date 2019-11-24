import React from 'react';
 
function TableHeaders(props) {
  return (
      <tr>
        { props.headers.map((header, index) => <th key={index}>{ header }</th>)}
      </tr>
  );
}

export default TableHeaders;