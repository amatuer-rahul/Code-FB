import express from 'express'
import fs from 'fs';
import cors from 'cors'

const app = express()
const port = 3001


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const data = fs.readFileSync('./backend/MoviesData.json');
    res.send(data);
})


// Part of Node JS module for USER based UI
const router = express.Router();
router.get("/getAllUsers", async (req, res)=>{
    //code for creating user
    const data = fs.readFileSync('./backend/MoviesData.json');
    res.json({data});
})


router.post("/createUser", async (req, res)=>{
    //code for creating user
    const user = {name: req.body.name, email: req.body.email};
    fs.writeFileSync('./backend/Users.json', user);
    res.json({user});
})

router.put("/editUser/:id", async (req, res)=>{
    //code for creating user
    const {name, email} = req.body;
    const user = {name, email};
    const data = fs.readFileSync('./backend/Users.json');
    const newData = data.filter((d) => {return d.name !== name})
    newData.concat(user)
    fs.writeFileSync('./backend/Users.json', newData);
    res.json({newData});
})

router.delete("/deleteUser/:id", async (req, res)=>{
    //code for creating user
    const name = req.body.name;
    const data = fs.readFileSync('./backend/Users.json');
    const newData = data.filter((d) => {return d.name !== name})
    fs.writeFileSync('./backend/Users.json', newData);
    res.json({newData});
})


app.listen(port, () => {
    console.log(`App is running at ${port}`);
})
