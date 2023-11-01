import HeroContent from "@/components/HeroContent";
import FormComponent from "../components/FormComponent";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <main className="container mx-auto p-4">
        {/* Add your homepage content here */}

        <h1 className="text-5xl font-bold mb-2">
          <span role="img" aria-label="Waving hand">
            &#x1F44B;
          </span>
          BaBaFinder!!
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Find lost items or report found items.
        </h2>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <HeroContent />

            <div className="divider divider-horizontal" />
            <Suspense
              fallback={
                <span className="loading loading-bars loading-md"></span>
              }>
              <FormComponent />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
