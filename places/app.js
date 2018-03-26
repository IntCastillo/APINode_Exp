const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hey, Sr!')
});

app.listen(3000, function(){
    console.log('Ready for new orders!')
});