import express from "express";
import exphbs from "express-handlebars";
import path from 'path';

const app = express();

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: ".hbs", 
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join( "src", "views")); 

app.use(express.static(path.join( 'public'))); 

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contacts');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
    console.log(`Server is running at http://localhost:${PORT}`)
);
