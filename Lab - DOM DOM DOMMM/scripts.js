window.addEventListener("DOMContentLoaded",function(){
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Add Square"));

    let arrayOfColors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    //Function to return a random element from arrayOfColors array
    function getRandomColor() {
        let randomColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
        return randomColor;
    }
    let id = 0 ;

    button.addEventListener("click",function(){
        let div = document.createElement("div");
        div.className = "black-square";
        div.style.flexWrap = "wrap";
        div.id = id;
        let divtxt = document.createTextNode(div.id.toString());
        div.addEventListener("mouseenter",function(){
            div.appendChild(divtxt);
        });
        div.addEventListener("mouseleave",function(){
            div.removeChild(divtxt);
        });
        div.addEventListener("click",function(){
            div.style.backgroundColor = getRandomColor();
        });
        div.addEventListener("dblclick",function(){
            if(div.id%2==0){
                document.body.removeChild(document.getElementById(parseInt(div.id)+1));
            }
            if(div.id%2!=0){
                document.body.removeChild(document.getElementById(parseInt(div.id)-1));
            }
        });
        document.body.appendChild(div);
        id++;
        
    });
    document.body.appendChild(button);

});