export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount/limit);
}

export const getPagesArray = (totalPages) => {
    let result = [];

    let pages = totalPages > 10 ? 10 : totalPages;

    for(let i = 0; i < pages; i++) {
        result.push(i + 1)
    }

    return result;
}