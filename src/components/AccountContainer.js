import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      allTransactions: [],
      filteredTransactions: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    // console.log(this.state.transactions)
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r=>r.json())
    .then(transactions => this.setState({allTransactions:transactions, filteredTransactions:transactions}))
  }

  handleChange = (event) => {
    let searchTerm = event.target.value
    console.log(searchTerm)
    const allTransactions = this.state.allTransactions
    let filteredTransactions = allTransactions.filter(function (transaction) {
      return transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
             transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(filteredTransactions)
    this.setState({filteredTransactions})
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer