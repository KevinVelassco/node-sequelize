const middleware = (error, req, res , next)=> {
    res.status(500).json({
        name: error.name,
        status: 500,
        message: error.message
    });
}

module.exports = middleware;