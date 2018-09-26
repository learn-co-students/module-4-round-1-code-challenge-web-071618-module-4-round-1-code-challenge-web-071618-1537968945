import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })

    // let updateList = this.state.transactions.map((transaction) => {
    //   if(transaction.description === this.state.searchTerm) {
    //       console.log(this.state.transaction)
    //   }
    // })
    // console.log(this.state.transactions)
    console.log(event.target.value)
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  render() {
    // console.log(this.fetchData())
    // console.log(this.state.transactions)
    if(this.state.transactions.length > 0) {
      return (
        <div>
          <Search handleChange={this.handleChange}/>
          <TransactionsList list={this.state.transactions}/>
        </div>
      )
    } else {
      return (<div>Loading</div>)
    }
  }
}

export default AccountContainer
