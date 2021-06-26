import React from "react";

function Search(props) {

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
    </div>
  );
}

export default Search;
