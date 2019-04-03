var name_input = document.getElementById("name_input");
var name_display = document.getElementById("name_display");
var phone_input = document.getElementById("phone_input");
var phone_display = document.getElementById("phone_display");
var add_button = document.getElementById("add_button");
var add_screen_button = document.getElementById("add_screen_button");
var list_table = document.getElementById("list_table");
var display_screen = document.getElementById("display_screen");
var add_screen = document.getElementById("add_screen");

name_input.onkeyup = function() {
    name_display.innerText = "Name: " + name_input.value;
};

phone_input.onkeyup = function() {
    phone_display.innerText = "Phone: " + phone_input.value;
};

add_button.onclick = function() {
    if(name_input.value.trim()=="") {
        alert("Name cannot be empty");
        return;
    }
    if(phone_input.value.trim()=="") {
        alert("Phone cannot be empty");
        return;
    }
    list_table.innerHTML += "<tr><td>"+name_input.value+"</td><td>"+phone_input.value+"</td><td><button class='delete_button'>Delete</button><td></tr>";
    name_input.value = "";
    phone_input.value = "";
    name_display.innerText = "Name: ";
    phone_display.innerText = "Phone: ";
    add_screen.classList.toggle("hide");
    display_screen.classList.toggle("hide");
}

list_table.onclick = function (event) {
    if (event.target.className == "delete_button")
        event.target.parentElement.parentElement.remove();
}

document.getElementById("back_button").onclick = function() {
    name_input.value = "";
    phone_input.value = "";
    add_screen.classList.toggle("hide");
    display_screen.classList.toggle("hide");
}
add_screen_button.onclick = function() {
    add_screen.classList.toggle("hide");
    display_screen.classList.toggle("hide");
}