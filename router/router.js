const { Router } = require ("express");
const router = new Router();
const mysql = require ('mysql');

// Conexión a base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'productos-santy3d'
    })
    
    conn.connect((err) => {
        if (err) throw err;
        console.log('Conexión establecida...')
    });
    
    //RUTAS
    // SELECT 
    router.get('/', (req, res) => {
        let sql = "SELECT * FROM productos";
        let query = conn.query(sql, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error interno del servidor');
            }
            res.render('productos', {
                results: results
            });
        });
    });
    
// Manejo de eventos de cierre de la aplicación
process.on('SIGINT', () => {
    console.log('Cerrando conexión a la base de datos...');
    conn.end((err) => {
        if (err) console.error(err);
        process.exit(0);
    });
});

module.exports = router;