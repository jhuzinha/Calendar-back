import { Request, Response } from "express";
import * as eventsFunctions from '../services/eventsService';

export type TEvents = {
    start: string,
    end: string,
    title: string
}

export async function addEvents(req: Request, res: Response) {
    const event: TEvents = req.body;
    await eventsFunctions.createEvent(event);
    return res.sendStatus(201)
}

export async function getEvents(req: Request, res: Response) {
    const events = await eventsFunctions.getEvent();
    return res.status(200).send(events)
}


export async function deleteEvents(req: Request, res: Response) {
    const { id } = req.params;
    await eventsFunctions.deleteEvent(Number(id));
    return res.sendStatus(200)
}
