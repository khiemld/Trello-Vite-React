import { useState } from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import PostAddIcon from '@mui/icons-material/PostAdd';
function ListColumns() {
  return (
    <Box sx={{
      backgroundColor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '*::-webkit-scrollbar-track':{ m: 2 }
    }}>
      {/*List Column*/}
      <Column />
      <Column />
      {/**Box Add New Column */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          startIcon={<PostAddIcon/>}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new Column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns