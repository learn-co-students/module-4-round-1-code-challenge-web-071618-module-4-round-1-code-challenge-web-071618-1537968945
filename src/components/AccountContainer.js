import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerms: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r => r.json())
    .then(transactions => this.setState({transactions})
    )
  }

  handleChange = (event) => {
    this.setState({searchTerms: event.target.value})
  }

  displayTransactions() {
    let transactionsToDisplay;
    if (this.state.searchTerms.length > 0) {
      let transactionsToDisplay = this.state.transactions.filter((transaction) => {
        return transaction.description.includes(this.state.searchTerms) || transaction.category.includes(this.state.searchTerms)
      })
      return transactionsToDisplay
    } else {
      return this.state.transactions
    }
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.displayTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
