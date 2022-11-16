import { prisma } from "../database";
import { TEvents } from "../controllers/eventsControllers";

export async function create(event: TEvents ) {
    return await prisma.events.create({data: event})
}

export async function getAllEvents() {
    return await prisma.events.findMany()
}

export async function deleteEvent(id: number) {
    return await prisma.events.delete({ where: {id}})
}

export async function findById(id: number) {
    return await prisma.events.findFirst({where: {id}})
}