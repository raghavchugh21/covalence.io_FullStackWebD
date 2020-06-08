$("document").ready(function(){
    for(var i =1;i<=100;i++)
    {
        $("<h3 id='"+i.toString()+"'>Accusation "+i.toString()+"</h3>").appendTo("body");
    }
    var friends= ["Sarthak","Aryan","Taman","Anirudh","Chaitanya"];
    var locations = ["Garden","Pool","Kitchen","Dining Room","Drawing Room","Bathroom","Bedroom","Study Room","Balcony","Lawn"];
    var weapons = ['A-bomb','ammo','ammunition','armaments','arms','arrow','assault rifle','atom bomb','atomic bomb', 'cannon','automatic rifle','axe','ballista','ballistic missile','bat','baton','battle axe',"bayonet","gun","knife"]

    for(var i =1;i<=100;i++)
    $("#"+i.toString()).click(function accuseAlert(){
        alert("Accusation "+this.id+" : I accuse "+friends[this.id%5]+", with the "+ weapons[this.id%20]+" in the "+locations[this.id%10]+"!");
    });
    
 
});