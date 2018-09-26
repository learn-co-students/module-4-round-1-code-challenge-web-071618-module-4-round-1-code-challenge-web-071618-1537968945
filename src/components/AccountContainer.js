import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactionsData: transactions,
    search: ''
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp=> resp.json())
    .then(data => this.setState({
      transactionsData: data
    }, ()=>console.log(this.state.transactionsData)))
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    }, () => console.log(this.state.search))
  }

  displayTransactions = () => {
    const filteredTransactions = this.state.transactionsData.filter(transaction => (transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.search.toLowerCase())))
    return filteredTransactions
  }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  render() {

    return (
      <div>
        < Search handleChange={this.handleChange} search={this.state.search}/>
      < TransactionsList info={this.displayTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
