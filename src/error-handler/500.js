'use strict';

module.exports = (error, req, res, next) => {
    const errorMsg = error.message ? error.message : error;
    const errorObj = {
        status: 500,
        message: errorMsg
    }

    res.status(500).json(errorObj);
}