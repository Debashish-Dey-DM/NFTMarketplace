import React from 'react';
import Meta from '../../components/Meta';
import Download from '../../components/blog/download';

import Collection_category from '../../components/collectrions/collection_category';
import Hero_6 from '../../components/hero/hero_6';
import Testimonial from '../../components/blog/testimonial';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Bids from '../../components/bids/bids';
import Auctions_categories from '../../components/categories/Auctions_categories';
import Browse_category from '../../components/categories/Browse_category';
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
const Home_6 = () => {
	return (
		<>
			<Meta title="Home 5 || Xhibiter | NFT Marketplace Next.js Template" />
			<Hero_6 />
			<Bids bgWhite={undefined} />
			<Collection_category bgWhite={true} />
			<Auctions_categories />
			<Browse_category bgWhite={true} />
			<Testimonial bgWhite={true} />
			<Partners />
			<Download />
		</>
	);
};

export default Home_6;
