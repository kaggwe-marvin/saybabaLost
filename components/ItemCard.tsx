"use client";

import { useSchool } from "@/hooks/useSchool";
import { Item } from "./Item";

const ItemCard = () => {
  const data = useSchool();
  return (
    <div className="card">
      <h1 className="text-md font-semibold text-slate-700">Found Items</h1>
      <ul>
        <li>
          {data.map((item) => (
            <Item key={item?.id} item={item} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ItemCard;
