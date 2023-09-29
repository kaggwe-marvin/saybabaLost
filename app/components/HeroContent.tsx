
import CardData from "@/components/CardData";

const HeroContent = () => {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Found Items</div>
        <div className="collapse-content">
          <CardData />
        </div>
      </div>
    </>
  );
};

export default HeroContent;
