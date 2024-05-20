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
import {useSelector} from "react-redux";

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
    return (
<TableContainer component={Paper}>
    <Table sx = {{minWidth:60}} aria-label="simple Table"></Table>
    <TableHead>
        <TableRow>
            <TableCell>TaskName</TableCell>
            <TableCell align="right">TaskTitle</TableCell>
            <TableCell align="right">Description&nbsp;(g)</TableCell>
            <TableCell align="right">due_date&nbsp;(g)</TableCell>
            <TableCell align="right">status&nbsp;(g)</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {tasks.map((row)=>
        <TableRow key ={row.task}>
            <TableCell component = "th" scope = "row">
                {row.task}
            </TableCell>
            <TableCell align = "right">{row.title}</TableCell>
            <TableCell align = "right">{row.description}</TableCell>
            <TableCell align = "right">{row.due_date}</TableCell>
            <TableCell align = "right">{row.status}</TableCell>
        </TableRow>
            ) }
    </TableBody>
</TableContainer>
    )
}

export default TaskList;