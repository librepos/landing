// Setup env variables
require('dotenv').config()
const PORT = process.env.PORT || 80

// Setup express
const express = require("express")
const app = express()
app.use(express.static("./public"))

// Setup pug
app.set("views", "./views")
app.set("view engine", "pug")

// Homepage routing
app.get("/", (req, res) => {
    res.render("index", {pageTitle: "Home"})
})

// Listen
app.listen(PORT)