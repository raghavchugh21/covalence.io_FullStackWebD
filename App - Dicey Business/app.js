$(document).ready(function(){

var arrOfDice = [];
let counter=1;
class Die{
    constructor(){
    this.div = document.createElement("div");
    this.div.className = "dice";
    this.value = Math.floor(Math.random()*6+1);
    this.div.id = arrOfDice.length+1;
    $(this.div).appendTo("body");
    $(document.createTextNode(this.value)).appendTo(this.div);
    }
    roll(){
        this.value = Math.floor(Math.random()*6+1);
        $(this.div).empty();
        $(document.createTextNode(this.value)).appendTo(this.div);
    }

}

$("#generate").click(function(){
    arrOfDice.push(new Die());
    $(`#${arrOfDice.length}`).click(function(){
         arrOfDice[this.id-1].roll();
    })
    $(`#${arrOfDice.length}`).dblclick(function(){
        arrOfDice.splice(this.id-1,1);
        this.remove();
        for(let i=0;i<arrOfDice.length;i++){
            arrOfDice[i].div.id=i+1;
        }
   })
});
$("#roll").click(function(){
    for (die of arrOfDice){
        die.roll();
    }
});

$("#sum").click(function sumDice(){
    let sum=0
    for (die of arrOfDice){
        sum+=die.value;
    }
    alert(sum);
});

});