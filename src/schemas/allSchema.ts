import { ObjectSchema } from 'joi';
import eventSchema from './eventsSchema';

interface AllSchemas {
    [key: string]: ObjectSchema
}

const allSchema: AllSchemas = {
    'event': eventSchema
}

export default allSchema;