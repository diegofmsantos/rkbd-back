import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/prisma";

export const CreateTime = async (data: Prisma.TimeCreateInput) => {
    return await prisma.time.create({ data })
}

export const ListTime = async (data: Prisma.TimeFindManyArgs) => {
    return await prisma.time.findMany()
}

export const UpdateTime = async (data: Prisma.TimeUpdateInput) => {
    return await prisma.time.update
}

export const DeleteTime = async (data: Prisma.TimeDeleteArgs) => {
    return await prisma.time.findFirst()
}