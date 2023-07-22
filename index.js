import express from 'express';
import db from './config/db.js';
import usersRoutes from './routes/usersRoutes.js'
const app = express();

//habilitar req de formularios
app.use(express.urlencoded({extended: true}));

//conexion a la base de datos

try {
    await db.authenticate();
    db.sync();
    console.log('conect to waves database')
} catch (error) {
    console.log(error);
}
//Router

app.use('/api',usersRoutes);

const port = 3000;

app.listen(port,() =>{
    console.log('el servidor esta corriendo en el puerto 3000')
})