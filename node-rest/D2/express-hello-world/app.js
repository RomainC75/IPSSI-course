const express = require("express");
const port = 5003;
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

const data = [
    { name: "dog", weight: 30 },
    { name: "cat", weight: 10 },
    { name: "human", weight: 68 },
];

app.use((req, res, next) => {
    console.log("==>", req.url);
    console.log(path.join(__dirname, "public"));
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/home", (req, res, next) => {
  console.log("==>query :", req.query);
  const found = data.find((el) => el.name === req.query.name);
  console.log("found : ", found);
  if (found) {
    return res.render("index", { name: req.query.name, weight: found.weight });
  }
  next("not found");
});

app.get('/signup',(req,res, next)=>{
    res.render("signup")
})
app.post('/signup',(req,res,next)=>{
    console.log('body : ', req.body)
    res.status(201).json({message:"user created"})
})


app.use((err, req, res, next) => {
  res.status(400).json({ message: err });
});

app.listen(port, () => {
  console.log(`==> server launched on port ${port}`);
});
