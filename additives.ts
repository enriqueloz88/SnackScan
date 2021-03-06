export const additives: {
  code: string;
  description?: { en: string; es?: string };
  name: { en: string; es?: string };
  /** Unkown if not defined */ toxicity?: 'High' | 'Medium' | 'Low';
  sources?: string[];
}[] = [
  {
    code: 'E100',
    description: {
      en: 'Natural yellowish colorant from turmeric, a spice obtained from the rhizome of the plant of the same name, cultivated mainly in India and used since ancient times for various applications',
      es: 'Colorante natural de tono amarillento procedente de la cúrcuma, especia obtenida del rizoma de la planta del mismo nombre, cultivada principalmente en la India y utilizada desde la antigüedad para diversas aplicaciones.',
    },
    name: {
      en: 'Curcumin',
      es: 'Curcuminas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E100i',
    description: {
      en: 'Natural yellowish colorant from turmeric, a spice obtained from the rhizome of the plant of the same name, cultivated mainly in India and used since ancient times for various applications',
      es: 'Colorante natural de tono amarillento procedente de la cúrcuma, especia obtenida del rizoma de la planta del mismo nombre, cultivada principalmente en la India y utilizada desde la antigüedad para diversas aplicaciones.',
    },
    name: {
      en: 'Curcumina',
      es: 'Curcumina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E100ii',
    description: {
      en: 'Natural yellowish colorant from turmeric, a spice obtained from the rhizome of the plant of the same name, cultivated mainly in India and used since ancient times for various applications',
      es: 'Colorante natural de tono amarillento procedente de la cúrcuma, especia obtenida del rizoma de la planta del mismo nombre, cultivada principalmente en la India y utilizada desde la antigüedad para diversas aplicaciones.',
    },
    name: {
      en: 'Cúrcuma',
      es: 'Cúrcuma',
    },
    toxicity: 'Low',
  },
  {
    code: 'E101',
    description: {
      en: 'Naturally occurring B group vitamin usually obtained from yeast or produced synthetically',
    },
    name: {
      en: 'Riboflavin or lactoflavin',
      es: 'Riboflavinas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E101i',
    name: {
      en: 'Riboflavina',
      es: 'Riboflavina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E101ii',
    name: {
      en: 'Fosfato de Riboflavina',
      es: 'Fosfato de Riboflavina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E101iii',
    name: {
      en: 'Riboflavina de Bacillus Subtilis',
      es: 'Riboflavina de Bacillus Subtilis',
    },
    toxicity: 'Low',
  },
  {
    code: 'E102',
    description: {
      es: 'Este compuesto se disuelve en agua, tornandose mas amarillo a medida que su cantidad aumenta en la disolución. Se utiliza habitualmente en postres, chicles, gominolas, bebidas energeticas y snacks. <br> Muchos colorantes de esta familia (no los autorizados para uso alimentario) han demostrado ser cancerígenos, aunque no existen evidencias de este asi lo sea. Existen evidencias de que sin embargo, este compuesto mezclado con otros aditivos puede causar hiperactividad en menores',
      en: 'This compound dissolves in water, turning more yellow as its amount increases in solution. It is commonly used in desserts, gum, gummies, energy drinks and snacks. <br> Many colorants of this family (not those authorized for food use) have been shown to be carcinogenic, although there is no evidence of this being so. However, there is evidence that this compound mixed with other additives can cause hyperactivity in minors',
    },
    name: {
      en: 'Tartrazine',
      es: 'Tartrazina',
    },
    toxicity: 'High',
    sources: [
      "McCann y col. (2007) 'Food additives and hyperactive behaviour in 3-year-old and 8/9-year-old children in the community: a randomised, double-blinded, placebo-controlled trial.' Lancet. 370(9598):1560-7.",
    ],
  },
  {
    code: 'E103',
    name: {
      en: 'Crisoína',
      es: 'Crisoína',
    },
    toxicity: 'High',
  },
  {
    code: 'E104',
    description: {
      en: 'This compound dissolves in water, turning yellow. There are studies that indicate that it increases hyperactivity in children and in case of excessive ingestion, it can cause allergic reactions (dermatitis). <br> The use of this dye is banned in the United States, Australia, Japan and Norway.',
      es: 'Este compuesto se disuelve en agua, tornandose amarillo. Hay estudios que indican que incrementa la hiperactividad en los niños y en caso de ingestas excesivas, puede ocasionar reacciones alérgicas (dermatitis). <br> El uso de este colorante está prohibido en Estados Unidos, Australia, Japón y Noruega.',
    },
    name: {
      en: 'Quinoline Yellow',
      es: 'Amarillo de Quinoleína',
    },
    toxicity: 'High',
    sources: [
      "McCann y col. (2007) 'Food additives and hyperactive behaviour in 3-year-old and 8/9-year-old children in the community: a randomised, double-blinded, placebo-controlled trial.' Lancet. 370(9598):1560-7.",
      "<a href='https://en.wikipedia.org/wiki/Quinoline_Yellow_WS'>Quinoline Yellow on Wikipedia</a>",
    ],
  },
  {
    code: 'E105',
    name: {
      en: 'Amarillo Sólido',
      es: 'Amarillo Sólido',
    },
    toxicity: 'High',
  },
  {
    code: 'E107',
    name: {
      en: 'Amarillo 2G',
      es: 'Amarillo 2G',
    },
    toxicity: 'High',
  },
  {
    code: 'E110',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Sunset Yellow',
      es: 'Amarillo Ocaso FCF',
    },
    toxicity: 'High',
  },
  {
    code: 'E111',
    name: {
      en: 'Naranja GGN',
      es: 'Naranja GGN',
    },
    toxicity: 'High',
  },
  {
    code: 'E120',
    description: {
      en: 'Natural red colour obtained from egg yolk and dried insects. Can be manufactured',
      es: 'Tambien conocido como Carmín, aporta un color rojo intenso a los alimentos. Se obtiene sobre todo de aplastar insectos de la familia de los Dactylopius',
    },
    name: {
      en: 'Cochineal',
      es: 'Ácido Carmínico',
    },
    toxicity: 'High',
  },
  {
    code: 'E120i',
    name: {
      en: 'Rojo Carmín',
      es: 'Rojo Carmín',
    },
    toxicity: 'High',
  },
  {
    code: 'E120ii',
    name: {
      en: 'Extracto de Cochinilla',
      es: 'Extracto de Cochinilla',
    },
    toxicity: 'High',
  },
  {
    code: 'E121',
    name: {
      en: 'Rojo Cítrico 2',
      es: 'Rojo Cítrico 2',
    },
    toxicity: 'High',
  },
  {
    code: 'E122',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Carmoisine',
      es: 'Azorrubina',
    },
    toxicity: 'High',
  },
  {
    code: 'E123',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Amaranth',
      es: 'Amaranto',
    },
    toxicity: 'High',
  },
  {
    code: 'E124',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Ponceau 4R',
      es: 'Ponceau 4R',
    },
    toxicity: 'High',
  },
  {
    code: 'E125',
    name: {
      en: 'Ponceau SX',
      es: 'Ponceau SX',
    },
    toxicity: 'High',
  },
  {
    code: 'E126',
    name: {
      en: 'Ponceau 6R',
      es: 'Ponceau 6R',
    },
    toxicity: 'High',
  },
  {
    code: 'E127',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Erythrosine',
      es: 'Eritrosina',
    },
    toxicity: 'High',
  },
  {
    code: 'E128',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Red 2G',
      es: 'Rojo 2G',
    },
    toxicity: 'High',
  },
  {
    code: 'E129',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Allura Red AC',
      es: 'Rojo Allura AC',
    },
    toxicity: 'High',
  },
  {
    code: 'E130',
    name: {
      en: 'Azul de Antraquinona',
      es: 'Azul de Antraquinona',
    },
    toxicity: 'High',
  },
  {
    code: 'E131',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Patent Blue V',
      es: 'Azul Patente V',
    },
    toxicity: 'High',
  },
  {
    code: 'E132',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Indigo Carmine',
      es: 'Indigotina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E133',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Brilliant Blue',
      es: 'Azul Brillante FCF',
    },
    toxicity: 'High',
  },
  {
    code: 'E140',
    description: {
      en: 'Naturally occurring green pigment found in leaves and stems of plants. Also manufactured',
    },
    name: {
      en: 'Chlorophyll',
      es: 'Clorofilas y Clorofilinas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E140i',
    name: {
      en: 'Clorofila',
      es: 'Clorofila',
    },
    toxicity: 'Low',
  },
  {
    code: 'E140ii',
    name: {
      en: 'Clorofilina',
      es: 'Clorofilina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E141',
    description: {
      en: 'A more stable colour obtained by a reaction between copper and manufactured chlorophyll',
    },
    name: {
      en: 'Copper complex of Chlorophyll',
      es: 'Complejos Cúpricos de Clorofilas y Clorofilinas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E141i',
    name: {
      en: 'Complejo Cúprico de Clorofila',
      es: 'Complejo Cúprico de Clorofila',
    },
    toxicity: 'Low',
  },
  {
    code: 'E141ii',
    name: {
      en: 'Complejo Cúprico de Clorofilina',
      es: 'Complejo Cúprico de Clorofilina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E142',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Green S',
      es: 'Verde S',
    },
    toxicity: 'High',
  },
  {
    code: 'E143',
    name: {
      en: 'Verde Sólido FCF',
      es: 'Verde Sólido FCF',
    },
    toxicity: 'High',
  },
  {
    code: 'E150',
    description: {
      en: 'Commonly used brown colour and flavouring agent made from the caramelisation or burning of sugar by heat or chemicals',
    },
    name: {
      en: 'Caramel',
      es: 'Caramelos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E150a',
    name: {
      en: 'Caramelo Cáustico',
      es: 'Caramelo Cáustico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E150b',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Caustic sulphite caramel',
      es: 'Caramelo Caústico de Sulfito',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E150c',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Ammonia caramel',
      es: 'Caramelo Amónico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E150d',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Sulphite ammonia caramel',
      es: 'Caramelo Amónico de Sulfito',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E151',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Black PN',
      es: 'Negro Brillante BN',
    },
    toxicity: 'High',
  },
  {
    code: 'E152',
    name: {
      en: 'Negro 7984',
      es: 'Negro 7984',
    },
    toxicity: 'High',
  },
  {
    code: 'E153',
    description: {
      en: 'Natural black colour obtained from burnt plant material',
    },
    name: {
      en: 'Carbon Black/Vegetable Carbon',
      es: 'Carbón Vegetal',
    },
    toxicity: 'Low',
  },
  {
    code: 'E154',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Brown FK',
      es: 'Marrón FK',
    },
    toxicity: 'High',
  },
  {
    code: 'E155',
    description: {
      en: 'A synthetic coal tar dye',
    },
    name: {
      en: 'Chocolate Brown HT',
      es: 'Marrón HT',
    },
    toxicity: 'High',
  },
  {
    code: 'E160',
    name: {
      en: 'Carotenos',
      es: 'Carotenos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E160a',
    description: {
      en: ' Beta',
    },
    name: {
      en: 'Alpha-',
      es: 'Beta Caroteno',
    },
    toxicity: 'Low',
  },
  {
    code: 'E160b',
    description: {
      en: 'Orange/peach pigment naturally present in butter and cheese',
    },
    name: {
      en: 'Annatto',
      es: 'Annatto',
    },
    toxicity: 'Low',
  },
  {
    code: 'E160c',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Paprika extract; Capsanthian; Capsorubin',
      es: 'Extracto de Pimentón',
    },
    toxicity: 'Low',
  },
  {
    code: 'E160d',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Lycopene',
      es: 'Licopeno',
    },
    toxicity: 'Low',
  },
  {
    code: 'E160e',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: "Beta-apo-8'-carotenal (C30)",
      es: 'Beta Apocarotenal',
    },
    toxicity: 'Low',
  },
  {
    code: 'E160f',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: "Ethyl ester of beta-apo-8'-carotenoic acid (C30)",
      es: 'Éster Etílico del Ácido Beta Apocarotenoico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E161',
    name: {
      en: 'Xantófilas',
      es: 'Xantófilas',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E161a',
    name: {
      en: 'Flavoxantina',
      es: 'Flavoxantina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E161b',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Lutein',
      es: 'Luteína',
    },
    toxicity: 'Low',
  },
  {
    code: 'E161c',
    name: {
      en: 'Criptoxantina',
      es: 'Criptoxantina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E161d',
    name: {
      en: 'Rubixantina',
      es: 'Rubixantina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E161e',
    name: {
      en: 'Violaxantina',
      es: 'Violaxantina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E161f',
    name: {
      en: 'Rodoxantina',
      es: 'Rodoxantina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E161g',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Canthaxanthin',
      es: 'Cantaxantina',
    },
    toxicity: 'High',
  },
  {
    code: 'E161h',
    name: {
      en: 'Zeaxantina',
      es: 'Zeaxantina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E161i',
    name: {
      en: 'Citranaxantina',
      es: 'Citranaxantina',
    },
  },
  {
    code: 'E161j',
    name: {
      en: 'Astaxantina',
      es: 'Astaxantina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E162',
    description: {
      en: 'Naturally occurring red/purple colour in beetroots',
    },
    name: {
      en: 'Betanin (Beetroot Red)',
      es: 'Betanina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E163',
    description: {
      en: 'Plant pigments with colours ranging from red to blue',
    },
    name: {
      en: 'Anthocyanins',
      es: 'Antocianinas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E163a',
    name: {
      en: 'Cianidina',
      es: 'Cianidina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E163b',
    name: {
      en: 'Delfinidina',
      es: 'Delfinidina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E163c',
    name: {
      en: 'Malvidina',
      es: 'Malvidina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E163d',
    name: {
      en: 'Pelargonidina',
      es: 'Pelargonidina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E163e',
    name: {
      en: 'Peonidina',
      es: 'Peonidina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E163f',
    name: {
      en: 'Petunidina',
      es: 'Petunidina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E164',
    name: {
      en: 'Amarillo de Gardenia',
      es: 'Amarillo de Gardenia',
    },
  },
  {
    code: 'E165',
    name: {
      en: 'Azul de Gardenia',
      es: 'Azul de Gardenia',
    },
    toxicity: 'High',
  },
  {
    code: 'E166',
    name: {
      en: 'Madera de Sándalo',
      es: 'Madera de Sándalo',
    },
  },
  {
    code: 'E170',
    description: {
      en: 'Naturally occurring mineral. It has various functions including acid regulator',
    },
    name: {
      en: 'Calcium carbonates',
      es: 'Carbonatos Cálcicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E170i',
    name: {
      en: 'Carbonato de Calcio',
      es: 'Carbonato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E170ii',
    name: {
      en: 'Bicarbonato de Calcio',
      es: 'Bicarbonato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E171',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Titanium dioxide',
      es: 'Dióxido de Titanio',
    },
    toxicity: 'High',
  },
  {
    code: 'E172',
    description: {
      en: 'Naturally occurring mineral. Added to fortify food',
    },
    name: {
      en: 'Iron oxide',
      es: 'Óxidos e Hidróxidos Férricos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E172i',
    name: {
      en: 'Óxido de Hierro Negro',
      es: 'Óxido de Hierro Negro',
    },
  },
  {
    code: 'E172ii',
    name: {
      en: 'Óxido de Hierro Rojo',
      es: 'Óxido de Hierro Rojo',
    },
  },
  {
    code: 'E172iii',
    name: {
      en: 'Óxido de Hierro Amarillo',
      es: 'Óxido de Hierro Amarillo',
    },
  },
  {
    code: 'E173',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Aluminium',
      es: 'Aluminio Comestible',
    },
    toxicity: 'High',
  },
  {
    code: 'E174',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Silver',
      es: 'Plata Comestible',
    },
    toxicity: 'High',
  },
  {
    code: 'E175',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Gold',
      es: 'Oro Comestible',
    },
    toxicity: 'High',
  },
  {
    code: 'E180',
    description: {
      en: 'Colouring agent',
    },
    name: {
      en: 'Litholrubine BK',
      es: 'Litolrrubina BK',
    },
    toxicity: 'High',
  },
  {
    code: 'E181',
    name: {
      en: 'Ácido Tánico',
      es: 'Ácido Tánico',
    },
  },
  {
    code: 'E182',
    name: {
      en: 'Orceína',
      es: 'Orceína',
    },
    toxicity: 'High',
  },
  {
    code: 'E200',
    description: {
      en: 'Naturally occurring in some fruit but generally manufactured synthetically for use as a food preservative',
    },
    name: {
      en: 'Sorbic Acid',
      es: 'Ácido Sórbico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E201',
    description: {
      en: 'Salt of Sorbic Acid',
    },
    name: {
      en: 'Sodium Sorbate',
      es: 'Sorbato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E202',
    description: {
      en: 'Fungicide and antibacterial, although it is naturally present in nature, the additive is obtained through a synthetic process.<br>Some people may experience allergic reactions after consumption. Some studies have also determined that it could cause mutagenic effects on DNA molecules, however, others deny it.',
      es: 'Fungicida y antibacteriano, aunque en la naturaleza está presente de manera natural, el aditivo se obtiene a través de un proceso de síntesis.<br>Algunas personas pueden experimentar reacciones alérgicas después de su consumo. Algún estudio ha determinado también que podría ser causante de efectos mutagénicos en las moleculas de ADN, sin embargo, otros lo desmienten',
    },
    name: {
      en: 'Potassium Sorbate',
      es: 'Sorbato de Potasio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E203',
    description: {
      en: 'Salt of Sorbic Acid',
    },
    name: {
      en: 'Calcium Sorbate',
      es: 'Sorbato de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E210',
    description: {
      en: 'Occurs naturally in cherry bark',
    },
    name: {
      en: 'Benzoic Acid',
      es: 'Ácido Benzoico',
    },
    toxicity: 'High',
  },
  {
    code: 'E211',
    description: {
      en: 'Salt of Benzoic Acid',
    },
    name: {
      en: 'Sodium Benzoate',
      es: 'Benzoato de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E212',
    description: {
      en: 'Salt of Benzoic Acid',
    },
    name: {
      en: 'Potassium Benzoate',
      es: 'Benzoato de Potasio',
    },
    toxicity: 'High',
  },
  {
    code: 'E213',
    description: {
      en: 'Salt of Benzoic Acid',
    },
    name: {
      en: 'Calcium Benzoate',
      es: 'Benzoato de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E214',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Ethyl p-hydroxybenzoate',
      es: 'Etil P-Hidroxibenzoato',
    },
    toxicity: 'High',
  },
  {
    code: 'E215',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Sodium ethyl p-hydroxybenzoate',
      es: 'Etil P-Hidroxibenzoato de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E216',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Propyl p-hydroxybenzoate',
      es: 'Propil P-Hidroxibenzoato',
    },
    toxicity: 'High',
  },
  {
    code: 'E217',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Sodium propyl p-hydroxybenzoate',
      es: 'Propil P-Hidroxibenzoato de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E218',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Methyl p-hydroxybenzoate',
      es: 'Metil P-Hidroxibenzoato',
    },
    toxicity: 'High',
  },
  {
    code: 'E219',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Sodium methyl p-hydroxybenzoate',
      es: 'Metil P-Hidroxibenzoato de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E220',
    description: {
      en: 'Gas prepared chemically for use as a food preservative',
    },
    name: {
      en: 'Sulfur Dioxide',
      es: 'Dióxido de Azufre',
    },
    toxicity: 'High',
  },
  {
    code: 'E221',
    description: {
      en: 'Ingested in large quantities it is harmful. Especially in sensitive people it can cause headache, nausea and irritation of the intestinal system. Consuming this compound on a regular basis can reduce the content of some vitamins such as B vitamins and folic acid.',
      es: 'Ingerido en cantidades grandes es nocivo. Especialmente en personas sensibles puede provocar dolor de cabeza, náuseas y irritación del sistema intestinal. El consumo de este compuesto de forma regular puede reducir el contenido en algunas vitaminas como las vitaminas B y el ácido fólico.',
    },
    name: {
      en: 'Sodium sulphite',
      es: 'Sulfito de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E222',
    description: {
      en: 'Synthetic preservative and bleaching agent',
    },
    name: {
      en: 'Sodium Hydrogen Sulphite/Bisulphite',
      es: 'Bisulfito de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E223',
    description: {
      en: 'Synthetic preservative',
    },
    name: {
      en: 'Sodium Metabisulphite',
      es: 'Metabisulfito de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E224',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Potassium metabisulphite',
      es: 'Metabisulfito de Potasio',
    },
    toxicity: 'High',
  },
  {
    code: 'E225',
    name: {
      en: 'Sulfito de Potasio',
      es: 'Sulfito de Potasio',
    },
    toxicity: 'High',
  },
  {
    code: 'E226',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Calcium sulphite',
      es: 'Sulfito de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E227',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Calcium hydrogen sulphite',
      es: 'Bisulfito de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E228',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Potassium hydrogen sulphite',
      es: 'Bisulfito de Potasio',
    },
    toxicity: 'High',
  },
  {
    code: 'E230',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Biphenyl; diphenyl',
      es: 'Bifenilo',
    },
    toxicity: 'High',
  },
  {
    code: 'E231',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Orthophenyl phenol',
      es: 'Ortofenilfenol',
    },
    toxicity: 'High',
  },
  {
    code: 'E232',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Sodium orthophenyl phenol',
      es: 'Ortofenilfenol de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E233',
    name: {
      en: 'Tiabendazol',
      es: 'Tiabendazol',
    },
    toxicity: 'High',
  },
  {
    code: 'E234',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Nisin',
      es: 'Nisina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E235',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Natamycin',
      es: 'Natamicina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E236',
    name: {
      en: 'Ácido Fórmico',
      es: 'Ácido Fórmico',
    },
    toxicity: 'High',
  },
  {
    code: 'E237',
    name: {
      en: 'Formiato de Sodio',
      es: 'Formiato de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E238',
    name: {
      en: 'Formiato de Calcio',
      es: 'Formiato de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E239',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Hexamethylene tetramine',
      es: 'Hexametilentetramina',
    },
  },
  {
    code: 'E240',
    name: {
      en: 'Formaldehído',
      es: 'Formaldehído',
    },
    toxicity: 'High',
  },
  {
    code: 'E241',
    name: {
      en: 'Goma de Guayaco',
      es: 'Goma de Guayaco',
    },
  },
  {
    code: 'E242',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Dimethyl dicarbonate',
      es: 'Dimetil Dicarbonato',
    },
    toxicity: 'High',
  },
  {
    code: 'E243',
    name: {
      en: 'Etil Lauroil Arginato',
      es: 'Etil Lauroil Arginato',
    },
    toxicity: 'Low',
  },
  {
    code: 'E249',
    description: {
      en: 'Naturally occurring mineral used as a preservative and as a colour fixative. It can be toxic in very high amounts, by binding to human hemoglobin because they produce methemoglobinemia.',
      es: 'Mineral de origen natural utilizado como conservante y como fijador del color. Puede resultar tóxico en muy elevadas cantidades, al unirse a la hemoglobina humana porque producen metahemoglobinemia.',
    },
    name: {
      en: 'Potassium Nitrite',
      es: 'Nitrito de Potasio',
    },
    toxicity: 'High',
    sources: [
      "<a href='https://www.aditivos-alimentarios.com/2016/01/E249.html'>additivos-alimentarios.com (in spanish)</a>",
    ],
  },
  {
    code: 'E250',
    description: {
      en: 'It can be toxic in very high amounts, by binding to human hemoglobin because they produce methemoglobinemia.',
      es: 'Puede resultar tóxico en muy elevadas cantidades, al unirse a la hemoglobina humana porque producen metahemoglobinemia.',
    },
    name: {
      en: 'Sodium nitrite',
      es: 'Nitrito de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E251',
    description: {
      en: 'Naturally occurring mineral usually manufactured synthetically for use as a food preservative and colour fixative',
    },
    name: {
      en: 'Sodium Nitrate',
      es: 'Nitrato de Sodio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E252',
    description: {
      en: 'Naturally occurring but more usually produced artificially from waste animal and vegetable material. This additive is one of the oldest and most effective preservatives for meat. Also acts as a curing agent',
    },
    name: {
      en: 'Potassium Nitrate',
      es: 'Nitrato de Potasio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E260',
    description: {
      en: 'Natural component of vinegar but generally manufactured from wood. Used as a preservative',
    },
    name: {
      en: 'Acetic acid',
      es: 'Ácido Acético',
    },
    toxicity: 'Low',
  },
  {
    code: 'E261',
    name: {
      en: 'Potassium acetate',
      es: 'Acetatos Potásicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E261i',
    name: {
      en: 'Acetato de Potasio',
      es: 'Acetato de Potasio',
    },
  },
  {
    code: 'E261ii',
    name: {
      en: 'Diacetato de Potasio',
      es: 'Diacetato de Potasio',
    },
  },
  {
    code: 'E262',
    name: {
      en: 'Sodium acetate',
      es: 'Acetatos Sódicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E262i',
    name: {
      en: 'Acetato de Sodio',
      es: 'Acetato de Sodio',
    },
  },
  {
    code: 'E262ii',
    name: {
      en: 'Diacetato de Sodio',
      es: 'Diacetato de Sodio',
    },
  },
  {
    code: 'E263',
    name: {
      en: 'Calcium acetate',
      es: 'Acetato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E264',
    name: {
      en: 'Acetato de Amonio',
      es: 'Acetato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E265',
    name: {
      en: 'Ácido Dehidroacético',
      es: 'Ácido Dehidroacético',
    },
  },
  {
    code: 'E266',
    name: {
      en: 'Dehidroacetato de Sodio',
      es: 'Dehidroacetato de Sodio',
    },
  },
  {
    code: 'E270',
    description: {
      en: 'Produced by the fermentation of lactose',
    },
    name: {
      en: 'Lactic acid',
      es: 'Ácido Láctico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E280',
    description: {
      en: 'Fatty acid produced by animals in the process of digestion',
    },
    name: {
      en: 'Propionic Acid',
      es: 'Ácido Propiónico',
    },
    toxicity: 'High',
  },
  {
    code: 'E281',
    description: {
      en: 'Salt of propionic acid',
    },
    name: {
      en: 'Sodium Propionate',
      es: 'Propionato de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E282',
    description: {
      en: 'Synthetic preservative normally used to prevent the appearance of mold, fungus or bacteria.<br>A recent study in humans determined that this preservative has some relationship with increases in body mass index and insulin resistance.',
      es: 'Conservante sintético usado normalmente para prevenir la aparición de moho, hongos o bacterias.<br>Un estudio reciente en humanos determinó que este conservante tiene cierta relación con aumentos del indice de masa corporal y de la resistencia a la insulina.',
    },
    name: {
      en: 'Calcium Propionate',
      es: 'Propionato de Calcio',
    },
    toxicity: 'High',
    sources: [
      "<a href='https://www.science.org/doi/10.1126/scitranslmed.aav0120#tab-citations'>Science Translational Medicine</a>",
    ],
  },
  {
    code: 'E283',
    description: {
      en: 'Salt of propionic acid',
    },
    name: {
      en: 'Potassium Propionate',
      es: 'Propionato de Potasio',
    },
    toxicity: 'High',
  },
  {
    code: 'E284',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Boric acid',
      es: 'Ácido Bórico',
    },
    toxicity: 'High',
  },
  {
    code: 'E285',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Sodium tetraborate; borax',
      es: 'Tetraborato de Sodio',
    },
  },
  {
    code: 'E290',
    description: {
      en: 'Gas present in air',
    },
    name: {
      en: 'Carbon dioxide',
      es: 'Dióxido de Carbono',
    },
  },
  {
    code: 'E296',
    name: {
      en: 'Malic acid',
      es: 'Ácido Málico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E297',
    description: {
      en: 'Prepared synthetically as an acid flavour',
    },
    name: {
      en: 'Fumaric Acid',
      es: 'Ácido Fumárico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E300',
    description: {
      en: 'Occurs naturally in fruit and vegetables but is synthesised biologically. It acts as a preservative',
    },
    name: {
      en: 'L-Ascorbic Acid (Vitamin C)',
      es: 'Ácido Ascórbico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E301',
    description: {
      en: 'Salt of ascorbic acid',
    },
    name: {
      en: 'Sodium L-Ascorbate',
      es: 'Ascorbato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E302',
    description: {
      en: 'Salt of ascorbic acid',
    },
    name: {
      en: 'Calcium L-Ascorbate',
      es: 'Ascorbato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E303',
    name: {
      en: 'Ascorbato de Potasio',
      es: 'Ascorbato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E304',
    description: {
      en: 'Salt of ascorbic acid',
    },
    name: {
      en: 'Ascorbyl Palmitate',
      es: 'Ésteres de Ácidos Grasos del Ácido Ascórbico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E304i',
    name: {
      en: 'Palmitato Ascorbilo',
      es: 'Palmitato Ascorbilo',
    },
    toxicity: 'Low',
  },
  {
    code: 'E304ii',
    name: {
      en: 'Estearato Ascorbilo',
      es: 'Estearato Ascorbilo',
    },
    toxicity: 'Low',
  },
  {
    code: 'E306',
    description: {
      en: 'Obtained from soya bean oil',
    },
    name: {
      en: 'Tocopherol (Vitamin E)',
      es: 'Extractos Naturales Ricos en Tocoferoles',
    },
    toxicity: 'Low',
  },
  {
    code: 'E307',
    description: {
      en: 'Synthetic products of Tocopherol with similar functions',
    },
    name: {
      en: 'Synthetic Alpha Tocopherol',
      es: 'Alfa Tocoferol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E308',
    description: {
      en: 'Synthetic products of Tocopherol with similar functions',
    },
    name: {
      en: 'Synthetic Gamma Tocopherol',
      es: 'Gamma Tocoferol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E309',
    description: {
      en: 'Synthetic products of Tocopherol with similar functions',
    },
    name: {
      en: 'Synthetic Delta Tocopherol',
      es: 'Delta Tocoferol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E310',
    description: {
      en: 'Synthetically prepared antioxidant',
    },
    name: {
      en: 'Propyl Gallate',
      es: 'Galato de Propilo',
    },
    toxicity: 'High',
  },
  {
    code: 'E311',
    description: {
      en: 'Synthetic product similar to Propyl Gallate with similar function',
    },
    name: {
      en: 'Octyl Gallate',
      es: 'Galato de Octilo',
    },
    toxicity: 'High',
  },
  {
    code: 'E312',
    description: {
      en: 'Synthetic product similar to Propyl Gallate with similar function',
    },
    name: {
      en: 'Dodecyl Gallate',
      es: 'Galato de Dodecilo',
    },
    toxicity: 'High',
  },
  {
    code: 'E313',
    name: {
      en: 'Galato de Etilo',
      es: 'Galato de Etilo',
    },
  },
  {
    code: 'E314',
    name: {
      en: 'Resina de Guayaco',
      es: 'Resina de Guayaco',
    },
  },
  {
    code: 'E315',
    description: {
      en: 'Antioxidants',
    },
    name: {
      en: 'Erythorbic acid',
      es: 'Ácido Eritórbico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E316',
    description: {
      en: 'Antioxidants',
    },
    name: {
      en: 'Sodium erythorbate',
      es: 'Eritorbato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E317',
    name: {
      en: 'Eritorbato de Potasio',
      es: 'Eritorbato de Potasio',
    },
  },
  {
    code: 'E318',
    name: {
      en: 'Eritorbato de Calcio',
      es: 'Eritorbato de Calcio',
    },
  },
  {
    code: 'E319',
    name: {
      en: 'Terbutilhidroquinona',
      es: 'Terbutilhidroquinona',
    },
  },
  {
    code: 'E320',
    description: {
      en: 'Antioxidant manufactured synthetically for use alone or with E280',
    },
    name: {
      en: 'Butylated Hydroxyanisole (BHA)',
      es: 'Butilhidroxianisol',
    },
  },
  {
    code: 'E321',
    description: {
      en: 'Synthetically prepared antioxidant',
    },
    name: {
      en: 'Butylated Hydroxytoluene (BHT)',
      es: 'Butilhidroxitoluol',
    },
  },
  {
    code: 'E322',
    description: {
      en: 'Type of fat or lipid compound found naturally in all living organisms. It can also be a derivative of egg or soy.<br>It is a very common additive in the food industry, and in reasonable amounts it does not carry any health risk according to multiple studies',
      es: 'Tipo de grasa o compuesto lipídico que se encuentra naturalmente en todos los organismos vivos. También puede ser un derivado del huevo o de la soja.<br>Es un aditivo muy común en la industria alimentaria, y en cantidades razonables no conlleva ningún riesgo para la salud según múltiples estudios',
    },
    name: {
      en: 'Lecithins',
      es: 'Lecitinas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E323',
    name: {
      en: 'Anoxómero',
      es: 'Anoxómero',
    },
  },
  {
    code: 'E324',
    name: {
      en: 'Etoxiquina',
      es: 'Etoxiquina',
    },
    toxicity: 'High',
  },
  {
    code: 'E325',
    description: {
      en: 'Salt of lactic acid (E270) used as a humectant',
    },
    name: {
      en: 'Sodium lactate',
      es: 'Lactato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E326',
    description: {
      en: 'Salt of lactic acid (E270) used as an acid regulator',
    },
    name: {
      en: 'Potassium Lactate',
      es: 'Lactato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E327',
    description: {
      en: 'Salt of lactic acid (E270) used as an acid regulator and firming agent',
    },
    name: {
      en: 'Calcium Lactate',
      es: 'Lactato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E328',
    name: {
      en: 'Lactato de Amonio',
      es: 'Lactato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E329',
    name: {
      en: 'Lactato de Magnesio',
      es: 'Lactato de Magnesio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E330',
    description: {
      en: 'Occurs naturally in citrus fruit but may also be prepared from the fermentation of molasses. Used as an antioxidant.<br>It is one of the most common food additives, being low risk in low quantities. However, it is not recommended to consume in large quantities because in the long term it could cause dental corrosion.',
      es: 'Es utilizado principalmente como regulador de la acidez así como compuesto aromático. Incrementa la capacidad gelificante en las mermeladas y disminuye el pardeamiento enzimático en las frutas y en los productos derivados de las mismas.<br>Es uno de los aditivos alimentarios más comunes, siendo de riesgo bajo en bajas cantidades. Sin embargo, no se recomienda consumir en grandes cantidades porque a largo plazo podría producir corrosión dental.',
    },
    name: {
      en: 'Citric Acid',
      es: 'Ácido Cítrico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E331',
    description: {
      en: 'This compound is found in a large number of foods. No serious harmful effect has been found for the body, however it is recommended to avoid its excessive consumption as it can cause dental corrosion',
      es: 'Este compuesto se encuentra en gran cantidad de alimentos. No se ha encontrado ningún efecto perjudicial grave para el organismo, sin embargo se recomienda evitar su consumo en esceso ya que puede producir corrosion dental',
    },
    name: {
      en: 'Sodium Citrate',
      es: 'Citratos Sódicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E331i',
    name: {
      en: 'Citrato Monosódico',
      es: 'Citrato Monosódico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E331ii',
    name: {
      en: 'Citrato Disódico',
      es: 'Citrato Disódico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E331iii',
    name: {
      en: 'Citrato Trisódico',
      es: 'Citrato Trisódico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E332',
    description: {
      en: 'Salt of Citric Acid with similar functions',
    },
    name: {
      en: 'Potassium Citrate',
      es: 'Citratos Potásicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E332i',
    name: {
      en: 'Citrato Monopotásico',
      es: 'Citrato Monopotásico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E332ii',
    name: {
      en: 'Citrato Dipotásico',
      es: 'Citrato Dipotásico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E332iii',
    name: {
      en: 'Citrato Tripotásico',
      es: 'Citrato Tripotásico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E333',
    description: {
      en: 'Salt of Citric Acid',
    },
    name: {
      en: 'Calcium Citrate',
      es: 'Citratos Cálcicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E333i',
    name: {
      en: 'Citrato Monocálcico',
      es: 'Citrato Monocálcico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E333ii',
    name: {
      en: 'Citrato Dicálcico',
      es: 'Citrato Dicálcico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E333iii',
    name: {
      en: 'Citrato Tricálcico',
      es: 'Citrato Tricálcico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E334',
    description: {
      en: 'Natural product of wine making used as an acid regulator',
    },
    name: {
      en: 'Tartaric Acid',
      es: 'Ácido Tartárico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E335',
    description: {
      en: 'Salt of Tartaric Acid with similar function',
    },
    name: {
      en: 'Sodium L-Tartrate',
      es: 'Tartratos Sódicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E335i',
    name: {
      en: 'Tartrato Monosódico',
      es: 'Tartrato Monosódico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E335ii',
    name: {
      en: 'Tartrato Disódico',
      es: 'Tartrato Disódico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E336',
    description: {
      en: 'Salt of Tartaric Acid with similar function',
    },
    name: {
      en: 'Potassium L-Tartrate (Cream of Tartar)',
      es: 'Tartratos Potásicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E336i',
    name: {
      en: 'Tartrato Monopotásico',
      es: 'Tartrato Monopotásico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E336ii',
    name: {
      en: 'Tartrato Dipotásico',
      es: 'Tartrato Dipotásico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E337',
    name: {
      en: 'Sodium potassium tartrate',
      es: 'Tartrato Sódico-Potásico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E338',
    name: {
      en: 'Phosphoric acid',
      es: 'Ácido Fosfórico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E339',
    name: {
      en: 'Sodium phosphates',
      es: 'Fosfatos Sódicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E339i',
    name: {
      en: 'Fosfato Monosódico',
      es: 'Fosfato Monosódico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E339ii',
    name: {
      en: 'Fosfato Disódico',
      es: 'Fosfato Disódico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E339iii',
    name: {
      en: 'Fosfato Trisódico',
      es: 'Fosfato Trisódico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E340',
    name: {
      en: 'Potassium phosphates',
      es: 'Fosfatos Potásicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E340i',
    name: {
      en: 'Fosfato Monopotásico',
      es: 'Fosfato Monopotásico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E340ii',
    name: {
      en: 'Fosfato Dipotásico',
      es: 'Fosfato Dipotásico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E340iii',
    name: {
      en: 'Fosfato Tripotásico',
      es: 'Fosfato Tripotásico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E341',
    description: {
      en: 'Rising agent',
    },
    name: {
      en: 'Calcium Phosphate',
      es: 'Fosfatos Cálcicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E341i',
    name: {
      en: 'Fosfato Monocálcico',
      es: 'Fosfato Monocálcico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E341ii',
    name: {
      en: 'Fosfato Dicálcico',
      es: 'Fosfato Dicálcico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E341iii',
    name: {
      en: 'Fosfato Tricálcico',
      es: 'Fosfato Tricálcico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E342',
    name: {
      en: 'Fosfatos Amónicos',
      es: 'Fosfatos Amónicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E342i',
    name: {
      en: 'Fosfato Monoamónico',
      es: 'Fosfato Monoamónico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E342ii',
    name: {
      en: 'Fosfato Diamónico',
      es: 'Fosfato Diamónico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E342iii',
    name: {
      en: 'Fosfato Triamónico',
      es: 'Fosfato Triamónico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E343',
    name: {
      en: 'Magnesium phosphates',
      es: 'Fosfatos Magnésicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E343i',
    name: {
      en: 'Fosfato Monomagnésico',
      es: 'Fosfato Monomagnésico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E343ii',
    name: {
      en: 'Fosfato Dimagnésico',
      es: 'Fosfato Dimagnésico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E343iii',
    name: {
      en: 'Fosfato Trimagnésico',
      es: 'Fosfato Trimagnésico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E344',
    name: {
      en: 'Citrato de Lecitina',
      es: 'Citrato de Lecitina',
    },
  },
  {
    code: 'E345',
    name: {
      en: 'Citrato de Magnesio',
      es: 'Citrato de Magnesio',
    },
  },
  {
    code: 'E349',
    name: {
      en: 'Malatos Amónicos',
      es: 'Malatos Amónicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E349i',
    name: {
      en: 'Malato de Amonio',
      es: 'Malato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E349ii',
    name: {
      en: 'Malato Ácido de Amonio',
      es: 'Malato Ácido de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E350',
    name: {
      en: 'Sodium malates',
      es: 'Malatos Sódicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E350i',
    name: {
      en: 'Malato de Sodio',
      es: 'Malato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E350ii',
    name: {
      en: 'Malato Ácido de Sodio',
      es: 'Malato Ácido de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E351',
    name: {
      en: 'Potassium malate',
      es: 'Malatos Potásicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E351i',
    name: {
      en: 'Malato de Potasio',
      es: 'Malato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E351ii',
    name: {
      en: 'Malato Ácido de Potasio',
      es: 'Malato Ácido de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E352',
    name: {
      en: 'Calcium malates',
      es: 'Malatos Cálcicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E352i',
    name: {
      en: 'Malato de Calcio',
      es: 'Malato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E352ii',
    name: {
      en: 'Malato Ácido de Calcio',
      es: 'Malato Ácido de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E353',
    name: {
      en: 'Metatartaric acid',
      es: 'Ácido Metatartárico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E354',
    name: {
      en: 'Calcium tartrate',
      es: 'Tartratos Cálcicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E354i',
    name: {
      en: 'Tartrato Monocálcico',
      es: 'Tartrato Monocálcico',
    },
  },
  {
    code: 'E354ii',
    name: {
      en: 'Tartrato Dicálcico',
      es: 'Tartrato Dicálcico',
    },
  },
  {
    code: 'E355',
    name: {
      en: 'Adipic acid',
      es: 'Ácido Adípico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E356',
    name: {
      en: 'Sodium adipate',
      es: 'Adipato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E357',
    name: {
      en: 'Potassium adipate',
      es: 'Adipato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E358',
    name: {
      en: 'Adipato de Calcio',
      es: 'Adipato de Calcio',
    },
  },
  {
    code: 'E359',
    name: {
      en: 'Adipato de Amonio',
      es: 'Adipato de Amonio',
    },
  },
  {
    code: 'E360',
    name: {
      en: 'Adipato de Magnesio',
      es: 'Adipato de Magnesio',
    },
  },
  {
    code: 'E363',
    name: {
      en: 'Succinic acid',
      es: 'Ácido Succínico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E364',
    name: {
      en: 'Succinato de Sodio',
      es: 'Succinato de Sodio',
    },
  },
  {
    code: 'E365',
    name: {
      en: 'Fumarato de Sodio',
      es: 'Fumarato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E366',
    name: {
      en: 'Fumarato de Potasio',
      es: 'Fumarato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E367',
    name: {
      en: 'Fumarato de Calcio',
      es: 'Fumarato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E368',
    name: {
      en: 'Fumarato de Amonio',
      es: 'Fumarato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E369',
    name: {
      en: 'Fumarato de Magnesio',
      es: 'Fumarato de Magnesio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E370',
    name: {
      en: 'Heptonolactona',
      es: 'Heptonolactona',
    },
    toxicity: 'High',
  },
  {
    code: 'E375',
    name: {
      en: 'Ácido Nicotínico',
      es: 'Ácido Nicotínico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E380',
    name: {
      en: 'Triammonium citrate',
      es: 'Citrato de Triamonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E381',
    name: {
      en: 'Citrato Férrico de Amonio',
      es: 'Citrato Férrico de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E383',
    name: {
      en: 'Glicerofosfato de Calcio',
      es: 'Glicerofosfato de Calcio',
    },
  },
  {
    code: 'E384',
    name: {
      en: 'Citrato de Isopropilo',
      es: 'Citrato de Isopropilo',
    },
  },
  {
    code: 'E385',
    name: {
      en: 'Calcium disodium ethylene diamine tetra-acetate; calcium disodium EDTA',
      es: 'Etileno Diamina Tetra Acetato',
    },
  },
  {
    code: 'E386',
    name: {
      en: 'Ácido Etileno Diamino Tetraacético',
      es: 'Ácido Etileno Diamino Tetraacético',
    },
  },
  {
    code: 'E387',
    name: {
      en: 'Oxiestearina',
      es: 'Oxiestearina',
    },
  },
  {
    code: 'E388',
    name: {
      en: 'Ácido Tiodipropiónico',
      es: 'Ácido Tiodipropiónico',
    },
  },
  {
    code: 'E389',
    name: {
      en: 'Tiodipropionato de Dilaurilo',
      es: 'Tiodipropionato de Dilaurilo',
    },
  },
  {
    code: 'E390',
    name: {
      en: 'Tiodipropionato de Distearilo',
      es: 'Tiodipropionato de Distearilo',
    },
  },
  {
    code: 'E391',
    name: {
      en: 'Ácido Fítico',
      es: 'Ácido Fítico',
    },
  },
  {
    code: 'E392',
    name: {
      en: 'Extracto de Romero',
      es: 'Extracto de Romero',
    },
    toxicity: 'Low',
  },
  {
    code: 'E399',
    name: {
      en: 'Lactobionato de Calcio',
      es: 'Lactobionato de Calcio',
    },
  },
  {
    code: 'E400',
    description: {
      en: 'Emulsifier',
    },
    name: {
      en: 'Alginic Acid',
      es: 'Ácido Algínico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E401',
    description: {
      en: 'Salt of Alginic Acid with similar functions',
    },
    name: {
      en: 'Sodium Alginate',
      es: 'Alginato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E402',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Potassium alginate',
      es: 'Alginato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E403',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Ammonium alginate',
      es: 'Alginato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E404',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Calcium alginate',
      es: 'Alginato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E405',
    description: {
      en: '2-diol alginate',
    },
    name: {
      en: 'Propane-1',
      es: 'Alginato de Propilenglicol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E406',
    description: {
      en: 'Naturally occurring gum extracted from seaweeds. It is not digested so acts a source of dietary fibre. Also acts as a stabiliser and gelling agent',
    },
    name: {
      en: 'Agar',
      es: 'Agar-Agar',
    },
    toxicity: 'Low',
  },
  {
    code: 'E407',
    description: {
      en: 'Gum naturally present in red seaweed. Used as an emulsifier. In 2018, the European Food Safety Authority (EFSA) reported that safety of carrageenan in food products is based on an ADI of 75 mg/kg body weight per day. Therefore, its safety cannot be guaranteed at higher exposures, as insufficient testing has yet been performed.',
      es: 'Compuesto presente de forma natural en las algas rojas. Se utiliza como emulsionante. En 2018, la Autoridad Europea de Seguridad Alimentaria (EFSA) informó que la seguridad de la carragenina en los productos alimenticios se basa en concentraciones de 75 mg/kg de peso corporal por día. Por tanto, su seguridad no puede garantizarse en exposiciones mas altas, ya que aun no se han realizado pruebas suficientes.',
    },
    name: {
      en: 'Carrageenan (Irish Moss)',
      es: 'Carragenanos',
    },
    toxicity: 'High',
    sources: [
      "<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7009739'>EFSA Panel on Food Additives and Nutrient Sources added to Food (2018).</a>",
    ],
  },
  {
    code: 'E407a',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Processed eucheuma seaweed',
      es: 'Algas Euchema',
    },
    toxicity: 'High',
  },
  {
    code: 'E408',
    name: {
      en: 'Glicano de Levadura Panaria',
      es: 'Glicano de Levadura Panaria',
    },
  },
  {
    code: 'E409',
    name: {
      en: 'Arabinogalactano',
      es: 'Arabinogalactano',
    },
  },
  {
    code: 'E410',
    description: {
      en: 'Natural extract from the Carob tree seed. Similar to E407',
    },
    name: {
      en: 'Locust Bean Gum (Carob Bean Seed Gum)',
      es: 'Goma Garrofín',
    },
    toxicity: 'Low',
  },
  {
    code: 'E411',
    name: {
      en: 'Goma de Avena',
      es: 'Goma de Avena',
    },
  },
  {
    code: 'E412',
    description: {
      en: 'Naturally occurring seed gum from a tree of the pea family. Used as a thickener and stabiliser',
    },
    name: {
      en: 'Guar Gum (Cluster Bean Gum)',
      es: 'Goma Guar',
    },
    toxicity: 'Low',
  },
  {
    code: 'E413',
    description: {
      en: 'Natural gum obtained from a tree of the pea family. Used as a stabiliser',
    },
    name: {
      en: 'Tragacanth',
      es: 'Goma Tragacanto',
    },
    toxicity: 'Low',
  },
  {
    code: 'E414',
    description: {
      en: 'Similar to E413',
    },
    name: {
      en: 'Acacia (Gum Arabic)',
      es: 'Goma Arábiga',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E415',
    description: {
      en: 'Made from fermentation of carbohydrates by bacteria. Used as an emulsifier',
    },
    name: {
      en: 'Xanthan Gum',
      es: 'Goma Xantana',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E416',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Karaya gum',
      es: 'Goma Karaya',
    },
    toxicity: 'Low',
  },
  {
    code: 'E417',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Tara gum',
      es: 'Goma Tara',
    },
    toxicity: 'Low',
  },
  {
    code: 'E418',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Gellan gum',
      es: 'Goma Gellan',
    },
    toxicity: 'Low',
  },
  {
    code: 'E419',
    name: {
      en: 'Goma Ghatti',
      es: 'Goma Ghatti',
    },
  },
  {
    code: 'E420',
    description: {
      en: 'Sugar alcohol produced from glucose. Is less quickly absorbed than sugar so often used as a sweetener. Also used as a humectant and food colour diluent. May have a laxative effect in large doses',
    },
    name: {
      en: 'Sorbitol',
      es: 'Sorbitoles y Jarabes de Sorbitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E420i',
    name: {
      en: 'Sorbitol',
      es: 'Sorbitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E420ii',
    name: {
      en: 'Jarabe de Sorbitol',
      es: 'Jarabe de Sorbitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E421',
    description: {
      en: 'Sugar alcohol derived from mannose',
    },
    name: {
      en: 'Mannitol',
      es: 'Manitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E422',
    description: {
      en: 'Colourless sweet liquid obtained from fatty acids. Several studies have shown that a large amount of glycerol (synthetic or natural) can be administered without the appearance of adverse health effects.',
      es: 'Líquido dulce incoloro obtenido a partir de ácidos grasos. Varios estudios han demostrado que se puede administrar una gran cantidad de glicerol (sintético o natural) sin que aparezcan efectos adversos para la salud.',
    },
    name: {
      en: 'Glycerine',
      es: 'Glicerol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E424',
    name: {
      en: 'Curdlan',
      es: 'Curdlan',
    },
  },
  {
    code: 'E425',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Konjac',
      es: 'Harina de Konjac',
    },
    toxicity: 'Low',
  },
  {
    code: 'E425i',
    name: {
      en: 'Goma de Konjac',
      es: 'Goma de Konjac',
    },
    toxicity: 'Low',
  },
  {
    code: 'E425ii',
    name: {
      en: 'Glucomanano de Konjac',
      es: 'Glucomanano de Konjac',
    },
    toxicity: 'Low',
  },
  {
    code: 'E426',
    name: {
      en: 'Hemicelulosa de Soja',
      es: 'Hemicelulosa de Soja',
    },
    toxicity: 'Low',
  },
  {
    code: 'E427',
    name: {
      en: 'Goma Cassia',
      es: 'Goma Cassia',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E428',
    name: {
      en: 'Gelatina Neutra',
      es: 'Gelatina Neutra',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E429',
    name: {
      en: 'Peptonas',
      es: 'Peptonas',
    },
  },
  {
    code: 'E429i',
    name: {
      en: 'Peptona Pépsica',
      es: 'Peptona Pépsica',
    },
  },
  {
    code: 'E429ii',
    name: {
      en: 'Peptona Pancreática',
      es: 'Peptona Pancreática',
    },
  },
  {
    code: 'E430',
    name: {
      en: 'Estearato de Polioxietileno 8',
      es: 'Estearato de Polioxietileno 8',
    },
    toxicity: 'High',
  },
  {
    code: 'E431',
    name: {
      en: 'Polyoxyethylene (40) stearate',
      es: 'Estearato de Polioxietileno 40',
    },
    toxicity: 'High',
  },
  {
    code: 'E432',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Polyoxyethylene sorbitan monolaurate; Polysorbate 20',
      es: 'Monolaurato de Sorbitano Polioxietinelado',
    },
    toxicity: 'High',
  },
  {
    code: 'E433',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Polyoxyethylene sorbitan mono-oleate; Polysorbate 80',
      es: 'Monooleato de Sorbitano Polioxietinelado',
    },
    toxicity: 'High',
  },
  {
    code: 'E434',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Polyoxyethylene sorbitan monopalmitate; Polysorbate 40',
      es: 'Monopalmitato de Sorbitano Polioxietinelado',
    },
    toxicity: 'High',
  },
  {
    code: 'E435',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Polyoxyethylene sorbitan monostearate; Polysorbate 60',
      es: 'Monoestearato de Sorbitano Polioxietinelado',
    },
    toxicity: 'High',
  },
  {
    code: 'E436',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Polyoxyethylene sorbitan tristearate; Polysorbate 65',
      es: 'Triestearato de Sorbitano Polioxietinelado',
    },
  },
  {
    code: 'E440',
    name: {
      en: 'Pectinas',
      es: 'Pectinas',
    },
    toxicity: 'Low',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E440i',
    name: {
      en: 'Pectina',
      es: 'Pectina',
    },
    toxicity: 'Low',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E440ii',
    name: {
      en: 'Pectina Amidada',
      es: 'Pectina Amidada',
    },
    toxicity: 'Low',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E441',
    name: {
      en: 'Aceite de Semilla de Colza Superglicerinado Hidrogenado',
      es: 'Aceite de Semilla de Colza Superglicerinado Hidrogenado',
    },

    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E442',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Ammonium phosphatides',
      es: 'Fosfátidos de Amonio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E443',
    name: {
      en: 'Aceite Vegetal Bromado',
      es: 'Aceite Vegetal Bromado',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E444',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sucrose acetate isobutyrate',
      es: 'Acetato Isobutirato de Sacarosa',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E445',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Glycerol esters of wood rosins',
      es: 'Ésteres Glicéridos de Resina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E445i',
    name: {
      en: 'Ésteres Glicéridos de Goma de Resina',
      es: 'Ésteres Glicéridos de Goma de Resina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E445ii',
    name: {
      en: 'Ésteres Glicéridos de Colofonia de Aceite de Pino',
      es: 'Ésteres Glicéridos de Colofonia de Aceite de Pino',
    },
    toxicity: 'Low',
  },
  {
    code: 'E445iii',
    name: {
      en: 'Ésteres Glicéridos de Colofonia de Madera',
      es: 'Ésteres Glicéridos de Colofonia de Madera',
    },
    toxicity: 'Low',
  },
  {
    code: 'E446',
    name: {
      en: 'Succistearina',
      es: 'Succistearina',
    },
  },
  {
    code: 'E450',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfatos',
      es: 'Difosfatos',
    },
    toxicity: 'High',
    sources: [
      "Sources of phosphorus, food additives and Chronic Kidney Disease. <a href='http://www.scielo.org.ar/pdf/diaeta/v31n145/v31n145a04.pdf'>PDF. (in Spanish)</a>",
      "<a href='https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S0211-69952014000400010'>https://scielo.isciii.es/.... (In Spanish)</a>",
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450i',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos)',
    },
    name: {
      en: 'Difosfato Disódico',
      es: 'Difosfato Disódico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450ii',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Trisódico',
      es: 'Difosfato Trisódico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450iii',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Tetrasódico',
      es: 'Difosfato Tetrasódico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450iv',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Dipotásico',
      es: 'Difosfato Dipotásico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450v',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Tetrapotásico',
      es: 'Difosfato Tetrapotásico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450vi',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Dicálcico',
      es: 'Difosfato Dicálcico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450vii',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Ácido Cálcico',
      es: 'Difosfato Ácido Cálcico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450viii',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Dimagnésico',
      es: 'Difosfato Dimagnésico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E450ix',
    description: {
      en: 'Certain studies maintain that, in case of regular consumption, it can reduce the absorption of calcium, magnesium and iron, unbalancing the calcium / magnesium ratio in the body (osteoporosis, calcareous deposits)',
      es: 'Ciertos estudios sostienen que, en caso de un consumo muy grande/regular, puede reducir la absorción del calcio, del magnesio y del hierro desequilibrando la relación calcio/magnesio en el organismo (osteoporosis, depósitos calcáreos). La EFSA estableció recientemente nuevas recomendaciones acerca de su consumo',
    },
    name: {
      en: 'Difosfato Magnésico de Dihidrógeno',
      es: 'Difosfato Magnésico de Dihidrógeno',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E451',
    name: {
      en: 'Triphosphates',
      es: 'Trifosfatos',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E451i',
    name: {
      en: 'Trifosfato Pentasódico',
      es: 'Trifosfato Pentasódico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E451ii',
    name: {
      en: 'Trifosfato Pentapotásico',
      es: 'Trifosfato Pentapotásico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E451iii',
    name: {
      en: 'Trifosfato Sódico-Potásico',
      es: 'Trifosfato Sódico-Potásico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E452',
    name: {
      en: 'Polyphosphates',
      es: 'Polifosfatos',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E452i',
    name: {
      en: 'Polifosfato Sódico',
      es: 'Polifosfato Sódico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E452ii',
    name: {
      en: 'Polifosfato Potásico',
      es: 'Polifosfato Potásico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E452iii',
    name: {
      en: 'Polifosfato Sódico-Cálcico',
      es: 'Polifosfato Sódico-Cálcico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E452iv',
    name: {
      en: 'Polifosfato Cálcico',
      es: 'Polifosfato Cálcico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E452v',
    name: {
      en: 'Polifosfato Amónico',
      es: 'Polifosfato Amónico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of phosphoric acid–phosphates – di-, tri- and polyphosphates (E 338–341, E 343, E 450–452) as food additives and the safety of proposed extension of use <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5674'>Visit the site</a>",
    ],
  },
  {
    code: 'E456',
    name: {
      en: 'Poliaspartato Potásico',
      es: 'Poliaspartato Potásico',
    },
  },
  {
    code: 'E457',
    name: {
      en: 'Alfa-Ciclodextrina',
      es: 'Alfa-Ciclodextrina',
    },
  },
  {
    code: 'E458',
    name: {
      en: 'Gamma-Ciclodextrina',
      es: 'Gamma-Ciclodextrina',
    },
  },
  {
    code: 'E459',
    name: {
      en: 'Beta-cyclodextrin',
      es: 'Beta-Ciclodextrina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E460',
    description: {
      en: 'Fibrous part of plant cell walls used as a bulking agent',
      es: 'Se obtiene de manera natural a partir de madera, tallos de girasoles o restos de la cosecha de algodón',
    },
    name: {
      en: 'Cellulose',
      es: 'Celulosas',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E460i',
    name: {
      en: 'Celulosa Microcristalina',
      es: 'Celulosa Microcristalina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E460ii',
    name: {
      en: 'Celulosa en Polvo',
      es: 'Celulosa en Polvo',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E461',
    description: {
      en: 'Derived from Cellulose with similar properties',
    },
    name: {
      en: 'Methylcellulose',
      es: 'Metil Celulosa',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E462',
    name: {
      en: 'Etil Celulosa',
      es: 'Etil Celulosa',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E463',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Hydroxypropyl cellulose',
      es: 'Hidroxipropil Celulosa',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E464',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Hydroxypropyl methyl cellulose',
      es: 'Hidroxipropilmetil Celulosa',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E465',
    description: {
      en: 'Derived from Cellulose with similar properties',
    },
    name: {
      en: 'Ethylmethylcellulose',
      es: 'Metil Etil Celulosa',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E466',
    description: {
      en: 'Derived from Cellulose with similar properties',
    },
    name: {
      en: 'Carboxymethylcellulose',
      es: 'Carboximetil Celulosa de Sodio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E467',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sodium carboxy methyl cellulose',
      es: 'Etil Hidroxietil Celulosa',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E468',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Crosslinked sodium carboxy methyl cellulose',
      es: 'Carboximetil Celulosa de Sodio Reticulada',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E469',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Enzymatically hydrolysed carboxy methyl cellulose',
      es: 'Carboximetil Celulosa de Sodio Hidrolizada',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E470',
    description: {
      en: ' Potassium and Calcium Salts of Fatty Acids',
    },
    name: {
      en: 'Sodium',
      es: 'Sales de los Ácidos Grasos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E470a',
    name: {
      en: 'Sales de Sodio',
      es: 'Sales de Sodio',
    },
  },
  {
    code: 'E470b',
    name: {
      en: 'Sales de Magnesio de Ácidos Grasos',
      es: 'Sales de Magnesio de Ácidos Grasos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E471',
    description: {
      en: 'Normal products of fat digestion but are prepared synthetically',
    },
    name: {
      en: 'Mono and Diglycerides of Fatty Acid',
      es: 'Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E472',
    name: {
      en: 'Ésteres de los Mono y Diglicéridos de Ácidos Grasos',
      es: 'Ésteres de los Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E472a',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Acetic acid esters of mono- and diglycerides of fatty acids',
      es: 'Ésteres Acéticos de los Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E472b',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Lactic acid esters of mono- and diglycerides of fatty acids',
      es: 'Ésteres Lácticos de los Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E472c',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Citric acid esters of mono- and diglycerides of fatty acids',
      es: 'Ésteres Cítricos de los Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E472d',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Tartaric acid esters of mono- and diglycerides of fatty acids',
      es: 'Ésteres Tartáricos de los Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E472e',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Mono- and diacetyltartaric acid esters of mono- and diglycerides of fatty acids',
      es: 'Ésteres Mono y Diacetiltartárico de los Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E472f',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Mixed acetic and tartaric acid esters of mono- and diglycerides of fatty acids',
      es: 'Ésteres Mixtos Acéticos y Tartáricos de los Mono y Diglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E473',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sucrose esters of fatty acids',
      es: 'Sucroésteres de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E473a',
    name: {
      en: 'Oligoésteres de Sacarosa',
      es: 'Oligoésteres de Sacarosa',
    },
  },
  {
    code: 'E474',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sucroglycerides',
      es: 'Sucroglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E475',
    description: {
      en: 'Synthetic product of E471 used as an emulsifier and stabiliser',
    },
    name: {
      en: 'Polyglycerol Ester of Fatty Acids',
      es: 'Ésteres Poliglicéridos de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E476',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Polyglycerol polyricinoleate',
      es: 'Polirricinoleato de Poliglicerol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E477',
    description: {
      en: '2-diol esters of fatty acids',
    },
    name: {
      en: 'Propane-1',
      es: 'Ésteres de Propilenglicol de Ácidos Grasos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E478',
    name: {
      en: 'Ésteres de Glicerol y Propilenglicol de Ácidos Grasos Lactilados',
      es: 'Ésteres de Glicerol y Propilenglicol de Ácidos Grasos Lactilados',
    },
  },
  {
    code: 'E479',
    name: {
      en: 'Aceite de Soja Oxidado',
      es: 'Aceite de Soja Oxidado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E480',
    name: {
      en: 'Dioctil Sulfosuccinato de Sodio',
      es: 'Dioctil Sulfosuccinato de Sodio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E481',
    description: {
      en: 'Prepared synthetically from Lactic Acid',
    },
    name: {
      en: 'Sodium Stearoyl-2-lactylate',
      es: 'Lactilatos Sódicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E481i',
    name: {
      en: 'Estearoil Lactilato de Sodio',
      es: 'Estearoil Lactilato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E481ii',
    name: {
      en: 'Lactilato Oleico de Sodio',
      es: 'Lactilato Oleico de Sodio',
    },
  },
  {
    code: 'E482',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Calcium stearoyl-2-lactylate',
      es: 'Lactilatos Cálcicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E482i',
    name: {
      en: 'Estearoil Lactilato de Calcio',
      es: 'Estearoil Lactilato de Calcio',
    },
  },
  {
    code: 'E482ii',
    name: {
      en: 'Lactilato Oleico de Calcio',
      es: 'Lactilato Oleico de Calcio',
    },
  },
  {
    code: 'E483',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Stearyl tartrate',
      es: 'Tartrato de Estearilo',
    },
    toxicity: 'Low',
  },
  {
    code: 'E484',
    name: {
      en: 'Citrato de Estearilo',
      es: 'Citrato de Estearilo',
    },
  },
  {
    code: 'E485',
    name: {
      en: 'Estearoil Fumarato de Sodio',
      es: 'Estearoil Fumarato de Sodio',
    },
  },
  {
    code: 'E486',
    name: {
      en: 'Estearoil Fumarato de Calcio',
      es: 'Estearoil Fumarato de Calcio',
    },
  },
  {
    code: 'E487',
    name: {
      en: 'Lauril Sulfato de Sodio',
      es: 'Lauril Sulfato de Sodio',
    },
  },
  {
    code: 'E488',
    name: {
      en: 'Mono y Diglicéridos Etoxilados',
      es: 'Mono y Diglicéridos Etoxilados',
    },
  },
  {
    code: 'E489',
    name: {
      en: 'Éster de Metilglucósido de Aceite de Coco',
      es: 'Éster de Metilglucósido de Aceite de Coco',
    },
  },
  {
    code: 'E491',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sorbitan monostearate',
      es: 'Monoestearato de Sorbitano',
    },
    toxicity: 'High',
  },
  {
    code: 'E492',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sorbitan tristearate',
      es: 'Triestearato de Sorbitano',
    },
    toxicity: 'High',
  },
  {
    code: 'E493',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sorbitan monolaurate',
      es: 'Monolaurato de Sorbitano',
    },
    toxicity: 'High',
  },
  {
    code: 'E494',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sorbitan monooleate',
      es: 'Monooleato de Sorbitano',
    },
    toxicity: 'High',
  },
  {
    code: 'E495',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Sorbitan monopalmitate',
      es: 'Monopalmitato de Sorbitano',
    },
    toxicity: 'High',
  },
  {
    code: 'E496',
    name: {
      en: 'Trioleato de Sorbitano',
      es: 'Trioleato de Sorbitano',
    },
  },
  {
    code: 'E499',
    name: {
      en: 'Fitoesteroles Ricos en Estigmasterol',
      es: 'Fitoesteroles Ricos en Estigmasterol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E500',
    description: {
      en: 'Prepared synthetically for use as an acid regulator',
      es: 'Preparado sintéticamente para su uso como regulador de ácido',
    },
    name: {
      en: 'Sodium Bicarbonate/ Hydrogen Carbonate (Bicarb of Soda)',
      es: 'Carbonatos Sódicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E500i',
    name: {
      en: 'Carbonato de Sodio',
      es: 'Carbonato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E500ii',
    description: {
      es: 'Empleado como corrector de acidez, gasificante y antiaglomerante. Se utiliza en dulces, postres, tartas, chocolates, galletas, bollería y pastelería. <br> Su presencia no supone riesgo para la salud si no se consume en cantidades exageradas.',
      en: 'Used as an acidity regulator, raising agent and anti-caking agent. It is used in sweets, desserts, cakes, chocolates, cookies, pastries and pastries. <br> Its presence does not pose a risk to health if it is not consumed in exaggerated quantities.',
    },
    name: {
      en: 'Bicarbonato de Sodio',
      es: 'Bicarbonato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E500iii',
    name: {
      en: 'Sesquicarbonato de Sodio',
      es: 'Sesquicarbonato de Sodio',
    },
  },
  {
    code: 'E501',
    name: {
      en: 'Potassium carbonates',
      es: 'Carbonatos Potásicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E501i',
    name: {
      en: 'Carbonato de Potasio',
      es: 'Carbonato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E501ii',
    name: {
      en: 'Bicarbonato de Potasio',
      es: 'Bicarbonato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E503',
    name: {
      en: 'Ammonium carbonates',
      es: 'Carbonatos Amónicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E503i',
    name: {
      en: 'Carbonato de Amonio',
      es: 'Carbonato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E503ii',
    name: {
      en: 'Bicarbonato de Amonio',
      es: 'Bicarbonato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E504',
    description: {
      en: 'Naturally occurring mineral used as an anti-caking agent',
    },
    name: {
      en: 'Magnesium Carbonate',
      es: 'Carbonatos Magnésicos',
    },
    toxicity: 'Low',
  },
  {
    code: 'E504i',
    name: {
      en: 'Carbonato de Magnesio',
      es: 'Carbonato de Magnesio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E504ii',
    name: {
      en: 'Bicarbonato de Magnesio',
      es: 'Bicarbonato de Magnesio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E505',
    name: {
      en: 'Carbonato de Hierro',
      es: 'Carbonato de Hierro',
    },
  },
  {
    code: 'E507',
    name: {
      en: 'Hydrochloric acid',
      es: 'Ácido Clorhídrico',
    },
    toxicity: 'High',
  },
  {
    code: 'E508',
    description: {
      en: 'Natural occurring chemical often associated with rock salt. Used as an emulsifier',
    },
    name: {
      en: 'Potassium Chloride',
      es: 'Cloruro de Potasio',
    },
    toxicity: 'High',
  },
  {
    code: 'E509',
    description: {
      en: 'Product of natural salt brine',
    },
    name: {
      en: 'Calcium Chloride',
      es: 'Cloruro de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E510',
    name: {
      en: 'Cloruro de Amonio',
      es: 'Cloruro de Amonio',
    },
    toxicity: 'High',
  },
  {
    code: 'E511',
    name: {
      en: 'Magnesium chloride',
      es: 'Cloruro de Magnesio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E512',
    name: {
      en: 'Stannous chloride',
      es: 'Cloruro de Estaño',
    },
    toxicity: 'High',
  },
  {
    code: 'E513',
    name: {
      en: 'Sulphuric acid',
      es: 'Ácido Sulfúrico',
    },
    toxicity: 'High',
  },
  {
    code: 'E514',
    name: {
      en: 'Sodium sulphates',
      es: 'Sulfatos Sódicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E514i',
    name: {
      en: 'Sulfato de Sodio',
      es: 'Sulfato de Sodio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E514ii',
    name: {
      en: 'Sulfato Ácido de Sodio',
      es: 'Sulfato Ácido de Sodio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E515',
    name: {
      en: 'Potassium sulphates',
      es: 'Sulfatos Potásicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E515i',
    name: {
      en: 'Sulfato de Potasio',
      es: 'Sulfato de Potasio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E515ii',
    name: {
      en: 'Sulfato Ácido de Potasio',
      es: 'Sulfato Ácido de Potasio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E516',
    name: {
      en: 'Calcium sulphate',
      es: 'Sulfatos Cálcicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E516i',
    name: {
      en: 'Sulfato de Calcio',
      es: 'Sulfato de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E516ii',
    name: {
      en: 'Sulfato Ácido de Calcio',
      es: 'Sulfato Ácido de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E517',
    name: {
      en: 'Ammonium sulphate',
      es: 'Sulfatos Amónicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E517i',
    name: {
      en: 'Sulfato de Amonio',
      es: 'Sulfato de Amonio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E517ii',
    name: {
      en: 'Sulfato Ácido de Amonio',
      es: 'Sulfato Ácido de Amonio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E518',
    name: {
      en: 'Sulfatos Magnésicos',
      es: 'Sulfatos Magnésicos',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E518i',
    name: {
      en: 'Sulfato de Magnesio',
      es: 'Sulfato de Magnesio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E518ii',
    name: {
      en: 'Sulfato Ácido de Magnesio',
      es: 'Sulfato Ácido de Magnesio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E519',
    name: {
      en: 'Sulfatos Cúpricos',
      es: 'Sulfatos Cúpricos',
    },
    toxicity: 'High',
  },
  {
    code: 'E519i',
    name: {
      en: 'Sulfato de Cobre',
      es: 'Sulfato de Cobre',
    },
    toxicity: 'High',
  },
  {
    code: 'E519ii',
    name: {
      en: 'Sulfato Ácido de Cobre',
      es: 'Sulfato Ácido de Cobre',
    },
    toxicity: 'High',
  },
  {
    code: 'E520',
    name: {
      en: 'Aluminium sulphate',
      es: 'Sulfato de Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E521',
    name: {
      en: 'Aluminium sodium sulphate',
      es: 'Sulfato de Aluminio Sódico',
    },
    toxicity: 'High',
  },
  {
    code: 'E522',
    name: {
      en: 'Aluminium potassium sulphate',
      es: 'Sulfato de Aluminio Potásico',
    },
    toxicity: 'High',
  },
  {
    code: 'E523',
    name: {
      en: 'Aluminium ammonium sulphate',
      es: 'Sulfato de Aluminio Amónico',
    },
    toxicity: 'High',
  },
  {
    code: 'E524',
    name: {
      en: 'Sodium hydroxide',
      es: 'Hidróxido de Sodio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E525',
    name: {
      en: 'Potassium hydroxide',
      es: 'Hidróxido de Potasio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E526',
    name: {
      en: 'Calcium hydroxide',
      es: 'Hidróxido de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E527',
    name: {
      en: 'Ammonium hydroxide',
      es: 'Hidróxido de Amonio',
    },
    toxicity: 'High',
  },
  {
    code: 'E528',
    name: {
      en: 'Magnesium hydroxide',
      es: 'Hidróxido de Magnesio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E529',
    name: {
      en: 'Calcium oxide',
      es: 'Óxido de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E530',
    name: {
      en: 'Magnesium oxide',
      es: 'Óxido de Magnesio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E535',
    name: {
      en: 'Sodium ferrocyanide',
      es: 'Ferrocianuro de Sodio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E536',
    name: {
      en: 'Potassium ferrocyanide',
      es: 'Ferrocianuro de Potasio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E537',
    name: {
      en: 'Hexacianomanganato de Hierro',
      es: 'Hexacianomanganato de Hierro',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E538',
    name: {
      en: 'Calcium ferrocyanide',
      es: 'Ferrocianuro de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E539',
    name: {
      en: 'Tiosulfato de Sodio',
      es: 'Tiosulfato de Sodio',
    },
  },
  {
    code: 'E540',
    name: {
      en: 'Fosfato Ácido de Calcio',
      es: 'Fosfato Ácido de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E541',
    description: {
      en: 'Synthetically prepared raising agent',
    },
    name: {
      en: 'Sodium Aluminium Phosphate',
      es: 'Fosfato de Sodio y Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E541i',
    name: {
      en: 'Fosfato Ácido de Sodio y Aluminio',
      es: 'Fosfato Ácido de Sodio y Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E541ii',
    name: {
      en: 'Fosfato Básico de Sodio y Aluminio',
      es: 'Fosfato Básico de Sodio y Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E542',
    name: {
      en: 'Fosfato Tribásico de Calcio',
      es: 'Fosfato Tribásico de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E543',
    name: {
      en: 'Polifosfatos de Sodio y Calcio',
      es: 'Polifosfatos de Sodio y Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E544',
    name: {
      en: 'Polifosfatos de Calcio',
      es: 'Polifosfatos de Calcio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E545',
    name: {
      en: 'Polifosfatos de Amonio',
      es: 'Polifosfatos de Amonio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E546',
    name: {
      en: 'Polifosfatos de Magnesio',
      es: 'Polifosfatos de Magnesio',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E550',
    name: {
      en: 'Silicatos Sódicos',
      es: 'Silicatos Sódicos',
    },
  },
  {
    code: 'E550i',
    name: {
      en: 'Silicato de Sodio',
      es: 'Silicato de Sodio',
    },
  },
  {
    code: 'E550ii',
    name: {
      en: 'Metasilicato de Sodio',
      es: 'Metasilicato de Sodio',
    },
  },
  {
    code: 'E551',
    description: {
      en: 'Derived from sand. Used as an anti-caking agent',
    },
    name: {
      en: 'Silicon Dioxide (Silica)',
      es: 'Dióxido de Silicio',
    },
    toxicity: 'High',
  },
  {
    code: 'E552',
    description: {
      en: 'Salt of Silicon Dioxide with similar functions. Also used as a glazing agent',
    },
    name: {
      en: 'Calcium Silicate',
      es: 'Silicato de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E553',
    description: {
      en: 'Salt of Silicon Dioxide with similar functions',
    },
    name: {
      en: 'Sodium Silico Aluminate/ magnesium silicate',
      es: 'Silicatos Magnésicos',
    },
    toxicity: 'High',
  },
  {
    code: 'E553a',
    name: {
      en: 'Silicato de Magnesio',
      es: 'Silicato de Magnesio',
    },
    toxicity: 'High',
  },
  {
    code: 'E553b',
    name: {
      en: 'Talco de Magnesio',
      es: 'Talco de Magnesio',
    },
    toxicity: 'High',
  },
  {
    code: 'E554',
    name: {
      en: 'Sodium aluminium silicate',
      es: 'Silicato de Sodio y Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E555',
    name: {
      en: 'Potassium aluminium silicate',
      es: 'Silicato de Potasio y Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E556',
    name: {
      en: 'Aluminium calcium silicate',
      es: 'Silicato de Calcio y Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E557',
    name: {
      en: 'Silicato de Zinc',
      es: 'Silicato de Zinc',
    },
    toxicity: 'High',
  },
  {
    code: 'E558',
    name: {
      en: 'Bentonite',
      es: 'Bentonita',
    },
    toxicity: 'Low',
  },
  {
    code: 'E559',
    name: {
      en: 'Aluminium silicate; Kaolin',
      es: 'Silicato de Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E560',
    name: {
      en: 'Silicato de Potasio',
      es: 'Silicato de Potasio',
    },
    toxicity: 'High',
  },
  {
    code: 'E570',
    name: {
      en: 'Fatty acids',
      es: 'Ácido Esteárico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E571',
    name: {
      en: 'Estearato de Amonio',
      es: 'Estearato de Amonio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E572',
    name: {
      en: 'Estearato de Magnesio',
      es: 'Estearato de Magnesio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E573',
    name: {
      en: 'Estearato de Aluminio',
      es: 'Estearato de Aluminio',
    },
    toxicity: 'High',
  },
  {
    code: 'E574',
    name: {
      en: 'Gluconic acid',
      es: 'Ácido Glucónico',
    },
    toxicity: 'Low',
  },
  {
    code: 'E575',
    name: {
      en: 'Glucono delta-lactone',
      es: 'Glucono-Delta-Lactona ',
    },
    toxicity: 'Low',
  },
  {
    code: 'E576',
    name: {
      en: 'Sodium gluconate',
      es: 'Gluconato de Sodio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E577',
    name: {
      en: 'Potassium gluconate',
      es: 'Gluconato de Potasio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E578',
    name: {
      en: 'Calcium gluconate',
      es: 'Gluconato de Calcio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E579',
    name: {
      en: 'Ferrous gluconate',
      es: 'Gluconato de Hierro',
    },
    toxicity: 'Low',
  },
  {
    code: 'E585',
    name: {
      en: 'Ferrous lactate',
      es: 'Lactato de Hierro',
    },
    toxicity: 'Low',
  },
  {
    code: 'E586',
    name: {
      en: 'Hexilresorcinol',
      es: 'Hexilresorcinol',
    },
  },
  {
    code: 'E620',
    description: {
      en: 'Naturally occurring amino acid obtained from protein but generally manufactured by bacterial fermentation of carbohydrates. Used as a flavour enhancer and salt substitute',
    },
    name: {
      en: 'L-Glutamic Acid',
      es: 'Ácido Glutámico ',
    },
    toxicity: 'High',
  },
  {
    code: 'E621',
    description: {
      en: 'Present naturally in seaweed but generally prepared chemically from sugar beet. Flavour enhancer of protein rich foods. <br>In a reassessment carried out in 2017, the EFSA considered that the daily consumption of this whole family of glutames (E620-E621-E622-E623-E624-E625) should not exceed 30mg / kg. In very high amounts these compounds can cause the so-called Chinese restaurant syndrome, the symptoms of which are among other headaches, burning or nausea.',
      es: 'Presente de forma natural en las algas, pero generalmente preparado químicamente a partir de la remolacha azucarera. Potenciador del sabor de alimentos ricos en proteínas. <br>En una reevaluación hecha en 2017, la EFSA considerá que el consumo diario de toda esta familia de glutamos (E620-E621-E622-E623-E624-E625) no debe exceder los 30mg / kg. En muy elevadas cantidades estos compuestos pueden provocar el llamado síndrome del restaurante chino, cuyo sintomas son entre otros dolores de cabeza, ardores o náuseas.',
    },
    name: {
      en: 'Monosodium Glutamate (MSG)',
      es: 'Glutamato Monosódico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of glutamic acid (E 620), sodium glutamate (E 621), potassium glutamate (E 622), calcium glutamate (E 623), ammonium glutamate (E 624) and magnesium glutamate (E 625) as food additives <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4910'>Visit the site</a>",
      "Chinese Restaurant Syndrome. <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5278591/'>See the study of the Bawaskar Hospital and Clinical Research Center, India</a>",
    ],
  },
  {
    code: 'E622',
    description: {
      en: 'Similar to Monosodium Glutamate. In a reassessment carried out in 2017, the EFSA considered that the daily consumption of this whole family of glutames (E620-E621-E622-E623-E624-E625) should not exceed 30mg / kg. In very high amounts these compounds can cause the so-called Chinese restaurant syndrome, the symptoms of which are among other headaches, burning or nausea.',
      es: 'Similar al Glutamato Monosódico. En una reevaluación hecha en 2017, la EFSA considerá que el consumo diario de toda esta familia de glutamos (E620-E621-E622-E623-E624-E625) no debe exceder los 30mg / kg. En muy elevadas cantidades estos compuestos pueden provocar el llamado síndrome del restaurante chino, cuyo sintomas son entre otros dolores de cabeza, ardores o náuseas.',
    },
    name: {
      en: 'Monopotassium Glutamate',
      es: 'Glutamato Monopotásico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of glutamic acid (E 620), sodium glutamate (E 621), potassium glutamate (E 622), calcium glutamate (E 623), ammonium glutamate (E 624) and magnesium glutamate (E 625) as food additives <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4910'>Visit the site</a>",
      "Chinese Restaurant Syndrome. <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5278591/'>See the study of the Bawaskar Hospital and Clinical Research Center, India</a>",
    ],
  },
  {
    code: 'E623',
    description: {
      en: 'Similar to Monosodium Glutamate. In a reassessment carried out in 2017, the EFSA considered that the daily consumption of this whole family of glutames (E620-E621-E622-E623-E624-E625) should not exceed 30mg / kg. In very high amounts these compounds can cause the so-called Chinese restaurant syndrome, the symptoms of which are among other headaches, burning or nausea.',
      es: 'Similar al Glutamato Monosódico. En una reevaluación hecha en 2017, la EFSA considerá que el consumo diario de toda esta familia de glutamos (E620-E621-E622-E623-E624-E625) no debe exceder los 30mg / kg. En muy elevadas cantidades estos compuestos pueden provocar el llamado síndrome del restaurante chino, cuyo sintomas son entre otros dolores de cabeza, ardores o náuseas.',
    },
    name: {
      en: 'Calcium Glutamate',
      es: 'Glutamato Cálcico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of glutamic acid (E 620), sodium glutamate (E 621), potassium glutamate (E 622), calcium glutamate (E 623), ammonium glutamate (E 624) and magnesium glutamate (E 625) as food additives <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4910'>Visit the site</a>",
      "Chinese Restaurant Syndrome. <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5278591/'>See the study of the Bawaskar Hospital and Clinical Research Center, India</a>",
    ],
  },
  {
    code: 'E624',
    description: {
      en: 'In a reassessment carried out in 2017, the EFSA considered that the daily consumption of this whole family of glutames (E620-E621-E622-E623-E624-E625) should not exceed 30mg / kg. In very high amounts these compounds can cause the so-called Chinese restaurant syndrome, the symptoms of which are among other headaches, burning or nausea.',
      es: 'En una reevaluación hecha en 2017, la EFSA considerá que el consumo diario de toda esta familia de glutamos (E620-E621-E622-E623-E624-E625) no debe exceder los 30mg / kg. En muy elevadas cantidades estos compuestos pueden provocar el llamado síndrome del restaurante chino, cuyo sintomas son entre otros dolores de cabeza, ardores o náuseas.',
    },
    name: {
      en: 'Monoammonium glutamate',
      es: 'Glutamato Amónico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of glutamic acid (E 620), sodium glutamate (E 621), potassium glutamate (E 622), calcium glutamate (E 623), ammonium glutamate (E 624) and magnesium glutamate (E 625) as food additives <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4910'>Visit the site</a>",
      "Chinese Restaurant Syndrome. <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5278591/'>See the study of the Bawaskar Hospital and Clinical Research Center, India</a>",
    ],
  },
  {
    code: 'E625',
    description: {
      en: 'In a reassessment carried out in 2017, the EFSA considered that the daily consumption of this whole family of glutames (E620-E621-E622-E623-E624-E625) should not exceed 30mg / kg. In very high amounts these compounds can cause the so-called Chinese restaurant syndrome, the symptoms of which are among other headaches, burning or nausea.',
      es: 'En una reevaluación hecha en 2017, la EFSA considerá que el consumo diario de toda esta familia de glutamos (E620-E621-E622-E623-E624-E625) no debe exceder los 30mg / kg. En muy elevadas cantidades estos compuestos pueden provocar el llamado síndrome del restaurante chino, cuyo sintomas son entre otros dolores de cabeza, ardores o náuseas.',
    },
    name: {
      en: 'Magnesium diglutamate',
      es: 'Glutamato Magnésico',
    },
    toxicity: 'High',
    sources: [
      "EFSA. Re-evaluation of glutamic acid (E 620), sodium glutamate (E 621), potassium glutamate (E 622), calcium glutamate (E 623), ammonium glutamate (E 624) and magnesium glutamate (E 625) as food additives <a href='https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4910'>Visit the site</a>",
      "Chinese Restaurant Syndrome. <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5278591/'>See the study of the Bawaskar Hospital and Clinical Research Center, India</a>",
    ],
  },
  {
    code: 'E626',
    name: {
      en: 'Guanylic acid',
      es: 'Ácido Guanílico',
    },
    toxicity: 'High',
  },
  {
    code: 'E627',
    description: {
      en: 'Occurs naturally in sardines and yeast extract but generally manufactured synthetically. Used as a flavour enhancer',
    },
    name: {
      en: 'Sodium Guanylate',
      es: 'Guanilato Sódico',
    },
    toxicity: 'High',
  },
  {
    code: 'E628',
    name: {
      en: 'Dipotassium guanylate',
      es: 'Guanilato Potásico',
    },
    toxicity: 'High',
  },
  {
    code: 'E629',
    name: {
      en: 'Calcium guanylate',
      es: 'Guanilato Cálcico',
    },
    toxicity: 'High',
  },
  {
    code: 'E630',
    name: {
      en: 'lnosinic acid',
      es: 'Ácido Inosínico',
    },
    toxicity: 'High',
  },
  {
    code: 'E631',
    description: {
      en: 'Made from sardines and meat extract',
    },
    name: {
      en: 'Sodium Inosinate',
      es: 'Inosinato Sódico',
    },
    toxicity: 'High',
  },
  {
    code: 'E632',
    name: {
      en: 'Dipotassium inosinate',
      es: 'Inosinato Potásico',
    },
    toxicity: 'High',
  },
  {
    code: 'E633',
    name: {
      en: 'Calcium inosinate',
      es: 'Inosinato Cálcico',
    },
    toxicity: 'High',
  },
  {
    code: 'E634',
    name: {
      en: "Calcium 5'-ribonucleotides",
      es: 'Ribonucleótidos de Calcio',
    },
    toxicity: 'High',
  },
  {
    code: 'E635',
    description: {
      en: 'Mixture of 627 and 631',
    },
    name: {
      en: 'Sodium-5-Ribonucleotide',
      es: 'Ribonucleótidos de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E636',
    name: {
      en: 'Maltol',
      es: 'Maltol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E637',
    name: {
      en: 'Etil Maltol',
      es: 'Etil Maltol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E638',
    name: {
      en: 'Aspartato de Sodio',
      es: 'Aspartato de Sodio',
    },
  },
  {
    code: 'E639',
    name: {
      en: 'Alanina',
      es: 'Alanina',
    },
  },
  {
    code: 'E640',
    name: {
      en: 'Glycine and its sodium salt',
      es: 'Glicina y Glicinato de Sodio',
    },
    toxicity: 'High',
  },
  {
    code: 'E641',
    name: {
      en: 'Leucina',
      es: 'Leucina',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E642',
    name: {
      en: 'Hidrocloruro de Lisina',
      es: 'Hidrocloruro de Lisina',
    },
  },
  {
    code: 'E650',
    name: {
      en: 'Zinc acetate',
      es: 'Acetato de Zinc',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E900',
    name: {
      en: 'Dimethylpolysiloxane',
      es: 'Dimetilsiloxano',
    },
  },
  {
    code: 'E900a',
    name: {
      en: 'Polidimetilsiloxano',
      es: 'Polidimetilsiloxano',
    },
  },
  {
    code: 'E900b',
    name: {
      en: 'Polimetilfenilsiloxano',
      es: 'Polimetilfenilsiloxano',
    },
  },
  {
    code: 'E901',
    description: {
      en: ' white and yellow',
    },
    name: {
      en: 'Beeswax',
      es: 'Cera de Abejas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E901i',
    name: {
      en: 'Cera de Abejas Blanca',
      es: 'Cera de Abejas Blanca',
    },
  },
  {
    code: 'E901ii',
    name: {
      en: 'Cera de Abejas Amarilla',
      es: 'Cera de Abejas Amarilla',
    },
  },
  {
    code: 'E902',
    name: {
      en: 'Candelilla wax',
      es: 'Cera de Candelilla',
    },
    toxicity: 'Low',
  },
  {
    code: 'E903',
    name: {
      en: 'Carnauba wax',
      es: 'Cera de Carnaúba',
    },
    toxicity: 'Low',
  },
  {
    code: 'E904',
    name: {
      en: 'Shellac',
      es: 'Goma Laca',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E905',
    name: {
      en: 'Microcrystalline wax',
      es: 'Cera Microcristalina',
    },
    toxicity: 'High',
  },
  {
    code: 'E905a',
    name: {
      en: 'Aceite Mineral de Calidad Alimentaria',
      es: 'Aceite Mineral de Calidad Alimentaria',
    },
  },
  {
    code: 'E905b',
    name: {
      en: 'Vaselina de Calidad Alimentaria',
      es: 'Vaselina de Calidad Alimentaria',
    },
  },
  {
    code: 'E905c',
    name: {
      en: 'Cera de Parafina',
      es: 'Cera de Parafina',
    },
  },
  {
    code: 'E905d',
    name: {
      en: 'Parafina Líquida de Viscosidad Alta',
      es: 'Parafina Líquida de Viscosidad Alta',
    },
  },
  {
    code: 'E905e',
    name: {
      en: 'Parafina Líquida de Viscosidad Media y Baja',
      es: 'Parafina Líquida de Viscosidad Media y Baja',
    },
  },
  {
    code: 'E905f',
    name: {
      en: 'Parafina Líquida de Viscosidad Media y Baja',
      es: 'Parafina Líquida de Viscosidad Media y Baja',
    },
  },
  {
    code: 'E905g',
    name: {
      en: 'Parafina Líquida de Viscosidad Media y Baja',
      es: 'Parafina Líquida de Viscosidad Media y Baja',
    },
  },
  {
    code: 'E906',
    name: {
      en: 'Goma de Benzoína',
      es: 'Goma de Benzoína',
    },
  },
  {
    code: 'E907',
    name: {
      en: 'Poli Deceno Hidrogenado',
      es: 'Poli Deceno Hidrogenado',
    },
    toxicity: 'High',
  },
  {
    code: 'E908',
    name: {
      en: 'Cera de Salvado de Arroz',
      es: 'Cera de Salvado de Arroz',
    },
  },
  {
    code: 'E909',
    name: {
      en: 'Cera de Esperma de Ballena',
      es: 'Cera de Esperma de Ballena',
    },
  },
  {
    code: 'E910',
    name: {
      en: 'Ésteres de Cera',
      es: 'Ésteres de Cera',
    },
  },
  {
    code: 'E911',
    name: {
      en: 'Ésteres Metílicos de Ácidos Grasos',
      es: 'Ésteres Metílicos de Ácidos Grasos',
    },
  },
  {
    code: 'E912',
    name: {
      en: 'Montan acid esters',
      es: 'Ésteres de Ácido Montánico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E913',
    name: {
      en: 'Cera de Lana',
      es: 'Cera de Lana',
    },
  },
  {
    code: 'E914',
    name: {
      en: 'Oxidised Polyethylene wax',
      es: 'Cera de Polietileno Oxidada',
    },
    toxicity: 'High',
  },
  {
    code: 'E915',
    name: {
      en: 'Ésteres de Glicerina',
      es: 'Ésteres de Glicerina',
    },
  },
  {
    code: 'E916',
    name: {
      en: 'Yodato de Calcio',
      es: 'Yodato de Calcio',
    },
  },
  {
    code: 'E917',
    name: {
      en: 'Yodato de Potasio',
      es: 'Yodato de Potasio',
    },
  },
  {
    code: 'E918',
    name: {
      en: 'Óxidos de Nitrógeno',
      es: 'Óxidos de Nitrógeno',
    },
  },
  {
    code: 'E919',
    name: {
      en: 'Cloruro de Nitrosilo',
      es: 'Cloruro de Nitrosilo',
    },
  },
  {
    code: 'E920',
    name: {
      en: 'L-Cysteine',
      es: 'L-Cisteína y Clorhidratos de Cisteína',
    },
    toxicity: 'Low',
  },
  {
    code: 'E921',
    name: {
      en: 'L-Cistina y Clorhidratos de Cistina',
      es: 'L-Cistina y Clorhidratos de Cistina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E922',
    name: {
      en: 'Persulfato de Potasio',
      es: 'Persulfato de Potasio',
    },
  },
  {
    code: 'E923',
    name: {
      en: 'Persulfato de Amonio',
      es: 'Persulfato de Amonio',
    },
  },
  {
    code: 'E924a',
    name: {
      en: 'Bromato de Potasio',
      es: 'Bromato de Potasio',
    },
  },
  {
    code: 'E924b',
    name: {
      en: 'Bromato de Calcio',
      es: 'Bromato de Calcio',
    },
  },
  {
    code: 'E925',
    name: {
      en: 'Cloro',
      es: 'Cloro',
    },
  },
  {
    code: 'E926',
    name: {
      en: 'Dióxido de Cloro',
      es: 'Dióxido de Cloro',
    },
  },
  {
    code: 'E927a',
    name: {
      en: 'Azodicarbonamida',
      es: 'Azodicarbonamida',
    },
    toxicity: 'High',
  },
  {
    code: 'E927b',
    name: {
      en: 'Carbamide',
      es: 'Carbamida',
    },
    toxicity: 'Low',
  },
  {
    code: 'E928',
    name: {
      en: 'Peróxido de Benzoilo',
      es: 'Peróxido de Benzoilo',
    },
  },
  {
    code: 'E929',
    name: {
      en: 'Peróxido de Acetona',
      es: 'Peróxido de Acetona',
    },
  },
  {
    code: 'E930',
    name: {
      en: 'Peróxido de Calcio',
      es: 'Peróxido de Calcio',
    },
  },
  {
    code: 'E938',
    name: {
      en: 'Argon',
      es: 'Argón',
    },
    toxicity: 'Low',
  },
  {
    code: 'E939',
    name: {
      en: 'Helium',
      es: 'Helio',
    },
    toxicity: 'Low',
  },
  {
    code: 'E940',
    name: {
      en: 'Diclorodifluorometano',
      es: 'Diclorodifluorometano',
    },
  },
  {
    code: 'E941',
    name: {
      en: 'Nitrogen',
      es: 'Nitrógeno',
    },
    toxicity: 'Low',
  },
  {
    code: 'E942',
    name: {
      en: 'Nitrous oxide',
      es: 'Óxido Nitroso',
    },
    toxicity: 'Low',
  },
  {
    code: 'E943a',
    name: {
      en: 'Butane',
      es: 'Butano',
    },
    toxicity: 'High',
  },
  {
    code: 'E943b',
    name: {
      en: 'Iso-butane',
      es: 'Isobutano',
    },
    toxicity: 'High',
  },
  {
    code: 'E944',
    name: {
      en: 'Propane',
      es: 'Propano',
    },
    toxicity: 'High',
  },
  {
    code: 'E945',
    name: {
      en: 'Cloropentafluoroetano',
      es: 'Cloropentafluoroetano',
    },
  },
  {
    code: 'E946',
    name: {
      en: 'Octafluorociclobutano',
      es: 'Octafluorociclobutano',
    },
  },
  {
    code: 'E948',
    name: {
      en: 'Oxygen',
      es: 'Oxígeno',
    },
    toxicity: 'Low',
  },
  {
    code: 'E949',
    name: {
      en: 'Hydrogen',
      es: 'Hidrógeno',
    },
    toxicity: 'Low',
  },
  {
    code: 'E950',
    description: {
      en: "Provides a sweet taste with no caloric value. There is no high-quality evidence that using acesulfame potassium as a sweetener affects body weight or body mass index (BMI). Despite the fact that this compound has always generated great controversy, there is no evidence that this compound is carcinogenic. <br>It is about 200 times sweeter than sucrose. It is usually used in products labeled 'zero', 'light' ...",
      es: "Aporta un sabor dulce sin valor calórico. No hay evidencia de alta calidad de que el uso de acesulfamo potásico como edulcorante afecte el peso corporal o el índice de masa corporal (IMC). A pesar de que es un compuesto que siempre a tenido una gran controversia, no existen evidencias claras aun de que sea cancerígeno. <br>Es unas 200 veces mas dulce que la sacarosa. Suele ser utilizado en productos con etiqueta 'cero', 'light'...",
    },
    name: {
      en: 'Acesulfame K',
      es: 'Acesulfamo K',
    },
    toxicity: 'High',
    sources: [
      "<a href='https://ntp.niehs.nih.gov/ntp/htdocs/gmm_rpts/gmm2.pdf'>TOXICITY STUDIES OF ACESULFAME POTASSIUM (in PDF)</a>",
    ],
  },
  {
    code: 'E951',
    description: {
      en: 'Several investigations have concluded that this compound can have carcinogenic and other effects in the long term. Although the EFSA has so far rejected all of these investigations for being inconsistent, the compound still has many contradictory studies today.',
      es: 'Varias investigaciones han concluido que este compuesto puede tener efectos cancerígenos a largo plazo, además de otros efectos. Aunque la EFSA ha rechazado hasta ahora todas estas investigaciones por ser inconsistentes, el compuesto todavía tiene muchos estudios contradictorios en la actualidad.',
    },
    name: {
      en: 'Aspartame',
      es: 'Aspartamo',
    },
    toxicity: 'High',
    sources: [
      "EFSA - Aspartame. <a href='https://www.efsa.europa.eu/en/topics/topic/aspartame'>Visit the site</a>",
      "Possible neurologic effects of aspartame, a widely used food additive. <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1474447/'>See PDF</a>",
    ],
  },
  {
    code: 'E952',
    description: {
      en: 'Sweeteners',
    },
    name: {
      en: 'Cyclamic acid and its Na and Ca salts',
      es: 'Ácido Ciclámico',
    },
  },
  {
    code: 'E952i',
    name: {
      en: 'Ácido Ciclámico',
      es: 'Ácido Ciclámico',
    },
    toxicity: 'High',
  },
  {
    code: 'E952ii',
    name: {
      en: 'Ciclamato Sódico',
      es: 'Ciclamato Sódico',
    },
    toxicity: 'High',
  },
  {
    code: 'E952iii',
    name: {
      en: 'Ciclamato Cálcico',
      es: 'Ciclamato Cálcico',
    },
    toxicity: 'High',
  },
  {
    code: 'E953',
    description: {
      en: 'Sweeteners',
    },
    name: {
      en: 'lsomalt',
      es: 'Isomaltosa',
    },
    toxicity: 'Low',
  },
  {
    code: 'E954',
    description: {
      en: 'Calorie-free artificial sweetener',
    },
    name: {
      en: 'Saccharin',
      es: 'Sacarina',
    },
  },
  {
    code: 'E954i',
    name: {
      en: 'Sacarina',
      es: 'Sacarina',
    },
    toxicity: 'High',
  },
  {
    code: 'E954ii',
    name: {
      en: 'Sacarina Sódica',
      es: 'Sacarina Sódica',
    },
    toxicity: 'High',
  },
  {
    code: 'E954iii',
    name: {
      en: 'Sacarina Potásica',
      es: 'Sacarina Potásica',
    },
    toxicity: 'High',
  },
  {
    code: 'E954iv',
    name: {
      en: 'Sacarina Cálcica',
      es: 'Sacarina Cálcica',
    },
    toxicity: 'High',
  },
  {
    code: 'E955',
    description: {
      en: 'It acts on the receptors of the gastrointestinal tract producing a sweet taste and stimulating hormonal secretion. Its sweetening power is 385 to 650 times greater than sucrose (common sugar) .1 Its consumption has not been shown to benefit weight loss, some studies report that it is associated with weight gain and risk of coronary heart disease. <br> Thanks to its great sweetening effect, it is possible to achieve the same effect as other additives with a minimal amount. Sucralose was approved by the FDA as a tabletop sweetener in 1998 after a large number of studies. Despite this approval, it is suspected that this additive may cause damage to the immune system and intestinal flora.',
      es: 'Actúa en los receptores del tracto gastrointestinal produciendo el sabor dulce y estimulando la secreción hormonal. Su poder edulcorante es 385 a 650 veces mayor que la sacarosa (azúcar común)​.No se ha demostrado que su consumo beneficie a la pérdida de peso, algunos estudios reportan que se asocia con aumento de peso y riesgo de enfermedades coronaria. <br> Gracias a su gran efecto edulcorante es posible conseguir el mismo efecto que otros aditivos con una cantidad mínima. La sucralosa fue aprobada por la FDA como edulcorante de mesa en 1998 tras gran cantidad de estudios. A pesar de esta aprobación se sospecha que este aditivo puede provocar daños en el sistema inmunitario y en la flora intestinal.',
    },
    name: {
      en: 'Sucralosa',
      es: 'Sucralosa',
    },
    toxicity: 'High',
  },
  {
    code: 'E956',
    name: {
      en: 'Alitamo',
      es: 'Alitamo',
    },
  },
  {
    code: 'E957',
    description: {
      en: 'Sweeteners',
    },
    name: {
      en: 'Thaumatin',
      es: 'Taumatina',
    },
    toxicity: 'Low',
  },
  {
    code: 'E958',
    name: {
      en: 'Glicirricina',
      es: 'Glicirricina',
    },
    toxicity: 'High',
  },
  {
    code: 'E959',
    description: {
      en: 'Sweeteners',
    },
    name: {
      en: 'Neohesperidine DC',
      es: 'Neohesperidina Dihidrocalcona',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E960',
    name: {
      en: 'Glucósidos de Esteviol',
      es: 'Glucósidos de Esteviol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E961',
    name: {
      en: 'Neotamo',
      es: 'Neotamo',
    },
    toxicity: 'High',
  },
  {
    code: 'E962',
    name: {
      en: 'Sal de Aspartamo y Acesulfamo',
      es: 'Sal de Aspartamo y Acesulfamo',
    },
    toxicity: 'High',
  },
  {
    code: 'E963',
    name: {
      en: 'Tagatosa',
      es: 'Tagatosa',
    },
    toxicity: 'Low',
  },
  {
    code: 'E964',
    name: {
      en: 'Jarabe de Poliglicitol',
      es: 'Jarabe de Poliglicitol',
    },
  },
  {
    code: 'E965',
    description: {
      en: 'Natural occurring sugar in grapes',
    },
    name: {
      en: 'Glucose (hydrogenated) or Maltitol',
      es: 'Maltitol y Jarabe de Maltitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E965i',
    name: {
      en: 'Maltitol',
      es: 'Maltitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E965ii',
    name: {
      en: 'Jarabe de Maltitol',
      es: 'Jarabe de Maltitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E966',
    description: {
      en: 'Sweeteners',
    },
    name: {
      en: 'Lactitol',
      es: 'Lactitol',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E967',
    description: {
      en: 'Sweeteners',
    },
    name: {
      en: 'Xylitol',
      es: 'Xilitol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E968',
    name: {
      en: 'Eritritol',
      es: 'Eritritol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E969',
    name: {
      en: 'Advantamo',
      es: 'Advantamo',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E999',
    name: {
      en: 'Quillaia extract',
      es: 'Extracto de Quillay',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1000',
    name: {
      en: 'Ácido Cólico',
      es: 'Ácido Cólico',
    },
  },
  {
    code: 'E1001',
    name: {
      en: 'Sales y Ésteres de Colina',
      es: 'Sales y Ésteres de Colina',
    },
  },
  {
    code: 'E1001i',
    name: {
      en: 'Acetato de Colina',
      es: 'Acetato de Colina',
    },
  },
  {
    code: 'E1001ii',
    name: {
      en: 'Carbonato de Colina',
      es: 'Carbonato de Colina',
    },
  },
  {
    code: 'E1001iii',
    name: {
      en: 'Cloruro de Colina',
      es: 'Cloruro de Colina',
    },
  },
  {
    code: 'E1001iv',
    name: {
      en: 'Citrato de Colina',
      es: 'Citrato de Colina',
    },
  },
  {
    code: 'E1001v',
    name: {
      en: 'Tartrato de Colina',
      es: 'Tartrato de Colina',
    },
  },
  {
    code: 'E1001vi',
    name: {
      en: 'Lactato de Colina',
      es: 'Lactato de Colina',
    },
  },
  {
    code: 'E1100',
    name: {
      en: 'Amilasas',
      es: 'Amilasas',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1101',
    name: {
      en: 'Peptidasas',
      es: 'Peptidasas',
    },
  },
  {
    code: 'E1101i',
    name: {
      en: 'Peptidasa',
      es: 'Peptidasa',
    },
  },
  {
    code: 'E1101ii',
    name: {
      en: 'Papaína',
      es: 'Papaína',
    },
  },
  {
    code: 'E1101iii',
    name: {
      en: 'Bromelina',
      es: 'Bromelina',
    },
  },
  {
    code: 'E1101iv',
    name: {
      en: 'Ficina',
      es: 'Ficina',
    },
  },
  {
    code: 'E1102',
    name: {
      en: 'Glucosa Oxidasa',
      es: 'Glucosa Oxidasa',
    },
  },
  {
    code: 'E1103',
    description: {
      en: 'Emulsifiers',
    },
    name: {
      en: 'Invertase',
      es: 'Invertasas',
    },
    toxicity: 'Low',
  },
  {
    code: 'E1104',
    name: {
      en: 'Lipasas',
      es: 'Lipasas',
    },
  },
  {
    code: 'E1105',
    description: {
      en: 'Preservative',
    },
    name: {
      en: 'Lysozyme',
      es: 'Lisozima',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1200',
    description: {
      en: 'Natural occurring sugar in grapes',
    },
    name: {
      en: 'Polydextrose',
      es: 'Polidextrosas A y N',
    },
    toxicity: 'Low',
  },
  {
    code: 'E1201',
    name: {
      en: 'Polyvinylpyrrolidone',
      es: 'Polivinilpirrolidona',
    },
  },
  {
    code: 'E1202',
    name: {
      en: 'Polyvinylpolypyrrolidone',
      es: 'Polivinilpolipirrolidona',
    },
  },
  {
    code: 'E1203',
    name: {
      en: 'Alcohol Polivinílico',
      es: 'Alcohol Polivinílico',
    },
  },
  {
    code: 'E1204',
    name: {
      en: 'Pululano',
      es: 'Pululano',
    },
    toxicity: 'Low',
  },
  {
    code: 'E1205',
    name: {
      en: 'Copolímero de Metacrilato Básico',
      es: 'Copolímero de Metacrilato Básico',
    },
  },
  {
    code: 'E1208',
    name: {
      en: 'Copolímero de Acetato de Vinilo',
      es: 'Copolímero de Acetato de Vinilo',
    },
    toxicity: 'High',
  },
  {
    code: 'E1209',
    name: {
      en: 'Copolímero de Injerto',
      es: 'Copolímero de Injerto',
    },
  },
  {
    code: 'E1400',
    name: {
      en: 'Dextrinas',
      es: 'Dextrinas',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1401',
    name: {
      en: 'Almidón Ácido',
      es: 'Almidón Ácido',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1402',
    name: {
      en: 'Almidón Alcalino',
      es: 'Almidón Alcalino',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1403',
    name: {
      en: 'Almidón Blanqueado',
      es: 'Almidón Blanqueado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1404',
    name: {
      en: 'Oxidised starch',
      es: 'Almidón Oxidado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1405',
    name: {
      en: 'Almidón Enzimático',
      es: 'Almidón Enzimático',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1410',
    name: {
      en: 'Monostarch phosphate',
      es: 'Fosfato de Monoalmidón',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1412',
    name: {
      en: 'Distarch phosphate',
      es: 'Fosfato de Dialmidón',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1413',
    name: {
      en: 'Phosphated distarch phosphate',
      es: 'Fosfato de Dialmidón Fosfatado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1414',
    name: {
      en: 'Acetylated starch',
      es: 'Fosfato de Dialmidón Acetilado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1420',
    name: {
      en: 'Acetylated Starch',
      es: 'Almidón Acetilado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1422',
    name: {
      en: 'Acetylated distarch adipate',
      es: 'Adipato de Dialmidón Acetilado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1440',
    name: {
      en: 'Hydroxyl propyl starch',
      es: 'Hidroxipropil de Almidón',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1441',
    name: {
      en: 'Glicerona de Dialmidón Hidroxipropilado',
      es: 'Glicerona de Dialmidón Hidroxipropilado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1442',
    name: {
      en: 'Hydroxy propyl distarch phosphate',
      es: 'Fosfato de Dialmidón Hidroxipropilado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1450',
    name: {
      en: 'Starch sodium octenyl succinate',
      es: 'Octenil Succinato Sódico de Almidón',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1451',
    name: {
      en: 'Acetylated oxidised starch',
      es: 'Almidón Oxidado Acetilado',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1452',
    name: {
      en: 'Octenil Succinato Alumínico de Almidón',
      es: 'Octenil Succinato Alumínico de Almidón',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1501',
    name: {
      en: 'Hidrocarbonos Bencilados',
      es: 'Hidrocarbonos Bencilados',
    },
  },
  {
    code: 'E1502',
    name: {
      en: 'Butanodiol',
      es: 'Butanodiol',
    },
  },
  {
    code: 'E1503',
    name: {
      en: 'Aceite de Ricino',
      es: 'Aceite de Ricino',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1504',
    name: {
      en: 'Acetato de Etilo',
      es: 'Acetato de Etilo',
    },
  },
  {
    code: 'E1505',
    name: {
      en: 'Triethyl citrate',
      es: 'Citrato de Trietilo',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1510',
    name: {
      en: 'Alcohol Etílico',
      es: 'Alcohol Etílico',
    },
  },
  {
    code: 'E1516',
    name: {
      en: 'Monoacetato de Glicerilo',
      es: 'Monoacetato de Glicerilo',
    },
    toxicity: 'Low',
  },
  {
    code: 'E1517',
    name: {
      en: 'Diacetato de Glicerilo',
      es: 'Diacetato de Glicerilo',
    },
    toxicity: 'Low',
  },
  {
    code: 'E1518',
    name: {
      en: 'Glyceryl triacetate; triacetin',
      es: 'Triacetato de Glicerilo',
    },
    toxicity: 'Low',
  },
  {
    code: 'E1519',
    name: {
      en: 'Alcohol Bencílico',
      es: 'Alcohol Bencílico',
    },
    toxicity: 'Medium',
  },
  {
    code: 'E1520',
    description: {
      en: 'Synthetic carrier for extracts',
    },
    name: {
      en: 'Propylene Glycol',
      es: 'Propilenglicol',
    },
    toxicity: 'Low',
  },
  {
    code: 'E1521',
    name: {
      en: 'Polietilenglicol',
      es: 'Polietilenglicol',
    },
    toxicity: 'High',
  },
  {
    code: 'E1522',
    name: {
      en: 'Lignosulfonato de Calcio',
      es: 'Lignosulfonato de Calcio',
    },
  },
];
