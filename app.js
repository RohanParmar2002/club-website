const express = require("express");
const path = require(`path`);
const hbs = require("hbs");
const app = express();
const port = 8000;
// console.log(__dirname);
const staticPath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../template/views");
const partialspath = path.join(__dirname, "../template/partials");

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath);


app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");

});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Oops page couldn't be found"
    });
});

app.listen(port, () => {
    console.log(`listening at port ${port}`);
});