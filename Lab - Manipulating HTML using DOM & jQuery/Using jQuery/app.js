$(document).ready(function(){

    $("<button id='1'>JSbutton</button>").appendTo("body");
    $("#1").click(function(){
        console.log("This is a nice message!");
    });

    $("#txtbtn").click(function(){
        console.log($("#txtbox").val());
    });

    $("<div id = 'd1'></div>").appendTo("body");
    $("#d1").css("height","150px");
    $("#d1").css("width","150px");

    $("#d1").mouseenter(function(){
        $("#d1").css("backgroundColor","blue");
    });

    $("#d1").mouseleave(function(){
        $("#d1").css("backgroundColor","initial");
    });

    $("<p>Click to change color</p>").appendTo("body");

    let arrayOfColors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    //Function to return a random element from arrayOfColors array
    function getRandomColor() {
        let randomColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
        return randomColor;
    }

    $("p").click(function(){
        $("p").css("color",getRandomColor());
    })

    $("<div id = 'd2'></div>").appendTo("body");
    $("#d2").css("height","20px");
    
    $("<button id = 'b1'>Display Name</button>").appendTo("body");
    $("#b1").click(function(){
        $(document.createTextNode("Raghav Chugh")).appendTo("#d2");
    });

    var friends = ["Sarthak","Anirudh","Aryan","Taman","Chaitanya"];
    let i = 0; 
    $("<ul></ul>").appendTo("body");
    $("<button id = 'b2'>Reveal More Friends...</button>").appendTo("body");
    $("#b2").click(function(){
        $("<li>"+friends[i]+"</li>").appendTo("ul");
        i++;
    });
});