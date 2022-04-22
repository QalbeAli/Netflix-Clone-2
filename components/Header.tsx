import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/UseAuth'
import { ConnectButton, useNotification } from 'web3uikit'
import { useMoralis } from 'react-moralis'
import { type } from 'os'

export default function Header() {

  const[isScrolled, setIsScrolled] = useState(false)
  const { logout } = useAuth()
  

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
  },[])

  
        return (
          <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
              <img
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
              />

              <ul className="hidden space-x-4 md:flex">
                <li className="headerlink">Home</li>
                <li className="headerlink">Tv Shows</li>
                <li className="headerlink">Movies</li>
                <li className="headerlink">News & Popular</li>
                <li className="headerlink">My List</li>
              </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
              <SearchIcon className="hidden h-6 w-6 sm:inline " />
              <BellIcon className="h-6 w-6 " />

              <img
                onClick={logout}
                src="https://rb.gy/g1pwyx"
                alt=""
                className="cursor-pointer rounded"
              />

              <ConnectButton />
            </div>
          </header>
        )
}