import { Seller } from './seller';


export class Product{
    id: string;
	name: string;
	description: string;
	price: number;
	image_URL: string;
	category: string;
	seller: Seller;
}