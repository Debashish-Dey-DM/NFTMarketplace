import { string } from "sharp/lib/is";

interface iCollection_data {
    id: number;
    title: string;
    image: string;
    icon: boolean;
    amount: string;
    postTime: string;
    postDate: string;
}

interface iCollection_item_data {
    id: number;
    title: string;
    image: string;
    icon: boolean;
    creator: string;
    text: string;
    amount: string;
    details: {
        id: string;
        detailsNumber: string;
        detailsText: string;
    }[];
}
    
interface iCollection_activity_item_data{
    id: string;
    image: string;
    title: string;
    price: string;
    time: string;
    category: string;
}

interface iCollectionCategoryData{
    parentId: number;
    name: string;
    collections: {
        id: number;
        title: string;
        image: string;
        icon: boolean;
        amount: string;
        postTime: string;
    }[];
}


const collection_data: iCollection_data[] = [
	{
		id: 1,
		title: 'NFT Funny Cat',
		image: '/images/avatars/avatar_1.jpg',
		icon: true,
		amount: '7,080.95',
		postTime: '2022-07-20',
		postDate: 'Last 24 Hours',
	},
	{
		id: 2,
		title: 'Cryptopank',
		image: '/images/avatars/avatar_2.jpg',
		icon: true,
		amount: '6,548,133',
		postTime: '2022-07-10',
		postDate: 'Last 24 Hours',
	},
	{
		id: 3,
		title: 'Prince Ape Planet',
		image: '/images/avatars/avatar_3.jpg',
		icon: false,
		amount: '4,823,927',
		postTime: '2022-07-08',
		postDate: 'Last 24 Hours',
	},
	{
		id: 4,
		title: 'Hey Mrsmeseks',
		image: '/images/avatars/avatar_4.jpg',
		icon: true,
		amount: '3,186',
		postTime: '2022-07-01',
		postDate: 'Last 24 Hours',
	},
	{
		id: 5,
		title: 'Bored Bunny',
		image: '/images/avatars/avatar_5.jpg',
		icon: false,
		amount: '3,027',
		postTime: '2022-07-05',
		postDate: 'Last 24 Hours',
	},
	{
		id: 6,
		title: 'Wow Frens',
		image: '/images/avatars/avatar_6.jpg',
		icon: false,
		amount: '2,586',
		postTime: '2022-07-08',
		postDate: 'Last 7 days',
	},
	{
		id: 7,
		title: 'Origin Morish',
		image: '/images/avatars/avatar_7.jpg',
		icon: true,
		amount: '2,347.85',
		postTime: '2022-07-20',
		postDate: 'Last 7 days',
	},
	{
		id: 8,
		title: 'Superdo',
		image: '/images/avatars/avatar_8.jpg',
		icon: true,
		amount: '2,115.71',
		postTime: '2022-07-10',
		postDate: 'Last 7 days',
	},
	{
		id: 9,
		title: 'NFT stars',
		image: '/images/avatars/avatar_9.jpg',
		icon: false,
		amount: '2,027',
		postTime: '2022-07-12',
		postDate: 'Last 7 days',
	},
	{
		id: 10,
		title: 'Asumitsu',
		image: '/images/avatars/avatar_10.jpg',
		icon: true,
		amount: '1,989.70',
		postTime: '2022-07-15',
		postDate: 'Last 7 days',
	},
	{
		id: 11,
		title: 'Pank Skull',
		image: '/images/avatars/avatar_11.jpg',
		icon: false,
		amount: '1,726.70',
		postTime: '2022-07-16',
		postDate: 'Last 7 days',
	},
	{
		id: 12,
		title: 'Lazy Panda',
		image: '/images/avatars/avatar_12.jpg',
		icon: false,
		amount: '1,589.03',
		postTime: '2022-07-14',
		postDate: 'Last 7 days',
	},
	{
		id: 13,
		title: 'Arcahorizons',
		image: '/images/avatars/avatar_13.jpg',
		icon: true,
		amount: '1,157',
		postTime: '2022-07-20',
		postDate: 'Last 24 Hours',
	},
	{
		id: 14,
		title: 'Sussygirl',
		image: '/images/avatars/avatar_14.jpg',
		icon: false,
		amount: '1,030',
		postTime: '2022-06-20',
		postDate: 'Last 24 Hours',
	},
	{
		id: 15,
		title: 'Smilebin',
		image: '/images/avatars/avatar_15.jpg',
		icon: true,
		amount: '999.51',
		postTime: '2022-07-20',
		postDate: 'Last 7 days',
	},
	{
		id: 16,
		title: 'Pankysmoke',
		image: '/images/avatars/avatar_16.jpg',
		icon: false,
		amount: '875.65',
		postTime: '2022-07-20',
		postDate: 'Last 7 days',
	},
];

