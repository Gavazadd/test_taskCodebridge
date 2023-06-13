const ApiError = require("../errorHandler/ApiError");

class PingController {
    async get(req, res, next) {
        try{
            res.send("Dogshouseservice.Version1.0.1");
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new PingController()