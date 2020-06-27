let path = require('path');
let fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get("/formsubmissions", (req,res)=>{
    fs.readFile(path.join(__dirname, '../form-submissions.json'),(err,data) =>{
        let info = JSON.parse(data);
        info.body.forEach( sub =>{
        res.write(` Name : ${sub.name} \n Answer : ${sub.answer}, \n`);});
    })
})

app.use(express.static(path.join(__dirname, '../public')));

let submission = {'body' : []}
app.post("/formsubmissions", (req, res) => {
    submission.body.push( 
    {'name' : req.body.name,
     'answer': req.body.answer}
    )
    fs.writeFileSync(path.join(__dirname,'../form-submissions.json'),JSON.stringify(submission));
    res.send("Thanks for your response!");
});

app.listen(3000);