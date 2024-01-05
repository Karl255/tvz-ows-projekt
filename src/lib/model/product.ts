export enum ProductColor {
	BLACK,
	RED,
	ORANGE,
	YELLOW,
	GREEN,
	TURQUIOSE,
	BLUE,
	PURPLE,
	PINK,
	BLACK_WHITE_STRIPED,
	OTHER,
}

export enum ProductType {
	EARRINGS,
	NECKLACE,
	RING,
}

export interface Product {
	name: string;
	image: string;
	price: number;
	type: ProductType;
	colors: ProductColor[];
}
