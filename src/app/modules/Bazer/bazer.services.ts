import { Prisma } from "../../../../generated/prisma";
import getDateRangeFilter from "../../helper/getDateRangeFilter";
import { prisma } from "../../utils/prisma";
import { IBazer } from "./bazer.interface";


interface IBazerFilterRequest {
    year?: string | undefined;
    month?: string | undefined;
    day?: string | undefined;
}
const doingBazer = async (payload: IBazer) => {
    const result = await prisma.bazer.create({
        data: {
            user_id: payload?.user_id.toString(),
            date: payload?.date,
            amount: payload?.amount,
            items: payload?.items
        }
    })
    return result
}

const getAllBazer = async (params: IBazerFilterRequest) => {
    const andCondition: Prisma.BazerWhereInput[] = [];
    const dateFilter = await getDateRangeFilter(params);
    if (dateFilter) {
        andCondition.push(dateFilter)
    }
    delete params.year;
    delete params.month;
    delete params.day;

    Object.entries(params).forEach(([key, value]) => {
        andCondition.push({
            [key]: value,
        });
    });
    const whereCondition: Prisma.BazerWhereInput = andCondition.length ? { AND: andCondition } : {}
    const result = await prisma.bazer.findMany({
        where: whereCondition
    });
    return result
}

export const bazerServices = {
    doingBazer,
    getAllBazer
}