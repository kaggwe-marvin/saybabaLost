import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroContent from "./components/HeroContent";
import FormComponent from "./components/FormComponent";
export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        {/* Add your homepage content here */}

        <h1 className="text-5xl font-bold mb-2">&#x1F44B;SayBaBa!!</h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Find lost items or report found items.
        </h2>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <HeroContent />
            <div className="divider divider-horizontal" />
            <FormComponent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
