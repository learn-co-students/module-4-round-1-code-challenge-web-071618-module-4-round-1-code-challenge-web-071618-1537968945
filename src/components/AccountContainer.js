import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions,
      filter:transactions,
      search:""
    }
  }

  handleChange = (event) => {
    // your code here
    let value = event.target.value
    this.setState(prevState=>{
      let filter = prevState.transactions.filter(
        tran=>(tran.description.includes(value) || tran.category.includes(value)) )
      return {search:value, filter}
    })

  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} search={this.state.search}/>
        <TransactionsList transactions={this.state.filter}/>
      </div>
    )
  }
}

export default AccountContainer
