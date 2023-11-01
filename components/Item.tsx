import Link from "next/link";
import { ReportItem } from "@/typings";
import React from "react";

export const Item = ({ item }: { item: ReportItem }) => {
  console.log("Item component is rendering with the following data:", item);

  return (
    <>
      <Link href={`/item/${item?.id}`}>
        <h2>
          {item?.firstName} {item?.lastName}
        </h2>
        <p>type : {item?.category}</p>
      </Link>
    </>
  );
};
