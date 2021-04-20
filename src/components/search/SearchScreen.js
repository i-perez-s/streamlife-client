import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { startSearchResults } from "../../actions/search";
import { SearchCard } from "./SearchCard";

export const SearchScreen = () => {
  const dispatch = useDispatch();
  const { searchInput } = useParams();

  useEffect(() => {
    dispatch(startSearchResults(searchInput));
  }, [dispatch, searchInput]);
  const { searchResult } = useSelector((state) => state.search);

  return (
    <div>
      <h2>Searched: {searchInput}</h2>
      {searchResult === [] ? (
        <p>There aren't any user with that username</p>
      ) : (
        searchResult.map((user) => <SearchCard user={user} key={user._id} />)
      )}
    </div>
  );
};
