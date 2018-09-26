import React from 'react'

class Search extends React.Component {

  render(){
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          value={this.props.search}
          onChange={this.props.handleChange}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
