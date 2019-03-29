import React from 'react';

class Table extends React.Component {
  render() {
    const list = this.props.list.map((item) => <tr><td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td><img alt="" src={item.image} /></td>
    </tr>)
    return <table border="1">
      <thead> <h4>Goods</h4> </thead>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>Prise:</td>
          <td>Quantity:</td>
          <td>URL:</td>
        </tr>
        {list}
      </tbody>
    </table>
  }
}

export default Table;



