import React from 'react'
import { Box, Checkbox, IconButton, Paper, Typography } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function ({note,deletNote,strikNote}) {
    return (
        <div>
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center'
                }}>
                    <Checkbox checked={note.completed? true: false} 
                    onChange={()=> strikNote(note)} />
                    <Typography sx={{
                        fontWeight: '600',
                        color: 'text.secondary',
                        textTransform: 'capitalize',
                        textDecoration: note.completed? "line-through":'none'
                    }}>
                        {note.title}
                    </Typography>

                </Box>
                <IconButton onClick={()=> deletNote(note.id)} color='error'>
                    <DeleteForeverIcon />
                </IconButton>
            </Paper>
        </div>
    )
}