const collection_item_data = [
	{
		id: 'avatar_1',
		title: 'NFT Funny Cat',
		image: '/images/avatars/avatar_1.jpg',
		icon: true,
		creator: '051_Hart',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		amount: '7,080.95',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
	},
	{
		id: 'avatar_2',
		title: 'Cryptopank',
		image: '/images/avatars/avatar_2.jpg',
		icon: true,
		creator: 'Wow Frens',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '6,548,133',
	},
	{
		id: 'avatar_3',
		title: 'Prince Ape Planet',
		image: '/images/avatars/avatar_3.jpg',
		icon: false,
		creator: 'Origin Morish',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: 'NFT stars',
	},
	{
		id: 'avatar_4',
		title: 'Hey Mrsmeseks',
		image: '/images/avatars/avatar_4.jpg',
		icon: true,
		creator: 'Lazy Panda',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '3,186',
	},
	{
		id: 'avatar_5',
		title: 'Bored Bunny',
		image: '/images/avatars/avatar_5.jpg',
		icon: false,
		creator: 'Crytopank',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '3,027',
	},
	{
		id: 'avatar_6',
		title: 'Wow Frens',
		image: '/images/avatars/avatar_6.jpg',
		icon: false,
		creator: 'Hey Mrsmeseks',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '2,586',
	},
	{
		id: 'avatar_7',
		title: 'Origin Morish',
		image: '/images/avatars/avatar_7.jpg',
		icon: true,
		creator: 'alyxbow',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '2,347.85',
	},
	{
		id: ' avatar_8',
		title: 'Superdo',
		image: '/images/avatars/avatar_8.jpg',
		icon: true,
		creator: 'Wow Frens',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '2,115.71',
	},
	{
		id: 'avatar_9',
		title: 'NFT stars',
		image: '/images/avatars/avatar_9.jpg',
		icon: false,
		creator: 'NFT stars',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '2,027',
	},
	{
		id: 'avatar_10',
		title: 'Asumitsu',
		image: '/images/avatars/avatar_10.jpg',
		icon: true,
		creator: 'Origin Morish',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '1,989.70',
	},
	{
		id: 'avatar_11',
		title: 'Pank Skull',
		image: '/images/avatars/avatar_11.jpg',
		icon: false,
		creator: 'Lazy Panda',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '1,726.70',
	},
	{
		id: 'avatar_12',
		title: 'Lazy Panda',
		image: '/images/avatars/avatar_12.jpg',
		icon: false,
		creator: '051_Hart',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '1,589.03',
	},
	{
		id: 'avatar_13',
		title: 'Arcahorizons',
		image: '/images/avatars/avatar_13.jpg',
		icon: true,
		creator: 'Crytopank',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '1,157',
	},
	{
		id: 'avatar_14',
		title: 'Sussygirl',
		image: '/images/avatars/avatar_14.jpg',
		icon: false,
		creator: 'Hey Mrsmeseks',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '1,030',
	},
	{
		id: 'avatar_15',
		title: 'Smilebin',
		image: '/images/avatars/avatar_15.jpg',
		icon: true,
		creator: 'alyxbow',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '999.51',
	},
	{
		id: 'avatar_16',
		title: 'Pankysmoke',
		image: '/images/avatars/avatar_16.jpg',
		icon: false,
		creator: 'Wow Frens',
		text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
		details: [
			{
				id: '07.2K',
				detailsNumber: '7.2K',
				detailsText: 'Items',
			},
			{
				id: '15.3K',
				detailsNumber: '5.3K',
				detailsText: 'Owners',
			},
			{
				id: '22.55',
				detailsNumber: '2.55',
				detailsText: 'Floor Price',
			},
			{
				id: '317.2K',
				detailsNumber: '17.2K',
				detailsText: 'Volume Traded',
			},
		],
		amount: '875.65',
	},
];

