



const express = require('express');
const app = express();


app.get("/",function(req ,res){
	res.sendFile(__dirname + "/index.html"); 
});

app.post("/",function(res,res){
	res.send("thanx");
})


app.get("/Home",function(req ,res){
	res.send('<h1>This Home</h1>'); 
});




app.get("/contact",function(req ,res){
	res.send('<h1>Please contact me 996699198fb</h1>'); 
});




app.listen(3000, function(){
console.log('The server is Running on the Port 3000');
}); 