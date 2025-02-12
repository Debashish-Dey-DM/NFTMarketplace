interface iNews_data {
    id: string;
    text: string;
    title: string;
    image: string;
    date: string;
    time: string;
}

interface iSingle_news_data {
    id: string;
    text: string;
    title: string;
    image: string;
    date: string;
    time: string;
    subImages: string[];
    authorImage: string;
    authorName: string;
}

const news_data: iNews_data[] = [
	{
		id: '5Mint your own Tezos collections',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_1.jpg',
		date: '5 Feb',
		time: '3 min read',
	},
	{
		id: '0Mint your own Tezos collections',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_2.jpg',
		date: '5 Feb',
		time: '3 min read',
	},
	{
		id: '1List your collection for secondary sales',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'List your collection for secondary sales',
		image: '/images/blog/post_3.jpg',
		date: '22 Feb',
		time: '3 min read',
	},
	{
		id: '2The biggest moves in NFTs, Bitcoin, crypto rules',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'The biggest moves in NFTs, Bitcoin, crypto rules',
		image: '/images/blog/post_4.jpg',
		date: '18 Jan',
		time: '3 min read',
	},
	{
		id: "3Incredible Amount of Developer Energy' in Web3",
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Incredible Amount of Developer Energy' in Web3",
		image: '/images/blog/post_5.jpg',
		date: '15 Jan',
		time: '3 min read',
	},
	{
		id: "4Inflation is up, it matters: High prices plague Biden's",
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Inflation is up, it matters: High prices plague Biden's",
		image: '/images/blog/post_6.jpg',
		date: '23 Dec',
		time: '3 min read',
	},
	{
		id: '6Mint your own Tezos collections',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_1.jpg',
		date: '5 Feb',
		time: '3 min read',
	},
	{
		id: '7Mint your own Tezos collections',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_2.jpg',
		date: '5 Feb',
		time: '3 min read',
	},
	{
		id: '8List your collection for secondary sales',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'List your collection for secondary sales',
		image: '/images/blog/post_3.jpg',
		date: '22 Feb',
		time: '3 min read',
	},
	{
		id: '9The biggest moves in NFTs, Bitcoin, crypto rules',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'The biggest moves in NFTs, Bitcoin, crypto rules',
		image: '/images/blog/post_4.jpg',
		date: '18 Jan',
		time: '3 min read',
	},
	{
		id: "10Incredible Amount of Developer Energy' in Web3",
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Incredible Amount of Developer Energy' in Web3",
		image: '/images/blog/post_5.jpg',
		date: '15 Jan',
		time: '3 min read',
	},
	{
		id: "11Inflation is up, it matters: High prices plague Biden's",
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Inflation is up, it matters: High prices plague Biden's",
		image: '/images/blog/post_6.jpg',
		date: '23 Dec',
		time: '3 min read',
	},
];

const single_news_data: iSingle_news_data[] = [
	{
		id: 'post_1',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_1.jpg',
		date: '5 Feb',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_2',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'Mint your own Tezos collections',
		image: '/images/blog/post_2.jpg',
		date: '5 Feb',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_3',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'List your collection for secondary sales',
		image: '/images/blog/post_3.jpg',
		date: '22 Feb',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_4',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: 'The biggest moves in NFTs, Bitcoin, crypto rules',
		image: '/images/blog/post_4.jpg',
		date: '18 Jan',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_5',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Incredible Amount of Developer Energy' in Web3",
		image: '/images/blog/post_5.jpg',
		date: '15 Jan',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
	{
		id: 'post_6',
		text: 'Since we launched Tezos at the end of 2021, many awesome creators...',
		title: "Inflation is up, it matters: High prices plague Biden's",
		image: '/images/blog/post_6.jpg',
		date: '23 Dec',
		time: '3 min read',
		subImages: ['/images/blog/gallery_1.jpg', '/images/blog/gallery_2.jpg'],
		authorImage: '/images/blog/author_large.jpg',
		authorName: 'Deothemes',
	},
];

export { news_data, single_news_data };
