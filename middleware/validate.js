/*
 * @Author: Calvin
 * @Date: 2022-01-08 23:18:41
 * @description: 
 */

const { validationResult } = require('express-validator')

module.exports = validations => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const msg= errors.array()[0].msg
    res.status(200).json({ 
      code:0,
      isSuccess:false,
      msg
    });
  };
}