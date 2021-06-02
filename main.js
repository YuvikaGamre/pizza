menu_list_array=["Deluxe Veggie Pizza","chicken 65","paneer"];
function getmenu(){ var htmldata; htmldata = "<ol class='menulist'>" 
menu_list_array.sort(); 
for(var i=0; i<menu_list_array.length;i++){ htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>' } htmldata=htmldata+"</ol>" 
document.getElementById("display_menu").innerHTML = htmldata; }
function additem(){ 
    var htmldata; var item = document.getElementById("add_items").value; menu_list_array.push(item); menu_list_array.sort(); htmldata="<section class='cards'>" 
    for(
    var i=0;i<menu_list_array.length;i++) { htmldata=htmldata+'<div class = "cards">'+'<img src="">' + menu_list_array[i] + '</div>' } htmldata=htmldata+"</section>" 
document.getElementById("display_addedmenu").innerHTML = htmldata; }