import React, { useState, useEffect } from 'react'

function ToDoList(){

        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState("");

        // Fetching tasks from the server:

        useEffect (() => {
            fetch('http://localhost:5000/tasks')
                .then(response=> response.json())
                .then(data => setTasks(data));
        }, []);

        // Handling input change
        function handleNewInput(event){
            setNewTask(event.target.value);

        }

            //Adding new task
        function handleAddTask(){
           if (newTask.trim() !== ""){
                const task = { task: newTask.trim()};

                // Send the new task to the server
                fetch('http://localhost:5000/tasks', {
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(task)
                })
                .then(response =>response.json())
                .then(data=> {
                    setTasks([...tasks, data]);
                    setNewTask("");
                });
           } else {
            alert ("Please enter a valid task");
           }
            // setNewTask([...tasks, newTask]);
            // setNewTask("");
           
            // setNewTask(t => [...t, newTask]);
            // setNewTask("");

            // if (newTask.trim() !== "") {
            //     setTasks(t => [...t, newTask]);
            //     setNewTask("");
            // }else {
            //    alert("Please enter a valid task");
            // }

            // if (newTask.trim() !== "") {
            //     setTasks([...tasks, newTask]);
            //     setNewTask("");
            // } else {
            //     alert("Please enter a valid task");
            // }         
            


        }

        // Deleting a task

        function handleDeleteTask(index){
            const taskToDelete = tasks[index];

            fetch (`http://localhost:5000/tasks/${taskToDelete.id}`,{
                method: 'DELETE'
            }).then(() => {
                const updatedTask = tasks.filter((task, i) => i !== index)
            setTasks(updatedTask);
            });

            // const updatedTask = tasks.filter((task, i) => i !== index)
            // setTasks(updatedTask);
           // setTasks(tasks.filter((task, i) => i !== index));

        }

        function handleMoveTaskUp(index){
            if (index === 0) return; // do nothing if task already 1st
            const updatedTasks = [...tasks]; // copy of task
            //updatedTasks[index, index-1] = updatedTasks[index-1, index]
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);

        }

        function handleMoveTaskDown(index){
            if (index === tasks.length-1) return; // do nothing if task already 1st
            const updatedTasks = [...tasks]; // copy of task
            //updatedTasks[index, index-1] = updatedTasks[index-1, index]
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);

        }

        return(
        <div className= "to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a new Task..."
                    value={newTask}
                    onChange={handleNewInput}/>

                    <button
                        className="add-button"
                        onClick={handleAddTask}>
                        Add    
                    </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text" >{task.task}</span>
                        <button
                            className="delete-button"
                            onClick={() => handleDeleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => handleMoveTaskUp(index)}>
                            🔼
                        </button>
                        <button
                            className="move-button"
                            onClick={() => handleMoveTaskDown(index)}>
                            🔽
                        </button>
                    </li>                
                )}
            </ol>
            
        </div>);
}

export default ToDoList