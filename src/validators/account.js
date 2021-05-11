const Joi = require("joi");

const { baseValidatorForBody } = require("./index");

const validateNewAccount = (req, res, next) => {
    const schema = Joi.object({
        account_name: Joi.string().required(),
        bank: Joi.string().required(),
        bank_code: Joi.number().required(),
        balance: Joi.number().required(),
        type_of_account: Joi.string().required(),
    });
    baseValidatorForBody(schema, req, res, next);
};
// External Bank API Validators
const validateAccountInfo = (req, res, next) => {
    const schema = Joi.object({
        account_number: Joi.string().required(),
        bank_code: Joi.string().required(),
    });
    baseValidatorForBody(schema, req, res, next);
};



module.exports = {
    validateNewAccount,
    validateAccountInfo
};