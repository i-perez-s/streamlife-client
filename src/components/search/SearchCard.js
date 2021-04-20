import React from "react";

export const SearchCard = ({ user }) => {
  return (
    <div className="searchResultCard">
      <img src={user.photo} alt="userPhoto" />
      <p>{user.username}</p>
      <button className="btn btn-success">Follow</button>
    </div>
  );
};
