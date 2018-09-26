import React, {Component} from 'react'


class TransactionsList extends Component {
  constructor() {
    super()
    this.renderList = this.renderList.bind(this)
  }

  renderList() {
    let list = this.props.list.map((transaction, id) => {
      return (
        <tr key={id}>
          <td>{transaction.posted_at}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
        </tr>
      )
    })
    return list
    // console.log(this.props.list)
  }
  render() {
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
            {this.renderList()}




        </tbody>
      </table>
    )
  }
}

export default TransactionsList
