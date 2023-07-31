import { Card as MuiCard } from '@mui/material/'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ForumIcon from '@mui/icons-material/Forum';
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Card(props) {
  if (props.temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': {p : 1.5 }}}>
          <Typography> Card Test 01 </Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1690484814049-2ab2002b0dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': {p : 1.5 }}}>
        <Typography> Mernstack Web </Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px'}}>
        <Button size="small" startIcon={ <GroupIcon /> }>20</Button>
        <Button size="small" startIcon={ <ForumIcon /> }>15</Button>
        <Button size="small" startIcon={ <AttachmentIcon /> }>10</Button> 
      </CardActions>
    </MuiCard>
  )
}

export default Card