const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json())

app.get("/change/:def",(req,res)=>{
    var def = req.params.def;
    // console.log(defination)
    var course = fs.readFileSync("Express.json",)
    var data = JSON.parse(course);
    for(let a = 0; a < data.length;a++){
        if(def in data[a]){
            return res.json(data[a][def])

        }
    }
});
app.put('/change/:user',(req,res)=>{
    var user=req.params.user;    
    var jsondata =fs.readFileSync('Express.json');
    var data=JSON.parse(jsondata);

    for(let a=0;a<data.length;a++){
        if(user in data[a]){
            data[a][user] = req.body.user;
            fs.writeFileSync("Express.json",(JSON.stringify(data,null,2)));
            res.json(data[a])
        }
    }
});
app.post("/append/:id", (req, res)=>{
    var userInput = readline.question("Ask your question:- ")
    var userInput = readline.question("Enter your answer:- ")
    var userInput = {
        userInput : req.body.userInput
    }
    let data = fs.readFileSync('Express.json')
    let Data = JSON.parse(data.toString())
    // var id = Data.length + 1
    Data.push(userInput)
    fs.writeFileSync("Express.json", JSON.stringify(Data,null,2));
    return res.json(Data)
});
app.listen(3000,() => {
    console.log('server is listening')
});