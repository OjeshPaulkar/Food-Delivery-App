import React from "react";
import ReactDOM from "react-dom/client";

/*
-Header
    -logo
    -NavBar
-Banner
    -PopularReataurantCards
-Body
    -Search
    -Restaurant Container
        -Restaurant Card
-Footer
*/

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" alt="pandaLogo" src="https://static.vecteezy.com/system/resources/previews/020/437/794/non_2x/panda-logo-food-vector.jpg"></img>
            </div>

            <div className="nav-container">
                <ul>
                    <li>Sign Up</li>
                    <li>Log In</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
//Config Driven UI
const RestaurantsList = [
                  {
                    "info": {
                      "id": "588619",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
                      "locality": "Brigade Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.9K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-01 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "317"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-591bc3ea-8eb1-4d72-a2f4-d27e89ffc16a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "43836",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
                      "locality": "MG Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "25K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-01 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-591bc3ea-8eb1-4d72-a2f4-d27e89ffc16a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "5938",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG",
                      "locality": "Tasker Town",
                      "areaName": "Shivaji Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "37K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-01 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-591bc3ea-8eb1-4d72-a2f4-d27e89ffc16a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "23847",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/19/d34d7f08-005c-47d7-abcb-51e7dd790e09_23847.jpg",
                      "locality": "MG Road",
                      "areaName": "Brigade Road",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2456",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-30 22:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "4.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-591bc3ea-8eb1-4d72-a2f4-d27e89ffc16a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "696232",
                      "name": "ITC Aashirvaad Soul Creations",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/7/9136e4f0-b056-4b70-b3cd-513f80ae8d91_696232.jpg",
                      "locality": "Shivaji Nagar",
                      "areaName": "Dispensary Rd",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Indian",
                        "Home Food",
                        "Healthy Food"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "346141",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-01 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-591bc3ea-8eb1-4d72-a2f4-d27e89ffc16a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/itc-aashirvaad-soul-creations-shivaji-nagar-dispensary-rd-rest696232",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "63048",
                      "name": "Sharief Bhai Biryani",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/26/eea1853f-f310-4875-9e9d-22c0135d0f20_63048.jpg",
                      "locality": "Frazer Town",
                      "areaName": "Frazer Town",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Arabian",
                        "South Indian",
                        "Rolls & Wraps",
                        "Street Food",
                        "Fast Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "469102",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "46K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-30 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "2.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-591bc3ea-8eb1-4d72-a2f4-d27e89ffc16a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-frazer-town-rest63048",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                        "id": "690730",
                        "name": "Omm Nom Nomm",
                        "cloudinaryImageId": "0b6ccedf0af57a82ecea2910397bb947",
                        "locality": "BTM Layout",
                        "areaName": "Koramangala",
                        "costForTwo": "₹600 for two",
                        "cuisines": [
                            "Ice Cream",
                            "Desserts"
                        ],
                        "avgRating": 4.8,
                        "parentId": "21184",
                        "avgRatingString": "4.8",
                        "totalRatingsString": "1.6K+",
                        "sla": {
                            "deliveryTime": 30,
                            "lastMileTravel": 6.7,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "6.7 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {},
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/omm-nom-nomm-btm-layout-koramangala-rest690730",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "684427",
                        "name": "Cafe Amudham",
                        "cloudinaryImageId": "e62351117b87978ba8af4c541d834053",
                        "locality": "Wilson Garden",
                        "areaName": "Jayanagar",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "South Indian",
                            "Snacks"
                        ],
                        "avgRating": 4.6,
                        "veg": true,
                        "parentId": "396620",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "7.2K+",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 4.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "4.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:59:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                    "description": "OnlyOnSwiggy"
                                }
                            ],
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "OnlyOnSwiggy",
                                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                            }
                                        }
                                    ]
                                },
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.3",
                                "ratingCount": "3.2K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/cafe-amudham-wilson-garden-jayanagar-rest684427",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "80118",
                        "name": "Taco Bell",
                        "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
                        "locality": "Ashok Nagar",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "Mexican",
                            "Fast Food",
                            "Snacks"
                        ],
                        "avgRating": 4.3,
                        "parentId": "1557",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "7.5K+",
                        "sla": {
                            "deliveryTime": 34,
                            "lastMileTravel": 2.5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "2.5 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.1",
                                "ratingCount": "511"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/taco-bell-ashok-nagar-rest80118",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "570511",
                        "name": "Bakingo",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/4116f512-3b8d-4148-9f29-bfff041dca14_570511.JPG",
                        "locality": "Puhlong X-road",
                        "areaName": "Vasanth Nagar",
                        "costForTwo": "₹299 for two",
                        "cuisines": [
                            "Bakery",
                            "Desserts",
                            "Beverages",
                            "Snacks"
                        ],
                        "avgRating": 4.6,
                        "parentId": "3818",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "3.2K+",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 3.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "3.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 01:00:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "Ratnesh_Badges/perfect-cake-3.svg",
                                    "shortDescription": "Perfect cake delivery",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "Ratnesh_Badges/perfect-cake-3.svg",
                                                "shortDescription": "Perfect cake delivery"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹120"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "10212",
                        "name": "Hotel Tom's Restaurant",
                        "cloudinaryImageId": "s4khfhdh0h06d9kjeilr",
                        "locality": "Brigade Road",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "Mangalorean",
                            "Biryani",
                            "Seafood",
                            "Chinese",
                            "North Indian",
                            "Desserts",
                            "South Indian"
                        ],
                        "avgRating": 4.5,
                        "parentId": "5296",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "33K+",
                        "sla": {
                            "deliveryTime": 21,
                            "lastMileTravel": 2.3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-25 mins",
                            "lastMileTravelString": "2.3 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.3",
                                "ratingCount": "1.9K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/hotel-toms-restaurant-brigade-road-central-bangalore-rest10212",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "396108",
                        "name": "Suzy Q",
                        "cloudinaryImageId": "als9xfk5lkrvizbq3lhx",
                        "locality": "Cunningham Road",
                        "areaName": "Cunningham Road",
                        "costForTwo": "₹800 for two",
                        "cuisines": [
                            "Indian",
                            "Continental",
                            "Seafood",
                            "Asian",
                            "Chaat",
                            "Desserts"
                        ],
                        "avgRating": 4.5,
                        "parentId": "454247",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "1.5K+",
                        "sla": {
                            "deliveryTime": 23,
                            "lastMileTravel": 1.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-25 mins",
                            "lastMileTravelString": "1.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:30:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "newg.png",
                                    "description": "Gourmet"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "Gourmet",
                                                "imageId": "newg.png"
                                            }
                                        }
                                    ]
                                },
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "30% OFF",
                            "subHeader": "UPTO ₹75"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.4",
                                "ratingCount": "3.6K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/suzy-q-cunningham-road-rest396108",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "279060",
                        "name": "Sikandar Rolls",
                        "cloudinaryImageId": "m6c0uvtstsvvnzb99fkm",
                        "locality": "MG Road",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "Kebabs",
                            "rolls",
                            "Biryani",
                            "Beverages"
                        ],
                        "avgRating": 4.7,
                        "parentId": "470950",
                        "avgRatingString": "4.7",
                        "totalRatingsString": "1.8K+",
                        "sla": {
                            "deliveryTime": 26,
                            "lastMileTravel": 1.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "1.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:15:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "5.0",
                                "ratingCount": "1"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/sikandar-rolls-mg-road-central-bangalore-rest279060",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "708690",
                        "name": "Klava- Turkish Patisserie",
                        "cloudinaryImageId": "827bcae3a180486b902909067c42b3d9",
                        "locality": "Brigade Rd",
                        "areaName": "Brigade Road",
                        "costForTwo": "₹700 for two",
                        "cuisines": [
                            "Turkish",
                            "Desserts",
                            "Bakery",
                            "Sweets",
                            "Cafe"
                        ],
                        "avgRating": 4.4,
                        "parentId": "473578",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "247",
                        "sla": {
                            "deliveryTime": 17,
                            "lastMileTravel": 2.1,
                            "serviceability": "SERVICEABLE",
                            "slaString": "15-20 mins",
                            "lastMileTravelString": "2.1 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 02:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "10% OFF",
                            "subHeader": "UPTO ₹40"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/klava-turkish-patisserie-brigade-rd-brigade-road-rest708690",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "93802",
                        "name": "Anupams Coast II Coast",
                        "cloudinaryImageId": "z8jrw92shibhw4cqkfmu",
                        "locality": "Church Street",
                        "areaName": "Church Street",
                        "costForTwo": "₹1200 for two",
                        "cuisines": [
                            "Mangalorean",
                            "Chinese",
                            "North Indian",
                            "Mughlai",
                            "Punjabi",
                            "Awadhi"
                        ],
                        "avgRating": 4.3,
                        "parentId": "7360",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "1.2K+",
                        "sla": {
                            "deliveryTime": 19,
                            "lastMileTravel": 2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "15-20 mins",
                            "lastMileTravelString": "2.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {},
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.3",
                                "ratingCount": "2.0K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/anupams-coast-ii-coast-church-street-rest93802",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "556423",
                        "name": "Luckhnow Street",
                        "cloudinaryImageId": "bzgmtshz0tgqxppwqsfl",
                        "locality": "Church Street",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                            "Kebabs",
                            "Biryani",
                            "Awadhi"
                        ],
                        "avgRating": 4.2,
                        "parentId": "437646",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "502",
                        "sla": {
                            "deliveryTime": 18,
                            "lastMileTravel": 1.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "15-20 mins",
                            "lastMileTravelString": "1.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:15:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/luckhnow-street-church-street-ashok-nagar-rest556423",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "836274",
                        "name": "Chalukya Samrat Cafe Since 1977",
                        "cloudinaryImageId": "7a5d73bfc2f0b293750e0497fddacc63",
                        "locality": "Shanthala Nagar",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                            "Cafe",
                            "Fast Food",
                            "Indian",
                            "Chinese"
                        ],
                        "avgRating": 4.5,
                        "parentId": "496536",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "717",
                        "sla": {
                            "deliveryTime": 18,
                            "lastMileTravel": 1.4,
                            "serviceability": "SERVICEABLE",
                            "slaString": "15-20 mins",
                            "lastMileTravelString": "1.4 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "25% OFF",
                            "subHeader": "UPTO ₹65"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/chalukya-samrat-cafe-since-1977-shanthala-nagar-central-bangalore-rest836274",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "854792",
                        "name": "Kamats Palate Korner",
                        "cloudinaryImageId": "b33020eb6608b35bc925b8cf8614b418",
                        "locality": " Rajaram Mohan Roy road",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹700 for two",
                        "cuisines": [
                            "Chinese",
                            "Biryani",
                            "Tandoor",
                            "Healthy Food"
                        ],
                        "avgRating": 4.5,
                        "parentId": "502436",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "106",
                        "sla": {
                            "deliveryTime": 14,
                            "lastMileTravel": 0.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "10-15 mins",
                            "lastMileTravelString": "0.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {},
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/kamats-palate-korner-rajaram-mohan-roy-road-central-bangalore-rest854792",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "17118",
                        "name": "Social",
                        "cloudinaryImageId": "uvdkvtb6ibzjn1aol15k",
                        "locality": "Church Street",
                        "areaName": "Church Street",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                            "Chinese",
                            "Fast Food",
                            "Biryani",
                            "Pizzas",
                            "Salads",
                            "Kebabs",
                            "Juices",
                            "Desserts",
                            "Beverages"
                        ],
                        "avgRating": 4.5,
                        "parentId": "2146",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "8.4K+",
                        "sla": {
                            "deliveryTime": 24,
                            "lastMileTravel": 1.5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-25 mins",
                            "lastMileTravelString": "1.5 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:30:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹125 OFF",
                            "subHeader": "ABOVE ₹249",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.2",
                                "ratingCount": "15K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/social-church-street-rest17118",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "699958",
                        "name": "Everything Rice",
                        "cloudinaryImageId": "d208c5ee2a0dcec4f5c31664880cf9b4",
                        "locality": "KSR Bengaluru",
                        "areaName": "Majestic",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "South Indian",
                            "Indian",
                            "Snacks",
                            "Chaat",
                            "Biryani",
                            "Kebabs",
                            "Chinese",
                            "Fast Food"
                        ],
                        "avgRating": 3.6,
                        "parentId": "245314",
                        "avgRatingString": "3.6",
                        "totalRatingsString": "9",
                        "sla": {
                            "deliveryTime": 36,
                            "lastMileTravel": 3.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "3.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹125 OFF",
                            "subHeader": "ABOVE ₹299",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.5",
                                "ratingCount": "100"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/everything-rice-ksr-bengaluru-majestic-rest699958",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "457818",
                        "name": "Istah - The Mediterranean Way",
                        "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
                        "locality": "Seshadripuram",
                        "areaName": "Malleshwaram",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                            "Mediterranean",
                            "Biryani",
                            "Snacks",
                            "Grill",
                            "Kebabs",
                            "Arabian",
                            "Lebanese",
                            "Beverages",
                            "Desserts",
                            "Italian",
                            "Turkish"
                        ],
                        "avgRating": 4.5,
                        "parentId": "3518",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "3.1K+",
                        "sla": {
                            "deliveryTime": 38,
                            "lastMileTravel": 5.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "5.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 01:00:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "Rxawards/_CATEGORY-Rolls.png",
                                    "description": "Delivery!"
                                },
                                {
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                    "description": "OnlyOnSwiggy"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "Delivery!",
                                                "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                            }
                                        },
                                        {
                                            "attributes": {
                                                "description": "OnlyOnSwiggy",
                                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                            }
                                        }
                                    ]
                                },
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹110"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/istah-the-mediterranean-way-seshadripuram-malleshwaram-rest457818",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "643832",
                        "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/59e251dc-b6d9-4566-97c3-931b83ef7061_643832.JPG",
                        "locality": "Langford Road",
                        "areaName": "Santhinagar",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                            "Healthy Food",
                            "Salads",
                            "Keto",
                            "Snacks"
                        ],
                        "avgRating": 4.7,
                        "parentId": "355285",
                        "avgRatingString": "4.7",
                        "totalRatingsString": "439",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 2.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-30 mins",
                            "lastMileTravelString": "2.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 02:00:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "brand"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹100 OFF",
                            "subHeader": "ABOVE ₹299",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-rest643832",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "503003",
                        "name": "ZAZA Mughal Biryani",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d26bdfca-3b50-41ea-87e1-e7f9a6b0581d_503003.jpg",
                        "locality": "Lakshmi Nagar Road",
                        "areaName": "Shanti Nagar",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                            "Biryani",
                            "North Indian",
                            "Awadhi"
                        ],
                        "avgRating": 4.4,
                        "parentId": "22473",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "380",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 2.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-30 mins",
                            "lastMileTravelString": "2.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 02:00:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹100 OFF",
                            "subHeader": "ABOVE ₹299",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-lakshmi-nagar-road-shanti-nagar-rest503003",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "503002",
                        "name": "NH1 Bowls - Highway To North",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/34185028-1357-4551-a4f4-0d545597a73e_503002.JPG",
                        "locality": "Lakshmi Road",
                        "areaName": "Shanti Nagar",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                            "North Indian",
                            "Punjabi",
                            "Home Food"
                        ],
                        "avgRating": 4.6,
                        "parentId": "22452",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "556",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 2.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-30 mins",
                            "lastMileTravelString": "2.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 02:00:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹100 OFF",
                            "subHeader": "ABOVE ₹299",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-rest503002",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "902512",
                        "name": "Sharma's Kulche",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/6/b8cac488-cbee-43b4-966c-56dffbf9e484_902512.jpg",
                        "locality": "National High School Road",
                        "areaName": "Basavanagudi",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "Chaat"
                        ],
                        "avgRating": 4.1,
                        "veg": true,
                        "parentId": "425230",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "21",
                        "sla": {
                            "deliveryTime": 27,
                            "lastMileTravel": 3.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "3.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "40% OFF",
                            "subHeader": "UPTO ₹80"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "isNewlyOnboarded": true,
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/sharmas-kulche-national-high-school-road-basavanagudi-rest902512",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "2832",
                        "name": "Lakeview Milk Bar",
                        "cloudinaryImageId": "juzrypje6zlbu2jgebwm",
                        "locality": "MG Road",
                        "areaName": "MG Road",
                        "costForTwo": "₹450 for two",
                        "cuisines": [
                            "Desserts",
                            "Ice Cream",
                            "Bakery"
                        ],
                        "avgRating": 4.5,
                        "parentId": "585",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "17K+",
                        "sla": {
                            "deliveryTime": 17,
                            "lastMileTravel": 1.5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "15-20 mins",
                            "lastMileTravelString": "1.5 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:59:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "30% OFF",
                            "subHeader": "UPTO ₹75"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.1",
                                "ratingCount": "11K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/lakeview-milk-bar-mg-road-rest2832",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "70499",
                        "name": "Imperial Restaurant Since 1954",
                        "cloudinaryImageId": "bc2f7e70b995b4095617b21adcde553b",
                        "locality": "Residency Road",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "Tandoor",
                            "Biryani",
                            "Kerala",
                            "South Indian",
                            "Chinese",
                            "Beverages"
                        ],
                        "avgRating": 4.4,
                        "parentId": "472273",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "12K+",
                        "sla": {
                            "deliveryTime": 17,
                            "lastMileTravel": 2.3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "15-20 mins",
                            "lastMileTravelString": "2.3 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:59:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "10% OFF",
                            "subHeader": "UPTO ₹40"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.0",
                                "ratingCount": "8.1K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/imperial-restaurant-since-1954-residency-road-central-bangalore-rest70499",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "86443",
                        "name": "NIC Ice Creams",
                        "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
                        "locality": "Pulikeshi Nagar",
                        "areaName": "Frazer Town",
                        "costForTwo": "₹120 for two",
                        "cuisines": [
                            "Ice Cream",
                            "Desserts"
                        ],
                        "avgRating": 4.7,
                        "veg": true,
                        "parentId": "6249",
                        "avgRatingString": "4.7",
                        "totalRatingsString": "8.5K+",
                        "sla": {
                            "deliveryTime": 21,
                            "lastMileTravel": 4.7,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-25 mins",
                            "lastMileTravelString": "4.7 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/nic-ice-creams-pulikeshi-nagar-frazer-town-rest86443",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "29673",
                        "name": "Natural Ice Cream",
                        "cloudinaryImageId": "on12tk5aqza0stxxsqhc",
                        "locality": "St. Marks Road",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹150 for two",
                        "cuisines": [
                            "Ice Cream",
                            "Desserts"
                        ],
                        "avgRating": 4.7,
                        "parentId": "2093",
                        "avgRatingString": "4.7",
                        "totalRatingsString": "10K+",
                        "sla": {
                            "deliveryTime": 11,
                            "lastMileTravel": 0.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "10-15 mins",
                            "lastMileTravelString": "0.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 00:00:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                                    "description": "Delivery!"
                                },
                                {
                                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                                    "description": "Delivery!"
                                },
                                {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "Delivery!",
                                                "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                                            }
                                        },
                                        {
                                            "attributes": {
                                                "description": "Delivery!",
                                                "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                            }
                                        },
                                        {
                                            "attributes": {
                                                "description": "pureveg",
                                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                                            }
                                        }
                                    ]
                                },
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "10% OFF",
                            "subHeader": "UPTO ₹40"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.4",
                                "ratingCount": "1.1K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/natural-ice-cream-st-marks-road-central-bangalore-rest29673",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "688434",
                        "name": "Kwality Walls Ice Cream and More",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/dfea08dc-9227-4ce8-addb-72012b13f58d_688434.JPG",
                        "locality": "WEST PORTION",
                        "areaName": "Shanthinagar",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                            "Desserts",
                            "Ice Cream",
                            "Ice Cream Cakes"
                        ],
                        "avgRating": 4.4,
                        "veg": true,
                        "parentId": "582",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "88",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 2.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "2.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:59:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "pureveg",
                                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                                            }
                                        }
                                    ]
                                },
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹100 OFF",
                            "subHeader": "ABOVE ₹349",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-west-portion-shanthinagar-rest688434",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "42577",
                        "name": "Cream Stone Ice Cream",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/88f0b679-8ab8-40e1-b742-65e3cf2e00c8_42577.jpg",
                        "locality": "Frazer Town",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "Ice Cream",
                            "Desserts",
                            "Beverages"
                        ],
                        "avgRating": 4.5,
                        "parentId": "289",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "9.2K+",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 4.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "4.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:59:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹120"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.2",
                                "ratingCount": "1.5K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/cream-stone-ice-cream-frazer-town-central-bangalore-rest42577",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "527591",
                        "name": "Wow! Momo",
                        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                        "locality": "Church Street",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "Tibetan",
                            "Healthy Food",
                            "Asian",
                            "Chinese",
                            "Snacks",
                            "Continental",
                            "Desserts",
                            "Beverages"
                        ],
                        "avgRating": 4.2,
                        "parentId": "1776",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "443",
                        "sla": {
                            "deliveryTime": 20,
                            "lastMileTravel": 1.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "15-20 mins",
                            "lastMileTravelString": "1.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 02:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "ITEMS",
                            "subHeader": "AT ₹89"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/wow-momo-church-street-ashok-nagar-rest527591",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "356343",
                        "name": "The Belgian Waffle Co.",
                        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                        "locality": "Nehrunagar Main Road",
                        "areaName": "Seshadripuram",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                            "Waffle",
                            "Desserts",
                            "Ice Cream",
                            "Beverages"
                        ],
                        "avgRating": 4.6,
                        "veg": true,
                        "parentId": "2233",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "2.3K+",
                        "sla": {
                            "deliveryTime": 44,
                            "lastMileTravel": 4.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "40-45 mins",
                            "lastMileTravelString": "4.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-10-01 00:00:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                                    "description": "Delivery!"
                                },
                                {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "Delivery!",
                                                "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                                            }
                                        },
                                        {
                                            "attributes": {
                                                "description": "pureveg",
                                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                                            }
                                        }
                                    ]
                                },
                                "textBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-nehrunagar-main-road-seshadripuram-rest356343",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "396747",
                        "name": "LunchBox - Meals and Thalis",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/a38d2d48-014e-4fa7-b1ad-fe2d02d5ea65_396747.jpg",
                        "locality": "Residency Road",
                        "areaName": "Shantinagar",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                            "Biryani",
                            "North Indian",
                            "Punjabi",
                            "Healthy Food",
                            "Desserts",
                            "Beverages"
                        ],
                        "avgRating": 4.2,
                        "parentId": "4925",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "1.8K+",
                        "sla": {
                            "deliveryTime": 37,
                            "lastMileTravel": 2.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "2.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:59:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "ITEMS",
                            "subHeader": "AT ₹159"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/lunchbox-meals-and-thalis-residency-road-shantinagar-rest396747",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                    "info": {
                        "id": "396742",
                        "name": "Behrouz Biryani",
                        "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
                        "locality": "Residency Road",
                        "areaName": "Shantinagar",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                            "Biryani",
                            "North Indian",
                            "Kebabs",
                            "Mughlai",
                            "Lucknowi",
                            "Hyderabadi",
                            "Desserts",
                            "Beverages"
                        ],
                        "avgRating": 4.3,
                        "parentId": "1803",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "1.1K+",
                        "sla": {
                            "deliveryTime": 26,
                            "lastMileTravel": 2.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "2.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2024-09-30 23:59:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹95"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                        "context": "seo-data-85b1f7ba-86db-4a7d-a787-0bd11f1b8198"
                    },
                    "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/behrouz-biryani-residency-road-shantinagar-rest396742",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                }
                ];

const RestaurantCards = ({resData}) => {
    // const {resData}  = prop;

    const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines } = resData?.info;
    return (<div>
                <div className="res-card">
                    <img className="card-image" 
                         alt="rest-image" 
                         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
                    <h3>{name}</h3>
                    <span>Rating {avgRating}</span>
                    <span>{deliveryTime}</span>
                    <h4>{cuisines.join(", ")}</h4>
                </div>
             </div>
)}

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input className="search" placeholder="Find Restaurants"></input>
                <button className="searchButton">Search</button>
            </div>

            <div className="res-cards-container">
            { RestaurantsList.map((restaurant) => {
                   return <RestaurantCards key={restaurant.info.id} resData = {restaurant} />
                })}
            </div>

        </div>
    )
}


const AppLayout = () => {
  return (<div id="appRoot">
        <Header />
        <BodyComponent />
    </div>
)}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



