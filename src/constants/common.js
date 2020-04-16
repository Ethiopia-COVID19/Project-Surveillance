const COUNTRY_KEYS = [
  "Angola",
  "Anguilla",
  "Antarctica",
  "AntiguaandBarbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "BosniaandHerzegovina",
  "Botswana",
  "BouvetIsland",
  "Brazil",
  "BritishIndianOceanTerritory",
  "BruneiDarussalam",
  "Bulgaria",
  "BurkinaFaso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "CapeVerde",
  "CaymanIslands",
  "CentralAfricanRepublic",
  "Chad",
  "Chile",
  "China",
  "ChristmasIsland",
  "CocosKeelingIslands",
  "Colombia",
  "Comoros",
  "Congo",
  "CongoTheDemocraticRepublicofthe",
  "CookIslands",
  "CostaRica",
  "CoteDIvoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "CzechRepublic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "DominicanRepublic",
  "Ecuador",
  "Egypt",
  "ElSalvador",
  "EquatorialGuinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "FalklandIslandsMalvinas",
  "FaroeIslands",
  "Fiji",
  "Finland",
  "France",
  "FrenchGuiana",
  "FrenchPolynesia",
  "FrenchSouthernTerritories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "GuineaBissau",
  "Guyana",
  "Haiti",
  "HeardIslandandMcdonaldIslands",
  "HolySeeVaticanCityState",
  "Honduras",
  "HongKong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "IranIslamicRepublicOf",
  "Iraq",
  "Ireland",
  "IsleofMan",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "KoreaDemocraticPeopleSRepublicof",
  "KoreaRepublicof",
  "Kuwait",
  "Kyrgyzstan",
  "LaoPeopleSDemocraticRepublic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "LibyanArabJamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "MacedoniaTheFormerYugoslavRepublicof",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "MarshallIslands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "MicronesiaFederatedStatesof",
  "MoldovaRepublicof",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "NetherlandsAntilles",
  "NewCaledonia",
  "NewZealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "NorfolkIsland",
  "NorthernMarianaIslands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "PalestinianTerritoryOccupied",
  "Panama",
  "PapuaNewGuinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "PuertoRico",
  "Qatar",
  "Reunion",
  "Romania",
  "RussianFederation",
  "RWANDA",
  "SaintHelena",
  "SaintKittsandNevis",
  "SaintLucia",
  "SaintPierreandMiquelon",
  "SaintVincentandtheGrenadines",
  "Samoa",
  "SanMarino",
  "SaoTomeandPrincipe",
  "SaudiArabia",
  "Senegal",
  "SerbiaandMontenegro",
  "Seychelles",
  "SierraLeone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "SolomonIslands",
  "Somalia",
  "SouthAfrica",
  "SouthGeorgiaandtheSouthSandwichIslands",
  "Spain",
  "SriLanka",
  "Sudan",
  "Suriname",
  "SvalbardandJanMayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "SyrianArabRepublic",
  "TaiwanProvinceofChina",
  "Tajikistan",
  "TanzaniaUnitedRepublicof",
  "Thailand",
  "TimorLeste",
  "Togo",
  "Tokelau",
  "Tonga",
  "TrinidadandTobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "TurksandCaicosIslands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "UnitedArabEmirates",
  "UnitedKingdom",
  "UnitedStates",
  "UnitedStatesMinorOutlyingIslands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "VietNam",
  "VirginIslandsBritish",
  "VirginIslandsUS",
  "WallisandFutuna",
  "WesternSahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const OCCUPATION_KEYS = ["hcp", "airport", "merchant", "other"];

const UNDERLYING = [
  "chronicLungDisease",
  "heartDisease",
  "liverDisease",
  "renalDisease",
  "autoimmuneDisease",
  "cancer",
  "diabetes",
  "hiv",
  "pregnancy",
];

const SEX_VALUE = {
  property: "sex",
  female: "F",
  male: "M",
};

const REGION_KEYS = [
  "addisAbaba",
  "afar",
  "amhara",
  "benishangul",
  "direDawa",
  "gambella",
  "harari",
  "oromia",
  "somali",
  "southern",
  "tigray",
];
const ADDRESS = [
  "country",
  "region",
  "city",
  "postalCode",
  "street",
  "building",
];

const SYMPTOMS = [
  "fever",
  "cough",
  "shortnessOfBreath",
  "fatigue",
  "headache",
  "runnyNose",
  "feelingUnwell",
];
const SUBCITY_KEYS = [
  "addisKetema",
  "akakiKality",
  "arada",
  "bole",
  "gulele",
  "kirkos",
  "kolfe",
  "lideta",
  "nifasSilkLafto",
  "yeka",
];
const NATIONALITY_KEYS = ["ethiopian", "other"];

const CALLERTYPE_KEYS = ["callerType1", "callerType2"];

const HOTEL_KEYS = ["skylight", "ghion", "azzeman", "sapphire", "other"];

export {
  OCCUPATION_KEYS,
  UNDERLYING,
  ADDRESS,
  SYMPTOMS,
  SUBCITY_KEYS,
  SEX_VALUE,
  REGION_KEYS,
  NATIONALITY_KEYS,
  CALLERTYPE_KEYS,
  HOTEL_KEYS,
  COUNTRY_KEYS,
};
