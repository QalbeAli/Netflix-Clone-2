import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/UseAuth'
import { RecoilRoot } from 'recoil'
import { MoralisProvider } from 'react-moralis'
import { NotificationProvider } from 'web3uikit'
function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (<RecoilRoot>
      <MoralisProvider
        appId="KpLjvipnRb3kTUDINm8G3maoPVGuH36yKAoy6HiZ"
        serverUrl="https://kocwpge2dvmg.usemoralis.com:2053/server"
      >
        <NotificationProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        </NotificationProvider>
      </MoralisProvider>
    </RecoilRoot>
  )
}

export default MyApp
