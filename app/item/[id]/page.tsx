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
      {item ? (
        <>
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h1 className="card-title">Found {item.category} Card</h1>
              <p>First Name: {item.firstName}</p>
              <p>Last Name: {item.lastName}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Claim</button>
              </div>
            </div>
          </div>{" "}
          <h2 className="text-xl font-semibold">Claim This Item</h2>
          <p className="text-gray-600 mt-2">
            To claim this reported item, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mt-2 ml-4">
            <li>Visit our offices in person.</li>
            <li>Show the items details and your identification.</li>
            <li>Click the Claim button above to initiate the process.</li>
          </ol>{" "}
          <div className="mt-2 ml-6">
            <p className="text-gray-600">National ID: 10,000 UGX</p>
            <p className="text-gray-600">School Document: 5,000 UGX</p>
          </div>
          <p className="text-gray-700 mt-2">
            Note: For claiming a national ID, please carry a police letter.
          </p>
        </>
      ) : (
        <p>Item not found.</p>
      )}
    </>
  );
};

export default page;
