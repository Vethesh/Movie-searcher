import React from "react";
import { useGlobal } from "./Context";

const Search = () => {
  const { query, setquery, iserror } = useGlobal();
  return (
    <div>
      <section className="search-section">
        <h2>Search your Favourite Movie</h2>
        <form action="#" onSubmit={e => e.preventDefault()}>
          <div>
            <input
              type={"text"}
              placeholder="enter the name"
              value={query}
              onChange={e => {
                setquery(e.target.value);
              }}></input>
          </div>
        </form>
        <div className="card-error">
          <p>{iserror.show && iserror.msg}</p>
        </div>
      </section>
    </div>
  );
};

export default Search;
