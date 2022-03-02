
import axios from 'axios';
import 'dotenv/config';

type _custom_field = {
	name: string;
	value: string;
}
export type Variant = {
	id: string,
	purchasing_disabled: boolean,
	primary: boolean,
	sku: string,
	media: string[] | []
	custom_fields: _custom_field[],
	list_price: number | null,
	discount_amount: number | null,
	tax_amount: number | null,
}

export type Product = {
	id: string;
    name: string;
    description: string;
    short_description: string;
	width: number,
	height: number,
	depth: number,
	weight: number,
    categories: string[];
    base_price: number | null;
    tax_amount: number | null;
    net_price: number | null;
	promotion: string | null
    variants: Variant[];
}


const baseUrl = process.env.API_BASE_URL;

export async function getAllProducts(): Promise<Product[]> {
	const res = await axios.get(`${baseUrl}/products`);
	let products:any = res.data;
	if (products.length < 4 && process.env.NODE_ENV === "development") {
		for (let i = res.data.length; i < 4; i++) {
			products.push(res.data[0]);
		}
	}

	return new Promise((resolve) => resolve(products));
}


export async function getSingleProduct(id: string): Promise<Product> {
	console.log(id);
	const res = await axios.get(`${process.env.API_BASE_URL}products/${id}`);

	const product = res.data;
	return new Promise((resolve) => resolve(product))

}

/**
 *   const products = [
    {
      id: 'product-22211665081.2415',
      title: 'TEST NUMERO UNOOOOOOO',
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      short_description:
        '• 50% cotton, 50% polyester\n• Collar, cuffs, and waistband are ribbed with spandex\n• Pill-resistant air jet yarn\n• Tubular body',
      categories: ['hoodie', 'graphic'],
      list_price: 42.0,
      discount_amount: 0,
      tax_amount: 24,
      net_price: 31.49,
      variants: [
        {
          id: 'variant-1234512sdddsdsd34123',
          title: 'S_BLACK',
          images: [
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
          ],
          custom_fields: [
            {
              name: 'color',
              value: 'black',
            },
            {
              name: 'size',
              value: 's',
            },
          ],
          list_price: null,
          discount_amount: null,
          tax_amount: null,
          net_price: null,
        },
        {
          id: 'variant-1234512341ccccc23',
          title: 'L_BLACK',
          images: [
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
          ],
          custom_fields: [
            {
              name: 'color',
              value: 'black',
            },
            {
              name: 'size',
              value: 'l',
            },
          ],
          list_price: null,
          discount_amount: null,
          tax_amount: null,
          net_price: null,
        },
        {
          id: 'variant-123451234123<<d',
          title: 'XL_BLACK',
          images: [
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
          ],
          custom_fields: [
            {
              name: 'color',
              value: 'black',
            },
            {
              name: 'size',
              value: 'xl',
            },
          ],
          list_price: null,
          discount_amount: null,
          tax_amount: null,
          net_price: null,
        },
        {
          id: 'variant-123451234123<<d',
          title: 'XL_BLACK',
          images: [
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
          ],
          custom_fields: [
            {
              name: 'color',
              value: 'green',
            },
            {
              name: 'size',
              value: 's',
            },
          ],
          list_price: null,
          discount_amount: null,
          tax_amount: null,
          net_price: null,
        },
        {
          id: 'variant-1234512zzzzzzz34123',
          title: 'S_PINK',
          images: [
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
          ],
          custom_fields: [
            {
              name: 'color',
              value: 'pink',
            },
            {
              name: 'size',
              value: 's',
            },
          ],
          list_price: null,
          discount_amount: null,
          tax_amount: null,
          net_price: null,
        },
        {
          id: 'variant-123451rwrwrwrw234123',
          title: 'L_PINK',
          images: [
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
          ],
          custom_fields: [
            {
              name: 'color',
              value: 'pink',
            },
            {
              name: 'size',
              value: 'large',
            },
          ],
          list_price: null,
          discount_amount: null,
          tax_amount: null,
          net_price: null,
        },
        {
          id: 'variant-12345123gasga4123',
          title: 'XL_PINK',
          images: [
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
            'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
          ],
          custom_fields: [
            {
              name: 'color',
              value: 'pink',
            },
            {
              name: 'size',
              value: 'xl',
            },
          ],
          list_price: null,
          discount_amount: null,
          tax_amount: null,
          net_price: null,
        },
      ],
    },
	{
		id: 'product-93544342407.43356',
		title: 'WHO AM I HOODIE',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		short_description:
			'50% cotton, 50% polyester\nCollar, cuffs, and waistband are ribbed with spandex\nPill-resistant air jet yarn\nTubular body',

		categories: ['hoodie', 'graphic'],
		list_price: 42.0,
		discount_amount: 0,
		tax_amount: 24,
		net_price: 31.49,
		variants: [
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'BLACK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'PINK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'GREY',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
		],
		},
		{
		id: 'product-188278388714.30685',
		title: 'WHO AM I HOODIE',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		short_description:
			'• 50% cotton, 50% polyester\n• Collar, cuffs, and waistband are ribbed with spandex\n• Pill-resistant air jet yarn\n• Tubular body',

		categories: ['hoodie', 'graphic'],
		list_price: 42.0,
		discount_amount: 0,
		tax_amount: 24,
		net_price: 31.49,
		variants: [
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'BLACK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'PINK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'GREY',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
		],
		},
		{
		id: 'product-243902897414.3342',
		title: 'WHO AM I HOODIE',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		short_description:
			'• 50% cotton, 50% polyester\n• Collar, cuffs, and waistband are ribbed with spandex\n• Pill-resistant air jet yarn\n• Tubular body',

		categories: ['hoodie', 'graphic'],
		list_price: 42.0,
		discount_amount: 0,
		tax_amount: 24,
		net_price: 31.49,
		variants: [
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'BLACK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'PINK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'GREY',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2512-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
		],
		},
		{
		id: 'product-937216061816.4802',
		title: 'WHO AM I HOODIE',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		short_description:
			'• 50% cotton, 50% polyester\n• Collar, cuffs, and waistband are ribbed with spandex\n• Pill-resistant air jet yarn\n• Tubular body',

		categories: ['hoodie', 'graphic'],
		list_price: 42.0,
		discount_amount: 0,
		tax_amount: 24,
		net_price: 31.49,
		variants: [
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'BLACK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'PINK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2489-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'GREY',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
		],
		},
		{
		id: 'product-1033701509706.2244',
		title: 'WHO AM I HOODIE',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		short_description:
			'• 50% cotton, 50% polyester\n• Collar, cuffs, and waistband are ribbed with spandex\n• Pill-resistant air jet yarn\n• Tubular body',

		categories: ['hoodie', 'graphic'],
		list_price: 42.0,
		discount_amount: 0,
		tax_amount: 24,
		net_price: 31.49,
		variants: [
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'BLACK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'PINK',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
			{
			id: `variant-${Date.now() * Math.random()}`,
			title: 'GREY',
			images: [
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
				'https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg',
			],
			custom_fields: [],
			list_price: null,
			discount_amount: null,
			tax_amount: null,
			net_price: null,
			},
		],
		},
	  ];
 * 
 */