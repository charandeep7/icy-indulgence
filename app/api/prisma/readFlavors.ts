import prisma from "./prismaClient";

export const readFlavors = async () => {
    try {
        const out = await prisma.flavors.findMany({})
        const filterByType = (type: string) => out.filter(({ type: flavorType }) => flavorType === type);

        const Classy = filterByType('Classy');
        const NuttyDelights = filterByType('Nutty Delights');
        const UniqueAndFun = filterByType('Unique And Fun');
        const InternationalFlavors = filterByType('International Flavors');
        return { Classy, NuttyDelights, UniqueAndFun, InternationalFlavors };
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}

export const readAllFlavor = async () => {
    try {
        const subtypes: {
            title: string
        }[] = await prisma.flavors.findMany({
            select: {
                title: true,
                alt: false,
                id: false,
                iceCreams: false,
                img: false,
                price: false,
                type: false
            }
        })
        const out = await prisma.flavors.findMany({
            where: {
                title: {
                    in: subtypes.map(({ title }) => title)
                }
            },
            select: {
                iceCreams: true
            },
            orderBy: [
                {
                    id: 'asc'
                }
            ]
        })
        const allFavors = out.map(({ iceCreams }) => iceCreams).flat();
        return allFavors
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}

export const readSingleFlavor = async (flavor: string) => {
    try {
        const out = await prisma.flavors.findMany({
            where: {
                title: flavor,
            },
            select: {
                iceCreams: true
            },
        })
        const iceCreams = out?.at(0)?.iceCreams
        return iceCreams
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}

export const readDetailOfSingleFlavor = async (icecream: string) => {
    try {
        const out = await prisma.iceCreams.findFirst({
            where: {
                subtype: icecream
            },
            select: {
                img: true,
                price: true,
                details: {
                    select: {
                        flavor: true,
                        texture: true,
                        verstaility: true,
                        desc: true,
                        iceCreamId: true
                    }
                },
            }
        })
        return out
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}

export const readCartItems = async (ids: {
    id: number,
    count: number
}[]) => {
    try {
        const out = await prisma.iceCreams.findMany({
            where: {
                id: {
                    in: ids.map(({ id }) => id)
                }
            },
            select: {
                id: true,
                img: true,
                subtype: true,
                price: true,
            }
        })
        return out
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}

export const readDetailsOfAllFlavors = async () => {
    try {
        const subtypes = await prisma.flavors.findMany({
            select: {
                title: true,
                alt: false,
                id: false,
                img: false,
                price: false,
                type: false,
                iceCreams: {
                    select: {
                        subtype: true,
                        details: {
                            select: {
                                flavor: true,
                                texture: true,
                                verstaility: true,
                                desc: true,
                                iceCreamId: true
                            }
                        }
                    }
                }
            }
        })
        const allDetails = subtypes.flatMap(({ title, iceCreams }) =>
            iceCreams.map(({ subtype, details }) => ({
                category: title,
                subCategory: subtype,
                ...details[0],
            }))
        )
        return allDetails
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}