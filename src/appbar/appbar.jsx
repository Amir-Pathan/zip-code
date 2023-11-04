
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getDataByZipCode } from '../redux/createaction';
import { useState } from 'react';
import { LoadingData } from '../redux/createaction';


function TopAppBar(){

  const [zipCode,setZipCode] = useState('')

  const [message,setMessage] = useState('')

  const dispatch = useDispatch()

  const getDetaials=()=>{

     if(!zipCode.length){

        setMessage('Please Enter Zip-Code')

     }else{

      dispatch(LoadingData())

      dispatch(getDataByZipCode(zipCode))

      setMessage('')

     }

  }

  return(
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white',color:'black'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1}}
          >
              Zip-Code
          </Typography>
          <TextField
          variant='outlined'
          size='small'
          label='Enter Zip Code'
          type='number'
          value={zipCode}
          onChange={(e)=>setZipCode(e.target.value)}
          />
          <Button
          onClick={getDetaials}
          >Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Typography textAlign={'center'} variant='h5' color={'red'}>{message}</Typography>
    </>
  )

}

export default TopAppBar