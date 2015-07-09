/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : 8 Jul, 2015, 10:56:40 AM
    Author     : Avivek
*/
var records_per_page = 3, total_items = 0, current_page = 1;
var data_obj = [
    { "name":"Nithya", "age":40 },
    { "name":"Amithya", "age":35 },
    { "name":"Mrithu", "age":25 },
    { "name":"Menaka", "age":23 },
    { "name":"Priyan", "age":15 },
    { "name":"Shahid", "age":5 },
    { "name":"Brinda", "age":6 },
    { "name":"Priya", "age":32 },
    { "name":"Sneha", "age":42 },
    { "name":"Salman", "age":19 }
];
function next(){
    if(current_page < getTotalPages()){
        current_page++;
        showPage(current_page);
    }
}
function prev(){
    if(current_page > 1){
        current_page--;
        showPage(current_page);
    }
}
function check_Button_visibility(){
    var next = document.getElementById('next'),
            prev = document.getElementById('prev'),
            first = document.getElementById('first'),
            last = document.getElementById('last');
    if(current_page === 1){
        prev.disabled = true;
        first.disabled = true;
        last.disabled = false;
        next.disabled = false;
    }
    else{
        prev.disabled = false;
        first.disabled = false;
        last.disabled = false;
        next.disabled = false;        
    }
    if(current_page === getTotalPages()){
        prev.disabled = false;
        first.disabled = false;
        last.disabled = true;
        next.disabled = true;
    }
}

function showPage(page){
    var totalPage = getTotalPages(),
            content_wrapper = document.getElementsByClassName('content_wrapper'),
            temp_data = "";
    if(page > totalPage)
        current_page = totalPage;
    if(page < 1){
        current_page = 1;
    }
    content_wrapper[0].innerHTML = "";
    for(var i = ((page - 1) * records_per_page); i< (page * records_per_page); i++){
        if(data_obj[i])
            temp_data = temp_data + '<div class="row"><div class="name_area">' + data_obj[i].name +  '</div>' + '<div class="age_area">' + data_obj[i].age +  '</div></div>';
    }
    content_wrapper[0].innerHTML = temp_data;
    check_Button_visibility();
}
window.onload = function(){
    showPage(1);
}

function getTotalPages(){
    return Math.ceil(data_obj.length / records_per_page);
}

function last(){
    if(current_page < getTotalPages()){
        current_page = getTotalPages();
        showPage(current_page);
    }
}

function first(){
    if(current_page > 1){
        current_page = 1;
        showPage(current_page);
    }
}
