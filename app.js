const express = require ("express");
const session = require("express-session");
const hbs = require("hbs");


const port = 5003;

const app = express();

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")


// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));

app.use(require("./router/router"));


app.get('/', (req, res) =>{
    res.render('productos');
})




app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
});