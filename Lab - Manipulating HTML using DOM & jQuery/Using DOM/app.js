document.addEventListener("DOMContentLoaded",function(){
    let button = document.createElement("button");
    button.textContent = "JSbutton";
    document.body.appendChild(button);
    button.addEventListener("click",function(){
        console.log("This is a nice message");
    });
    let txtbtn = document.getElementById("txtbtn");
    let txtbox = document.getElementById("txtbox");
    
    txtbtn.addEventListener("click",function(){
        console.log(txtbox.value);
    });

    let div = document.createElement("div");
    div.style.height = "150px";
    div.style.width = "150px";
    document.body.appendChild(div);
    div.addEventListener("mouseenter",function(){
        div.style.backgroundColor = "blue";
    });
    div.addEventListener("mouseleave",function(){
        div.style.backgroundColor = "initial";
    });

    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Click to change color"));
    document.body.appendChild(p);

    let arrayOfColors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    //Function to return a random element from arrayOfColors array
    function getRandomColor() {
        let randomColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
        return randomColor;
    }

    p.addEventListener("click",function(){
        this.style.color = getRandomColor();
    });

    let div2 = document.createElement("div");
    document.body.appendChild(div2);
    div2.style.height = "20px";
    let span = document.createElement("span");
    let name = document.createTextNode("Raghav Chugh");
    span.appendChild(name);

    let button2 = document.createElement("button");
    button2.appendChild(document.createTextNode("Display Name"));
    document.body.appendChild(button2);
    button2.addEventListener("click",function(){
        div2.appendChild(span);
    });

    let button3 = document.createElement("button");
    let ul = document.createElement("ul");
    var friends = ["Sarthak","Anirudh","Aryan","Taman","Chaitanya"];
    let i = 0; 
    button3.appendChild(document.createTextNode("Reveal More Friends..."));
    button3.style.display = "block";
    document.body.appendChild(button3);
    document.body.appendChild(ul);
    button3.addEventListener("click",function(){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(friends[i]));
        ul.appendChild(li);
        i++
    });
});