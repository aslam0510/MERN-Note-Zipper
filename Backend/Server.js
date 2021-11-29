const express = require('express');
const dotenv = require('dotenv')
const notes = require('./data/note');



const app = express();

//config env
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
  res.send('Hyyyyyyyy')
})

app.get('/api/notes', (req,res)=>{
  res.json(notes)
})

app.get('/api/note/:id', (req,res)=>{
  const note = notes.find(note => note._id === req.params.id);
  res.send(note)
})
 

app.listen(PORT,console.log(`Server started and listening on port ${PORT}`))