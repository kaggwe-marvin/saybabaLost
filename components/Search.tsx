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
    <div className="form-control">
      <input
        type="text"
        placeholder="Search for Items"
        className="input input-bordered w-24 md:w-auto"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.region}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
