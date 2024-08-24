import React from "react";
import Collection_category from "../../components/collectrions/collection_category";
import Meta from "../../components/Meta";
import Hero_5 from "../../components/hero/hero_5";
import Process from "../../components/blog/process";
import FilterCategoryItem from "../../components/categories/filterCategoryItem";
import Download from "../../components/blog/download";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Feature_collections from "../../components/collectrions/Feature_collections";
import HeadLine from "../../components/headLine";
export interface Props{
    data: any;
}
export const getServerSideProps:  GetServerSideProps<Props>  = async (   
    context : GetServerSidePropsContext 
) =>  {
  return {
    props: {
      data: "hello",
    }
  }
}
const Home_5 = () => {
  return (
    <>
      <Meta title="Home 5 || Xhibiter | NFT Marketplace Next.js Template" />
      <Hero_5 />
      <Process />
      <Feature_collections bgWhite={true} />
      <Collection_category bgWhite={true} />
      <div>
        {/* <!-- Trending Categories --> */}
        <section className="py-24">
          <div className="container">
            <HeadLine
              image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png"
              text="Trending categories"
              classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white" pera={undefined}            />
            <FilterCategoryItem />
          </div>
        </section>
        {/* <!-- end trending categories --> */}
      </div>
      <Download />
    </>
  );
};

export default Home_5;
