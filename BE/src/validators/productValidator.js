import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.empty': 'Name is required.',
        'string.min': 'Name must be at least 3 characters long.',
    }),
    categoryId: Joi.string().required().messages({
        'string.empty': 'Category ID is required.',
    }),
    price: Joi.number().min(0).required().messages({
        'number.base': 'Price must be a number.',
        'number.min': 'Price must be a non-negative number.',
        'any.required': 'Price is required.',
    }),
    image: Joi.string().required().message({
        'string.empty': 'Image is required.',
    }),
});

export { productSchema };
