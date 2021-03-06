import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
      brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
    fonts: {
     heading: 'ibm-plex-mono',
     body: 'ibm-plex-mono',
   },
})


export default theme