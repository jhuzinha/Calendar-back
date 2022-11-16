import { Router } from "express";
import eventsRouter from "./eventsRouter";

const router = Router();

router.use(eventsRouter)

export default router;
