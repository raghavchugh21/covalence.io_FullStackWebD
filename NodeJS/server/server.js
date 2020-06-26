let path = require('path');
let fs = require('fs');


function getchirp(user,message){
    return {user,message};
}

let array = [getchirp("Raghav","Hello"),getchirp("Tanmay","What's Up Chat?"),getchirp("Raghav","Bot Army OP"), getchirp("Tanmay","Aaj PUBG khelenge chat!"),getchirp("Raghav","Unsubscribe OP")];

var datapath = path.join(__dirname,'../chirps.json');

array.forEach( item => {fs.appendFileSync(datapath, `${JSON.stringify(item)}, /n`);})