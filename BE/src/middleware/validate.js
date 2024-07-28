import { HttpStatus } from 'http-status-codes';

const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: error.details[0].message,
        });
    }
    next();
};

export default validate;
