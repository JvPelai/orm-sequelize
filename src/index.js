const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

app.get("/teste", (req, res) => {
    res.status(200).send({ mensagem: "teste!" })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

module.exports = app