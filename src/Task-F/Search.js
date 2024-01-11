import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const city = searchParams.get("city");

  return (
    <div>
      <h3>Name is: {name}</h3>
      <h3>City is: {city}</h3>
    </div>
  );
};

export default Search;
