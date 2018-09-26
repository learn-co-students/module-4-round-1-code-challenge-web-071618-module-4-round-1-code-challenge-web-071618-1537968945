import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    allTransactions: [],
    transactionList: []
  }

  componentDidMount() {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(resp => resp.json())
    .then(data => this.setState({
      allTransactions: [...data],
      transactionList: [...data]
    }))
  }

  // constructor() {
  //   super()
  // }

  handleChange = (event) => {
    console.log(this)
    let newList = this.state.allTransactions.filter(transaction => transaction.description.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({
      transactionList: newList
    })
  }

  render() {
    return (
      <div>
        <Search onChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactionList}/>
      </div>
    )
  }
}

export default AccountContainer
