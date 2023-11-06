import React from "react";
import $ from 'jquery';
import "./CreateTasksBar.css";

const CreateTasksBar = () => {
    const handleCreate = () => {
        $(function () {
            // capture click from button
            // add new list item to ul
            var myInput2 = $('#my-input-2').val();
            console.log(myInput2);

            var myInput = $('#my-input').val();
            console.log(myInput);

            // ammend content on ID
            $('#nav-menu').append('<div> <li>' + myInput2 + " - " + myInput + '</li>' +
                '<button class="complete_btn" id="complete_button"></button>'
                + '<button class="delete_btn" id="delete_button"></button> </div>');

            $(".delete_btn").on('click', function (e) {

                // prevent default click
                e.preventDefault();

                console.log($(this).html());

                this.parentNode.remove();
            });

            $(".complete_btn").on('click', function (e) {

                // prevent default click
                e.preventDefault();

                console.log($(this).html());

                $('li').css('background-color', '#1FF627');
                $('.delete_btn').remove();
            });
        });
    }

    return (
        <div className="CreateTasksBar">
            <div id="my_title">TO DO LIST</div>

            <div id="create_tasks_bar">
                <input type="date" id="my-input-2" />

                <input type="text" id="my-input" />

                <button id="my-button" onClick={handleCreate}>CREATE</button>
            </div>

            <div className="container">
                <div id="tasks_header">TASKS</div>
                <ul id="nav-menu">

                </ul>
            </div>
        </div>
    );
};

export default CreateTasksBar;