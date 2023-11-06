import Link from "next/link";
import CardData from "./CardData";
import { Suspense } from "react";

const HeroContent = () => {
  return (
    <>
      <div className="card bg-base-200 card-compact">
        <div className="card-title text-xl font-medium">Found Items</div>
        <div className="card-body">
          <Suspense
            fallback={
              <span className="loading loading-bars loading-md"></span>
            }>
            <CardData />
          </Suspense>

          <div className="card-actions">
            <Link
              href="/items"
              className=" text-xl font-small link link-secondary">
              See more ...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
