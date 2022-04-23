/**
 * @param {string} str
 * @returns {string}
 */
export const toUpperCase = (str: string) => {
    const regex = /(\b[a-z](?!\s))/g;

    const res = str.replace(regex, function (x) {
        return x.toUpperCase();
    });

    return res;
};
