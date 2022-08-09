const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json())

var port = process.env.PORT || 3525;

let contactos = [];

app.get('/', (req, res) =>{
    fetch('http://www.raydelto.org/agenda.php')
    .then(respuesta => respuesta.json())
    .then(datos => contactos = datos);

    const respuesta = {
        datos: contactos
    }

    res.send(respuesta)
})

app.post('/guardar', (req, res) => {
    const contacto = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    }

    contactos.push(contacto)

    const respuesta = {
        data: contacto,
        message: 'Se ha agregado el contacto correctamente'
    }

    res.send(respuesta)
})

app.listen(port, function(){
    console.log(`http://localhost:${port}`);
});