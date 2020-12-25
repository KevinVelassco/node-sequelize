function paginate(model, page, operations){
    page = Number(page) || page > 0 ? page-1 : 0;
    const limit = 10;
    const offset = page * limit;

    return model.findAndCountAll({
        ...operations,
        offset,
        limit
    })
}

module.exports = paginate;