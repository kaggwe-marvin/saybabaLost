"use client";
import { ReportItem } from "@/typings";

import { Item } from "@/components/Item";
import { useData } from "@/hooks/useData";

function CardData() {
  const { data, error } = useData();

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            {data.map((item: ReportItem) => (
              <Item key={item?.id} item={item} />
            ))}
          </li>
        </ul>
      )}
    </>
  );
}

export default CardData;
