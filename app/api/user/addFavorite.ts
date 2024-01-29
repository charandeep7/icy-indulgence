import prisma from "../prisma/prismaClient";

export const isFavoriteItemPresent = async (username: string,id: number) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                username
            },
            select: {
                favorites: {
                    where: {
                        item: {
                            itemId: id
                        }
                    }
                }
            }
        })
        return res
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}

// export const addFavoriteItem = async (username: string,id: number) => {
//     try {
//         const res = await prisma.user.create({
//             where: {
//                 username
//             },
//             select: {
//                 favorites: {
//                     where: {
//                         item: {
//                             itemId: id
//                         }
//                     }
//                 }
//             }
//         })
//         return res
//     } catch (error: any) {
//         throw new Error(error.message)
//     } finally {
//         prisma.$disconnect()
//     }
// }