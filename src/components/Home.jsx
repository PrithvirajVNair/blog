import { TableContainer,Table, TableHead,TableCell,TableRow, TableBody, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
const Home= () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{paddingTop:"60px"}}>
        <TableContainer>
        <h2>Dashboard</h2>
            <Table>
                <TableHead>           
                <TableRow>
                  <br/> <br/>
                  <TableCell style= {{color:'blue',fontFamily:'cursive', fontSize:'20px' }}> ID</TableCell> 
                  <TableCell style= {{color:'red',fontFamily:'cursive', fontSize:'20px' }}> Title</TableCell>
              </TableRow>
                </TableHead>
                <TableBody>
                    {blogs.map((blog) => (
                    <TableRow key={blog.id}>
                    <TableCell>{blog.id}</TableCell>
                    <TableCell>{blog.title}</TableCell>
                    </TableRow>
                   ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home