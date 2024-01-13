import prisma from "./prismaClient";

export const readFlavors = async () => {
    try {
        const out = await prisma.flavors.findMany({

        })
        const filterByType = (type: string) => out.filter(({ type: flavorType }) => flavorType === type);

        const Classy = filterByType('Classy');
        const NuttyDelights = filterByType('Nutty Delights');
        const UniqueAndFun = filterByType('Unique And Fun');
        const InternationalFlavors = filterByType('International Flavors');

        return { Classy, NuttyDelights, UniqueAndFun, InternationalFlavors };
    } catch (error) {
        console.log(error)
    } finally {
        prisma.$disconnect()
    }
}