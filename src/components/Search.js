import React from 'react'

class Search extends React.Component {
  state = {
    value: event.target.value
  }
  render() {
  return (
    <div className="ui huge fluid icon input">
      <form onChange={handleChange}>
      <input value={this.state.value}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
    </form>
      <i className="circular search link icon"></i>
    </div>
    )
  }
}

export default Search
