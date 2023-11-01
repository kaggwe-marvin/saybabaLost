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
    <>
      <h1>Item Details</h1>
      {item ? (
        <div>
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h1 className="card-title">Found {item.category} Card</h1>
              <p>First Name: {item.firstName}</p>
              <p>Last Name: {item.lastName}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Claim</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Item not found.</p>
      )}
    </>
  );
};

export default page;
