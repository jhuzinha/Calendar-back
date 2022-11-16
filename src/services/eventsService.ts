import * as eventsFunctions from "../repositories/eventsRepository";
import { TEvents } from "../controllers/eventsControllers";


export async function createEvent(event: TEvents) {
    return await eventsFunctions.create(event);
};

export async function deleteEvent(id: number) {
    const existEvent = await eventsFunctions.findById(id);
    if (!existEvent) {
        throw { type: "Not Found", message: "Evento nao encontrado"};
    }
    await eventsFunctions.deleteEvent(id);
    return
};

export async function getEvent() {
    return await eventsFunctions.getAllEvents();
};

