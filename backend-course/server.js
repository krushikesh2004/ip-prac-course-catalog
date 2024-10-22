const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const coursesData = [
    {title: "Coding", description: "Good classes Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ullam. Officia sed odit unde optio quae quisquam, ab ratione animi. Mollitia, sunt fuga. Quaerat at deleniti dolorem quisquam cupiditate, fugiat earum, autem quia atque voluptate magnam unde? Hic corrupti consectetur incidunt doloremque est beatae non!"},
    {title: "Cooking", description: "Teaches all kind of baking Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ullam. Officia sed odit unde optio quae quisquam, ab ratione animi. Mollitia, sunt fuga. Quaerat at deleniti dolorem quisquam cupiditate, fugiat earum, autem quia atque voluptate magnam unde? Hic corrupti consectetur incidunt doloremque est beatae non!"},
    {title: "Fishing", description: "We even catched a shark Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ullam. Officia sed odit unde optio quae quisquam, ab ratione animi. Mollitia, sunt fuga. Quaerat at deleniti dolorem quisquam cupiditate, fugiat earum, autem quia atque voluptate magnam unde? Hic corrupti consectetur incidunt doloremque est beatae non!"},
    {title: "Dancing", description: "Hip-Hop,Disco,traditonal all forms are thaught... Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ullam. Officia sed odit unde optio quae quisquam, ab ratione animi. Mollitia, sunt fuga. Quaerat at deleniti dolorem quisquam cupiditate, fugiat earum, autem quia atque voluptate magnam unde? Hic corrupti consectetur incidunt doloremque est beatae non!"},
  ];
  
  
  app.get("/api/getter", (req, res) => {
    res.json(coursesData);
  });
  
  app.post("/api/poster", (req, res) => {
    const formData = req.body;
    console.log("Recieved inquiry:", formData);
    res.json({message: "Feedback Recieved"});
  });

  app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
  });