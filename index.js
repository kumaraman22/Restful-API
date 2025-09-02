const express = require("express")
const users = require("./MOCK_DATA (1).json")

const app = express();
const PORT = 8000;

//Routes

app.get("/users", (res, req0) =>{ // will render only users
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get("/api/users/:id", (req, res)=>{ // will render user withr id-1
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
    return res.json(user);
});


app.get("/api/users", (req, res)=>{
    return res.json(users);
})

app.post("/api/users" , (req, res) =>{
    //Todo - Create a new users
    return res.json({status: 'pending'})
})

app.patch("/api/users/:id" , (req, res) =>{
    //Todo - Edit the user with id 1 
    return res.json({status: 'pending'})
})


app.delete("/api/users/:id" , (req, res) =>{
    //Todo - delete the user with id 1 
    return res.json({status: 'pending'})
})

/*
If we have the same route at multiple places then we can merge like this - 

app.route("api/users/:id")
  .get((req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
    return res.json(user);
    })
    .patch((req, res) =>{})
    .delete((req,res) =>{})
*/ 


app.listen(PORT, () => console.log(`Server running at port 8000`))