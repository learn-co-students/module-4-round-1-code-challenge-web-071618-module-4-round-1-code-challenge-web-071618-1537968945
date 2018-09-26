import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      bankAccount: [],
      thisSearch: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(data => this.setState({
      bankAccount: data
    }))
  }

  handleChange = (event) => {
    this.setState({
      thisSearch: event.target.value
    },()=>this.filterSearch(),console.log(this.state.thisSearch))
  }

  filterSearch = (event) => {
    if (this.state.thisSearch !== '') {
      return this.filterByDescription()
    } else {
      return this.state.bankAccount
    }
  }

  filterByDescription = (event) => {
    return this.state.bankAccount.filter(eachAccount => eachAccount.description.includes(this.state.thisSearch))
  }

  render() {
    // console.log(this.state.bankAccount)
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.filterSearch()} />
      </div>
    )
  }
}

export default AccountContainer
