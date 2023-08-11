import { v4 as uuidv4 } from "uuid";

import { BsCartCheck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiHeartCircle } from "react-icons/bi";

import cara_1 from "../assets/carousel/cara-1.jpg";

import cara_2 from "../assets/carousel/cara-2.jpg";
import cara_3 from "../assets/carousel/cara-3.jpg";
import cara_4 from "../assets/carousel/cara-4.png";
import cara_5 from "../assets/carousel/cara-5.jpg";
// todo *********** EDITORS IMAGES ***********************

import e_1 from "../assets/blog/editors/e-1.jpeg";
import e_2 from "../assets/blog/editors/e-2.jpg";
import e_3 from "../assets/blog/editors/e-3.jpeg";
import e_4 from "../assets/blog/editors/e-4.jpeg";
import e_5 from "../assets/blog/editors/e-5.jpeg";
import e_6 from "../assets/blog/editors/e-6.jpeg";
import e_7 from "../assets/blog/editors/e-7.jpg";

// todo *********** POSTS IMAGES ***********************

import b_1 from "../assets/blog/posts/b-1.jpg";
import b_2 from "../assets/blog/posts/b-2.jpg";
import b_3 from "../assets/blog/posts/b-3.jpg";
import b_4 from "../assets/blog/posts/b-4.jpg";
import b_5 from "../assets/blog/posts/b-5.png";
import b_6 from "../assets/blog/posts/b-6.png";
import b_7 from "../assets/blog/posts/b-7.jpg";
import b_8 from "../assets/blog/posts/b-8.png";
import b_9 from "../assets/blog/posts/b-9.png";

// todo *********** Reviews ***********************

import img_1 from "../assets/reviews/img-1.png";
import img_2 from "../assets/reviews/img-2.jpg";
import img_3 from "../assets/reviews/img-3.jpg";
import img_4 from "../assets/reviews/img-4.jpg";
import img_5 from "../assets/reviews/img-5.png";
import img_6 from "../assets/reviews/img-6.png";
import img_7 from "../assets/reviews/img-8.webp";

// ************** carasoul Products **********************

export const homeProducts = [
  {
    id: uuidv4(),
    product: "AS chosen by caroline Hirons",
    des: `Enjoy 25% OFF skin care authority Caroline Hirons’ cherry-picked favourites — plus, 20% OFF (almost) everything across the site.`,
    img: cara_1,
  },
  {
    id: uuidv4(),
    product: "GLOW RECIPE IS OUR BRAND OF THE MONTH",
    des: `Three fruity formulas, bursting with antioxidants and hyaluronic acid. Plus, enjoy a FREE gift with any £40 spend on the brand.
`,
    img: cara_2,
  },

  {
    id: uuidv4(),
    product: "THE SUMMER DISCOVERY KIT",
    des: `Worth over £120, our seven-piece kit packaged in a Cult Beauty pouch is curated to help you achieve luminous skin – and it’s yours for FREE when you spend £75 on SPF, body and wellbeing.`,
    img: cara_3,
  },

  {
    id: uuidv4(),
    product: "New from SuperGoop",
    des: `totally undetectable. the every. single.face. watery lotion SPF 50 offers a hydrating, non greasy finish for all skin tones and types.   `,
    img: cara_4,
  },
  {
    id: uuidv4(),
    product: "Top-TO-toe TREATMENT",
    des: `whether you are craving a limb-gilding, a faux glow, or repleniishing aftersun. we've got you covered. `,
    img: cara_5,
  },
];

// ************** Services *******************************
export const services = [
  {
    id: uuidv4(),
    service: "Delivery",
    des: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio non voluptates, ex dolorem corporis alias commodi quae eaque iusto, veritatis expedita fugiat laboriosam? Recusandae ",
    icon: <BsCartCheck />,
  },
  {
    id: uuidv4(),
    service: "Products",
    des: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio non voluptates, ex dolorem corporis alias commodi quae eaque iusto, veritatis expedita fugiat laboriosam? Recusandae ",
    icon: <RiSecurePaymentLine />,
  },
  {
    id: uuidv4(),
    service: "Payments",
    des: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio non voluptates, ex dolorem corporis alias commodi quae eaque iusto, veritatis expedita fugiat laboriosam? Recusandae ",
    icon: <BiHeartCircle />,
  },
];

// ************** editors **********************************

export const editors = [
  {
    id: uuidv4(),
    name: "NIALL TAYLOR",
    role: "copy Assistant",
    img: e_1,
  },
  {
    id: uuidv4(),
    name: "NASREEN OSMAN",
    role: "copy Assistant",
    img: e_2,
  },
  {
    id: uuidv4(),
    name: "CHLOE LAWRANCE",
    role: "Senior coypwriter",
    img: e_3,
  },
  {
    id: uuidv4(),
    name: "RIN TESLICA",
    role: " Junior SEO copywriter",
    img: e_4,
  },
  {
    id: uuidv4(),
    name: "VERITY DOUGLAS",
    role: " content editor",
    img: e_5,
  },

  {
    id: uuidv4(),
    name: "Bethan Robinson",
    role: "Senior coypwriter",
    img: e_6,
  },

  {
    id: uuidv4(),
    name: "Precious Sodium",
    role: "Junior coypwriter",
    img: e_7,
  },
];

