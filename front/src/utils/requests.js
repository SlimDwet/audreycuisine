import request from 'superagent';

// Base des URL
const baseUrl = 'http://audreycuisine-dev.fr/app_dev.php';

/**
 * Callback de succès de la requête
 * @param  {object} response
 * @return {mixed}      Résultat de la requête
 */
const success = (response, status) => {
    return {
        'data': response.data,
        'status': status
    };
}

/**
 * Fonction traitant les réponses
 * @param  {object} res [Réponse]
 * @return {callback}
 */
export const treatResponse = (res) => {
    if([200, 201].indexOf(res.statusCode) >= 0) {
        return success(res.body, res.statusCode);
    }
    if(res.statusCode === 404) {
        console.log("404", res);
    }
}

/**
 * Fonction chargée de lancer les requêtes
 * @param  {string} method     [Méthode HTTP]
 * @param  {string} url        [URL à requêter]
 * @param  {object} dataToSend [Data pour les POST, PUT...]
 * @return {[type]}            [description]
 */
export async function sendRequest(method, url, dataToSend) {
    method = method.toUpperCase();
    switch (method) {
        case 'GET':
            return request.get(baseUrl+url).accept('json');
            break;
        default:
            throw new Error('Méthode inconnu');
    }
}
