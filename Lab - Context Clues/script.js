$("document").ready(function(){
    var friends= ["Sarthak","Aryan","Taman","Anirudh","Chaitanya"];
    var locations = ["Garden","Pool","Kitchen","Dining Room","Drawing Room","Bathroom","Bedroom","Study Room","Balcony","Lawn"];
    var weapons = ['A-bomb','ammo','ammunition','armaments','arms','arrow','assault rifle','atom bomb','atomic bomb', 'cannon','automatic rifle','axe','ballista','ballistic missile','bat','baton','battle axe',"bayonet","gun","knife"];

    function accuseAlert(x){
        alert("Accusation "+x+" : I accuse "+friends[x%5]+", with the "+ weapons[x%20]+" in the "+locations[x%10]+"!");
    };

    for(var i =1;i<=10;i++)
    {
        $("<h3 id='"+i.toString()+"'>Accusation "+i.toString()+"</h3>").appendTo("body");
        document.getElementById(i.toString()).addEventListener("click",accuseAlert.bind(this, i-1));
    }

 
});