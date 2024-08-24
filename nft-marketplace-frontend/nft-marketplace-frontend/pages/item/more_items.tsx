import React from 'react';

import BidsCarousel from '../../components/carousel/bidsCarousel';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import HeadLine from '../../components/headLine';
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
const More_items = () => {
	return (
		<section className="dark:bg-jacarta-800 bg-light-base py-24">
			{/* <!-- Hot Bids --> */}
			<div className="container">
				<HeadLine
					text="More from this collection"
					classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white" image={undefined} pera={undefined}				/>

				<div className="relative">
					{/* <!-- Slider --> */}
					<BidsCarousel />
				</div>
			</div>
			{/* <!-- end hot bids --> */}
		</section>
	);
};

export default More_items;
