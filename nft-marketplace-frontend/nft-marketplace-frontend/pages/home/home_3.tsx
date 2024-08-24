import React, { useEffect } from 'react';
import Collection_category from '../../components/collectrions/collection_category';

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Bids from '../../components/bids/bids';
import NewseLatter from '../../components/blog/newseLatter';
import Browse_category from '../../components/categories/Browse_category';
import Feature_collections from '../../components/collectrions/Feature_collections';
import Hero_3 from '../../components/hero/hero_3';
import Meta from '../../components/Meta';
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
const Home_3 = () => {
	useEffect(() => {
		const header = document.querySelector('header');
		header.classList.add('bg-white/[.15]');
	}, []);

	return (
		<>
			<Meta title="Home 3 || Xhibiter | NFT Marketplace Next.js Template" />
			<Hero_3 />
			<Browse_category bgWhite={undefined} />
			<Bids classes="dark:bg-jacarta-800 relative py-24" bgWhite={true} />
			<Collection_category bgWhite={true} />
			<Feature_collections bgWhite={true} />
			<NewseLatter bgWhite={false} />
			<Partners />
		</>
	);
};

export default Home_3;
