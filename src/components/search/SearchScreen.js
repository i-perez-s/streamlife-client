import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { startSearchResults } from "../../actions/search";

export const SearchScreen = () => {
  const dispatch = useDispatch();
  const { searchInput } = useParams();

  useEffect(() => {
    dispatch(startSearchResults(searchInput));
  }, [dispatch, searchInput]);

  return (
    <div>
      <h2>Searched: {searchInput}</h2>
    </div>
  );
};
