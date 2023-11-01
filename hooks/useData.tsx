import { useState, useEffect } from "react";
import { ReportItem } from "@/typings";
import { basicQuery } from "@/app/(queries)/queries";

export function useData() {
  const [data, setData] = useState<ReportItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limitCount = 3;
        const results = await basicQuery({ limitCount });
        const extractedData = results.map((docSnapshot) => {
          const data = docSnapshot.data();
          const mappedData = {
            id: docSnapshot.id,
            firstName: data.firstName,
            lastName: data.lastName,
            collectionPoint: data.collectionPoint,
            category: data.category,
            region: data.region,
            cardNumber: data.cardNumber,
          };
          return mappedData;
        });

        setData(extractedData);
      } catch (error) {
        setError("Sorry, we couldn't fetch the data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return { data, error };
}
