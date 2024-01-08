import { ProductType, type Product, type ProductColor, ProductType as T, ProductColor as C } from "$lib/model/product";

const createProduct = (
	id: number,
	name: string,
	image: string,
	price: number,
	type: ProductType,
	colors: ProductColor[]
): Product => ({
	id,
	name,
	image,
	price,
	type,
	colors,
});

// prettier-ignore
export const featuredProducts: Product[] = [
	createProduct(1, "Naušnice", "earrings - black-green-turquoise.jpg", 10, T.EARRINGS, [C.BLACK, C.GREEN, C.TURQUOISE]),
	createProduct(4, "Naušnice", "earrings - turquoise.jpg", 10, T.EARRINGS, [C.TURQUOISE]),

	createProduct(5, "Ogrlica", "necklace - black-green-turquoise.jpg", 15, T.NECKLACE, [C.BLACK, C.GREEN, C.TURQUOISE]),
	createProduct(6, "Ogrlica", "necklace - black-hotpink triangles.jpg", 15, T.NECKLACE, [C.BLACK, C.PINK]),
	createProduct(12, "Ogrlica", "necklace - large 5.jpg", 15, T.NECKLACE, [C.RED, C.ORANGE, C.BLACK_WHITE_STRIPED, C.PINK]),

	createProduct(13, "Prsten", "ring - aqua-striped.jpg", 8, T.RING, [C.OTHER, C.BLACK_WHITE_STRIPED]),
	createProduct(24, "Prsten", "ring - striped mix.jpg", 8, T.RING, [C.BLACK_WHITE_STRIPED, C.OTHER]),
	createProduct(26, "Prsten", "ring - turquoise-purple.jpg", 8, T.RING, [C.TURQUOISE, C.PURPLE]),
];

// prettier-ignore
export const allProducts: Product[] = [
	...featuredProducts,
	createProduct(2, "Naušnice", "earrings - black-pink.jpg", 10, T.EARRINGS, [C.BLACK, C.PINK]),
	createProduct(3, "Naušnice", "earrings - red-orange.jpg", 10, T.EARRINGS, [C.RED, C.ORANGE]),

	createProduct(7, "Ogrlica", "necklace - black-turquoise triangles.jpg", 15, T.NECKLACE, [C.BLACK, C.TURQUOISE]),
	createProduct(8, "Ogrlica", "necklace - large 1.jpg", 15, T.NECKLACE, [C.YELLOW, C.TURQUOISE, C.OTHER, C.BLACK, C.BLACK_WHITE_STRIPED]),
	createProduct(9, "Ogrlica", "necklace - large 2.jpg", 15, T.NECKLACE, [C.YELLOW, C.OTHER, C.TURQUOISE, C.PINK, C.BLACK]),
	createProduct(10, "Ogrlica", "necklace - large 3.jpg", 15, T.NECKLACE, [C.BLACK, C.OTHER, C.BLACK_WHITE_STRIPED]),
	createProduct(11, "Ogrlica", "necklace - large 4.jpg", 15, T.NECKLACE, [C.BLACK, C.OTHER, C.GREEN, C.YELLOW, C.TURQUOISE]),

	createProduct(14, "Prsten", "ring - black-blues.jpg", 8, T.RING, [C.BLACK, C.BLUE, C.TURQUOISE, C.PURPLE]),
	createProduct(15, "Prsten", "ring - blue-purple.jpg", 8, T.RING, [C.BLUE, C.PURPLE]),
	createProduct(16, "Prsten", "ring - blues.jpg", 8, T.RING, [C.BLUE]),
	//createProduct(17, "Prsten", "ring - blues 2.jpg", 8, T.RING, [C.BLUE, C.TURQUIOSE]), // bad picture
	createProduct(18, "Prsten", "ring - green-striped.jpg", 8, T.RING, [C.GREEN, C.BLACK_WHITE_STRIPED]),
	//createProduct(19, "Prsten", "ring - green-striped 2.jpg", 8, T.RING, [C.GREEN, C.BLACK_WHITE_STRIPED]), // same as above
	createProduct(20, "Prsten", "ring - green-turquoise-striped.jpg", 8, T.RING, [C.GREEN, C.TURQUOISE, C.BLACK_WHITE_STRIPED]),
	createProduct(21, "Prsten", "ring - green-turquoise.jpg", 8, T.RING, [C.GREEN, C.TURQUOISE]),
	//createProduct(22, "Prsten", "ring - pink-yellow-beige-blue.jpg", 8, T.RING, [C.GREEN, C.TURQUIOSE]), // two items
	createProduct(23, "Prsten", "ring - red-pink.jpg", 8, T.RING, [C.RED, C.PINK]),
	createProduct(25, "Prsten", "ring - turquoise-black.jpg", 8, T.RING, [C.TURQUOISE, C.BLACK]),
	// createProduct(27, "Ogrlica", "necklace - warm striped mix.jpg", 8, T.NECKLACE, [C.RED, C.ORANGE, C.PINK, C.BLACK_WHITE_STRIPED]), // bad picture
];
