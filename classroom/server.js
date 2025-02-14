const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require('express-session');
const flash = require("connect-flash");
app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
// const cookieParser = require("cookie-parser");

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("made-in","India",{signed: true});
//     res.send("Signed cookie send");
// });

// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("Verified");
// });

// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","Hello");
//     res.cookie("Country","India");
//     res.send("Sent you some cookies!");
// });

// app.get("/greet",(req,res)=>{
//     let {name = "anonyms"} = req.cookies; 
//     res.send(`Hi, ${name}`);
// });

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Hi,I am root!");
// });

// app.use("/users",users);
// app.use("/posts",posts);

// Express session:
const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.sucess = req.flash("sucess");
    res.locals.error = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name = "anonyms" } = req.query;
    req.session.name = name;
    if(name === "anonyms"){
        req.flash("sucess","user registered sucessfully!");
    }
    else{
        req.flash("error","Some error occured");
    }

    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("page.ejs",{name: req.session.name});
});

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count = 1;
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// });

// app.get("/test",(req,res)=>{
//     res.send("Test sucessful");
// });

app.listen(3000, () => {
    console.log("Server is listening to 3000");
});