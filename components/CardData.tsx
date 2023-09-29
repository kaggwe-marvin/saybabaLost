"use client";
import { useState, useEffect } from "react";
import { ReportItem } from "@/typings";
import { basicQuery } from "@/app/(queries)/queries";

function CardData() {
  const [data, setData] = useState<ReportItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limitCount = 3;
        const results = await basicQuery({ limitCount });

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

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong>
            {item.firstName} {item.lastName}
            <br />
            <strong>Category:</strong> {item.category}
            <br />
            <strong>Region:</strong> {item.region}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardData;
