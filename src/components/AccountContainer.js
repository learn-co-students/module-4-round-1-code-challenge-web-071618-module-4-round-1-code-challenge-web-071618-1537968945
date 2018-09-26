import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
       transactionsData: [],
       search: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r => r.json())
    .then(data => this.setState({transactionsData: data}, () => console.log(this.state.transactionsData)))
}

  handleChange = (event) => {
     this.setState({search: event.target.value},() => this.filterResults(),console.log(this.state.search))
  }

  //use callback above this call this.
  // get user input to filter the results of the transactions data array to only display what a user is typing in catergoy or description
  // ill do category
  // make a function that when a user types the lists filters

  dataToDisplay = () => {
      return this.state.search ? this.filterResults() : this.state.transactionsData
  }

  filterResults = () => {
    return this.state.transactionsData.filter(transaction => transaction.category.toLowerCase().includes(this.state.search.toLowerCase()))}


  render() {

    return (
      <div>
        <Search handleChanges={this.handleChange}/>
        <TransactionsList transactionsData={this.dataToDisplay()}/>
      </div>
    )
  }
}

export default AccountContainer
