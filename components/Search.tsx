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
      <select className="select select-bordered join-item">
        <option disabled defaultValue="Filter">
          Filter
        </option>
        <option>first name</option>
        <option>Last name</option>
        <option>id number</option>
        <option>region</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <div className="indicator">
        <button className="btn join-item">Search</button>
      </div>
    </div>
  );
}

export default Search;
