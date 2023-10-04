"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ReportItem } from "@/typings";
import { getAll } from "@/app/(queries)/queries";

const ItemCard = () => {
  const [data, setData] = useState<ReportItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getAll();

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
    <Link href="#">
      <div className="cursor-pointer ...">
        <div className="card">
          <h1 className="text-md font-semibold text-slate-700">Found Items</h1>
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
      </div>
    </Link>
  );
};

export default ItemCard;
