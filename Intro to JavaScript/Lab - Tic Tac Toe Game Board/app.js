let cells = document.querySelectorAll('.row > div');
let head = document.querySelector('h2');
console.log(cells);
for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click',cellClicked );
}

var x=0;
var win=false;

function cellClicked(){
    if(x%2==0){
        event.target.textContent = 'X';
    }
    else{
        event.target.textContent = 'O';
    }
    x++;
    if((cells[0].textContent=='X'&&cells[1].textContent=='X'&&cells[2].textContent=='X')||(cells[3].textContent=='X'&&cells[4].textContent=='X'&&cells[5].textContent=='X')||(cells[6].textContent=='X'&&cells[7].textContent=="X"&&cells[8].textContent=='X')||(cells[2].textContent=='X'&&cells[5].textContent=='X'&&cells[8].textContent=='X')||(cells[1].textContent=='X'&&cells[4].textContent=='X'&&cells[7].textContent=='X')||(cells[0].textContent=='X'&&cells[3].textContent=="X"&&cells[6].textContent=='X')||(cells[0].textContent=='X'&&cells[4].textContent=='X'&&cells[8].textContent=='X')||(cells[2].textContent=='X'&&cells[4].textContent=='X'&&cells[6].textContent=='X')){
        head.textContent="X wins!";
        win=true;
    }
    else if((cells[0].textContent=='O'&&cells[1].textContent=='O'&&cells[2].textContent=='O')||(cells[3].textContent=='O'&&cells[4].textContent=='O'&&cells[5].textContent=='O')||(cells[6].textContent=='O'&&cells[7].textContent=='O'&&cells[8].textContent=='O')||(cells[0].textContent=='O'&&cells[4].textContent=='O'&&cells[8].textContent=="O")||(cells[2].textContent=='O'&&cells[4].textContent=='O'&&cells[6].textContent=='O')||(cells[2].textContent=='O'&&cells[5].textContent=='O'&&cells[8].textContent=='O')||(cells[1].textContent=='O'&&cells[4].textContent=='O'&&cells[7].textContent=='O')||(cells[0].textContent=='O'&&cells[3].textContent=='O'&&cells[6].textContent=='O')){
        head.textContent="O wins!";
        win=true;
    }
    if(x==9&&win==false)
    {
        head.textContent="It's a Draw!";          
    }
}







