import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state = {
      transactions: [],
      currSearch: ""
    }

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  handleChange(event) {
    this.setState({
      currSearch: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} currSearch={this.state.currSearch} />
      </div>
    )
  }
}

export default AccountContainer
