import Image from "next/image";
import { Inter } from "next/font/google";
import CardList from "./components/cardList";
import SortList from "./components/SortList";
import Pagination from "./components/pagination";
import Section from "./components/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Section />
    </>
  );
}
