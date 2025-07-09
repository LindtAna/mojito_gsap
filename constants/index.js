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
	id: "work",
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

const mockTailLists = [
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
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};