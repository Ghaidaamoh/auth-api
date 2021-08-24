  
'use strict';

module.exports = (req, res, next) => {
    const error = {
        status: 404,
        message: 'Not Found'
    }

    res.status(404).json(error);
}

// not found handler