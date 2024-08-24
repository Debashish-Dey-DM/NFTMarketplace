// import '/images/item_1.jpg' from '/images/item_1.jpg';
interface iBidsData {
    id: number;
    image: string;
    title: string;
    bid_number: number;
    eth_number: number;
    react_number: number;
}

const bidsData: iBidsData[] = [
	{
		id: 1,
		image: '/images/products/item_1.jpg',
		title: 'ETH Me Outside',
		bid_number: 1.55,
		eth_number: 1.3,
		react_number: 159,
	},
	{
		id: 2,
		image: '/images/products/item_2.jpg',
		title: 'ETH Me Outside',
		bid_number: 1.55,
		eth_number: 1.3,
		react_number: 159,
	},
	{
		id: 3,
		image: '/images/products/item_3.jpg',
		title: 'ETH Me Outside',
		bid_number: 1.55,
		eth_number: 1.3,
		react_number: 159,
	},
	{
		id: 4,
		image: '/images/products/item_4.jpg',
		title: 'ETH Me Outside',
		bid_number: 1.55,
		eth_number: 1.3,
		react_number: 159,
	},
	{
		id: 5,
		image: '/images/products/item_5.jpg',
		title: 'ETH Me Outside',
		bid_number: 1.55,
		eth_number: 1.3,
		react_number: 159,
	},
	{
		id: 6,
		image: '/images/products/item_6.jpg',
		title: 'ETH Me Outside',
		bid_number: 1.55,
		eth_number: 1.3,
		react_number: 159,
	},
];

export { bidsData };
