const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "creating",
	title: "Creating",
 },
 {
	id: "contact",
	title: "Contact Us",
 },
];

const cocktailLists = [
 {
	name: "Campari Basil Mojito",
	country: "US",
	detail: "110 ml",
	price: "€17",
 },
 {
	name: "Pina Colada",
	country: "PU",
	detail: "115 ml",
	price: "€20",
 },
 {
	name: "Manhattan",
	country: "US",
	detail: "70 ml",
	price: "€15",
 },
 {
	name: "Old Fashioned",
	country: "US",
	detail: "50 ml",
	price: "€35",
 },
];

const mocktailLists = [
 {
	name: "Shirley Temple",
	country: "US",
	detail: "350 ml",
	price: "€10",
 },
 {
	name: "Virgin Mojito",
	country: "CU",
	detail: "400 ml",
	price: "€12",
 },
 {
	name: "Arnold Palmer",
	country: "US",
	detail: "350 ml",
	price: "€12",
 },
 {
	name: "Virgin Piña Colada",
	country: "PU",
	detail: "450 ml",
	price: "€17",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Venloer Str, Cologne, 4711 ",
 contact: {
	phone: "(0211) 123-4567",
	email: "hello@mintandlime.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "16:00pm – 01:00am" },
 { day: "Fri", time: "16:00am – 02:00am" },
 { day: "Sat", time: "17:00am – 03:00am" },
 { day: "Sun", time: "16:00am – 02:00am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Refreshing Cuban cocktail made with white rum, fresh mint, lime juice, sugar, and soda water. It's light, crisp, and perfect for hot summer days.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "Fruity twist on the classic mojito, made with raspberries, mint, lime, and rum. It's a light and vibrant drink, ideal for warm days.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Vibrant blend of floral and fruity flavors with a delicate purple hue. It combines crème de violette, vodka, and citrus for a light and elegant taste.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Tropical cocktail with a hint of citrus and herbal mint notes. The blue liqueur adds a unique color and light sweetness to the classic combination of lime and mint.",
 },
];

export {
 navLinks,
 cocktailLists,
 mocktailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};