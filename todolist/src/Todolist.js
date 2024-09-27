import React, { useState } from 'react'

function ToDoList(){

        const [tasks, setTasks] = useState(["Eat breakfast", "Kiss Salama", "Take a shower"]);
        const [newTask, setNewTask] = useState("");


        function handleNewInput(event){
            setNewTask(event.target.value);

        }

        function handleAddTask(){
           
            // setNewTask([...tasks, newTask]);
            // setNewTask("");
           
            // setNewTask(t => [...t, newTask]);
            // setNewTask("");

            if (newTask.trim() !== "") {
                setTasks(t => [...t, newTask]);
                setNewTask("");
            }else {
               alert("Please enter a valid task");
            }

            // if (newTask.trim() !== "") {
            //     setTasks([...tasks, newTask]);
            //     setNewTask("");
            // } else {
            //     alert("Please enter a valid task");
            // }         
            

        }

        function handleDeleteTask(index){

        }
        function handleMoveTaskUp(index){

        }

        function handleMoveTaskDown(index){

        }

        return(
        <div className= "to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a new Task..."
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
                        <span className="text" >{task}</span>
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