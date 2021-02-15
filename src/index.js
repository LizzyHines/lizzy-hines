const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const indexRoute = express.Router()

const handleGetRequest = (req, res) => {
    return res.json("The express server is live")
}

const handlePostRequest = (request, response, nextFunction) => {
    console.log(request.body)
    return response.json("success")
}

indexRoute.route("/apis")
    .get(handleGetRequest)
    .post(handlePostRequest)

app.use("/apis",indexRoute)

app.listen(4200, () => {
    console.log("Express Successfully built")
})