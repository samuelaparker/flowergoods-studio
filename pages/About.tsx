import React from "react";
import Layout from "@/components/shared/Layout";

const About: React.FC = () => {
  return (
    <Layout bgColor="brand-pink" pageTitle="About">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl text-gray-800 mb-4 font-black">about</h1>
        <p className="text-gray-700 leading-loose">
          Hey there, welcome to flowergoods.studio! flowergoods.studio is run by
          Trish Ramirez-Parker. We&apos;re all about bringing a touch of beauty
          + happy brain chemicals to your life through florals and floral goods.
        </p>
        <p className="text-gray-700 leading-loose mt-4">
          Our signature concept, saturday flowers, is inspired by our personal
          practice of rest + stillness. Every saturday, we deliver fresh blooms
          to your doorstep, so you can enjoy them over a cup of coffee or tea.
          It&apos;s a lovely way to add a touch of beauty to your weekend.
        </p>
        <p className="text-gray-700 leading-loose mt-4">
          We also offer one of a kind vases, floral arrangements + design for
          all kinds of occasions, from weddings to corporate events and
          everything in between.
        </p>
        <p className="text-gray-700 leading-loose mt-4">
          Thanks for stopping by and checking us out. We can&apos;t wait to help
          make your day a little brighter with some seriously amazing blooms!
        </p>
      </div>
    </Layout>
  );
};

export default About;
