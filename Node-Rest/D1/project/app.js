const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

const data = ["cat", "dog", "mountain"];
const queryData = [
    { name: "dog", weight: 30 },
    { name: "cat", weight: 6 },
    { name: "human", weight: 70 },
    { name: "horse", weight: 500 },
];

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res, next) => {
  console.log(req);
  res.render("index", { title: "/home", data });
});

app.get("/home/:name", (req, res, next) => {
  console.log("=> req.params", req.params);
  const selectedName = req.params.name;
  if (!data.includes(selectedName)) {
    next("name not found");
  }
  const otherNames = data.filter((name) => name !== selectedName);
  console.log("==> OtherNames : ", otherNames);
  res.render("name", { selectedName, otherNames });
});

app.get("/query", (req, res, next) => {
  console.log(req.query)
  const animalName = req.query.name
  const foundAnimal = queryData.find((animal)=>animal.name===animalName)
  if(!foundAnimal){
    // return res.status(404).json({message:"animal not found"})
    return res.render("error",{errorMessage:"animal not found"})
  }
//   res.status(200).json({ foundAnimal });
    res.render("animal",foundAnimal)
});

// signup
app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.status(201).json({data:req.body})
})


app.use((err, req, res, next) => {
  console.log("==>", err);
  res.status(400).json({ message: err });
});

app.use((req, res, next) => {
  res.status(400).json({ message: "not found" });
});

app.listen(PORT, () => {
  console.log(`==> server launched on port : ${PORT}`);
});
