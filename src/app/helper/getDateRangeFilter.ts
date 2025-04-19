

const getDateRangeFilter = async (params: {
    year?: string | undefined;
    month?: string | undefined;
    day?: string | undefined;
}) => {
    const year = params.year ? parseInt(params.year) : null;
    const month = params.month ? parseInt(params.month) : null;
    const day = params.day ? parseInt(params.day) : null;

    if (year && month && day) {
        const start = new Date(Date.UTC(year, month - 1, day));
        const end = new Date(Date.UTC(year, month - 1, day + 1));

        return {
            date: {
                gte: start,
                lt: end
            }
        }

    } else if (year && month) {
        const start = new Date(Date.UTC(year, month - 1, 1));
        const end = new Date(Date.UTC(year, month, 1));

        return {
            date: {
                gte: start,
                lt: end
            }
        }
    } else if (year) {
        const start = new Date(`${year}-01-01T00:00:00.000Z`);
        const end = new Date(`${+year + 1}-01-01T00:00:00.000Z`);

        return {
            date: {
                gte: start,
                lt: end
            }
        }
    }
    return null;
}

export default getDateRangeFilter