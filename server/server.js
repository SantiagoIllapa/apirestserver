require('../config/config')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.post('/postusuario', function (req, res) {
  let body=req.body;
  if(body.nombre===undefined){
    res.status(400).json({
      ok: false,
      mensaje: "Se requiere el nombre"
    })
  }else{
    res.json({
      persona:body
    });
  }
  
})
app.put('/putusuario/:id', function (req, res) {
  let id=req.params.id
  res.json({
    id:id
  })
})
app.get('/getusuario', function (req, res) {
  res.json('get Usuario')
})
app.delete('/deleteusuario', function (req, res) {
  res.json('delete Usuario')
})
app.listen(process.env.PORT,()=>{
    console.log('Escuchando por el puerto',process.env.PORT);
})