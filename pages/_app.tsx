import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { Inter } from '@next/font/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      colorScheme: 'dark',
      fontFamily: 'Inter, serif',
    }}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
