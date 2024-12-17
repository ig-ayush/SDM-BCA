import React, { useState } from 'react'
import { Box, Paper, Grid2, Typography } from '@mui/material'
import InsertForm from './InsertForm'
import List from './List'
import { Note } from '@mui/icons-material';
export default function Home() {
    let initialValue;
    if (localStorage.getItem('notes') == null) {
        initialValue = [];
    } else {
        initialValue = JSON.parse(localStorage.getItem('notes'));
    };

    const [notes, setNotes] = useState(initialValue);
    const deletNote = (id) =>{
        let remainNodes = notes.filter((item)=>item.id!=id); 
        localStorage.setItem('notes',JSON.stringify(remainNodes));
        setNotes(remainNodes);
    };
    const strikNote =(node) =>{
        console.log(node)
        let status;
        if (node.completed) {
         status = false;
        } else {
            status = true;
        }
        let modififNote = {...node,completed:status};
        console.log(modififNote)
        let noteIndex = notes.findIndex((it)=>it.id == node.id )
        console.log(noteIndex)
        let modifiedCompletNode = [...notes];
        modifiedCompletNode.splice(noteIndex,1,modififNote)
        localStorage.getItem('notes',JSON.stringify(modifiedCompletNode));
        setNotes(modifiedCompletNode);
    }
    return (
        <div>
            <Box sx={{
                height: '100vh',
                backgroundColor: 'orange',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Paper sx={{
                    p: 2
                }}>
                    <Box>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12 }}>
                                <Typography sx={{
                                    fontWeight: 'bolder',
                                    textTransform: 'uppercase',
                                    fontSize: '1.5rem',
                                    color: 'orange',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    to do list
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <InsertForm notes={notes} setNotes={setNotes} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <Box sx={{maxHeight:'40vh', overflow:'auto'}}>
                                    {notes.length > 0?
                                    notes.map((note,index)=>(
                                    <List key={index} note={note} deletNote = {deletNote} strikNote = {strikNote}/>
                                )):(

                                    <Box sx={{
                                        p: 2,
                                    }
                                    }>
                
                                        <Typography sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            color: 'text.secondary'
                                        }}>
                                            No notes found
                                        </Typography>
                                    </Box>
                                )}
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                   

                </Paper>
            </Box>
        </div>
    )
}
