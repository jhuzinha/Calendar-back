import { Router } from "express";
import { getEvents, deleteEvents, addEvents } from "../controllers/eventsControllers";
import Validate from "../middlewares/joiValidate";


const eventsRouter = Router();

eventsRouter.get('/events', getEvents);
eventsRouter.post('/events', Validate('event'), addEvents);
eventsRouter.delete('/events/:id', deleteEvents);

export default eventsRouter;