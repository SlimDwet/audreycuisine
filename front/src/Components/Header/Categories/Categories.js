import React from 'react';
import './Categories.css';
import {getRandomKey} from '../../../utils/functions';

class Categories extends React.Component {

    constructor() {
        super();
        // Définition des catégories
        this.dns = "http://audreycuisine-dev.fr/app_dev.php/";
        this.categoriesDefinition = [
            {
                "title": "Brunchs",
                "slug": "brunchs",
                "isVisible": true,
                "children": [
                    {
                        "title": "Brunch salé",
                        "slug": "brunch-sale",
                        "isVisible": true
                    },
                    {
                        "title": "Brunch sucré",
                        "slug": "brunch-sucre",
                        "isVisible": true
                    },
                    {
                        "title": "Crêpes, gaufres & pancakes",
                        "slug": "crepes",
                        "isVisible": true
                    },
                    {
                        "title": "Porridges, muesli et granolas",
                        "slug": "muesli-granola",
                        "isVisible": true
                    },
                    {
                        "title": "Viennoiseries",
                        "slug": "viennoiseries",
                        "isVisible": true
                    },
                    {
                        "title": "Yaourts",
                        "slug": "yaourts",
                        "isVisible": true
                    },
                    {
                        "title": "Smoothies et jus de fruits",
                        "slug": "smoothies",
                        "isVisible": true
                    },
                    {
                        "title": "Boissons chaudes",
                        "slug": "boissons-chaudes",
                        "isVisible": true
                    },
                    {
                        "title": "Thés",
                        "slug": "thes",
                        "isVisible": true
                    }
                ],
            },
            {
                "title": "Sucré",
                "slug": "recettes-sucrees",
                "isVisible": true,
                "children": [
                    {
                        "title": "Gateaux",
                        "slug": "gateaux",
                        "isVisible": true
                    },
                    {
                        "title": "Bavarois",
                        "slug": "bavarois",
                        "isVisible": true
                    },
                    {
                        "title": "Cheesecake",
                        "slug": "cheesecake",
                        "isVisible": true
                    },
                    {
                        "title": "Tartes sucrées",
                        "slug": "tartes-sucrees",
                        "isVisible": true
                    },
                    {
                        "title": "Desserts à partager",
                        "slug": "desserts-a-partager",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Galette des rois",
                                "slug": "galette-des-rois",
                                "isVisible": true
                            },
                            {
                                "title": "Gâteaux au chocolat",
                                "slug": "gateaux-au-chocolats",
                                "isVisible": true
                            },
                            {
                                "title": "Gâteaux d'anniversaire",
                                "slug": "gateaux-danniversaire",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Desserts individuels",
                        "slug": "desserts-individuels",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Desserts servis à l'assiette",
                                "slug": "desserts-servis-a-lassiette",
                                "isVisible": true
                            },
                            {
                                "title": "Crèmes, mousses, flans",
                                "slug": "cremes-mousses",
                                "isVisible": true
                            },
                            {
                                "title": "Desserts à base de fruits",
                                "slug": "desserts-a-base-de-fruits",
                                "isVisible": true
                            },
                            {
                                "title": "Desserts végétaux",
                                "slug": "desserts-vegetaux",
                                "isVisible": true
                            },
                            {
                                "title": "Glaces et sorbets",
                                "slug": "glaces-et-sorbets",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Goûters",
                        "slug": "gouters",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Muffins, cupcakes, mini-cakes",
                                "slug": "muffins-cupcakes-mini-cakes",
                                "isVisible": true
                            },
                            {
                                "title": "Biscuits",
                                "slug": "biscuits",
                                "isVisible": true
                            },
                            {
                                "title": "Cakes sucrés",
                                "slug": "cakes-sucres",
                                "isVisible": true
                            },
                            {
                                "title": "Confiseries",
                                "slug": "confiseries",
                                "isVisible": true
                            }
                        ]
                    },
                ]
            },
            {
                "title": "Salé",
                "slug": "recettes-salees",
                "isVisible": true,
                "children": [
                    {
                        "title": "Début de repas",
                        "slug": "debut-de-repas",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Apéro",
                                "slug": "apero",
                                "isVisible": true
                            },
                            {
                                "title": "Cocktails",
                                "slug": "cocktails",
                                "isVisible": true
                            },
                            {
                                "title": "Cakes salés",
                                "slug": "cakes-sales",
                                "isVisible": true
                            },
                            {
                                "title": "Entrée",
                                "slug": "entree",
                                "isVisible": true
                            },
                            {
                                "title": "Soupes",
                                "slug": "soupes",
                                "isVisible": true
                            },
                            {
                                "title": "Terrine",
                                "slug": "terrine",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Viande ou poisson",
                        "slug": "viande-ou-poisson",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Viande",
                                "slug": "viande",
                                "isVisible": true
                            },
                            {
                                "title": "Volaille",
                                "slug": "volaille",
                                "isVisible": true
                            },
                            {
                                "title": "Poisson",
                                "slug": "poisson",
                                "isVisible": true
                            },
                            {
                                "title": "Avec des oeufs",
                                "slug": "avec-des-oeufs",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Accompagnements",
                        "slug": "accompagnements",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Légumes",
                                "slug": "legumes",
                                "isVisible": true
                            },
                            {
                                "title": "Légumineuses",
                                "slug": "legumineuses",
                                "isVisible": true
                            },
                            {
                                "title": "Féculents et céréales",
                                "slug": "feculents-et-cereales",
                                "isVisible": true
                            },
                            {
                                "title": "Pâtes",
                                "slug": "pates",
                                "isVisible": true
                            },
                            {
                                "title": "Pommes de terre",
                                "slug": "pommes-de-terre",
                                "isVisible": true
                            },
                            {
                                "title": "Autres céréales",
                                "slug": "autres-cereales",
                                "isVisible": true
                            },
                            {
                                "title": "Riz",
                                "slug": "riz",
                                "isVisible": true
                            },
                            {
                                "title": "Sauces",
                                "slug": "sauces",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Plats complets",
                        "slug": "plats-complets",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Salades composées",
                                "slug": "salades-composees",
                                "isVisible": true
                            },
                            {
                                "title": "Quiches",
                                "slug": "quiches",
                                "isVisible": true
                            },
                            {
                                "title": "Plat complet",
                                "slug": "plat-complet",
                                "isVisible": true
                            },
                            {
                                "title": "Tartines & croques",
                                "slug": "tartines-croques",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Pains",
                        "slug": "pains",
                        "isVisible": true
                    }
                ]
            },
            {
                "title": "Exotique",
                "slug": "recettes-du-monde",
                "isVisible": false,
                "children": [
                    {
                        "title": "Recettes d'Afrique du Nord",
                        "slug": "recettes-afrique-nord",
                        "isVisible": true
                    },
                    {
                        "title": "Recettes d'Amérique du Nord",
                        "slug": "recettes-amerique-nord",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Cuisine Canadienne",
                                "slug": "cuisine-canadienne",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine des Etats-Unis",
                                "slug": "cuisine-etats-unis",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Recettes d'Amérique du Sud",
                        "slug": "recettes-amerique-sud",
                        "isVisible": true
                    },
                    {
                        "title": "Asie",
                        "slug": "asie",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Cuisine Cambodgienne",
                                "slug": "cuisine-cambodgienne",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Coréenne",
                                "slug": "cuisine-coreenne",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Indienne",
                                "slug": "cuisine-indienne",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Indonésienne",
                                "slug": "cuisine-indonesienne",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Japonaise",
                                "slug": "cuisine-japonaise",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Thaï",
                                "slug": "cuisine-thai",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Vietnamienne",
                                "slug": "cuisine-vietnamienne",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Recettes créoles",
                        "slug": "recettes-creoles",
                        "isVisible": true
                    },
                    {
                        "title": "Moyen Orient",
                        "slug": "moyen-orient",
                        "isVisible": true
                    },
                    {
                        "title": "Europe",
                        "slug": "europe-tourisme",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Cuisine de Grèce",
                                "slug": "cuisine-de-grece",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Espagnole",
                                "slug": "cuisine-espagnole",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Irlandaise",
                                "slug": "cuisine-irlandaise",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Islandaise",
                                "slug": "cuisine-islandaise",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Italienne",
                                "slug": "cuisine-italienne",
                                "isVisible": true
                            },
                            {
                                "title": "Cuisine Portugaise",
                                "slug": "cuisine-portugaise",
                                "isVisible": true
                            },
                            {
                                "title": "Royaume-Uni",
                                "slug": "royaume-uni-tourisme",
                                "isVisible": true
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Bio & végé",
                "slug": "bio-vege",
                "isVisible": true,
                "children": [
                    {
                        "title": "Recettes végétariennes",
                        "slug": "recettes-vegetariennes",
                        "isVisible": true
                    },
                    {
                        "title": "Recettes sans Gluten",
                        "slug": "sans-gluten",
                        "isVisible": true
                    },
                    {
                        "title": "Recettes saines & healthy food",
                        "slug": "recettes-saines-healthy-food",
                        "isVisible": true
                    },
                    {
                        "title": "Produits bio",
                        "slug": "produits-bio",
                        "isVisible": true
                    },
                    {
                        "title": "Cosmétiques maison",
                        "slug": "cosmetiques-maison",
                        "isVisible": true
                    }
                ]
            },
            {
                "title": "Boissons",
                "slug": "boissons",
                "isVisible": true,
                "children": [
                    {
                        "title": "Cocktails",
                        "slug": "cocktails",
                        "isVisible": true
                    },
                    {
                        "title": "Vins",
                        "slug": "vins",
                        "isVisible": true
                    },
                    {
                        "title": "Boissons chaudes",
                        "slug": "boissons-chaudes",
                        "isVisible": true
                    },
                    {
                        "title": "Thés",
                        "slug": "thes",
                        "isVisible": true
                    },
                    {
                        "title": "Smoothies et jus de fruits",
                        "slug": "smoothies",
                        "isVisible": true
                    },
                ]
            },
            {
                "title": "+ de recettes",
                "slug": "autres-recettes",
                "isVisible": true,
                "children": [
                    {
                        "title": "A emporter au bureau",
                        "slug": "a-emporter",
                        "isVisible": true
                    },
                    {
                        "title": "Vite fait bien fait",
                        "slug": "vite-fait-bien-fait",
                        "isVisible": true
                    },
                    {
                        "title": "Recettes économiques",
                        "slug": "menu-a-moins-de-5-euros",
                        "isVisible": true
                    },
                    {
                        "title": "Bébés et enfants",
                        "slug": "bebes-et-enfants",
                        "isVisible": true
                    },
                    {
                        "title": "Par ustensiles",
                        "slug": "ustensiles",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Multicuiseur",
                                "slug": "multicuiseur",
                                "isVisible": true
                            },
                            {
                                "title": "Robot cuiseur",
                                "slug": "robot-cuiseur",
                                "isVisible": true
                            },
                            {
                                "title": "Super Blender",
                                "slug": "super-blender",
                                "isVisible": true
                            },
                            {
                                "title": "Produits Tupperware",
                                "slug": "produits-tupperwares",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Par fêtes",
                        "slug": "par-fetes",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Chandeleur",
                                "slug": "chandeleur",
                                "isVisible": true
                            },
                            {
                                "title": "Nouvel an chinois",
                                "slug": "nouvel-an-chinois",
                                "isVisible": true
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Voyages",
                "slug": "voyages",
                "isVisible": true,
                "children": [
                    {
                        "title": "Récap de tous mes voyages",
                        "slug": "recap-voyages",
                        "isVisible": true
                    },
                    {
                        "title": "France",
                        "slug": "france",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Aquitaine Limousin Poitou Charentes",
                                "slug": "aquitaine",
                                "isVisible": true
                            },
                            {
                                "title": "Bourgogne Franche Comté",
                                "slug": "bourgogne",
                                "isVisible": true
                            },
                            {
                                "title": "Bretagne",
                                "slug": "bretagne",
                                "isVisible": true
                            },
                            {
                                "title": "Corse",
                                "slug": "corse",
                                "isVisible": true
                            },
                            {
                                "title": "Occitanie",
                                "slug": "occitanie",
                                "isVisible": true
                            },
                            {
                                "title": "Pays de la Loire",
                                "slug": "pays-de-la-loire",
                                "isVisible": true
                            },
                            {
                                "title": "Provence Alpes Côte d'Azur",
                                "slug": "provence-alpes",
                                "isVisible": true
                            },
                            {
                                "title": "Rhône Alpes",
                                "slug": "rhonealpes",
                                "isVisible": true
                            },
                            {
                                "title": "Ile de France",
                                "slug": "ile-de-france",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Destination en Europe",
                        "slug": "voyages-europe",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Amsterdam (City Guid)",
                                "slug": "amsterdam",
                                "isVisible": true
                            },
                            {
                                "title": "Barcelone (City Guid)",
                                "slug": "barcelone-city-guid",
                                "isVisible": true
                            },
                            {
                                "title": "Irlande",
                                "slug": "irlande",
                                "isVisible": true
                            },
                            {
                                "title": "Islande",
                                "slug": "islande",
                                "isVisible": true
                            },
                            {
                                "title": "Italie",
                                "slug": "italie",
                                "isVisible": true
                            },
                            {
                                "title": "Londres (City Guid)",
                                "slug": "londres-city-guid",
                                "isVisible": true
                            },
                            {
                                "title": "Malte",
                                "slug": "malte",
                                "isVisible": true
                            },
                            {
                                "title": "Royaume-Uni",
                                "slug": "royaume-uni",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Amériques",
                        "slug": "continent-ameriques",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "USA-OUEST",
                                "slug": "usa-ouest",
                                "isVisible": true
                            },
                            {
                                "title": "USA-EST",
                                "slug": "usa-est",
                                "isVisible": true,
                                "children": [
                                    {
                                        "title": "USA-Whashington DC",
                                        "slug": "usa-whashington",
                                        "isVisible": true
                                    }
                                ]
                            },
                            {
                                "title": "Canada-OUEST",
                                "slug": "canada-ouest",
                                "isVisible": true
                            },
                            {
                                "title": "Canada-EST",
                                "slug": "canada-est",
                                "isVisible": true
                            },
                            {
                                "title": "Brésil",
                                "slug": "bresil",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Afrique",
                        "slug": "afrique",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Maroc",
                                "slug": "maroc",
                                "isVisible": true
                            },
                            {
                                "title": "Sénégal",
                                "slug": "senegal",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Asie",
                        "slug": "asie-tourisme",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Bali",
                                "slug": "bali",
                                "isVisible": true
                            }
                        ]
                    },
                    {
                        "title": "Outre Mer",
                        "slug": "outre-mer",
                        "isVisible": true,
                        "children": [
                            {
                                "title": "Guadeloupe",
                                "slug": "guadeloupe",
                                "isVisible": true
                            },
                            {
                                "title": "Ile de la Réunion",
                                "slug": "ide-de-la-reunion",
                                "isVisible": true
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Adresses",
                "slug": "adresses-gourmandes",
                "isVisible": true,
                "children": [
                    {
                        "title": "Restaurants sur Bordeaux",
                        "slug": "restaurants-bordeaux",
                        "isVisible": true
                    },
                    {
                        "title": "Restaurants en Gironde",
                        "slug": "restaurants-gironde",
                        "isVisible": true
                    },
                    {
                        "title": "Autres restaurants en France",
                        "slug": "restaurants-france",
                        "isVisible": true
                    },
                    {
                        "title": "Adresses gourmandes",
                        "slug": "bonnes-adresses",
                        "isVisible": true
                    },
                    {
                        "title": "Oenotourisme",
                        "slug": "oenotourisme",
                        "isVisible": true
                    },
                    {
                        "title": "Hôtels, maisons d'hotes, résidences de vacances",
                        "slug": "hebergements",
                        "isVisible": true
                    },
                    {
                        "title": "SPA & Thalasso",
                        "slug": "spa-thalasso",
                        "isVisible": true
                    }
                ]
            },
            {
                "title": "Lifestyle",
                "slug": "lifestyle",
                "isVisible": true,
                "children": [
                    {
                        "title": "Lectures gourmandes",
                        "slug": "livres",
                        "isVisible": true
                    },
                    {
                        "title": "Mes futilités",
                        "slug": "futilites",
                        "isVisible": true
                    },
                    {
                        "title": "Cosmétiques maison",
                        "slug": "cosmetiques-maison",
                        "isVisible": true
                    },
                    {
                        "title": "SPA & Thalasso",
                        "slug": "spa-thalasso",
                        "isVisible": true
                    },
                    {
                        "title": "Bavardages",
                        "slug": "bavardages",
                        "isVisible": true
                    }
                ]
            },
            {
                "title": "+ d'infos",
                "slug": "dans-ma-cuisine",
                "isVisible": true,
                "children": [
                    {
                        "title": "Tout savoir sur",
                        "slug": "tous-savoir",
                        "isVisible": true
                    },
                    {
                        "title": "C'est nouveau et c'est bon",
                        "slug": "nouveau-bon",
                        "isVisible": true
                    },
                    {
                        "title": "Lectures gourmandes",
                        "slug": "livres",
                        "isVisible": true
                    },
                    {
                        "title": "Zoom sur les ingrédients",
                        "slug": "ingredients",
                        "isVisible": true
                    },
                    {
                        "title": "Matériel pour cuisiner",
                        "slug": "materiel",
                        "isVisible": true
                    },
                    {
                        "title": "Box",
                        "slug": "box",
                        "isVisible": true
                    },
                    {
                        "title": "Bavardages",
                        "slug": "bavardages",
                        "isVisible": true
                    }
                ]
            }
        ];
        this.categoriesTree = null;
    }

    /**
     * Construction de l'arbre de catégories
     * @param  {[array]}  tree       [Liste des éléments]
     * @param  {Boolean} isChildren [On traite une sous-catégorie]
     * @return {[void]}             []
     */
    buildRender(tree, isChildren, slug = null) {
        // Traitement des sous-catégories
        if(isChildren) {
            let result = <ul key={getRandomKey('category')} className="submenu">
            {
                tree.map(item => {
                    if(item.isVisible) {
                        let subtree;
                        // On traite un nouveau niveau de sous-catégorie
                        if(item.hasOwnProperty('children') && item.children.length > 0) {
                            let currentSlug = slug + '/' + item.slug;
                            let resultSubtree = this.buildRender(item.children, true, currentSlug);
                            subtree = <li key={getRandomKey('category')}><a href={this.dns+currentSlug}>{item.title}</a>{resultSubtree}</li>
                        } else {
                            subtree = <li key={getRandomKey('category')}><a href={this.dns+slug+'/'+item.slug}>{item.title}</a></li>
                        }
                        return subtree;
                    }
                })
            }
            </ul>;
            return result;
        } else {
            this.categoriesTree = <ul key={getRandomKey('category')}>
            {
                tree.map(item => {
                    if(item.isVisible) {
                        let subtree;
                        // Traitement des sous-catégories
                        if(item.hasOwnProperty('children') && item.children.length > 0) {
                            let resultSubtree = this.buildRender(item.children, true, item.slug);
                            subtree = <li key={getRandomKey('category')}><a href={this.dns+item.slug}>{item.title.toUpperCase()}</a>{resultSubtree}</li>;
                        } else {
                            subtree = <li key={getRandomKey('category')}><a href={this.dns+item.slug}>{item.title}</a></li>;
                        }
                        return subtree;
                    }
                })
            }
            </ul>
        }
    }

    render() {
        // Construction du rendu
        this.buildRender(this.categoriesDefinition, false);
        return (
            <nav className="categories">
                {this.categoriesTree}
            </nav>
        );
    }

}

export default Categories;
