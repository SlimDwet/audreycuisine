/**
 * Retourne une date complète en français
 * @param  {string} dateStr [Date au format ISO]
 * @return {string}         [Date française (exemple : 10 Février 2017)]
 */
export const getFrenchDate = dateStr => {
    let dateObj = new Date(dateStr);
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
}

/**
 * Retourne un index unique
 * @param  {string} prefix [Préfixe]
 * @return {[type]}        [description]
 */
export const getRandomKey = prefix => {
    let finalPrefix = (prefix === undefined) ? 'id' : prefix;
    return finalPrefix+'-'+Math.round((Math.random() * 1000) * (Math.random() * 1000));
}
