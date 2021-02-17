const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
require('dotenv').config()
const Recaptcha = require("express-recaptcha").RecaptchaV2

const app = express()
const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY)

app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const indexRoute = express.Router()

const handleGetRequest = (req, res) => {
    return res.json("The express server is live")
}

const handlePostRequest = (request, response, nextFunction) => {
    response.append("Content-Type", "text/html")
    response.append("Access-Control-Allow-Origin", "*")
    console.log(request.body)
    return response.json("success")
}

indexRoute.route("/apis")
    .get(handleGetRequest)
    .post(recaptcha.middleware.verify, handlePostRequest)

app.use("/apis",indexRoute)

app.listen(4200, () => {
    console.log("Express Successfully built")
})