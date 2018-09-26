import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }
  // handle the handleChange Event 
  handleTranscation = () =>{
    return this.state.transactions.filter(trans => trans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
    trans.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.handleTranscation()} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(trans => this.setState({transactions: trans}))
  }

}


export default AccountContainer
