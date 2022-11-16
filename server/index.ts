// server/index.js
 
const express = require("express");
 
const PORT = process.env.PORT || 3001;
 
const app = express();

app.get("/api", (req, res) => {
    res.json({
         content: {
            code:200,
            pageSize:10,
            pageNum:1,
            success:true,
            data:[]
         }
        });
  });
   
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });