// all images imported from images directory
import product_01_image_01 from '../images/product-1.jpg';
import product_01_image_02 from '../images/product-2.jpg';
import product_01_image_03 from '../images/product-3.jpg';

import product_02_image_01 from '../images/product-4.jpg';
import product_02_image_02 from '../images/product-5.jpg';
import product_02_image_03 from '../images/product-6.jpg';

import product_03_image_01 from '../images/product-7.jpg';
import product_03_image_02 from '../images/product-8.jpg';
import product_03_image_03 from '../images/product-9.jpg';

import product_04_image_01 from '../images/product-10.jpg';
import product_04_image_02 from '../images/product-11.jpg';
import product_04_image_03 from '../images/product-12.jpg';

import product_05_image_01 from '../images/product-13.jpg';
import product_05_image_02 from '../images/product-5.jpg';
import product_05_image_03 from '../images/product-4.jpg';

import product_06_image_01 from '../images/product-8.jpg';
import product_06_image_02 from '../images/product-6.jpg';
import product_06_image_03 from '../images/product-5.jpg';

const products = [
	{
		id: '01',
		title: 'Mixed salad',
		price: 14.0,
		image01: product_01_image_01,
		image02: product_01_image_02,
		image03: product_01_image_03,
		category: 'Salad',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ',
	},

	{
		id: '02',
		title: 'Avocado salad',
		price: 18.0,
		image01: product_02_image_01,
		image02: product_02_image_02,
		image03: product_02_image_03,
		category: 'Salad',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '03',
		title: 'Tortilla grilled beef',
		price: 20.0,
		image01: product_03_image_01,
		image02: product_03_image_02,
		image03: product_03_image_03,
		category: 'Meat',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '04',
		title: 'Pasta salad pesto',
		price: 15.0,
		image01: product_04_image_01,
		image02: product_04_image_02,
		image03: product_04_image_03,
		category: 'Pasta',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '05',
		title: 'Bread salad',
		price: 14.0,
		image01: product_05_image_01,
		image02: product_05_image_02,
		image03: product_05_image_03,
		category: 'Bread',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},
	{
		id: '06',
		title: 'Brocoli salad',
		price: 10.0,
		image01: product_01_image_01,
		image02: product_01_image_02,
		image03: product_01_image_03,
		category: 'Salad',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '07',
		title: 'Rainbow Orzo Salad',
		price: 15.0,
		image01: product_02_image_02,
		image02: product_02_image_01,
		image03: product_02_image_03,
		category: 'Salad',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '08',
		title: 'BBQ meat',
		price: 30.0,
		image01: product_03_image_02,
		image02: product_03_image_01,
		image03: product_03_image_03,
		category: 'Meat',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '09',
		title: 'Salad With Mushroom',
		price: 10.0,
		image01: product_04_image_02,
		image02: product_04_image_01,
		image03: product_04_image_03,
		category: 'Salad',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '10',
		title: 'Tokin soup',
		price: 20.0,
		image01: product_05_image_02,
		image02: product_05_image_01,
		image03: product_05_image_03,
		category: 'Soup',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '11',
		title: 'Crunchy Bread ',
		price: 5.0,
		image01: product_06_image_01,
		image02: product_06_image_02,
		image03: product_06_image_03,
		category: 'Bread',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '12',
		title: 'Asian salad',
		price: 12.0,
		image01: product_06_image_02,
		image02: product_06_image_01,
		image03: product_06_image_03,
		category: 'Salad',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},

	{
		id: '13',
		title: 'Tuna with pasta ',
		price: 35.0,
		image01: product_06_image_03,
		image02: product_06_image_02,
		image03: product_06_image_03,
		category: 'Meat',

		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
	},
];

export default products;
