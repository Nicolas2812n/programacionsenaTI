const express = require('express'); 
const mysql2 = require('mysql2');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// === htpp ===
app.get('/:name/:id', (req, res) =>{
    const{ name,id }= req.params
    res.send (`${name}: ${id}`);
});

app.post('/', (req, res) =>{
    const { email, password } = req.body;
    res.send(`${email}: ${password}`);
    res.send('peticion POST')
});

app.put('/', (req, res) =>{
    res.send ('peticion PUT');
});

app.delete('/', (req, res) =>{
    res.send ('peticion DELETE');
});

// === db ===
const connection = mysql2.createConnection({
    host:'localhost',
    user: 'root',
    password:'toor',
    database: 'tutorial',
});

connection.connect((err)=>{
    if(err) throw err
    console.log('BD conectada');
});

app.listen(3000, () => {
    console.log ('servidor encendido');
});