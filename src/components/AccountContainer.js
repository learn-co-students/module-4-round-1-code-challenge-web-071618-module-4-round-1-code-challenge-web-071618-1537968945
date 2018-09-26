import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  constructor(props) {
    super(props)
    this.state = {
      id: [],
      posted_at: [],
      description: [],
      category: [],
      amount: []
    }
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions").then(res => res.json()).then(data => data.map(item => this.setState({
      id: [item.id],
      posted_at: [item.posted_at],
      description: [item.description],
      category: [item.category],
      amount: [item.amount]
    }, console.log(this.state.description))))
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state}/>
      </div>
    )
  }
}

export default AccountContainer
