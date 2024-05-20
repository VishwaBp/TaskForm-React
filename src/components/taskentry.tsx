import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {submitTask} from "../store/actions";
import {v4 as uuid}from 'uuid';
import {useNavigate} from "react-router-dom";

// const FormData = ()=>{


const Status = [
    {
        value: '0',
        label: 'Pending',
    },
    {
        value: '1',
        label: 'Completed',
    }
    ]
 function TaskEntry(){
     const[formdata,setFormData] = useState({
         id:uuid(),
             name:'',
         status:'',
     description:''
 });
     const handleChange = (e:any)=>{
         const{name,value } = e.target;
         setFormData({
             ...formdata,[name]:value
         });
     };
  const dispatch = useDispatch()
     const navigate  = useNavigate();
     const handleSubmit = (e:any)=>{
         e.preventDefault();
         console.log('Form Submitted',formdata);
         dispatch(submitTask(formdata))
         navigate('/')

     };
     return (
         <Container maxWidth= "sm">
         <Box
             onSubmit={handleSubmit}
             component="form"
             sx={{
                 '& .MuiTextField-root': { m: 1, width: '25ch' },
             }}
             noValidate
             autoComplete="off"
         >
             <div>
                 <TextField
                     required
                     id="outlined-required"
                     label="Required"
                     name = "name"
                     value = {formdata.name}
                     onChange={handleChange}
                 />
                 <TextField
                     id="outlined-multiline-static"
                     label="Multiline"
                     multiline
                     rows={4}
                     name = "description"
                     value = {formdata.description}
                     onChange={handleChange}
                 />
                 <TextField
                     id="outlined-select-Status"
                     select
                     label="Select"
                     value = {formdata.status}
                     helperText="Please update the status"
                     name = "status"
                     onChange={handleChange}
                 >
                     {Status.map((option) => (
                         <MenuItem key={option.value} value={option.value}>
                             {option.label}
                         </MenuItem>
                     ))}
                 </TextField>
                 {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                     {/*<DemoContainer components={['DatePicker']}>*/}
                     {/*    <DatePicker label="Basic date picker" />*/}
                     {/*</DemoContainer>*/}
                 {/*</LocalizationProvider>*/}

             </div>
             <Stack spacing={2} direction="row">
                 {/*<Button variant="text">Text</Button>*/}
                 <Button type = "submit" variant="contained">Submit</Button >
                 {/*<Button variant="outlined">Outlined</Button>*/}
             </Stack>
         </Box>
         </Container>)

 }

 export default TaskEntry;


