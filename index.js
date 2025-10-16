const express = require("express");
const app = express();

let books =   [
        {"author":"rishi","title":2},
        {"author":"siddhu","title":3}
    ];
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.send("The server is running")
})

app.get("/books",(req,res)=>{
  
    res.render("books.ejs",{books})
})

app.post("/books",(req,res)=>{
    const {author} = req.body
    books.push({author});
    res.redirect("/books");
})
app.listen(3000,()=>{
    console.log("the server is running")
})