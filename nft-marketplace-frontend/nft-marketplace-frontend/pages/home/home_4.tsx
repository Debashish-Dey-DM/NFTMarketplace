import React from 'react';

import Meta from '../../components/Meta';
import Hero_4 from '../../components/hero/hero_4';
import CoverflowCarousel from '../../components/carousel/coverflowCarousel';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import NewseLatter from '../../components/blog/newseLatter';
import Auctions_categories from '../../components/categories/Auctions_categories';
import Feature_collections from '../../components/collectrions/Feature_collections';
import Top_collection from '../../components/collectrions/top_collection';
import Partners from '../../components/partners/Partners';
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
const Home_4 = () => {
	return (
		<>
			<Meta title="Home 4 || Xhibiter | NFT Marketplace Next.js Template" />
			<Hero_4 />
			<CoverflowCarousel />
			<Top_collection />
			<Auctions_categories />
			<NewseLatter bgWhite={true} />
			<Feature_collections bgWhite={true} />
			<Partners />
		</>
	);
};

export default Home_4;
