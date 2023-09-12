import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';

function BoardContent({board}) { 

  const pointerSensor = useSensor(PointerSensor, {
    //Yêu cầu con chuột di chuyển 10px trước khi active
    activationConstraint: {
      distance: 10
    },
  })
  const mouseSensor = useSensor(MouseSensor, {
    //Yêu cầu con chuột di chuyển 10px trước khi active
    activationConstraint: {
      distance: 10
    },
  })
  const touchSensor = useSensor(TouchSensor, {
    //Nhấn giữ khoảng 250 và dung sai 5px
    activationConstraint: {
      delay: 250,
      tolerance: 500
    }
  })
  
  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    const {active, over} = event

    //Nếu không tồn tại over thì return
    if(!over) return

    if(active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      /**
       * Tìm code arrayMove tại dnd-kit/packages/sortable/src/utilities/arrayMove.ts
       */
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          padding: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent