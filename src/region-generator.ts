type Region = {
  tags: RegionTag[]
  population: Population
}

type Population = {
  level: PopulationLevel
  characteristic: PopulationCharacteristic
}

type RegionTag = {
  tag: string
  description: string
}

type PopulationLevel = {
  level: string
  description: string
}

type PopulationCharacteristic = {
  characteristic: string
  description: string
}

type RegionTagTable = {
  [key: string]: RegionTag
}

type PopulationLevelTable = {
  [key: string]: PopulationLevel
}

type PopulationCharacteristicsTable = {
  [key: string]: PopulationCharacteristic
}

export function generateRegionText(): string {
  const region = generateRegion()
  const tags = region.tags.map(tag => `${tag.tag}: ${tag.description}\n`).join('')
  const populationLevel = `${region.population.level.level}: ${region.population.level.description}\n`
  const populationCharacteristic = `${region.population.characteristic.characteristic}: ${region.population.characteristic.description}\n`

  return `**Region Tags**\n${tags}\n**Population Level**\n${populationLevel}\n**Population Characteristic**\n${populationCharacteristic}`
}

function generateRegion(): Region {
  const tags = generateTags()
  const population = generatePopulation()

  return {
    tags,
    population
  }
}

function generateTags(): RegionTag[] {
  const firstRoll = randomNumber(100)
  const secondRoll = randomNumber(100)

  const firstTag = regions[firstRoll.toString()]
  const secondTag = regions[secondRoll.toString()]

  return [firstTag, secondTag]
}

function generatePopulation(): Population {
  const level = generatePopulationLevel()
  const characteristic = generatePopulationCharacteristic()

  return {
    level,
    characteristic
  }
}

function generatePopulationLevel(): PopulationLevel {
  const firstRoll = randomNumber(6)
  const secondRoll = randomNumber(6)
  const totalRoll = firstRoll + secondRoll

  return populationLevels[totalRoll.toString()]
}

function generatePopulationCharacteristic(): PopulationCharacteristic {
  const firstRoll = randomNumber(6)
  const secondRoll = randomNumber(6)
  const thirdRoll = randomNumber(6)
  const totalRoll = firstRoll + secondRoll + thirdRoll

  return populationCharacteristics[totalRoll.toString()]
}

function randomNumber(max: number): number {
  return Math.floor(Math.random() * max) + 1
}

const regions: RegionTagTable = {
  '1': {
    tag: 'Alpine Heights',
    description: 'Towering mountains with snow-capped peaks, treacherous passes, and isolated valleys.'
  },
  '2': {
    tag: 'Archipelago',
    description: 'Chain of islands varying in size, connected by shallow waters, reefs, or magical bridges.'
  },
  '3': {
    tag: 'Badlands',
    description: 'Heavily eroded landscape of ridges, gullies, and hoodoos, often arid and difficult to navigate.'
  },
  '4': {
    tag: 'Canyon Network',
    description: 'Vast system of deep ravines carved by ancient rivers, with unique ecosystems at different depths.'
  },
  '5': {
    tag: 'Coastal Shallows',
    description: 'Where land meets sea, featuring beaches, tidal pools, barrier islands, and submerged ruins.'
  },
  '6': {
    tag: 'Crystalline Caverns',
    description: 'Underground chambers filled with massive crystal formations that may enhance or distort magic.'
  },
  '7': {
    tag: 'Dense Jungle',
    description: 'Tangled rainforest with multiple canopy layers, limited visibility, and incredibly diverse life.'
  },
  '8': {
    tag: 'Dune Sea',
    description: 'Vast expanses of shifting sand dunes that move like waves, burying and revealing ancient secrets.'
  },
  '9': {
    tag: 'Floating Terrain',
    description: 'Land masses that defy gravity, hovering above the ground due to magical or natural forces.'
  },
  '10': {
    tag: 'Fungal Forest',
    description: 'Region dominated by massive mushrooms and fungi instead of traditional plants and trees.'
  },
  '11': {
    tag: 'Geothermal Field',
    description: 'Area riddled with hot springs, geysers, fumaroles, and mud pots due to volcanic activity below.'
  },
  '12': {
    tag: 'Highland Moors',
    description: 'Elevated wetlands with peat bogs, misty valleys, and treacherous sinkholes.'
  },
  '13': {
    tag: 'Hollow Mountain',
    description: "Massive peak that's largely hollow inside, possibly containing an entire hidden ecosystem."
  },
  '14': {
    tag: 'Mist-Shrouded Valley',
    description: 'Lowland perpetually covered in thick fog, hiding its features and inhabitants from outside view.'
  },
  '15': {
    tag: 'River Delta',
    description:
      'Fertile region where a river splits into many channels before reaching the sea, forming marshy islands.'
  },
  '16': {
    tag: 'Rootbound Depths',
    description: 'Underground network formed by massive root systems from ancient trees on the surface.'
  },
  '17': {
    tag: 'Savanna Expanse',
    description: 'Open grassland dotted with occasional trees, supporting large herds and their predators.'
  },
  '18': {
    tag: 'Shattered Plains',
    description: 'Once-continuous flatland now broken into a labyrinth of ravines by some cataclysmic event.'
  },
  '19': {
    tag: 'Stormwracked Coast',
    description: 'Shoreline battered by perpetual tempests, with wave-carved caves and lightning-scarred cliffs.'
  },
  '20': {
    tag: 'Verdant Basin',
    description: 'Lush valley surrounded by harsh terrain, creating an isolated paradise with unique development.'
  },
  '21': {
    tag: 'Arcane Nexus',
    description: 'Convergence of ley lines creating unstable magical conditions and attracting arcane practitioners.'
  },
  '22': {
    tag: 'Astral Breach',
    description:
      'Area where the barrier between the material plane and Astral Plane has weakened, causing gravity anomalies.'
  },
  '23': {
    tag: 'Awoken Land',
    description:
      'Region that has developed consciousness, responding to those who travel through it based on their intentions.'
  },
  '24': {
    tag: 'Blurred Reality',
    description: 'Zone where illusions may become temporarily real and reality appears malleable.'
  },
  '25': {
    tag: 'Celestial Footprint',
    description:
      'Site where a divine being once walked, leaving permanent magical effects that slowly change the landscape.'
  },
  '26': {
    tag: 'Chaos-Warped',
    description: 'Area distorted by chaotic magic, with unpredictable effects on magic, physics, and living beings.'
  },
  '27': {
    tag: 'Conjuration Backwash',
    description: 'Region where summoned creatures frequently appear without being called, due to planar thinning.'
  },
  '28': {
    tag: 'Dream Resonance',
    description: 'Location where the Plane of Dreams leaks into reality, manifesting dream elements when people sleep.'
  },
  '29': {
    tag: 'Elemental Confluence',
    description:
      'Zone where two or more elemental planes overlap with the material world, creating hybrid environments.'
  },
  '30': {
    tag: 'Faerzress Field',
    description:
      'Area infused with strange radiation from the Underdark that enhances certain spells and interferes with others.'
  },
  '31': {
    tag: 'Feytouched',
    description:
      'Region influenced by the Feywild, with vibrant colors, emotionally reactive plantlife, and time distortions.'
  },
  '32': {
    tag: 'Incarnate Magic',
    description: 'Area where spells may take physical form as sentient creatures for brief periods after being cast.'
  },
  '33': {
    tag: 'Lifeshaping Energy',
    description: 'Magical field that accelerates evolution and growth, creating unusual flora and fauna adaptations.'
  },
  '34': {
    tag: 'Mana Fountain',
    description:
      'Natural wellspring of magical energy that saturates the area, enhancing spellcasting but risking wild surges.'
  },
  '35': {
    tag: 'Necromantic Seepage',
    description: 'Zone where the barrier to negative energy is thin, causing spontaneous animation of dead matter.'
  },
  '36': {
    tag: 'Primordial Essence',
    description: 'Region imbued with magic from the dawn of creation, fundamentally altering how elements behave.'
  },
  '37': {
    tag: 'Shadow Veil',
    description: 'Area where the Shadowfell bleeds into the material plane, dulling colors and muting emotions.'
  },
  '38': {
    tag: 'Spellscarred',
    description:
      'Land bearing the marks of a magical catastrophe, with lingering effects that can be beneficial or harmful.'
  },
  '39': {
    tag: 'Temporal Anomaly',
    description:
      'Location where time flows differently—faster, slower, or nonlinearly—compared to the surrounding world.'
  },
  '40': {
    tag: 'Wild Magic Zone',
    description: 'Area where magic becomes unpredictable and may produce dramatically different effects than intended.'
  },
  '41': {
    tag: 'Ancient Battlefield',
    description:
      'Land scarred by a historic conflict, with lingering war magic and restless spirits of fallen combatants.'
  },
  '42': {
    tag: 'Contested Territory',
    description: 'Region claimed by multiple factions or powers, resulting in unclear borders and frequent skirmishes.'
  },
  '43': {
    tag: 'Cult Sanctuary',
    description:
      'Remote area where secretive religious orders practice their rites away from the judging eyes of civilization.'
  },
  '44': {
    tag: 'Displaced Society',
    description: 'Home to a people who fled their original lands, bringing unique customs and architectural styles.'
  },
  '45': {
    tag: 'Divided Realm',
    description:
      'Region artificially split by magical barriers, physical walls, or planar boundaries, dividing once-united peoples.'
  },
  '46': {
    tag: 'Druidic Circle',
    description:
      'Natural sanctuary maintained by druids for generations, with carefully cultivated plant and animal life.'
  },
  '47': {
    tag: 'Eldritch Colony',
    description: 'Settlement established by aberrations or their servants, with alien architecture and customs.'
  },
  '48': {
    tag: 'Fallen Capital',
    description: 'Former seat of a mighty empire now in ruins, housing forgotten treasures and lingering enchantments.'
  },
  '49': {
    tag: 'Forgotten Wonder',
    description: 'Site of a legendary marvel of magic or engineering that has been lost to common knowledge.'
  },
  '50': {
    tag: "Giant's Legacy",
    description:
      'Area once inhabited by giants, with oversized ruins and artifacts too massive for smaller races to use easily.'
  },
  '51': {
    tag: 'Godforged Land',
    description:
      'Terrain literally shaped by deities during ancient conflicts or creation events, bearing divine signatures.'
  },
  '52': {
    tag: 'Hallowed Ground',
    description:
      'Site of profound religious significance that has been sanctified through ritual or divine intervention.'
  },
  '53': {
    tag: 'Hermit Haven',
    description:
      'Region favored by those seeking isolation, dotted with caves, towers, and cabins of eccentric individuals.'
  },
  '54': {
    tag: 'Mercantile Nexus',
    description: 'Trading hub where cultures mix freely, with markets, warehouses, and guilds dominating the landscape.'
  },
  '55': {
    tag: 'Monastic Retreat',
    description: 'Area dotted with monasteries and meditation sites, often with unique fighting or magical traditions.'
  },
  '56': {
    tag: "Pilgrim's Path",
    description: 'Route traveled by the faithful, marked by shrines, hostels, and monuments to spiritual events.'
  },
  '57': {
    tag: 'Reclaimed Territory',
    description: 'Region recently recovered from monster infestation, natural disaster, or enemy occupation.'
  },
  '58': {
    tag: 'Sealed Evil',
    description: 'Land cordoned off to contain a powerful malevolent force, with wards, guardians, and warning markers.'
  },
  '59': {
    tag: 'Tribal Domains',
    description:
      'Territory divided among traditional kinship groups, each with distinct hunting grounds and sacred sites.'
  },
  '60': {
    tag: 'Warped Civilization',
    description: 'Society that has adapted to extreme magical conditions, developing unusual practices and abilities.'
  },
  '61': {
    tag: 'Beast Dominion',
    description:
      'Territory ruled by intelligent animals or magical beasts who have organized into a functional society.'
  },
  '62': {
    tag: 'Boundless Migration',
    description:
      'Region where massive herds of magical creatures perpetually travel in a circuit, shaping the environment.'
  },
  '63': {
    tag: 'Celestial Stewardship',
    description: 'Area watched over by angels or other celestial beings who subtly guide its development.'
  },
  '64': {
    tag: 'Constructed Guardians',
    description: 'Zone protected by magical automatons or constructs still following ancient programming.'
  },
  '65': {
    tag: "Dragon's Demesne",
    description: 'Territory claimed by one or more dragons, with landscape and climate altered to suit their nature.'
  },
  '66': {
    tag: 'Drow Outreach',
    description: 'Surface region with secret connections to the Underdark, used by drow for reconnaissance or trade.'
  },
  '67': {
    tag: 'Elemental Embodiments',
    description: 'Area where elemental spirits have taken physical form, becoming features of the landscape itself.'
  },
  '68': {
    tag: 'Feral Magic',
    description: 'Region where magic has become untamed and manifests as semi-sentient predatory phenomena.'
  },
  '69': {
    tag: 'Flesh-Warping Denizens',
    description: 'Home to creatures who can alter their physical forms, either naturally or through magical means.'
  },
  '70': {
    tag: 'Giant-Kin Tribes',
    description:
      'Territory claimed by ogres, trolls, ettins, or other giant-kin who have established primitive societies.'
  },
  '71': {
    tag: 'Hive Network',
    description: 'Region dominated by hive-minded creatures with complex tunnel systems and coordinated activities.'
  },
  '72': {
    tag: 'Hybridized Populace',
    description: 'Area where two or more species have interbred over generations, creating unique mixed traits.'
  },
  '73': {
    tag: 'Lycanthrope Packs',
    description: 'Forests or hills claimed by werewolves or other were-creatures who maintain secret communities.'
  },
  '74': {
    tag: 'Myconid Circles',
    description: 'Underground societies of fungus-folk who communicate through spores and cultivate mindscapes.'
  },
  '75': {
    tag: 'Planar Immigrants',
    description: 'Region settled by outsiders from other planes who have brought their customs and environments.'
  },
  '76': {
    tag: 'Reanimated Workforce',
    description: 'Area where undead are used for labor, either through ancient curses or contemporary necromancy.'
  },
  '77': {
    tag: 'Shapeshifter Haven',
    description: 'Territory where doppelgangers and other shapeshifters live openly among themselves.'
  },
  '78': {
    tag: 'Spirit-Bound',
    description: 'Region where local spirits have formed symbiotic relationships with plants, animals, or humanoids.'
  },
  '79': {
    tag: "Titans' Playground",
    description:
      'Land where enormous primordial entities still roam, unknowingly affecting the smaller societies below.'
  },
  '80': {
    tag: 'Yuan-Ti Infiltration',
    description: 'Region where snake-people have established hidden temples and are gradually assuming control.'
  },
  '81': {
    tag: 'Antimagic Zones',
    description: 'Pockets where magic fails unpredictably, creating hazards for spellcasters and magical creatures.'
  },
  '82': {
    tag: 'Blood-Iron Deposits',
    description: 'Region rich with magnetic ore that affects navigation, metallic equipment, and blood-based magic.'
  },
  '83': {
    tag: 'Chorus Stone',
    description:
      'Area where certain rocks resonate with harmonic frequencies that can alter emotions or enhance sonic magic.'
  },
  '84': {
    tag: 'Color-Shifted',
    description: 'Zone where the visible spectrum is altered, changing the appearance of everything within it.'
  },
  '85': {
    tag: 'Colossal Flora',
    description:
      'Region where plant life grows to enormous proportions, creating forests of grass or flowers the size of trees.'
  },
  '86': {
    tag: 'Crystalline Contagion',
    description:
      'Area where living things gradually develop crystal growths that may be beautiful, harmful, or empowering.'
  },
  '87': {
    tag: 'Dimensional Echoes',
    description: 'Location where actions may be repeated in shadowy form, creating phantom images of recent events.'
  },
  '88': {
    tag: 'Dream Residue',
    description: 'Region where particularly powerful dreams have left tangible remnants in the waking world.'
  },
  '89': {
    tag: 'Emotion Fields',
    description: 'Areas that magically amplify specific emotions, potentially driving visitors to extreme behaviors.'
  },
  '90': {
    tag: 'Entropically Accelerated',
    description: 'Zone where objects age and decay more rapidly than they should, challenging visitors and inhabitants.'
  },
  '91': {
    tag: 'Everchanging Paths',
    description: 'Terrain that subtly rearranges itself, making maps unreliable and navigation challenging.'
  },
  '92': {
    tag: 'Flameless Heat',
    description: 'Region that maintains unusual temperatures without visible sources of heat or cold.'
  },
  '93': {
    tag: 'Gravitic Anomaly',
    description: 'Area with unusual gravitational properties—stronger, weaker, or oriented in an unexpected direction.'
  },
  '94': {
    tag: 'Living Metal',
    description: 'Region where metal seems animate, sometimes forming into simple constructs or tools spontaneously.'
  },
  '95': {
    tag: 'Memory Wood',
    description: 'Trees that absorb memories from nearby beings, which can be recovered by those who know the method.'
  },
  '96': {
    tag: 'Mirrored Reality',
    description:
      'Zone where every object, creature, or feature has a duplicate or reflection somewhere within the region.'
  },
  '97': {
    tag: 'Prismatic Infusion',
    description: 'Area where light separates into vivid rainbow hues that grant temporary magical properties.'
  },
  '98': {
    tag: 'Quicksilver Pools',
    description: 'Natural deposits of magical liquid metal that responds to thoughts or emotions of nearby creatures.'
  },
  '99': {
    tag: 'Resonant Echo',
    description:
      'Phenomenon where sounds occasionally repeat with altered meaning, as if the land itself is communicating.'
  },
  '100': {
    tag: 'Vitality Springs',
    description:
      'Natural wellsprings of life energy that can heal wounds, extend youth, or cause rapid growth in plants.'
  }
}

const populationLevels: PopulationLevelTable = {
  '2': {
    level: 'Abandoned',
    description:
      'The region is effectively empty of sentient inhabitants. Any previous settlements are now ruins or have been reclaimed by nature. Only the occasional hermit, exile, or monster might be found here.'
  },
  '3': {
    level: 'Outpost',
    description:
      'A tiny settlement of 10-50 individuals, possibly a trading post, watchtower, research station, or religious retreat. Extremely isolated with minimal facilities.'
  },
  '4': {
    level: 'Sparse',
    description:
      "Population of 50-500 spread across a large area. Might include scattered homesteads, nomadic tribes, or small villages that are several days' travel apart. Limited resources and services available."
  },
  '5': {
    level: 'Village',
    description:
      'One primary settlement of 500-1,000 residents plus surrounding farms or camps. Contains basic services like a blacksmith, general store, small temple, and perhaps a tavern.'
  },
  '6': {
    level: 'Populous',
    description:
      'Several villages or towns totaling 1,000-5,000 people. The region has established trade routes and contains multiple settlements with specialized craftspeople and services.'
  },
  '7': {
    level: 'Dense',
    description:
      'Multiple large towns or a small city with outlying villages, housing 5,000-15,000 people. Regional political center with diverse occupations, multiple industries, and organized governance.'
  },
  '8': {
    level: 'Crowded',
    description:
      'A city-state or province containing 15,000-50,000 inhabitants. Features significant urban development, complex social hierarchies, specialized districts, and substantial defenses.'
  },
  '9': {
    level: 'Teeming',
    description:
      'Major urban center or multiple cities with 50,000-100,000 people. Political and economic powerhouse with monuments, advanced infrastructure, and cosmopolitan population.'
  },
  '10': {
    level: 'Metropolis',
    description:
      'Massive city or densely populated region with 100,000-500,000 inhabitants. Contains wonders of architecture, centers of learning, diverse neighborhoods, and complex political structures.'
  },
  '11': {
    level: 'Megalopolis',
    description:
      'Sprawling urban landscape housing 500,000-1,000,000 people. A true wonder of the world with multiple districts, possibly extending vertically or magically, and serving as a cultural and political center for an entire realm.'
  },
  '12': {
    level: 'Ecumenopolis',
    description:
      'Impossible density of over 1,000,000 inhabitants. The entire region is urbanized, possibly through magical means or planar overlaps. Multiple levels of development both above and below ground. The scale is bewildering to outsiders and represents the pinnacle of civilization in your world.'
  }
}

const populationCharacteristics: PopulationCharacteristicsTable = {
  '3': {
    characteristic: 'Exiles',
    description:
      'The population consists primarily of people who were forced from their original homes. They may be political refugees, survivors of a disaster, or outcasts who formed their own community. They often maintain some customs from their original culture while developing new traditions born of adversity.'
  },
  '4': {
    characteristic: 'Conquered People',
    description:
      'This population was subjugated by an outside force in the past and still bears the cultural scars. Though perhaps now independent, their architecture, language, and customs show clear influence from their former rulers, and attitudes toward outsiders may be colored by this history.'
  },
  '5': {
    characteristic: 'Isolationists',
    description:
      "Through choice or necessity, this population has minimal contact with the outside world. They're likely suspicious of strangers, have unique dialects or customs, and may possess knowledge or techniques that have died out elsewhere. Their isolation might be geographic, political, or due to religious beliefs."
  },
  '6': {
    characteristic: 'Deeply Religious',
    description:
      'Faith dominates daily life for this population. Their settlement is organized around temples or shrines, religious leaders hold significant authority, and religious observances punctuate the calendar. Their faith might be mainstream or an unusual sect with distinctive practices.'
  },
  '7': {
    characteristic: 'Specialized Crafters',
    description:
      'The population is known for exceptional skill in a particular craft or industry. Most inhabitants have at least basic proficiency in this specialty, which might be metallurgy, textiles, woodworking, shipbuilding, alchemy, or another valuable trade that forms the core of their economy and identity.'
  },
  '8': {
    characteristic: 'Frontier Settlers',
    description:
      "Occupying the edge of civilized lands, this hardy population has adapted to life with minimal outside support. They're typically self-sufficient, practical, and accustomed to defending themselves. Their settlements may be newer and still establishing permanent structures and traditions."
  },
  '9': {
    characteristic: 'Traditional',
    description:
      'The population maintains customs and practices that have remained largely unchanged for generations. They value stability and continuity, possibly resisting innovation or outside influence. Elders are respected for their knowledge of traditions, and time-honored methods are preferred over new approaches.'
  },
  '10': {
    characteristic: 'Trade Focused',
    description:
      'Commerce is the lifeblood of this population. Their settlement likely sits at a crossroads, river junction, or natural harbor. They welcome travelers, maintain multiple languages, and have adopted practices and goods from various cultures. Merchant guilds may hold significant political power.'
  },
  '11': {
    characteristic: 'Hierarchical',
    description:
      "A clear social structure defines this population, with distinct classes or castes determining one's opportunities and obligations. This hierarchy might be based on birth, wealth, occupation, or demonstrated skill. Social mobility may be limited, with visible markers of status such as clothing or jewelry."
  },
  '12': {
    characteristic: 'Diverse Origins',
    description:
      'Unlike most settlements with a dominant cultural group, this population comprises multiple distinct ethnicities or races. The community may be highly integrated or divided into enclaves, but the mixture creates a unique local culture blending elements from various traditions.'
  },
  '13': {
    characteristic: 'Military Tradition',
    description:
      'Martial skills are highly valued, with many citizens receiving combat training regardless of their primary occupation. This might stem from a history of conflict, strategic location, or cultural values. Martial accomplishments bring prestige, and military leaders often hold political authority as well.'
  },
  '14': {
    characteristic: 'Knowledge Keepers',
    description:
      "The preservation and advancement of knowledge is central to this population's identity. They maintain libraries, schools, or oral traditions, and scholars enjoy high status. Education may be widely available or restricted to certain classes, but intellectual achievement is respected throughout society."
  },
  '15': {
    characteristic: 'Resource Bound',
    description:
      "The population's way of life revolves around a single critical resource found in their region. This might be a valuable trade good, essential food source, or material with special properties. Their settlement patterns, social structure, and customs have developed around harvesting, processing, and protecting this resource."
  },
  '16': {
    characteristic: 'Tribal Structure',
    description:
      'Extended family bonds form the foundation of social organization. The population is divided into clans or tribes with distinct identities, territories, and sometimes specializations. Leadership may be hereditary or determined by merit within each group, with a council of representatives handling matters affecting the entire community.'
  },
  '17': {
    characteristic: 'Ancient Lineage',
    description:
      'This population traces its history back to a legendary founder, noble house, or heroic figure. They take pride in this heritage, which may confer actual or perceived special qualities or responsibilities. Family histories are meticulously maintained, and ancestral achievements influence present-day status.'
  },
  '18': {
    characteristic: 'Adapted to Hardship',
    description:
      'The population has survived extreme adversity—whether environmental challenges, persistent threats, or periodic disasters—developing unusual customs and skills as a result. Their adaptations might appear strange to outsiders but are perfectly suited to their specific circumstances.'
  }
}
