const express = require('express'); 

const app = express();

app.get('/:id', (req, res) =>{
    const{ id }= req.params
    res.send (`peticion GET ${id}`);
});

app.post('/', (req, res) =>{
    res.send('peticion POST')
});

app.put('/', (req, res) =>{
    res.send ('peticion PUT');
});

app.delete('/', (req, res) =>{
    res.send ('peticion DELETE');
});

app.listen(3000, () => {
    console.log ('servidor encendido');
});