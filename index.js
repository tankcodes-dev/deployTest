const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());


app.get("/ping", (req, res) => {
    res.json({
        staus: "SUCCESS",
        msg: "Pong"
    });
});

app.all("/", (req, res) => {
    res.redirect("/ping")
})

app.listen(PORT, (e) => {
	console.log(`Server started at port: ${PORT}`);
});
