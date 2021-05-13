import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Breed Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Search For a Breed"
          id="breed"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
