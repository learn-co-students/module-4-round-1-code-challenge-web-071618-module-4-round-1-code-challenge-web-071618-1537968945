import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions:transactions,
      displayTransactions:transactions,
      userInput:''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange = event => {
    this.setState({
      userInput:event.target.value,
      displayTransactions: this.state.transactions.filter((t)=>{
        return t.description.includes(event.target.value) || t.category.includes(event.target.value)
      })
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.displayTransactions}/>
      </div>
    )
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').
    then(res=>res.json()).
    then(t=>this.setState({
      transactions:t,
      displayTransactions:t
    }))
  }
}

export default AccountContainer
