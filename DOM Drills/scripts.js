//Functions to execute when the page loads
window.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");
    div.className = 'header-container';

    //Adding "This is an h1-6" to the div
    let h1 = document.createElement('h1');
    h1.className = 'h1';
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    div.appendChild(h1);


    let h2 = document.createElement('h2');
    h2.className = 'h2';
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    div.appendChild(h2);


    let h3 = document.createElement('h3');
    h3.className = 'h3';
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    div.appendChild(h3);


    let h4 = document.createElement('h4');
    h4.className = 'h4';
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    div.appendChild(h4);


    let h5 = document.createElement('h5');
    h5.className = 'h5';
    let h5Text = document.createTextNode('This is an h4');
    h5.appendChild(h5Text);
    div.appendChild(h5);


    let h6 = document.createElement('h6');
    h6.className = 'h6';
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    div.appendChild(h6);
    h6.className = 'h6';

    //Finally, appending the div to the body
    document.body.appendChild(div);

    //Making an array of 8 colors
    let arrayOfColors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    //Function to return a random element from arrayOfColors array
    function getRandomColor() {
        let randomColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
        return randomColor;
    }

    //Adding an Event listener to change the h1-6 colors when double-clicked!
    h1.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });
    h2.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });
    h3.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });
    h5.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });
    h6.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });

    //Creating a list element
    let ul = document.createElement("ul");
    let i = 0;

    //Appending list to div
    div.appendChild(ul);

    //Grabbing the button declared in index.html
    let button = document.getElementsByClassName("btn")[0];

    //Adding an event to append a new list item whenever the button is clicked
    button.addEventListener("click", function () {
        i++;
        let litext = document.createTextNode("This is list item " + i.toString());
        let li = document.createElement("li");
        li.appendChild(litext);
        ul.appendChild(li);

        //Adding event to change list item color whenever clicked
        li.addEventListener("click", function () {
            let randomColor = getRandomColor();
            li.style.color = randomColor;
        });
        //Adding event to remove respective list item whenever double-clicked
        li.addEventListener("dblclick", function () {
            this.remove();
        });
    });

});