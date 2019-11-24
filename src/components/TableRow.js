import React from 'react';
 
function TableRow(props) {
  return (
    <tr>
      { props.data.map((header, index) => <td className="results__cell" key={index}>{ header }</td>)}
    </tr>
  );
}

// <tr> <th>h>data </tr>
export default TableRow;