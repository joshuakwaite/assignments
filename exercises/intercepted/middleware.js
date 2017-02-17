function addThis(req, res, next) {
    req.body.ingredients = "mushrooms"
    next();
}

module.exports = addThis