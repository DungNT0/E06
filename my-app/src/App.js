// import logo from './logo.svg';
import './App.css';
import CreateTasksBar from './components/CreateTasks_Bar/CreateTasksBar';
import TasksList from './components/Tasks_List/TasksList';
import { BrowserRouter } from "react-router-dom";
import $ from 'jquery';
import React from 'react';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CreateTasksBar />
        <TasksList />
      </BrowserRouter>
    </div>
  );
}
$(document).ready(function () {
  console.log("jQuery loaded");
});

$(function () {
  // jQuery - $ string selector
  var myOutput2 = $('#my-output-2').html();
  console.log(myOutput2);

  // jQuery - $ string selector
  var myOutput = $('#my-output').html();
  console.log(myOutput);

  // capture click event on button one
  $('#my-button').click(function () {

    var myInput2 = $('#my-input-2').val();
    console.log(myInput2);

    $('#my-output').html(myInput2);

    var myInput = $('#my-input').val();
    console.log(myInput);

    // ammend content on ID
    $('#my-output-2').html(myInput);
    $('#my-output').html(myInput);
  });

  // capture click from button
  var count = 1;
  $('#my-button').on('click', function () {
    // add new list item to ul
    var myInput2 = $('#my-input-2').val();
    console.log(myInput2);

    var myInput = $('#my-input').val();
    console.log(myInput);

    // ammend content on ID
    $('#nav-menu').append('<div> <li>' + myInput2 + " - " + myInput + '</li>' +
      '<button class="complete_btn" id="complete_button' + count + '"></button>'
      + '<button class="delete_btn" id="delete_button' + count + '"></button> </div>');

    count++;
    $(".delete_btn").on('click mouseclick', function () {

      // prevent default click
      // event.preventDefault();

      console.log($(this).html());

      this.parentNode.remove();
    });

    $(".complete_btn").on('click mouseclick', function () {

      // prevent default click
      // event.preventDefault();

      console.log($(this).html());

      $('li').css('background-color', '#1FF627');
      $('.delete_btn').remove();
    });
  });

});
export default App;
