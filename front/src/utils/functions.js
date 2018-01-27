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

/**
 * Retourne les X premiers mots du texte comme extrait
 * @param  {string} text [Texte à partir duquel on extrait le résumé]
 * @return {string}      [Extrait]
 */
export const getExcerpt = (text, excerptLength) => {
    let words = text.trim().split(/\s+/);
    let excerpt = '';
    if(words.length > excerptLength) {
        // On récupère les X premiers mots pour avoir le résumé
        let reducedWords = words.slice(0, excerptLength);
        excerpt = reducedWords.join(' ')+'...';
    } else {
        excerpt = text;
    }
    return excerpt;
}
