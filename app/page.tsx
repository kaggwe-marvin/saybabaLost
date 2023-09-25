import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <Header />
      <main className="container mx-auto p-4">
        {/* Add your homepage content here */}

        <h1 className="text-5xl font-bold mb-2">SayBaBa!!</h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Find lost items or report found items.
        </h2>

        <div className="flex flex-col w-full lg:flex-row">
          <Link
            href="#"
            className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            Find lost Item
          </Link>
          <div className="divider lg:divider-horizontal">OR</div>
          <Link
            href="/"
            className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            Report found item
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
