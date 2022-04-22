import Image from "next/image"
import { useMoralis } from "react-moralis"
import { useRecoilState } from "recoil"
import { useNotification } from "web3uikit"
import { modalState, movieState } from "../atoms/modalAtom"
import { Movie } from "../typings"

interface Props {
    movie:Movie
}
export default function Thumbnail({movie}:Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const { isAuthenticated } = useMoralis()
  const dispatch = useNotification()
  const handleNewNotification = () => {
    dispatch({
        type: 'error',
        title: 'Not Authenticated',
        message: 'Please Connect Your Wallet',
        position:'bottomR'
      },
    )
  }
    return (
      <div>
        {isAuthenticated ? (
          <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            onClick={() => {
              setCurrentMovie(movie)
              setShowModal(true)
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
              }`}
              className="rounded-sm object-cover md:rounded"
              layout="fill"
            />
          </div>
        ) : (
          <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            onClick={handleNewNotification}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
              }`}
              className="rounded-sm object-cover md:rounded"
              layout="fill"
            />
          </div>
        )}
      </div>
    )
}