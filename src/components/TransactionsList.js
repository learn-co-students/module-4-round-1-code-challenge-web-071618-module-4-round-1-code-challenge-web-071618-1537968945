import React from 'react'
import Transaction from './Transaction'
import v4 from 'uuid'

const TransactionsList = (props) => {

  const dataRows = props.transactions.map((t)=>{
    return <Transaction cellValues={t}
                 key={v4()}
                 id={t.id}/>
      })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {dataRows}

      </tbody>
    </table>
  )
}

export default TransactionsList
