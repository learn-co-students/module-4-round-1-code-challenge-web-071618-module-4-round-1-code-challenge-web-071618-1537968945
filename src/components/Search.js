import React from 'react'

const Search = ({search, handleChange}) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleChange}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
