import React from "react";
import "./CreateTasksBar.css";

const CreateTasksBar = () => {
    return (
        <div className="CreateTasksBar">
            <div id="my_title">TO DO LIST</div>

            <div id="create_tasks_bar">
                <input type="date" id="my-input-2" />

                <input type="text" id="my-input" />

                <button id="my-button">CREATE</button>
            </div>
        </div>
    );
};

export default CreateTasksBar;