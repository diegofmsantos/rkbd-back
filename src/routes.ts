import { Request, Response, Router } from "express";
import { prisma } from "./prisma/prisma";

type Data = {
    id: number,
    nome: string,
    instagram: number,
    twitter: number,
    facebook: number,
    youtube: number,
    tiktok: number,
    socios: number,
    url: string
}


const router = Router()

router.post('/times', async (req: Request, res: Response) => {
    const { id, nome, instagram, twitter, facebook, youtube, tiktok, socios, url } = req.body as { id: number, nome: string, instagram: number, twitter: number, facebook: number, youtube: number, tiktok: number, socios: number, url: string }

    const time = await prisma.time.create({
        data: { id, nome, instagram, twitter, facebook, youtube, tiktok, socios, url }
    })
    res.send(time)
})

router.get('/times', async (req: Request, res: Response) => {
    const allTimes = await prisma.time.findMany()
    res.send(allTimes)
})

router.get('/socios', async (req: Request, res: Response) => {
    const allTimes = await prisma.time.findMany({
        orderBy: {
            socios: "desc"
        }
    })
    res.send(allTimes)
})

router.get('/times/instagram', async (req: Request, res: Response) => {
    const allTimes = await prisma.time.findMany({
        orderBy: {
            instagram: "desc"
        }
    })
    res.send(allTimes)
})

router.get('/times/twitter', async (req: Request, res: Response) => {
    const allTimes = await prisma.time.findMany({
        orderBy: {
            twitter: "desc"
        }
    })
    res.send(allTimes)
})

router.get('/times/facebook', async (req: Request, res: Response) => {
    const allTimes = await prisma.time.findMany({
        orderBy: {
            facebook: "desc"
        }
    })
    res.send(allTimes)
})

router.get('/times/youtube', async (req: Request, res: Response) => {
    const allTimes = await prisma.time.findMany({
        orderBy: {
            youtube: "desc"
        }
    })
    res.send(allTimes)
})

router.get('/times/tiktok', async (req: Request, res: Response) => {
    const allTimes = await prisma.time.findMany({
        orderBy: {
            tiktok: "desc"
        }
    })
    res.send(allTimes)
})

router.put('/times', async (req: Request, res: Response) => {
    const { id, nome, instagram, twitter, facebook, youtube, tiktok, socios, url } = req.body
    const time = await prisma.time.update({
        where: { id },
        data: { nome, instagram, twitter, facebook, youtube, tiktok, socios, url }
    })
    res.send(time)
})

router.delete('/times', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const time = await prisma.time.findFirst({
        where: { id }
    })
    res.send(time)
})

export default router;