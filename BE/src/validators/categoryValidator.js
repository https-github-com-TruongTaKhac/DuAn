import Joi from 'joi';

const categorySchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Name is required.',
    })
});

export { categorySchema };
