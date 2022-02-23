const express = require('express');
const path=require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn")
const port = process.env.PORT || 8000;
const Register=require("./modules/register");
const { Console } = require('console');
const { urlencoded } = require('express');

const static_path=path.join(__dirname,"../templates")
const templates_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))

app.set("view engine","hbs")
app.set("views",templates_path)
hbs.registerPartials(partials_path)

app.get('/', (req, res) => {
    res.render("index")
});

app.get('/login', (req,res) =>{
    res.render('login')
})

app.get('/signup', (req,res) =>{
    res.render('signup')
})
app.get('/subscribe', (req,res) =>{
    res.render('subscribe')
})

app.get('/contact', (req,res) =>{
    res.render('contact')
})

app.post("/register",(req,res)=>{
    try{
    const password=req.body.psw;
    const email= req.body.email;
    const repeatpsw= req.body["psw-repeat"];
    console.log(req.body)
    if(password === repeatpsw){
        const registerEmployee=new Register({
            email:req.body.email,
            username:req.body.psw,
            password:req.body["psw-repeat"],
        })
    const registered=registerEmployee.save()
    res.status(201).render("index")
    console.log(registered)
    }else{
        res.send("password is not matching")
    }
    }catch(error){
        res.status(400).send(error)
    }
})
app.post("/login",(req,res)=>{
    try{
    const username=req.body.username;
    const password=req.body["password"];
    console.log(req.body)
    if(registere.includes(username) && registere.includes(password)){
        const registerEmploye=new Register({
            username:req.body.username,
            password:req.body["password"],
        })
    const registere=registerEmploye.save()
    res.status(201).render("index")
    console.log(registere)
    }else{
        res.send("password is not matching")
    }
    }catch(error){
        res.status(400).send(error)
    }
})
app.listen(port, () => {
    console.log('server started on port no ${port}')
});



// app.post("/login",(req,res)=>{
//     try{
//     const username=req.body.username;
//     const password=req.body["password"];
//     console.log(req.body)
//     if(registere.includes(username) && registere.includes(password)){
//         // const registerEmploye=new Register({
//         //     username:req.body.username,
//         //     password:req.body["password"],
//         // })
//         console.log("Login is sucssesfully")
//     const registere=registerEmploye.save()
//     res.status(201).render("index")
//     console.log(registere)
//     }else{
//         res.send("password is not matching")
//     }
//     }catch(error){
//         res.status(400).send(error)
//     }
// })