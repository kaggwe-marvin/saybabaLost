import React from "react";
import { whereQuery } from "../(queries)/queries";
import ItemCard from "@/components/ItemCard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "found items",
};
export default async function page() {
  const national = await whereQuery("category", "national");
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-2">foundug!!</h1>
      <h2 className="text-2xl text-gray-700 mb-4">
        Find lost items or report found items.
      </h2>

      <ItemCard />
    </main>
  );
}