// ************** posts **********************************

export const posts = [
  {
    id: uuidv4(),
    category: "BEAUTY NEWS",
    title: "cult Brand Of The Month: NARS",
    body: "Dive into the world of high-impact hues, revitalising complexion heroes and the NEW Laguna collection…",
    time: "2 years ago",
    creator: "BY Alice Barnett",
    img: b_1,
    big: true,
  },

  {
    id: uuidv4(),
    category: "NEWS",
    title: "A 101 GUIDE TO NARS",
    body: "Discover our pick of the best NARS product, from the best foundation and concealer to the best lipstick and mascara. You’re welcome, beauties!",
    time: "a year ago",
    creator: "By Cult Beauty",
    img: b_2,
    big: false,
  },
  {
    id: uuidv4(),
    category: "ASK THE EXPERTS",
    title: "THE ULTIMATE SUNSCREEN GUIDE",
    body: "What is SPF? How do you apply it? Which is the best? Discover everything you need to know about the ultimate skin care daily defence in our ultimate guide to sunscreen.",
    time: "a month ago",
    creator: "By Trifonia Asmar",
    img: b_3,
    big: false,
  },
  {
    id: uuidv4(),
    category: "BEAUTY NEWS",
    title: "AN ODE TO OUR YOUNGER SELVES AND OUR MAKE UP BAGS",
    body: "Way too much blush? Spidery lashes? We've all been there! To celebrate our 15th Birthday, we asked our content team about their make up mishaps at 15!",
    time: "a month ago",
    creator: "By Rina Teslica",
    img: b_4,
    big: false,
  },

  {
    id: uuidv4(),
    category: "ASK THE EXPERTS",
    title: "DISCOVER TEAM CULT BEAUTY’S SUMMER BODY CARE ESSENTIALS",
    body: "Whether you're craving a limb-gilding oil, a faux glow or replenishing aftersun discover our team's essential summer body must haves.",
    time: "a day ago",
    creator: "By Verity Douglas",
    img: b_5,
    big: true,
  },
  {
    id: uuidv4(),
    category: "BEAUTY NEWS",
    title: "CAN’T (RE)TOUCH THIS: NOW’S THE TIME TO STOP PURSUING PORELESSNESS",
    body: "We're on a mission to broaden what 'beauty' looks like by vowing to never retouch our in-house model imagery.",
    time: "5 days ago",
    creator: "By Verity Douglas",
    img: b_6,
    big: false,
  },
  {
    id: uuidv4(),
    category: "BEAUTY NEWS",
    title: "	MEET DR. LUKE EVANS — THE MAN BEHIND OUR MISSION",
    body: "Eager for greater transparency when it comes to the bodies we see on our screens, we caught up with Dr. Luke about his Body Image Pledge...",
    time: "5 days ago",
    creator: "By Verity Douglas",
    img: b_7,
    big: false,
  },
  {
    id: uuidv4(),
    category: "BEAUTY NEWS",
    title: "MY BODY IMAGE JOURNEY: STORIES FROM THE CULT COMMUNITY",
    body: "We spoke to members of our Cult Community on the impact social media has had on their self-esteem, and what they believe needs to change.",
    time: "5 days ago",
    creator: "By Verity Douglas",
    img: b_8,
    big: false,
  },
  {
    id: uuidv4(),
    category: "Ask the Experts",
    title: "WHICH NARS FOUNDATION IS THE ONE FOR YOU?",
    body: "We spoke to members of our Cult Community on the impact social media has had on their self-esteem, and what they believe needs to change.",
    time: "6 days ago",
    creator: "By Precious Sodimu",
    img: b_9,
    big: false,
  },
];

// ************** about **********************************

export const reviews = [
  {
    id: uuidv4(),
    rating: 5,
    comment: "fast delivery, a friendly website, and good prices",
    img: img_1,
    name: "Nancy Darson",
    date: "05 March 2023",
  },

  {
    id: uuidv4(),
    rating: 4,
    comment:
      "I have bought from Care to Beauty a few times now and cannot recommend them enough. Such great service received my orders in record time and well packed.",
    img: img_2,
    name: "Anddria Manson",
    date: "17 February 2023",
  },

  {
    id: uuidv4(),
    rating: 4,
    comment:
      "These guys can go the extra mile and be empathetic to their loyal customers. Solution oriented and great customer experience are valuable traits of their business.",
    img: img_3,
    name: "Lydia Opach",
    date: "05 June 2023",
  },
  {
    id: uuidv4(),
    rating: 4,
    comment:
      "Fresh beauty is very reliable, efficient and most importantly this is the site where you can find the most difficult products . Super love the service ,easy to use",
    img: img_4,
    name: "Anne Frank",
    date: "10 April 2023",
  },
  {
    id: uuidv4(),
    rating: 5,
    comment:
      "A legit site to order cosmetics from a wide collection. Good customer care and shipping time is perfect.",
    img: img_5,
    name: "Darcy Doje",
    date: "11 May 2023",
  },
  {
    id: uuidv4(),
    rating: 4,
    comment: "Super service Received my order in superfast time Thank you",
    img: img_6,
    name: "Fiona Amerson",
    date: "24 July 2023",
  },
  {
    id: uuidv4(),
    rating: 4,
    comment:
      "Very good products and customer service. Fast delivery and very carefully packed. I have purchased Care to beauty products many times. And always my first choice.",
    img: img_7,
    name: "Dania Limmer",
    date: "11 July 2023",
  },
];

