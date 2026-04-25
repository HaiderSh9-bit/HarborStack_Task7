require("dotenv").config();
const { crews, shifts } = require("./data");
//creating the app
const express = require("express");
const app= express();

// middlewares
app.use(express.json());

// logger 
const logger =(req,res,next)=>{
    console.log( 
        `timestamp : ${new Date().toISOString()} ,  HTTP method : ${req.method}, URL path : ${req.originalUrl} ,  client IP : ${req.ip}` )
    next();
}
app.use(logger);

//CRUD APIs
//Resource A crews

//get all
app.get("/api/v1/crews",(req,res)=>{
    return res.status(200).json({
        "message": "got all the crews successfully" ,
        "data" : crews
    })
})
// get by id
app.get("/api/v1/crews/:id",(req,res)=>{
    const id = +req.params.id;
    const crew = crews.find(c => c.id == id);
    if(crew){
    return res.status(200).json({
        "message": "got the crew successfully" ,
        "data" : crew
    })}
    return res.status(404).json({
        "message": "wrong input" ,
        "data" : null

})});

// POST create
app.post("/api/v1/crews",(req,res)=>{
    const { name , role , active } = req.body;
    const data = {  id : new Date().getTime() , name , role , active  };
    crews.push(data)
     return res.status(200).json({
         "message" : "created  new crew successfully" ,
        "data" : data}

    )
});
// PUT  /:id update
app.put("/api/v1/crews/:id",(req,res)=>{
    const id = +req.params.id;
    const crew = crews.find(c => c.id === id);
    if(!crew){
         return res.status(404).json({
        "message": "this crew does not exist" ,
        "data" : null
    })}
    const { name , role , active } = req.body;

    crew.name= name; 
    crew.role= role;
    crew.active= active;
     return res.status(200).json({
        "message": "this crew updated successfully" ,
        "data" : crew
    })
});
// DELETE /:id remove
app.delete("/api/v1/crews/:id",(req,res)=>{
    const id = +req.params.id;
    const crew = crews.find(c => c.id === id);
    if(!crew){
         return res.status(404).json({
        "message": "this crew does not exist" ,
        "data" : null
    })}
 
     crews=crews.filter(c=>c.id !=id) ;  
     res.status(204).json({
        "message": " this crew deleted successfully" ,
        "data" : null
    })
});

// Resource B  /api/v1/shifts
//get all
app.get("/api/v1/shifts",(req,res)=>{
    return res.status(200).json({
        "message": "got all the shifts successfully" ,
        "data" : shifts
    })
});
// get by id
app.get("/api/v1/shifts/:id",(req,res)=>{
    const id = +req.params.id;
    const shift = shifts.find(s => s.id == id);
    if(shift){
    return res.status(200).json({
        "message": "got the shift successfully" ,
        "data" : shift
    })}
    return res.status(404).json({
        "message": "wrong input" ,
        "data" : null

})});

// POST create
app.post("/api/v1/shifts",(req,res)=>{
    const {  crewId, berth, startsAt, endsAt  } = req.body;
    const data = {  id : new Date().getTime() , crewId, berth, startsAt, endsAt};
    shifts.push(data)
     return res.status(200).json({
         "message" : "created a new shift successfully" ,
        "data" : data }

    )
});

// PUT  /:id update
app.put("/api/v1/shifts/:id",(req,res)=>{
    const id = +req.params.id;
    const shift = shifts.find(c => c.id === id);
    if(!shift){
         return res.status(404).json({
        "message": "this shift does not exist" ,
        "data" : null
    })}
    const {  crewId, berth, startsAt, endsAt  } = req.body;
    shift.crewId = crewId;
    shift.berth = berth;
    shift.startsAt=startsAt;
    shift.endsAt= endsAt;
    
     return res.status(200).json({
        "message": "this shift updated successfully" ,
        "data" : shift
    })
});
// DELETE /:id remove
app.delete("/api/v1/shifts/:id",(req,res)=>{
    const id = +req.params.id;
    const shift= shifts.find(s => s.id === id);
    if(!shift){
         return res.status(404).json({
        "message": "this shift does not exist" ,
        "data" : null
    })}
 
      shifts= shifts.filter(s=>s.id != id) ;  
     return res.status(204).json({
        "message": " this shift deleted successfully" ,
        "data" : null
    })
});

//listening to the server
const port = process.env.PORT;
app.listen(port , ()=> {
    console.log("the server is working successfully");
})