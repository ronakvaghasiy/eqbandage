import BestSellerProducts from "@/components/sections/bestseller-products";
import FeaturedPosts from "@/components/sections/featured-post";
import FurnitureSection1 from "@/components/sections/furniture-section-1";
import FurnitureSection2 from "@/components/sections/furniture-section-2";
import HeroSection from "@/components/sections/hero-section";
import MostPopularSection2 from "@/components/sections/most-popular-section-2";
import MostPopularSection1 from "@/components/sections/most-popular-section1";
import OfferSection from "@/components/sections/offer-section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bandage Store</title>
        <meta
          name="description"
          content="Shop the best furniture, explore our trending collections, and read the latest interior tips. Only at Bandage!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Home | Bandage Store" />
        <meta
          property="og:description"
          content="Discover trending and best-selling collections at Bandage – premium quality and stylish design."
        />
        <meta property="og:image" content="/assets/hero-banner.jpg" />
        <meta property="og:url" content="https://Bandage.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Bandage Store" />
        <meta
          name="twitter:description"
          content="Explore popular pieces and design tips from Bandage."
        />
        <meta name="twitter:image" content="/assets/hero-banner.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
