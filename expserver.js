const express = require("express");
const bodyParser = require('body-parser');

const app = express();



app.use(bodyParser.urlencoded({extended:true}));
const path = require('path');
const { SSL_OP_NO_TLSv1_2 } = require("constants");



//
const router=require('./router')
app.use('/',router);
app.use('/about',router);
app.use('/contact',router);
app.use('/calculator',router);
app.use('/bmi',router);




/*app.get("/", function(req, res){
    res.send("welcome to my website :)")
});

app.get("/about", function(req, res){
    res.send("my self ashwini choudhary i am web developre")
});

app.get("/contact", function(req, res){
    res.send("<h1>contact me on this number</h1>")
});

app.get("/calculator", function(req, res){
    res.sendFile(__dirname+ "/index.html");
    
});
app.post("/calculator", function(req, res){
    console.log(req.body.v1);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;

res.send("The sum of the two number is :"+sum);

});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname+ "/bmi.html");
});

    app.post("/bmi", function(req, res){
        console.log(req.body.v1);
    
        let w1 = Number(req.body.weight);
        let h1 = Number(req.body.height);
        let bmi = w1 / (h1*h1);
    
    res.send("The bmi of your body is :"+bmi);
    
    });*/



app.listen(3000, function(req, res){
    console.log("server is running at port no. 3000");
});