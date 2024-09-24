import React, { useState } from 'react'

function ToDoList(){

        const [tasks, setTasks] = useState(["Eat breakfast", "Kiss Salama", "Take a shower"]);
        const [newTask, setNewTask] = useState("");


        function handleNewInput(event){

        }

        function handleAddTask(){

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