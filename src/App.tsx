import React from 'react';
import TaskList from "./components/tasklist";
import logo from './logo.svg';
import './App.css';
import TaskDetailsView from "./components/taskdetailsview";
import TaskEntry from "./components/taskentry";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Tasklist from "./components/tasklist";
import Taskentry from "./components/taskentry";
import Taskdetailsview from "./components/taskdetailsview";

// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Learn
//             <TaskList/>
//             <TaskDetailsView/>
//             <TaskEntry/>
//
//
//           </a>
//         </header>
//       </div>
//   );
// }

const App:React.FC=()=>{
  return (<Router>
    <Routes>
      <Route path="/"  element={<Tasklist/>}/>
      <Route path="/entry"  element={<Taskentry/>}/>
      <Route path="/view/:id"  element={<Taskdetailsview/>}/>
    </Routes>
  </Router>)
}

export default App;
