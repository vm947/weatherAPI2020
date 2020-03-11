const express = require('express');
const app = express();

const PORT = 4001;

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));


app.listen(PORT, () =>{
    console.log(`We are listening on PORT number ${PORT}`);
});