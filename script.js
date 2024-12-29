//your code here!

let item=document.getElementById("infi-list");
item.innerHTML="<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li><li>Item 10</li>"

let counter = 11; // Start from Item 11
item.addEventListener("mousedown", function(e) {
    for (let i = 0; i < 2; i++) { // Add 2 items on each click
        const li = document.createElement("li");
        li.textContent = `Item ${counter++}`;
        item.appendChild(li);
    }
});