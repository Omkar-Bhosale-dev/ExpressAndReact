var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var fs=require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var array=new Array();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/',function(req,res){
    res.send("Hello Pune");
   
});
app.get('/jsondata',function(req,res){
    res.json({name:"Omkar Bhosale",age:23,Subjects:['Maths','Science','Social Sciences']});
    console.log({name:"Omkar Bhosale",age:23,Subjects:['Maths','Science','Social Sciences']});
});
app.post('/insertData',function(req,res){
    const name=req.body.username;
    const address=req.body.useraddress;
    let myjson={username:name,useraddress:address};
    array.push(myjson);
    console.log(array);
    let datavalue=fs.readFileSync('mydata.json');
    let filedata=JSON.parse(datavalue);
console.log(filedata);
filedata.push(myjson);
console.log(filedata);
let finaldata=JSON.stringify(filedata);
fs.writeFile('mydata.json',finaldata,function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Data added successfully");
    }

})
  
   
})
app.get('/getData',function(req,res){
    res.send(array);
})
app.listen(7500,function(){
    console.log("Hello");
})