const { validationResult } = require("express-validator")

exports.validationMiddlware = (req, res, next) => {
    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        })
    }

    next()
}