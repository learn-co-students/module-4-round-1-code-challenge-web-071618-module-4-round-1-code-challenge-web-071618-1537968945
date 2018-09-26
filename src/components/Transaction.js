import React from 'react'

const Transaction = (props) => {
  return (
    <tr id={props.id}>
      <td>{props.cellValues.posted_at}</td>
      <td>{props.cellValues.description}</td>
      <td>{props.cellValues.category}</td>
      <td>{props.cellValues.amount}</td>
    </tr>
  )
}

export default Transaction
