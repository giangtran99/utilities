
/**
   * Convert long string to elipsis string with every single word
   * @param originString origin string
   * @param maxStringLength string length that you desired
   */
export const getElipsisString = (originString: string, maxStringLength: number) => {
    //trim the string to the maximum length
    if (originString.length > 10) {
        let trimmedString = originString.substr(0, maxStringLength);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return `${trimmedString} ...`
    }
    return originString
}


/**
   * Convert number to money
   * @param money Money with number type
   */

export const formatMoney = (money: number) => {
    const formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formater.format(money)
}


