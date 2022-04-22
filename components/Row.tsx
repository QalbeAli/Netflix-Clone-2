import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { useRef } from "react"
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"

// if (rowRef.current) {
//   const { scrollLeft, clientWidth } = rowRef.current
//   const scrollTo =
//     direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
//   rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
// }

interface Props {
    title:string
    movies:Movie[]
}
export default function Row({ title, movies }: Props) {

  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const handeClick = (direction:string) => {
    setIsMoved(true)
    if(rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left' ? scrollLeft-clientWidth : scrollLeft+clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }
  // console.log(rowRef.current!.scrollLeft, rowRef.current!.clientWidth)


  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="width-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
      <div className="md: group relative -ml-2">
        <ChevronLeftIcon className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`}onClick={() => handeClick('left')} />
        <div ref={rowRef} className="flex items-center scrollbar-hide overflow-x-scroll overflow-y-hidden sapce-x-0.5  md:space-x-2.5">
            {movies.map((movie) => (
                <Thumbnail key={movie.id} movie={movie} />
            ))}
       
        </div>

        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100" onClick={() => handeClick('right')} />
      </div>
    </div>
  )
  
}