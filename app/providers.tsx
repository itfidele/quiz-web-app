// app/providers.tsx
'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}