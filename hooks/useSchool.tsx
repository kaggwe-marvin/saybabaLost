import { useState, useEffect } from "react";
import { ReportItem } from "@/typings";
import { whereQuery } from "@/app/(queries)/queries";

export function useSchool() {
  const [data, setData] = useState<ReportItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await whereQuery("category", "school");

        const extractedData = results.map((docSnapshot) => {
          const data = docSnapshot.data();
          return {
            id: docSnapshot.id,
            firstName: data.firstName,
            lastName: data.lastName,
            collectionPoint: data.collectionPoint,
            category: data.category,
            region: data.region,
            cardNumber: data.cardNumber,
          };
        });

        setData(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
}
