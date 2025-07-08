import type { AppProps } from "next/app";
import '@/styles/globals.css'
import AppShell from "./components/layouts/App";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
      <footer>Footer</footer>
    </AppShell>
  )
}
