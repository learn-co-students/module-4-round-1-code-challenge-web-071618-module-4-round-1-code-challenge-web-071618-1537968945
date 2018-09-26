import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transactionObj.posted_at}</td>
      <td>{props.transactionObj.description}</td>
      <td>{props.transactionObj.category}</td>
      <td>{props.transactionObj.amount}</td>
    </tr>
  )
}

export default Transaction