const collection_activity_item_data: iCollection_activity_item_data[] = [
	{
		id: '0Lazyone Panda',
		image: '/images/avatars/avatar_2.jpg',
		title: 'Lazyone Panda',
		price: 'sold for 1.515 ETH',
		time: '30 minutes 45 seconds ago',
		category: 'purchases',
	},
	{
		id: '1NFT Funny Cat',
		image: '/images/avatars/avatar_1.jpg',
		// image: '/images/products/item_21_sm.jpg',
		title: 'NFT Funny Cat',
		price: 'listed by 051_Hart .08095 ETH',
		time: '40 minutes 36 seconds ago',
		category: 'listing',
	},
	{
		id: '2Prince Ape Planet',
		image: '/images/avatars/avatar_3.jpg',
		// image: '/images/products/item_22_sm.jpg',
		title: 'Prince Ape Planet',
		price: 'tranferred from 027ab52',
		time: '1 hour 15 minutes ago',
		category: 'transfer',
	},
	{
		id: '3Origin Morish',
		image: '/images/avatars/avatar_4.jpg',
		// image: '/images/products/item_23_sm.jpg',
		title: 'Origin Morish',
		price: 'bid cancelled by 0397fd',
		time: '1 hour 55 minutes ago',
		category: 'bids',
	},
	{
		id: '4Portrait Gallery#029',
		image: '/images/avatars/avatar_5.jpg',
		// image: '/images/products/item_24_sm.jpg',
		title: 'Portrait Gallery#029',
		price: 'liked by Trina_more',
		time: '2 hours 24 minutes ago',
		category: 'likes',
	},
	{
		id: '5Portrait Gallery#029',
		image: '/images/avatars/avatar_6.jpg',
		// image: '/images/products/item_24_sm.jpg',
		title: 'Portrait Gallery#029',
		price: 'liked by Trina_more',
		time: '2 hours 24 minutes ago',
		category: 'likes',
	},

	// =============
	// =============
	// =============

	{
		id: '6Lazyone Panda',
		image: '/images/avatars/avatar_3.jpg',
		title: 'Lazyone Panda',
		price: 'sold for 1.515 ETH',
		time: '30 minutes 45 seconds ago',
		category: 'purchases',
	},
	{
		id: '7NFT Funny Cat',
		image: '/images/avatars/avatar_2.jpg',
		// image: '/images/products/item_21_sm.jpg',
		title: 'NFT Funny Cat',
		price: 'listed by 051_Hart .08095 ETH',
		time: '40 minutes 36 seconds ago',
		category: 'listing',
	},
	{
		id: '8Prince Ape Planet',
		image: '/images/avatars/avatar_5.jpg',
		// image: '/images/products/item_22_sm.jpg',
		title: 'Prince Ape Planet',
		price: 'tranferred from 027ab52',
		time: '1 hour 15 minutes ago',
		category: 'transfer',
	},
	{
		id: '9Origin Morish',
		image: '/images/avatars/avatar_6.jpg',
		// image: '/images/products/item_23_sm.jpg',
		title: 'Origin Morish',
		price: 'bid cancelled by 0397fd',
		time: '1 hour 55 minutes ago',
		category: 'bids',
	},
	{
		id: '10Portrait Gallery#029',
		image: '/images/avatars/avatar_3.jpg',
		// image: '/images/products/item_24_sm.jpg',
		title: 'Portrait Gallery#029',
		price: 'liked by Trina_more',
		time: '2 hours 24 minutes ago',
		category: 'likes',
	},
	{
		id: '11Portrait Gallery#029',
		image: '/images/avatars/avatar_1.jpg',
		// image: '/images/products/item_24_sm.jpg',
		title: 'Portrait Gallery#029',
		price: 'liked by Trina_more',
		time: '2 hours 24 minutes ago',
		category: 'bids',
	},
];

const collectionCategoryData: iCollectionCategoryData[] = [
	{
		parentId: 1,
		name: " Today's Drops",
		collections: [
			{
				id: 1,
				title: 'NFT Funny Cat',
				image: '/images/avatars/avatar_1.jpg',
				icon: true,
				amount: '7,080.95',
				postTime: '2022-07-20',
			},
			{
				id: 2,
				title: 'Cryptopank',
				image: '/images/avatars/avatar_2.jpg',
				icon: true,
				amount: '6,548,133',
				postTime: '2022-07-10',
			},
			{
				id: 3,
				title: 'Prince Ape Planet',
				image: '/images/avatars/avatar_3.jpg',
				icon: false,
				amount: '4,823,927',
				postTime: '2022-07-08',
			},
			{
				id: 4,
				title: 'Hey Mrsmeseks',
				image: '/images/avatars/avatar_4.jpg',
				icon: true,
				amount: '3,186',
				postTime: '2022-07-01',
			},
		],
	},
	{
		parentId: 2,
		name: 'Top Sellers',
		collections: [
			{
				id: 5,
				title: 'Bored Bunny',
				image: '/images/avatars/avatar_5.jpg',
				icon: false,
				amount: '3,027',
				postTime: '2022-07-05',
			},
			{
				id: 6,
				title: 'Wow Frens',
				image: '/images/avatars/avatar_6.jpg',
				icon: false,
				amount: '2,586',
				postTime: '2022-07-08',
			},
			{
				id: 7,
				title: 'Origin Morish',
				image: '/images/avatars/avatar_7.jpg',
				icon: true,
				amount: '2,347.85',
				postTime: '2022-07-20',
			},
			{
				id: 8,
				title: 'Superdo',
				image: '/images/avatars/avatar_8.jpg',
				icon: true,
				amount: '2,115.71',
				postTime: '2022-07-10',
			},
		],
	},
	{
		parentId: 3,
		name: 'Top Buyers',
		collections: [
			{
				id: 9,
				title: 'NFT stars',
				image: '/images/avatars/avatar_9.jpg',
				icon: false,
				amount: '2,027',
				postTime: '2022-07-12',
			},
			{
				id: 10,
				title: 'Asumitsu',
				image: '/images/avatars/avatar_10.jpg',
				icon: true,
				amount: '1,989.70',
				postTime: '2022-07-15',
			},
			{
				id: 11,
				title: 'Pank Skull',
				image: '/images/avatars/avatar_11.jpg',
				icon: false,
				amount: '1,726.70',
				postTime: '2022-07-16',
			},
			{
				id: 12,
				title: 'Lazy Panda',
				image: '/images/avatars/avatar_12.jpg',
				icon: false,
				amount: '1,589.03',
				postTime: '2022-07-14',
			},
		],
	},
];

export {
	collection_data,
	collection_item_data,
	collection_activity_item_data,
	collectionCategoryData,
};
