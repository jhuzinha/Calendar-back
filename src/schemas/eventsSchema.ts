import joi from 'joi';

const eventSchema = joi.object({
    title: joi.string().required(),
    end: joi.date().required(),
    start: joi.date().required()
});

export default eventSchema;