// ****************** Brands List ****************

export const BRANDS = [
  {
    id: uuidv4(),
    brand: "almay",
  },

  {
    id: uuidv4(),
    brand: "alva",
  },

  {
    id: uuidv4(),
    brand: "anna sui",
  },

  {
    id: uuidv4(),
    brand: "annabelle",
  },
  {
    id: uuidv4(),
    brand: "benefit",
  },
  {
    id: uuidv4(),
    brand: "boosh",
  },
  {
    id: uuidv4(),
    brand: "burt's bees",
  },
  {
    id: uuidv4(),
    brand: "burt's bees",
  },
  {
    id: uuidv4(),
    brand: "maybelline",
  },
  {
    id: uuidv4(),
    brand: "green people",
  },
  {
    id: uuidv4(),
    brand: "milani",
  },

  {
    id: uuidv4(),
    brand: "sinful colours",
  },
  {
    id: uuidv4(),
    brand: "smashbox",
  },
  {
    id: uuidv4(),
    brand: "salon perfect",
  },
  {
    id: uuidv4(),
    brand: "l'oreal",
  },
  {
    id: uuidv4(),
    brand: "revlon",
  },
  {
    id: uuidv4(),
    brand: "physicians formula",
  },
  {
    id: uuidv4(),
    brand: "nyx",
  },
  {
    id: uuidv4(),
    brand: "elf",
  },
  {
    id: uuidv4(),
    brand: "stila",
  },

  {
    id: uuidv4(),
    brand: "colourpop",
  },
];

// ****************** Tags List ****************

export const TAGS = [
  {
    id: uuidv4(),
    tag: "Canadian",
  },
  {
    id: uuidv4(),
    tag: "Chemical Free",
  },
  {
    id: uuidv4(),
    tag: "CertClean",
  },
  {
    id: uuidv4(),
    tag: "Dairy Free",
  },
  {
    id: uuidv4(),
    tag: "EWG Verified",
  },
  {
    id: uuidv4(),
    tag: "EcoCert",
  },
  {
    id: uuidv4(),
    tag: "Hypoallergenic",
  },
  {
    id: uuidv4(),
    tag: "Natural",
  },
  {
    id: uuidv4(),
    tag: "Non-GMO",
  },
  {
    id: uuidv4(),
    tag: "Organic",
  },
  {
    id: uuidv4(),
    tag: "Peanut Free Product",
  },
  {
    id: uuidv4(),
    tag: "Sugar Free",
  },
  {
    id: uuidv4(),
    tag: "silicone free",
  },
  {
    id: uuidv4(),
    tag: "oil free",
  },
  {
    id: uuidv4(),
    tag: "cruelty free",
  },
];

// ****************** RATING ****************

export const RATINGS = [
  {
    id: uuidv4(),
    rating: 1,
  },
  {
    id: uuidv4(),
    rating: 2,
  },
  {
    id: uuidv4(),
    rating: 3,
  },
  {
    id: uuidv4(),
    rating: 4,
  },
  {
    id: uuidv4(),
    rating: 5,
  },
];

// ****************** Shop Products ****************

export const SHOP_PRODUCTS = [
  {
    id: uuidv4(),
    listName: "Blush",
    list: ["Powder", "Cream"],
  },
  {
    id: uuidv4(),
    listName: "Bronzer",
    list: ["Powder"],
  },
  {
    id: uuidv4(),
    listName: "Eyebrow",
    list: ["Pencil"],
  },
  {
    id: uuidv4(),
    listName: "Eyeliner",
    list: ["Pencil", "liquid", "gel", "cream"],
  },

  {
    id: uuidv4(),
    listName: "Eyeshadow",
    list: ["Pencil", "pallette", "cream"],
  },

  {
    id: uuidv4(),
    listName: "foundation",
    list: [
      "Concealer",
      "Liquid",
      "cream",
      "Contour",
      "Bb cc",
      "Mineral",
      "Powder",
      "Highlighter",
    ],
  },
  {
    id: uuidv4(),
    listName: "lip liner",
    list: ["pencil"],
  },

  {
    id: uuidv4(),
    listName: "lipstick",
    list: ["Lipstick ", "Lip gloss  ", "Liquid ", "Lip stain "],
  },
  {
    id: uuidv4(),
    listName: "Mascara",
    list: [],
  },
  {
    id: uuidv4(),
    listName: "Nail Polish",
    list: [],
  },
];
