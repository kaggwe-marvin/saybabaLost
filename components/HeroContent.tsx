import Link from "next/link";
import CardData from "./CardData";
import { Suspense } from "react";

const HeroContent = () => {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Found Items</div>
        <div className="collapse-content">
          <Suspense
            fallback={
              <span className="loading loading-bars loading-md"></span>
            }>
            <CardData />
          </Suspense>

          <ul className="menu bg-base-200 w-56 rounded-box">
            <li>
              <Link
                href="/items"
                className=" text-xl font-small link link-secondary">
                See more ...
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
