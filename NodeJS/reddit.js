let rp = require('request-promise');
let path = require('path');
let fs = require('fs');
fs.appendFileSync(path.join(__dirname, '/popular-articles.json'), '{"body" :[', function (err) {
    if (err) console.log(err);
}); 
let i =0;
rp('https://reddit.com/r/popular.json')
    .then(res => {
        JSON.parse(res).data.children.forEach(post => {
            i++;
            if(i==25){
                fs.appendFileSync(path.join(__dirname, '/popular-articles.json'), `${JSON.stringify({ "title": post.data.title, "url": post.data.url, "author": post.data.author })} \n`, function (err) {
                    if (err) console.log(err);
                });
                fs.appendFileSync(path.join(__dirname, '/popular-articles.json'), "] }", function (err) {
                    if (err) console.log(err);
                }); 
            }
            else
            fs.appendFileSync(path.join(__dirname, '/popular-articles.json'), `${JSON.stringify({ "title": post.data.title, "url": post.data.url, "author": post.data.author })}, \n`, function (err) {
                if (err) console.log(err);
            }); 
        });
    })
    .catch(err => {
        console.log(err);
    })
