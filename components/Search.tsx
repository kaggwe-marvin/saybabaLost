"use client";
import { db } from "@/firebase/firebase";
import { useState, useEffect } from "react";
import { where, collection, query, getDocs } from "firebase/firestore";
import { lostData } from "@/typings";
function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<lostData[]>([]);

  useEffect(() => {
    // Function to fetch data based on the searchQuery
    const fetchData = async () => {
      try {
        const dataRef = collection(db, "lost"); // Replace with your Firestore collection name
        const q = query(dataRef, where("region", "==", searchQuery)); // Replace 'fieldToSearch' with the actual field name you want to search

        const querySnapshot = await getDocs(q);
        const results: lostData[] = [];

        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() } as lostData);
        });

        setFilteredData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function whenever searchQuery changes
  }, [searchQuery]);
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
