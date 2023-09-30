"use client";
function Search() {
  return (
    <div className="join">
      <div>
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="indicator">
        <button className="btn join-item">Search</button>
      </div>
    </div>
  );
}

export default Search;
