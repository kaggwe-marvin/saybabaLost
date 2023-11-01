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
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h1 className="card-title">Found {item.category} Card</h1>
              <p>
                {item.firstName}
                {item.lastName}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Claim</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
};

export default page;
