const constants = {
    "excerptLength": 30,
    "longExcerptLength": 50,
    "socialMedias": [
        {'order': 1, 'css': 'rss', 'link': '/feed'},
        {'order': 2, 'css': 'instagram', 'link': 'https://instagram.com/audreycuisine/', 'alt': null},
        { 'order': 3, 'css': 'facebook', 'link': 'https://www.facebook.com/audreycuisine.fr', 'alt': null},
        {'order': 4, 'css': 'twitter', 'link': 'https://twitter.com/audreycuisine', 'alt': null},
        {'order': 5, 'css': 'googleplus', 'link': 'https://plus.google.com/u/0/117618348036211786224/posts', 'alt': null},
        {'order': 6, 'css': 'tumblr', 'link': 'http://audreycuisine.tumblr.com/', 'alt': null},
        {'order': 7, 'css': 'pinterest', 'link': 'https://www.pinterest.com/audreycuisine/', 'alt': null}
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
            'srcLink': '//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=2759033295&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=maptitecuis-21',
            'altText': 'Le meilleur de ma p\'tite cuisine'
        },
        {
            'srcLink': 'https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2759016722&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=maptitecuis-21',
            'altText': '30 jours pour devenir un cordon-bleu'
        },
        {
            'srcLink': 'https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2759017001&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=maptitecuis-21',
            'altText': 'La cuisine étudiante Nouveau guide'
        },
        {
            'srcLink': 'https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2759022714&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=maptitecuis-21',
            'altText': '200 recettes pour bébés gourmands'
        },
        {
            'srcLink': 'https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2759026183&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=maptitecuis-21',
            'altText': '200 recettes pour enfants gourmands'
        }
    ],
    "carousel": [
        {
            'slideSrcset': '',
            'slideMedia': '',
            'slideImgSrc': 'https://www.audreycuisine.fr/wp-content/uploads/2016/01/galette-des-rois-785x505_c.jpg',
            'slideImgAlt': 'Illustration galette des rois',
            'slideImgTitle': 'Galettes des rois feuilletée aux noisettes pour l\'Epiphanie',
            'slideCategories': "Galettes des rois",
            'slideCategoriesLink': "/category/recettes-sucrees/desserts-partager/galette-des-rois",
            'slideTitle': 'Galettes des rois feuilletée aux noisettes pour l\'Epiphanie',
            'slideLink': '/2016/01/galettes-des-rois-epiphanie',
            'slideDate': '6 janvier 2016'
        },
        {
            'slideSrcset': '',
            'slideMedia': '',
            'slideImgSrc': 'https://www.audreycuisine.fr/wp-content/uploads/2015/01/galette-des-rois-bordelaise-briochée-785x505_c.jpg',
            'slideImgAlt': 'Illustration galette des rois à la bordelaise',
            'slideImgTitle': 'Galette des rois à la Bordelaise, au thermomix',
            'slideCategories': "Robot cuiseur (Thermomix - Companion - Cook-Expert)",
            'slideCategoriesLink': "/category/recettes-salees/autres-recettes/ustensiles/robot-cuiseur",
            'slideTitle': 'Galette des rois à la Bordelaise, au thermomix',
            'slideLink': '/2015/01/galette-des-rois-au-thermomix',
            'slideDate': '4 janvier 2015'
        }
    ]
}

export default constants;
