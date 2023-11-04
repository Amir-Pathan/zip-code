import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { getDataByZipCode } from "../redux/createaction"
import { useEffect } from "react"
import { Box, CircularProgress, Paper, Typography } from "@mui/material"
import Container from "@mui/material/Container"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function PlaceDetails(){

  const state= useSelector((state)=>state)

  useEffect(()=>{

    console.log(state);

  },[state])

  return(
    <>
    {
      state.isLoading?
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'200px'}}>
        <CircularProgress/>
      </Box>
      :
      state.error.length>0?
        <Typography textAlign={'center'} color="red">{state.error}</Typography>
      :state.data.country?<Container sx={{marginTop:'15px'}}>
        <Paper>
        <Typography variant="h5">Zip Code Details :</Typography>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
          <Typography variant="h6">Country : {state.data.country}</Typography>
          <Typography variant="h6">post code : {state.data['post code']}</Typography>
          <Typography variant="h6">Country Abbreviation: {state.data['country abbreviation']}</Typography>
        </Box>
        <Paper>
          <Typography variant="h6" textAlign={'center'}>Places</Typography>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Place Name</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">State Abbreviation</TableCell>
            <TableCell align="right">Longtitude</TableCell>
            <TableCell align="right">Latitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.data.places.map((place) => (
            <TableRow
              key={place['place name']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {place['place name']}
              </TableCell>
              <TableCell align="right">{place.state}</TableCell>
              <TableCell align="right">{place['state abbreviation']}</TableCell>
              <TableCell align="right">{place.longitude}</TableCell>
              <TableCell align="right">{place.latitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
        </Paper>
      </Container>:null
    }
    </>
  )

}

export default PlaceDetails