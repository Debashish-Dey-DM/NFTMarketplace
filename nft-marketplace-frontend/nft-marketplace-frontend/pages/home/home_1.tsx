import React from 'react';



import Meta from '../../components/Meta';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Hero from '../../components/hero/hero';
import Bids from '../../components/bids/bids';
import Top_collection from '../../components/collectrions/top_collection';
import Tranding_category from '../../components/categories/tranding_categories';
import NewseLatter from '../../components/blog/newseLatter';
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
const Home_1 = () => {
	return (
		<main>
			<Meta title="Home 1 || Xhibiter | NFT Marketplace Next.js Template" />
			<Hero />
			<Bids bgWhite={true} />
			<Top_collection />
			<Tranding_category />
			<NewseLatter bgWhite={true} />
		</main>
	);
};

export default Home_1;
