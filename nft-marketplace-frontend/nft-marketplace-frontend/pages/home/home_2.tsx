import React from 'react';
import Hero_2 from '../../components/hero/hero_2';

import Meta from '../../components/Meta';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Top_collection from '../../components/collectrions/top_collection';
import Auctions_categories from '../../components/categories/Auctions_categories';
import NewseLatter from '../../components/blog/newseLatter';
import Feature_collections from '../../components/collectrions/Feature_collections';
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
const Home_2 = () => {
	return (
		<>
			<Meta title="Home 2 || Xhibiter | NFT Marketplace Next.js Template" />
			<Hero_2 />
			<Top_collection />
			<Auctions_categories />
			<NewseLatter bgWhite={true} />
			<Feature_collections bgWhite={true} />
			<Partners />
		</>
	);
};

export default Home_2;
