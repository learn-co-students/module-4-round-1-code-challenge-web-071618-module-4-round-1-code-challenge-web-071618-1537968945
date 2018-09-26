import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
const BASE_URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      input: '',
      transactions: [],
      filteredTransactions: []
    }
  }

  componentDidMount = () => {
    fetch(BASE_URL)
    .then(response=>response.json())
    .then(transactions=>this.setState({
      transactions: transactions,
      filteredTransactions: transactions
    }))
  }

  handleChangeToInput = event => {
    this.setState({
      input: event.target.value
    })
    this.filterTransactions();
  }

  filterTransactions = () => {
    let filtered = this.state.transactions.filter(t=>t.category.toLowerCase().includes(this.state.input.toLowerCase()))
    this.setState({
      filteredTransactions: filtered
    })
  }

  render() {
    return (
      <div>
        <Search handleChangeToInput={this.handleChangeToInput}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
