import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { deepOrange, red, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '60px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        // primary: {
        //   // main: '#000'
        // }
      }
    }
  }
  // ...other properties
})
export default theme