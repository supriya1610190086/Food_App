const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://tiffin:tiffinseva@cluster0.spth4.mongodb.net/lunch_box?retryWrites=true&w=majority",
{useNewUrlParser:true
    }).then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})