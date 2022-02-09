import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
const MyList = () => {
//   const [users,setUsers] = useState([
//       {"name":"Prasad", "email":"prasad@demo.com"},
//       {"name":"Ramesh", "email":"ramesh@demo.com"},
//       {"name":"Prakash"},
//       {"name":"Jhon"}
//     ]);

const [articles,setArticles] = useState([]);

    useEffect(()=>{
        axios.get('https://inshortsapi.vercel.app/news?category=science')
        .then(res=>setArticles(res.data.data));    
    },[]);


  return (
    <List>
        {
        articles.map(article =>          
         <ListItem key={article.title}>
             
                <Typography>{article.title} </Typography>
                <br/>
                <Typography>{article.content} </Typography>
             
         </ListItem> )
         }
    </List>
  );
};

export default MyList;
