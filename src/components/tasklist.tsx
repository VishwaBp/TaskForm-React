import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {deleteTask} from "../store/actions";

/*const tasks = [
    {
        task : 1, title:'task1', description:'description1' ,due_date:'may1', status: 'pending'

    },
    {
        task : 2, title:'task2', description:'description2' ,due_date:'may1', status: 'pending'

    },
    {
        task : 3, title:'task3', description:'description3' ,due_date:'may1', status: 'pending'

    },
    {
        task : 4, title:'task4', description:'description4' ,due_date:'may1', status: 'pending'

    }
]*/

const TaskHeader =["task","title","description","due_date","status"]

function TaskList(){
    // return (<div>
    //     <h2>taskList</h2>
    //     <table>
    //         <thead>
    //         <tr>
    //             <th>
    //                 {
    //                     TaskHeader.map( task =>(<th>{task}</th>) )
    //                 }
    //         </th>
    //         </tr>
    //         </thead>
    //
    //         <tbody>
    //         {
    //             tasks.map(task =>(
    //                 <tr>
    //                     <td>{task.task}</td>
    //                     <td>{task.title}</td>
    //                     <td>{task.description}</td>
    //                     <td>{task.due_date}</td>
    //                     <td>{task.status}</td>
    //                 </tr>
    //             ))
    //         }
    //         </tbody>
    //     </table>
    // </div>)

    const tasks = useSelector((state: { data:any[] })=>state.data)
    debugger;
    const navigate  = useNavigate();
    const dispatch = useDispatch()

    const navigateToAddTask = ()=>{
        navigate("/entry")
    }
    const deleteTaskItem = (e:any) => {
        dispatch(deleteTask(e))
    }

    const EditTask = (e:any) => {
       navigate(`/edit/${e.id}`)
        // navigate("/edit",{:{id:e.id}})
    }
    return (
<div>
        <Button onClick={navigateToAddTask} variant="contained">Add Task</Button >

<TableContainer component={Paper}>
    <Table sx = {{minWidth:60}} aria-label="simple Table"></Table>
    <TableHead>
        <TableRow>

            <TableCell align="right">TaskName</TableCell>
            <TableCell align="right">Description&nbsp;(g)</TableCell>
            <TableCell align="right">due_date&nbsp;(g)</TableCell>
            <TableCell align="right">status&nbsp;(g)</TableCell>
            <TableCell align="right">Actions</TableCell>

        </TableRow>
    </TableHead>
    <TableBody>
        {tasks.map((row)=>
        <TableRow key ={row.id}>
            <TableCell align = "right">{row.name}</TableCell>
            <TableCell align = "right">{row.description}</TableCell>
            <TableCell align = "right">{row.due_date}</TableCell>
            <TableCell align = "right">{row.status}</TableCell>
            <TableCell align = "right">
                <Button variant="contained" onClick={() => EditTask(row) }>
                    Edit
                </Button>

                <Button variant="contained" onClick={() => deleteTaskItem(row) }>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
            ) }
    </TableBody>
</TableContainer>
</div>
    )
}

export default TaskList;