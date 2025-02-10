const express = require('express');
const app = express();
const port = 3000;


app.get(`/`, (req, res) => {
    
res.send('try connection')


});

app.listen(port, () => {
    
    console.log(`App in esecuzione alla porta ${port}`)

})