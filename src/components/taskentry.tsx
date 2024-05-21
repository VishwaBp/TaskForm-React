import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {submitTask} from "../store/actions";

import {useNavigate, useParams} from "react-router-dom";
// import { useHistory } from 'react-router-dom';

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
    let {id} = useParams();
     const[formdata,setFormData] = useState({
         id:null,
         name:'',
         status:'',
         description:'',
         Due_date:''
     });
     const tasks = useSelector((state: { data: any[] }) => state.data)

     useEffect( () => {
         if(id){
             const data = tasks.find(item => item.id == id)
             setFormData(data);
         }
     },[])

         /*  if(id){
               const data = tasks.find(item => item.id == id)
               setFormData(data);
           }*/
    debugger;

     const handleChange = (e:any)=>{
         const{name,value } = e.target;
         setFormData({
             ...formdata,[name]:value
         });
     };
  const dispatch = useDispatch()
     const navigate  = useNavigate();
     // const history = useHistory();
const cancel = ()=> {
    navigate("/");
}
     const handleSubmit = (e:any)=>{
         e.preventDefault();
         console.log('Form Submitted',formdata);
         dispatch(submitTask(formdata))
         navigate('/')
         // history.push('/')

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
                     required
                     id="outlined-required"
                     label="Required"
                     name = "Due Date"
                     value = {formdata.Due_date}
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

                 <Button type = "submit" variant="contained">Submit</Button >
                 <Button onClick={cancel} variant="contained">Cancel</Button >

             </Stack>
         </Box>
         </Container>)

 }

 export default TaskEntry;


