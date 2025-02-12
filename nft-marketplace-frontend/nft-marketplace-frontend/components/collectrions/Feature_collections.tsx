import React from 'react';
import HeadLine from '../headLine';
import Feature_collections_carousel from '../carousel/Feature_collection_carousel';
import Image from 'next/image';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
export interface Props{}
export const getServerSideProps:  GetServerSideProps  = async (   
    context : GetServerSidePropsContext 
) =>  {
  return {
    props: {}
  }
}
const Feature_collections = ({ bgWhite = false }:{bgWhite:boolean}) => {
	return (
		<div>
			<section className="py-24 relative">
				{bgWhite && (
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<Image
							src="/images/gradient_light.jpg"
							alt="gradient"
							className="h-full"
							layout="fill"
						/>
					</picture>
				)}
				<div className="container">
					<HeadLine
						image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png"
						text="Featured collections"
						classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white" pera={undefined}					/>
					<div className="relative">
						<Feature_collections_carousel />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Feature_collections;
