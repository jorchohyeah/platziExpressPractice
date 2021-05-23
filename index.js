const express = require("express")
const path = require("path");
const app = express();
const productsRouter = require('./routes/products');
const productsApiRouter = require('./routes/api/products');

// Static es el prefijo que vamos a tener en nuestros archivos y lo va a buscar en public
app.use("/static", express.static(path.join(__dirname, "public")));

// Acá podemos ocupar el modulo nativo Path, el __dirname es la carpeta de la aplicación, y después la carpeta views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Se necesita poner que hay que poner que es un .use, porque le pasamos un router (middleware)
app.use(express.json())
app.use("/products", productsRouter)
app.use("/api/products", productsApiRouter)

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});

