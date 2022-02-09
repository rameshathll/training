import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

//destructutring [], {}
// numbers = [1,2,3]
// [a,b,c] = numbers
const MyButton = () => {
    const [count,setCount] = useState(10)
    // const [userName,setUserName] = useState("Ramesh")
  return <div>
      <Button variant="outlined" onClick={()=>setCount(count+10)}>{count}</Button>
  </div>;
};

export default MyButton;
