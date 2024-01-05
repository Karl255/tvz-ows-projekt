export enum ProductColor {
	BLACK = "BLACK",
	RED = "RED",
	ORANGE = "ORANGE",
	YELLOW = "YELLOW",
	GREEN = "GREEN",
	TURQUOISE = "TURQUOISE",
	BLUE = "BLUE",
	PURPLE = "PURPLE",
	PINK = "PINK",
	BLACK_WHITE_STRIPED = "BLACK_WHITE_STRIPED",
	OTHER = "OTHER",
}

export enum ProductType {
	EARRINGS = "EARRINGS",
	NECKLACE = "NECKLACE",
	RING = "RING",
}

export interface Product {
	name: string;
	image: string;
	price: number;
	type: ProductType;
	colors: ProductColor[];
}
