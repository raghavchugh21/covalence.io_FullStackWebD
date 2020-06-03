var friends = ["Yash","Sarthak","Aryan","Taman","Anirudh"];
var i;
var j;
for(i=0;i<friends.length;i++){
    console.log(friends[i]+': \n');
    for(j=0;j<98;j++){
        console.log( (100-j-1)+ "lines of code in the file, "+(100-j-1)+" lines of code; "+friends[i]+ " strikes one out, clears it all out, "+(100-j-2)+" lines of code in the file");
    }
    console.log("1 line of code in the file, 1 line of code; "+ friends[i]+" strikes one out, clears it all out, no more lines of code in the file");
}