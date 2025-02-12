/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { trendingCategoryData } from '../../data/categories_data';
import HeadLine from '../headLine';
import Trending_categories_items from './trending_categories_items';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
export interface Props{}
export const getServerSideProps:  GetServerSideProps  = async (   
    context : GetServerSidePropsContext 
) =>  {
  return {
    props: {}
  }
}
const Tranding_category = () => {
	return (
		<section className="py-24">
			<div className="container">
				<HeadLine
					text="Trending categories"
					image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png"
					classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white" pera={undefined}				/>

				{/* trending categories */}
				<Trending_categories_items />
			</div>
		</section>
	);
};

export default Tranding_category;
