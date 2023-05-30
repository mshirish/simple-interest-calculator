import logo from './logo.svg';
import './index.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';

const App = () => {
 const[p, setP] = useState(0)
 const[t, setT] = useState(0)
 const[r, setR] = useState(0)
 const[si, setSi] = useState(0)
 const CalculateInterest = () => {
  setSi((p*t*r)/100)
 }
  return (
    <div className = 'div'>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest Calculator
          </Typography>
        
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField onChange = {(event) => setP(event.target.value)} id="outlined-basic" label="Enter Principal" variant="outlined" /><br></br><br></br>
      <TextField onChange = {(event) => setT(event.target.value)} id="outlined-basic" label="Enter Time" variant="outlined" /><br></br><br></br>
      <TextField onChange = {(event) => setR(event.target.value)} id="outlined-basic" label="Enter Rate of Interest" variant="outlined" />
      <br></br>
      <br></br>

      <Button onClick = {()=> CalculateInterest()} variant="contained">Calculate</Button>
      <Typography variant="h6" gutterBottom>
        Simple Interest is: {si}
      </Typography>
    </div>
  );
}

export default App;
