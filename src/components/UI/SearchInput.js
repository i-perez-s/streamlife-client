import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";

import { startSearchResults } from "../../actions/search";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [{ search }, handleInputChange] = useForm({ search: "" });

  const submit = (e) => {
    e.preventDefault();
    dispatch(startSearchResults(search));
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={submit}>
          <input
            type="text"
            value={search}
            name="search"
            onChange={handleInputChange}
            className="searchInput"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};
