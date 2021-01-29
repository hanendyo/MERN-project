const express = require('express');

const app = express();

app.use(()=>{
    console.log(`server berjalan 1`);
    console.log(`server berjalan 2`);
    console.log(`server berjalan 3`);
});

app.listen(5000);