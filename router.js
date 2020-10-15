
const express=require('express');
var router = express.Router();

router.get("/", function(req, res){
  res.send("welcome to my website :)")
});

router.get("/about", function(req, res){
  res.send("my self ashwini choudhary i am web developre")
});

router.get("/contact", function(req, res){
  res.send("<h1>contact me on this number</h1>")
});

router.get("/calculator", function(req, res){
  res.sendFile(__dirname+ "/index.html");
  
});
router.post("/calculator", function(req, res){
  console.log(req.body.v1);

  let n1 = Number(req.body.v1);
  let n2 = Number(req.body.v2);
  let sum = n1 + n2;

res.send("The sum of the two number is :"+sum);

});
router.get("/bmi", function(req, res){
  res.sendFile(__dirname+ "/bmi.html");
});

  router.post("/bmi", function(req, res){
      console.log(req.body.v1);
  
      let w1 = Number(req.body.weight);
      let h1 = Number(req.body.height);
      let bmi = w1 / (h1*h1);
  
  res.send("The bmi of your body is :"+bmi);
  
  });


module.exports=router;
