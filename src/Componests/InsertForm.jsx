import React from 'react'
import { Box, Button, Grid2, TextField } from '@mui/material'
import { useState } from 'react'
export default function InsertForm({notes,setNotes}) { 
    const [note, Setnote] = useState('');
    const [noteErr,setNoteErr] = useState(null);
    const handleChange = (event) => {

        Setnote(event.target.value);
    };
    const handleSubmit = () =>{
        if(note == ''){
            setNoteErr('Enter the note ');
        }else{
            // console.log(notes);
            let noteId = notes.length == 0 ? 1 : notes[notes.length - 1].id+1;
            let fullNote = { id:noteId,title: note,completed:false};
            let updatedNoteData = [...notes,fullNote];
            console.log(updatedNoteData);
            localStorage.setItem('notes',JSON.stringify(updatedNoteData))
            setNotes(updatedNoteData);
            Setnote('')
        }
    }
    return (
        <div>
            <Box>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 10 }}>
                        <TextField
                            value={note}
                            onChange={handleChange}
                            fullWidth
                            label="Enter the title"
                            placeholder='Enter note here'
                            helperText= {noteErr && noteErr }
                            error={!!noteErr}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 2 }}>
                        <Button variant='contained' color='primary' fullWidth
                            onClick={handleSubmit}
                            sx={{ p: 2 }}
                        >
                            ADD
                        </Button>
                    </Grid2>

                </Grid2>
            </Box>
        </div>
    )
}
