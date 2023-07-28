import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#E65F2B',
          contrastText: '#fff'
        },
        secondary: {
          main: '#F2EAE5'
        }
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