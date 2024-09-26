const express= require("express");
const app =express();
app.get("/",(req, res)=>{
    res,express.json([
        {
            id:1,
            name:"omi",
            age:22
        },
        {
            id:2,
            name:"amya",
            age:24
        },
        {
            id:3,
            name:"shek",
            age:25
        },
    ])
});
app.listen(5000,()=>{
    console.log("app is running on 5000 part")
})