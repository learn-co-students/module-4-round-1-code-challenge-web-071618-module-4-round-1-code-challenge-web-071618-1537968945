import React, {Component} from 'react'

class Search extends Component {
  constructor() {
    super()
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(event) {
  //   console.log(event.target.value)
  // }

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input onChange={(event) => {this.props.handleChange(event)}}
          name='input'
          type="text"
          placeholder={"Search your Recent Transactions"}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
