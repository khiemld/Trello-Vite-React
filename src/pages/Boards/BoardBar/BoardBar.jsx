import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar( { board } ) {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
          // onClick = {()=>{}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          // onClick = {()=>{}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to drive"
          clickable
          // onClick = {()=>{}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          // onClick = {()=>{}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          // onClick = {()=>{}}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button 
          variant="outlined"
          startIcon={<PersonAddAlt1Icon/>}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',

            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type':{ bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="Khiemld">
            <Avatar alt="Khiemld" src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/349343599_285991540438620_6092466068540787800_n.jpg?stp=dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Gf6X3YirEacAX-nFwFF&_nc_ht=scontent.fdad1-4.fna&oh=00_AfD4DE0fjYsrXNhn148hRcBmaPURmmpMTKR65FiTj3EInw&oe=64CA3C73" />
          </Tooltip>
          <Tooltip title="Khiemld">
            <Avatar alt="Khiemld" src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/358461685_1485576142006409_8640242899847569730_n.jpg?stp=dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=IAyyKANUjFoAX-M-Y8j&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAcwj54BBeIRqOJiFOvoSfOtIcR8OEzZYFObMoiF1YI1g&oe=64C9DE37" />
          </Tooltip>
          <Tooltip title="Khiemld">
            <Avatar alt="Khiemld" src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/322574325_506679021569928_2926081159721175282_n.jpg?stp=c120.0.720.720a_dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=VlDS-8nNFrgAX9Wrltb&_nc_oc=AQlQedJ9WDPUAd6o1tZKAqRmctHPb8Q_as9KX8zV9RixZ3cAkFLnNWDcttREA6mk7NTOZn3DJY4ycTdO9IFrVoJ_&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAqDIntGiFvKwoYKDT8qiqXO7xbjz1jnWZx05wqJx41lQ&oe=64CAC5AD" />
          </Tooltip>
          <Tooltip title="Khiemld">
            <Avatar alt="Khiemld" src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/293733789_1250202055543820_1285322608374809116_n.jpg?stp=dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=qHMKhMmgXkcAX_Cwv4w&_nc_ht=scontent.fdad1-4.fna&oh=00_AfC0-kf2HRBVj7XxqrjbIWbpa9q8-tpXrY9vXLJHn2aiBw&oe=64C959BA" />
          </Tooltip>
          <Tooltip title="Khiemld">
            <Avatar alt="Khiemld" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/311449787_1322992958264729_6014295535805588307_n.jpg?stp=dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=fasYpXSg-fMAX8uifIa&_nc_ht=scontent.fdad2-1.fna&oh=00_AfDDxhJG7iyTfau0u9wmhr827U-709zyP_0JkwYggfC7vQ&oe=64C92D57" />
          </Tooltip>
          <Tooltip title="Khiemld">
            <Avatar alt="Khiemld" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/241046670_1064103760820318_5901211176577262848_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=hj1oXKVPtjAAX_eXhn5&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAH_fykTkZSAZvbfzL-onjA8lRWPrFKP8yIClbo25YoEw&oe=64CA1957" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar