import React from "react";

function Search(props) {

  const handleClick = (e) => {
    e.preventDefault()
    props.setSearch("")
  }

  return (
    <div>
      <label className="search-type" htmlFor="search-term">Search:</label>
      <input
        id="search-term"
        type="text"
        onChange={(event) => {
          props.setSearch(event.target.value);
        }}
      ></input>
      <button onClick={handleClick}>Clear search</button>
    </div>
  );
}

export default Search;
