import TaskRows from "./TaskRows";
import "./TasksList.css";
import React from "react";

const TasksList = (props) => {
    const [tasksList] = React.useState([
        { taskName: "123", isDone: false },
        { taskName: "124", isDone: false }
    ]);
    const taskListItems = tasksList.map(task => <TaskRows task = {props.tasksList}></TaskRows>);
    return (
        <div className="container">
            <div id="tasks_header">TASKS</div>
            <ul id="nav-menu">
                {taskListItems}
            </ul>
        </div>
    )
}

export default TasksList;