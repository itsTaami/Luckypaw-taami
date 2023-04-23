import Image from 'next/image'
import { Inter } from 'next/font/google'
import CardList from './components/cardList'
import SortList from './components/SortList'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <CardList/>
    </>
  )
}
