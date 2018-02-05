const constants = {
    "excerptLength": 30,
    "longExcerptLength": 50,
    "socialMedias": [
        {'order': 1, 'name': 'RSS', 'css': 'rss', 'link': '/feed'},
        {'order': 2, 'name': 'Instagram', 'css': 'instagram', 'link': 'https://instagram.com/audreycuisine/', 'alt': null},
        {'order': 3, 'name': 'Facebook', 'css': 'facebook', 'link': 'https://www.facebook.com/audreycuisine.fr', 'alt': null},
        {'order': 4, 'name': 'Twitter', 'css': 'twitter', 'link': 'https://twitter.com/audreycuisine', 'alt': null},
        {'order': 5, 'name': 'Google+', 'css': 'googleplus', 'link': 'https://plus.google.com/u/0/117618348036211786224/posts', 'alt': null},
        {'order': 6, 'name': 'Tumblr', 'css': 'tumblr', 'link': 'http://audreycuisine.tumblr.com/', 'alt': null},
        {'order': 7, 'name': 'Pinterest', 'css': 'pinterest', 'link': 'https://www.pinterest.com/audreycuisine/', 'alt': null}
    ],
    "printSocialMedias": [
        { 'order': 1, 'css': 'print', 'link': '/#print', 'alt': null },
        { 'order': 2, 'css': 'envelop', 'link': '/?share=email&nb=1', 'alt': null },
        { 'order': 3, 'css': 'facebook', 'link': '/?share=facebook&nb=1', 'alt': null },
        { 'order': 4, 'css': 'twitter', 'link': '/?share=twitter&nb=1', 'alt': null },
        { 'order': 5, 'css': 'googleplus', 'link': '/?share=google-plus-1&nb=1', 'alt': null },
        { 'order': 6, 'css': 'pinterest', 'link': '/?share=pinterest&nb=1', 'alt': null }
    ],
    "books": [
        {
            'srcLink': 'https://images-na.ssl-images-amazon.com/images/I/61t7lPeoAUL._SX258_BO1,204,203,200_.jpg',
            'altText': 'Le meilleur de ma p\'tite cuisine'
        },
        {
            'srcLink': 'https://images-na.ssl-images-amazon.com/images/I/51qEorU9ShL._SX371_BO1,204,203,200_.jpg',
            'altText': '30 jours pour devenir un cordon-bleu'
        },
        {
            'srcLink': 'https://images-na.ssl-images-amazon.com/images/I/519OHVnst5L._SX357_BO1,204,203,200_.jpg',
            'altText': 'La cuisine étudiante Nouveau guide'
        },
        {
            'srcLink': 'https://images-na.ssl-images-amazon.com/images/I/513N73NREyL._SX351_BO1,204,203,200_.jpg',
            'altText': '200 recettes pour bébés gourmands'
        },
        {
            'srcLink': 'https://images-na.ssl-images-amazon.com/images/I/51TiZ0lRDML._SX350_BO1,204,203,200_.jpg',
            'altText': '200 recettes pour enfants gourmands'
        }
    ],
    "carousel": [
        {
            'slideSrcset': '',
            'slideMedia': '',
            'slideImgSrc': 'https://www.audreycuisine.fr/wp-content/uploads/2017/01/31343289004_1164c06ccd_z-785x505_c.jpg',
            'slideImgAlt': 'Illustration dômes de crêpes',
            'slideImgTitle': 'Dômes de crêpes aux pommes & caramel',
            'slideCategories': "Crêpes, blinis & pancakes",
            'slideCategoriesLink': "/category/brunchs/crepes",
            'slideTitle': 'Dômes de crêpes aux pommes & caramel',
            'slideLink': '/article/domes-de-crepes-aux-pommes-caramel',
            'slideDate': '15 janvier 2017'
        }
    ]
}

export default constants;
