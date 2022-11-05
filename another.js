var items = document.getElementsByClassName("list-group-item");

console.log(items);
items[2].style.backgroundColor = "green";

items[0].style.fontWeight = "bold"
items[0].style.color = "red"

for(var a=0; a<items.length; a++){

    items[a].style.fontWeight = "bold"
    items[a].style.color = "red"
}