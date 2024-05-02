import { Request, Response, Router } from "express";
import { prisma } from "./prisma/prisma";

const router = Router()

router.post('/times', async (req: Request, res: Response) => {

    const times = await prisma.time.createMany({
        data: [
            {
                id: 1,
                nome: "ABC",
                instagram: 274.166,
                twitter: 140.757,
                facebook: 232.019,
                youtube: 35.200,
                tiktok: 30.770,
                socios: 7.858,
                url: "abc.png"
            },
            {
                id: 2,
                nome: "América-MG",
                instagram: 262.302,
                twitter: 184.731,
                facebook: 167.256,
                youtube: 26.100,
                tiktok: 128.861,
                socios: 3.350,
                url: "america-mg.png"
            },
            {
                id: 3,
                nome: "América-RN",
                instagram: 226.753,
                twitter: 112.046,
                facebook: 232.501,
                youtube: 40.685,
                tiktok: 13.715,
                socios: 5.216,
                url: "america-rn.png"

            },
            {
                id: 4,
                nome: "Athletico-PR",
                instagram: 863.795,
                twitter: 1218.789,
                facebook: 1122.325,
                youtube: 261.116,
                tiktok: 508.601,
                socios: 40.000,
                url: "athletico-pr.png"

            },
            {
                id: 5,
                nome: "Atletico-GO",
                instagram: 247.776,
                twitter: 136.683,
                facebook: 107.182,
                youtube: 16.100,
                tiktok: 130.346,
                socios: 2.000,
                url: "atletico-go.png"
            },
            {
                id: 6,
                nome: "Atlético-MG",
                instagram: 3012.519,
                twitter: 2627.508,
                facebook: 3272.761,
                youtube: 664.674,
                tiktok: 1554.999,
                socios: 77.242,
                url: "atletico-mg.png"
            },
            {
                id: 7,
                nome: "Avaí",
                instagram: 229.980,
                twitter: 238.804,
                facebook: 260.425,
                youtube: 36.800,
                tiktok: 194.236,
                socios: 9.792,
                url: "avai.png"
            },
            {
                id: 8,
                nome: "Bahia",
                instagram: 1548.712,
                twitter: 1602.499,
                facebook: 1159.025,
                youtube: 310.291,
                tiktok: 415.027,
                socios: 65.000,
                url: "bahia.png"
            },
            {
                id: 9,
                nome: "Botafogo",
                instagram: 1392.780,
                twitter: 1489.880,
                facebook: 1459.691,
                youtube: 547.481,
                tiktok: 874.882,
                socios: 56.419,
                url: "botafogo.png"
            },
            {
                id: 10,
                nome: "Botafogo-PB",
                instagram: 165.206,
                twitter: 42.293,
                facebook: 94.143,
                youtube: 31.250,
                tiktok: 51.957,
                socios: 1.285,
                url: "botafogo-pb.png"
            },
            {
                id: 11,
                nome: "Bragantino",
                instagram: 631.017,
                twitter: 131.194,
                facebook: 396.445,
                youtube: 30.382,
                tiktok: 595.320,
                socios: 7.500,
                url: "bragantino.png"
            },
            {
                id: 12,
                nome: "Campinense",
                instagram: 115.446,
                twitter: 35.355,
                facebook: 0,
                youtube: 12.800,
                tiktok: 5.809,
                socios: 416,
                url: "campinense.png"
            },
            {
                id: 13,
                nome: "Ceará",
                instagram: 1381.628,
                twitter: 461.515,
                facebook: 956.409,
                youtube: 191.623,
                tiktok: 549.744,
                socios: 30.972,
                url: "ceara.png"
            },
            {
                id: 14,
                nome: "Chapecoense",
                instagram: 1830.023,
                twitter: 600.394,
                facebook: 3561.622,
                youtube: 43.546,
                tiktok: 207.799,
                socios: 7.264,
                url: "chapecoense.png"
            },
            {
                id: 15,
                nome: "Corinthians",
                instagram: 11378.919,
                twitter: 7886.589,
                facebook: 11179.029,
                youtube: 2125.433,
                tiktok: 4177.247,
                socios: 43.000,
                url: "corinthians.png"
            },
            {
                id: 16,
                nome: "Coritiba",
                instagram: 410.922,
                twitter: 980.987,
                facebook: 528.792,
                youtube: 117.753,
                tiktok: 207.563,
                socios: 35.000,
                url: "coritiba.png"
            },
            {
                id: 17,
                nome: "CRB",
                instagram: 310.260,
                twitter: 108.306,
                facebook: 155.028,
                youtube: 23.800,
                tiktok: 51.038,
                socios: 2.681,
                url: "crb.png"
            },
            {
                id: 18,
                nome: "Criciúma",
                instagram: 351.611,
                twitter: 572.706,
                facebook: 207.725,
                youtube: 24.471,
                tiktok: 55.236,
                socios: 17.200,
                url: "criciuma.png"
            },
            {
                id: 19,
                nome: "Cruzeiro",
                instagram: 2689.433,
                twitter: 2619.271,
                facebook: 3102.939,
                youtube: 599.808,
                tiktok: 1114.840,
                socios: 42.767,
                url: "cruzeiro.png"
            },
            {
                id: 20,
                nome: "CSA",
                instagram: 346.075,
                twitter: 70.873,
                facebook: 173.012,
                youtube: 36.234,
                tiktok: 110.253,
                socios: 2.549,
                url: "csa.png"
            },
            {
                id: 21,
                nome: "Cuiabá",
                instagram: 456.283,
                twitter: 78.175,
                facebook: 172.003,
                youtube: 28.200,
                tiktok: 111.130,
                socios: 2.000,
                url: "cuiaba.png"
            },
            {
                id: 22,
                nome: "Ferroviário",
                instagram: 147.702,
                twitter: 27.162,
                facebook: 43.468,
                youtube: 7.970,
                tiktok: 4.264,
                socios: 1.729,
                url: "ferroviario.png"
            },
            {
                id: 23,
                nome: "Figueirense",
                instagram: 208.114,
                twitter: 653.435,
                facebook: 278.674,
                youtube: 4.370,
                tiktok: 5.258,
                socios: 6.899,
                url: "figueirense.png"
            },
            {
                id: 24,
                nome: "Flamengo",
                instagram: 19621.110,
                twitter: 10715.998,
                facebook: 13433.249,
                youtube: 6908.742,
                tiktok: 8093.729,
                socios: 77.000,
                url: "flamengo.png"
            },
            {
                id: 25,
                nome: "Fluminense",
                instagram: 2384.822,
                twitter: 1565.957,
                facebook: 1982.185,
                youtube: 813.955,
                tiktok: 2297.588,
                socios: 61.592,
                url: "fluminense.png"
            },
            {
                id: 26,
                nome: "Fortaleza",
                instagram: 1519.881,
                twitter: 457.162,
                facebook: 1012.206,
                youtube: 251.314,
                tiktok: 720.411,
                socios: 37.574,
                url: "fortaleza.png"
            },
            {
                id: 27,
                nome: "Goiás",
                instagram: 492.064,
                twitter: 664.363,
                facebook: 328.588,
                youtube: 115.891,
                tiktok: 164.178,
                socios: 6.400,
                url: "goias.png"
            },
            {
                id: 28,
                nome: "Grêmio",
                instagram: 3329.715,
                twitter: 3135.850,
                facebook: 3492.374,
                youtube: 930.909,
                tiktok: 1177.113,
                socios: 112.075,
                url: "gremio.png"
            },
            {
                id: 29,
                nome: "Guarani",
                instagram: 175.633,
                twitter: 58.935,
                facebook: 109.075,
                youtube: 16.133,
                tiktok: 177.924,
                socios: 1.083,
                url: "guarani.png"
            },
            {
                id: 30,
                nome: "Internacional",
                instagram: 2125.726,
                twitter: 1941.892,
                facebook: 2618.496,
                youtube: 388.770,
                tiktok: 707.450,
                socios: 140.000,
                url: "internacional.png"
            },
            {
                id: 31,
                nome: "Joinville",
                instagram: 140.862,
                twitter: 112.957,
                facebook: 225.149,
                youtube: 9.790,
                tiktok: 22.497,
                socios: 11.000,
                url: "joinville.png"
            },
            {
                id: 32,
                nome: "Juventude",
                instagram: 236.181,
                twitter: 98.061,
                facebook: 210.060,
                youtube: 17.500,
                tiktok: 104.882,
                socios: 7.566,
                url: "juventude.png"
            },
            {
                id: 33,
                nome: "Náutico",
                instagram: 298.158,
                twitter: 180.500,
                facebook: 214.914,
                youtube: 34.496,
                tiktok: 127.168,
                socios: 24.785,
                url: "nautico.png"
            },
            {
                id: 34,
                nome: "Palmeiras",
                instagram: 6203.674,
                twitter: 3804.492,
                facebook: 5119.063,
                youtube: 2138.316,
                tiktok: 3616.823,
                socios: 176.521,
                url: "palmeiras.png"
            },
            {
                id: 35,
                nome: "Paraná",
                instagram: 128.933,
                twitter: 125.812,
                facebook: 206.644,
                youtube: 29.004,
                tiktok: 137.507,
                socios: 3.000,
                url: "parana.png"
            },
            {
                id: 36,
                nome: "Paysandu",
                instagram: 762.364,
                twitter: 234.601,
                facebook: 464.365,
                youtube: 194.821,
                tiktok: 284.955,
                socios: 6.901,
                url: "paysandu.png"
            },
            {
                id: 37,
                nome: "Ponte Preta",
                instagram: 195.890,
                twitter: 214.065,
                facebook: 289.398,
                youtube: 22.900,
                tiktok: 57.580,
                socios: 2.000,
                url: "ponte preta.png"
            },
            {
                id: 38,
                nome: "Portuguesa",
                instagram: 279.939,
                twitter: 104.946,
                facebook: 209.943,
                youtube: 15.300,
                tiktok: 109.532,
                socios: 232,
                url: "portuguesa.png"
            },
            {
                id: 39,
                nome: "Remo",
                instagram: 578.494,
                twitter: 159.860,
                facebook: 472.243,
                youtube: 186.721,
                tiktok: 144.916,
                socios: 2.842,
                url: "remo.png"
            },
            {
                id: 40,
                nome: "Sampaio Corrêa",
                instagram: 304.432,
                twitter: 68.257,
                facebook: 189.665,
                youtube: 42.200,
                tiktok: 143.231,
                socios: 3.716,
                url: "sampaio correa.png"
            },
            {
                id: 41,
                nome: "Santa Cruz",
                instagram: 533.695,
                twitter: 284.765,
                facebook: 537.457,
                youtube: 90.445,
                tiktok: 206.503,
                socios: 7.300,
                url: "santa cruz.png"
            },
            {
                id: 42,
                nome: "Santos",
                instagram: 3307.141,
                twitter: 3113.334,
                facebook: 4082.787,
                youtube: 1269.152,
                tiktok: 2110.505,
                socios: 40.773,
                url: "santos.png"
            },
            {
                id: 43,
                nome: "São Paulo",
                instagram: 6603.730,
                twitter: 4927.006,
                facebook: 6988.605,
                youtube: 1901.583,
                tiktok: 1799.573,
                socios: 55.058,
                url: "sao paulo.png"
            },
            {
                id: 44,
                nome: "Sport",
                instagram: 1447.256,
                twitter: 1696.970,
                facebook: 1089.914,
                youtube: 187.753,
                tiktok: 893.782,
                socios: 17.100,
                url: "sport.png"
            },
            {
                id: 45,
                nome: "Treze",
                instagram: 134.276,
                twitter: 35.393,
                facebook: 33.809,
                youtube: 19.500,
                tiktok: 14.690,
                socios: 1.252,
                url: "treze.png"
            },
            {
                id: 46,
                nome: "Vasco",
                instagram: 3104.836,
                twitter: 2746.894,
                facebook: 3188.083,
                youtube: 1300.622,
                tiktok: 2906.164,
                socios: 45.000,
                url: "vasco.png"
            },
            {
                id: 47,
                nome: "Vila Nova",
                instagram: 295.890,
                twitter: 124.391,
                facebook: 132.790,
                youtube: 39.100,
                tiktok: 173.054,
                socios: 3.430,
                url: "vila nova.png"
            },
            {
                id: 48,
                nome: "Vitória",
                instagram: 1717.652,
                twitter: 1153.925,
                facebook: 757.568,
                youtube: 141.534,
                tiktok: 564.931,
                socios: 31.329,
                url: "vitoria.png"
            }
        ]
    })
    res.send(times)
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