import React from "react";
import { useForm } from "../../hooks/useForm";

export const SearchInput = ({ history }) => {
  const [{ search }, handleInputChange] = useForm({ search: "" });

  const submit = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
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
