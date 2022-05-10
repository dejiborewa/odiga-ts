import Home from "../assets/home.png";
import Boy from "../assets/boy.png";
import Bus from "../assets/bus.png";
import Fuji from "../assets/fuji.png";
import Kyoto from "../assets/kyoto.png";
import Tokyo from "../assets/tokyo.png";
import Niigata from "../assets/niigata.png";
import Sapporo from "../assets/sapparo.png";

export const benefits = [
  {
    image: Home,
    heading: "Welcome to Odigo!",
    text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
  },
  {
    image: Boy,
    heading: "Your Personal Japan Guide",
    text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
  },
  {
    image: Bus,
    heading: "Promoting Local Businesses",
    text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
  },
];

// interface Point {
//   image: any;
//   text: string;
// }

// interface PointObj {
//   Point[];
// }

export const getInspired: PointObj = [
  {
    image: Fuji,
    text: "Mount Fuji",
  },
  {
    image: Kyoto,
    text: "Kyoto",
  },
  {
    image: Tokyo,
    text: "Tokyo",
  },
  {
    image: Niigata,
    text: "Niigata",
  },
  {
    image: Sapporo,
    text: "Sapporo",
  },
];
