const {Dog} = require('../models/models')
const ApiError = require('../errorHandler/ApiError')

class DogController {
    async create(req, res, next) {
        try{
            const {name, color, tail_length, weight} = req.body
            if (tail_length <= 0  || weight <= 0 ){
                return next(ApiError.badRequest("Значення довжини хвосту та ваги не можуть бути меншими або рівними 0"))
            }
            const [dog, isCreated] = await Dog.findOrCreate({
                where: {name},
                defaults: {name, color, tail_length, weight,}
            });
            if (!isCreated) {
                next(ApiError.badRequest("Собака з таким ім'ям вже записана в базу днаих! Будь ласка оберіть інше ім'я."))
            }
            res.json(dog)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let {page, limit} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let attribute = 'id'
            let order = 'ASC'
            if (req.query.attribute){
                attribute = req.query.attribute
            }
            if (req.query.order){
                if (req.query.order === 'ASC' || req.query.order === 'DESC'){
                    order = req.query.order
                }else {
                    next(ApiError.badRequest('Параметер order повинен приймати значення ASC або DESC'))
                }
            }

            const dogs = await Dog.findAndCountAll({ order: [[attribute, order]], limit, offset });
            return res.json(dogs.rows)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new DogController()