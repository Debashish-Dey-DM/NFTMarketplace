import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'tippy.js/dist/tippy.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import ArtData from '../../data/art_data';
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
export interface Props{}
export const getServerSideProps:  GetServerSideProps  = async (   
    context : GetServerSidePropsContext 
) =>  {
  return {
    props: {}
  }
}
const ArtsCarousel = () => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView="auto"
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					900: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1100: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				className=" card-slider-4-columns !py-5"
			>
				{ArtData.map((item) => {
					const { id, bigImage, userImage, title, name } = item;
					const itemLink = bigImage
						.split('/')
						.slice(-1)
						.toString()
						.replace('.jpg', '')
						.replace('.gif', '')
						.replace('_lg', '');

					return (
						<SwiperSlide key={id}>
							<article>
								<div className="dark:bg-jacarta-700 rounded-lg block overflow-hidden bg-white shadow-md transition-shadow hover:shadow-lg">
									<figure className="relative">
										<Link href={`/item/${itemLink}`}>
											<a>
												<Image
													src={bigImage}
													alt="item 1"
													height="430"
													width="379"
													layout="responsive"
													className="swiper-lazy h-[430px] w-full object-cover swiper-lazy-loaded rounded-2.5xl"
												/>
											</a>
										</Link>
									</figure>
									<div className="p-6">
										<div className="flex">
											<Link href={`/item/${itemLink}`}>
												<a className="shrink-0 mr-4">
													{/* user image */}
													<Image
														src={userImage}
														alt={name}
														height={40}
														width={40}
														className="mr-4 h-10 w-10 rounded-full"
													/>
												</a>
											</Link>
											<div>
												<Link href={`/item/${itemLink}`}>
													<a className="block">
														<span className="font-display hover:text-accent text-jacarta-700 text-lg leading-none dark:text-white">
															{name}
														</span>
													</a>
												</Link>
												<Link href={`/item/${itemLink}`}>
													<a className="text-accent text-2xs">{title}</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</article>
						</SwiperSlide>
					);
				})}
			</Swiper>

			{/* <!-- Slider Navigation --> */}
			<div className="group swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base sm:!-left-6 after:hidden">
				<MdKeyboardArrowLeft />
			</div>
			<div className="group swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base sm:!-right-6 after:hidden">
				<MdKeyboardArrowRight />
			</div>
		</>
	);
};

export default ArtsCarousel;
