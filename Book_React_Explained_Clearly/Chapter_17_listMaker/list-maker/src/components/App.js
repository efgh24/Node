// App.js

import React, { useState } from "react"; 
import ListMaker from "./ListMaker"; 

function App() {   
	const [task, setTask] = useState('');   
	const [tasks, setTasks] = useState([]); 

	function handleChange(e) {     
		setTask(e.target.value);   
	}
 
	function handleSubmit(e) {     
		e.preventDefault();     
		setTasks([...tasks, task]);     
		setTask('');   
	} 
	return (     
		<div>       
			<form onSubmit={handleSubmit}>         
				<h2>Enter a Task:</h2>         
				<input            
					type="text"
					value={task}            
					name="task"            
					onChange={handleChange}          
				/>         
				<button type="submit">Submit</button>       
			</form>       
			<h3>{task ? `▶ Your input is: ${task}` : "▶"}</h3>       
			<ul><ListMaker items={tasks} /></ul>     
		</div>   
	); 
}
export default App;

