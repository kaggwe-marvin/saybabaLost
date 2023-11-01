import { useState, useEffect } from "react";
import { ReportItem } from "@/typings";
import { executeSearchQuery } from "@/app/(queries)/queries";

export function useSearchData(searchQuery: string) {
  const [filteredData, setFilteredData] = useState<ReportItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await executeSearchQuery(searchQuery);

        // Log the results to check if IDs are returned
        console.log("Search Results with IDs:", results);

        setFilteredData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return filteredData;
}
