import { ProductType, type Product, type ProductColor, ProductType as T, ProductColor as C } from "$lib/model/product";

const createProduct = (
	name: string,
	image: string,
	price: number,
	type: ProductType,
	colors: ProductColor[]
): Product => ({
	name,
	image,
	price,
	type,
	colors,
});

// prettier-ignore
export const allProducts: Product[] = [
	createProduct("Naušnice", "earrings - black-green-turquoise.jpg", 10, T.EARRINGS, [C.BLACK, C.GREEN, C.TURQUOISE]),
	createProduct("Naušnice", "earrings - black-pink.jpg", 10, T.EARRINGS, [C.BLACK, C.PINK]),
	createProduct("Naušnice", "earrings - red-orange.jpg", 10, T.EARRINGS, [C.RED, C.ORANGE]),
	createProduct("Naušnice", "earrings - turquoise.jpg", 10, T.EARRINGS, [C.TURQUOISE]),
	
	createProduct("Ogrlica", "necklace - black-green-turquoise.jpg", 15, T.NECKLACE, [C.BLACK, C.GREEN, C.TURQUOISE]),
	createProduct("Ogrlica", "necklace - black-hotpink triangles.jpg", 15, T.NECKLACE, [C.BLACK, C.PINK]),
	createProduct("Ogrlica", "necklace - black-turquoise triangles.jpg", 15, T.NECKLACE, [C.BLACK, C.TURQUOISE]),
	createProduct("Ogrlica", "necklace - large 1.jpg", 15, T.NECKLACE, [C.YELLOW, C.TURQUOISE, C.OTHER, C.BLACK, C.BLACK_WHITE_STRIPED]),
	createProduct("Ogrlica", "necklace - large 2.jpg", 15, T.NECKLACE, [C.YELLOW, C.OTHER, C.TURQUOISE, C.PINK, C.BLACK]),
	createProduct("Ogrlica", "necklace - large 3.jpg", 15, T.NECKLACE, [C.BLACK, C.OTHER, C.BLACK_WHITE_STRIPED]),
	createProduct("Ogrlica", "necklace - large 4.jpg", 15, T.NECKLACE, [C.BLACK, C.OTHER, C.GREEN, C.YELLOW, C.TURQUOISE]),
	createProduct("Ogrlica", "necklace - large 5.jpg", 15, T.NECKLACE, [C.YELLOW, C.OTHER, C.TURQUOISE, C.PINK, C.BLACK]),
	
	createProduct("Prsten", "ring - aqua-striped.jpg", 8, T.RING, [C.OTHER, C.BLACK_WHITE_STRIPED]),
	createProduct("Prsten", "ring - black-blues.jpg", 8, T.RING, [C.BLACK, C.BLUE, C.TURQUOISE, C.PURPLE]),
	createProduct("Prsten", "ring - blue-purple.jpg", 8, T.RING, [C.BLUE, C.PURPLE]),
	createProduct("Prsten", "ring - blues.jpg", 8, T.RING, [C.BLUE]),
	//createProduct("Prsten", "ring - blues 2.jpg", 8, T.RING, [C.BLUE, C.TURQUIOSE]), // bad picture
	createProduct("Prsten", "ring - green-striped.jpg", 8, T.RING, [C.GREEN, C.BLACK_WHITE_STRIPED]),
	//createProduct("Prsten", "ring - green-striped 2.jpg", 8, T.RING, [C.GREEN, C.BLACK_WHITE_STRIPED]), // same as above
	createProduct("Prsten", "ring - green-turquoise-striped.jpg", 8, T.RING, [C.GREEN, C.TURQUOISE, C.BLACK_WHITE_STRIPED]),
	createProduct("Prsten", "ring - green-turquoise.jpg", 8, T.RING, [C.GREEN, C.TURQUOISE]),
	//createProduct("Prsten", "ring - pink-yellow-beige-blue.jpg", 8, T.RING, [C.GREEN, C.TURQUIOSE]), // two items
	createProduct("Prsten", "ring - red-pink.jpg", 8, T.RING, [C.RED, C.PINK]),
	createProduct("Prsten", "ring - striped mix.jpg", 8, T.RING, [C.BLACK_WHITE_STRIPED, C.OTHER]),
	createProduct("Prsten", "ring - turquoise-black.jpg", 8, T.RING, [C.TURQUOISE, C.BLACK]),
	createProduct("Prsten", "ring - turquoise-purple.jpg", 8, T.RING, [C.TURQUOISE, C.PURPLE]),
	// createProduct("Ogrlica", "necklace - warm striped mix.jpg", 8, T.NECKLACE, [C.RED, C.ORANGE, C.PINK, C.BLACK_WHITE_STRIPED]), // bad picture
];
