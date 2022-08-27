import React from "react";

function Search({ searchText, onChangeSearch }) {
  function handleChange(e) {
    onChangeSearch(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchText} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
