import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    displayArray: []
  }

  handleChange(event) {
    // this.state.transactions.select(transaction => {
    //   return transaction.category === event.target.value
    // })
    // this.state.transactions.select(transaction => {
    //   return transaction.description === event.target.value
    // })

    //I haven't gotten this function to work yet, so I commented it out. But my intention
    //was to select by category/description where the event.target.value matched, and then
    //either change the state (which i haven't added yet) from false => true, or by displaying
    //only one of two arrays, the one which matched.
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList allTransactions={this.state}/>
      </div>
    )
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(data => {

      this.setState({
        transactions: data
      })

    })
  }


}

export default AccountContainer
