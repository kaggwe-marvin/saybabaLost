import React from "react";
import { ReportItem } from "@/typings";
import { getSingleDocument } from "@/app/(queries)/queries";

interface IParamsItemDetails {
  params: {
    id: ReportItem["id"];
  };
}

const page = async ({ params }: IParamsItemDetails) => {
  const { id } = params;
  const item = await getSingleDocument(id);
  return (
    <div>
      <h1>Item Details</h1>
      {item ? (
        <div>
          <h2>{item.category}</h2>
          <p>
            {item.firstName}
            {item.lastName}
          </p>
          {/* Render other fields as needed */}
        </div>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
};

export default page;
