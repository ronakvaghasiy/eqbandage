import BestSellerProducts from "@/components/sections/bestseller-products";
import FeaturedPosts from "@/components/sections/featured-post";
import FurnitureSection1 from "@/components/sections/furniture-section-1";
import FurnitureSection2 from "@/components/sections/furniture-section-2";
import HeroSection from "@/components/sections/hero-section";
import MostPopularSection2 from "@/components/sections/most-popular-section-2";
import MostPopularSection1 from "@/components/sections/most-popular-section1";
import OfferSection from "@/components/sections/offer-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <FurnitureSection1 />
      <MostPopularSection1 />
      <FurnitureSection2 />
      <MostPopularSection2 />
      <BestSellerProducts />
      <FeaturedPosts />
    </>
  );
}
