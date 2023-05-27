
import { Button, TextField } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <div style={{textAlign:'center',paddingTop:'100px'}} >
      
      <TextField variant='filled' label='Blog Title'></TextField><br/><br/>
      <TextField variant='filled' label='Description'></TextField><br/><br/>
      <TextField variant='filled' label='Author'></TextField><br/><br/>
      <Button variant="contained" color='success'>Add</Button>
    </div>
  )
}

export default AddBlog