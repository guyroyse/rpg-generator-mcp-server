import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

type Element = {
  name: string
  description: string
}

export function setUpHexGenerator(server: McpServer) {
  server.tool(
    'ttrgp_hex_elements',
    'Select random elements to describe a hex on a world map for a TTRPG',
    {
      numberOfTags: z.number().min(1).default(2).describe('Number of tags to return to generate the hex')
    },
    async ({ numberOfTags }) => {
      const tags = randomTags(numberOfTags)
      const settlements = randomSettlements()

      const content: { type: 'text'; text: string }[] = []

      for (const tag of tags) {
        content.push({
          type: 'text',
          text: `Tag used to describe what is in the hex: ${tag.name} - ${tag.description}`
        })
      }

      content.push({
        type: 'text',
        text: `What sort of settlement or settlements are in the hex, if any: ${settlements.name} - ${settlements.description}`
      })

      return { content }
    }
  )

  server.prompt('ttrgp_hex_generator', 'Generate a hex for a TTRPG world map', {}, () => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Using the ttrgp_hex_elements tool, generate a hex for a TTRPG world map.`
        }
      }
    ]
  }))
}

function randomTags(quantity: number): Element[] {
  return randomElements(tags, quantity) as Element[]
}

function randomSettlements(): Element {
  const selectedSettlements = randomElements(settlements, 1) as Element[]
  return selectedSettlements[0]
}

function randomElements(array: Element[], quantity: number): Element[] {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, quantity)
}

const tags: Element[] = [
  {
    name: 'Alpine Heights',
    description: 'Towering mountains with snow-capped peaks, treacherous passes, and isolated valleys.'
  },
  {
    name: 'Archipelago',
    description: 'Chain of islands varying in size, connected by shallow waters, reefs, or magical bridges.'
  },
  {
    name: 'Badlands',
    description: 'Heavily eroded landscape of ridges, gullies, and hoodoos, often arid and difficult to navigate.'
  },
  {
    name: 'Canyon Network',
    description: 'Vast system of deep ravines carved by ancient rivers, with unique ecosystems at different depths.'
  },
  {
    name: 'Coastal Shallows',
    description: 'Where land meets sea, featuring beaches, tidal pools, barrier islands, and submerged ruins.'
  },
  {
    name: 'Crystalline Caverns',
    description: 'Underground chambers filled with massive crystal formations that may enhance or distort magic.'
  },
  {
    name: 'Dense Jungle',
    description: 'Tangled rainforest with multiple canopy layers, limited visibility, and incredibly diverse life.'
  },
  {
    name: 'Dune Sea',
    description: 'Vast expanses of shifting sand dunes that move like waves, burying and revealing ancient secrets.'
  },
  {
    name: 'Floating Terrain',
    description: 'Land masses that defy gravity, hovering above the ground due to magical or natural forces.'
  },
  {
    name: 'Fungal Forest',
    description: 'Region dominated by massive mushrooms and fungi instead of traditional plants and trees.'
  },
  {
    name: 'Geothermal Field',
    description: 'Area riddled with hot springs, geysers, fumaroles, and mud pots due to volcanic activity below.'
  },
  {
    name: 'Highland Moors',
    description: 'Elevated wetlands with peat bogs, misty valleys, and treacherous sinkholes.'
  },
  {
    name: 'Hollow Mountain',
    description: "Massive peak that's largely hollow inside, possibly containing an entire hidden ecosystem."
  },
  {
    name: 'Mist-Shrouded Valley',
    description: 'Lowland perpetually covered in thick fog, hiding its features and inhabitants from outside view.'
  },
  {
    name: 'River Delta',
    description:
      'Fertile region where a river splits into many channels before reaching the sea, forming marshy islands.'
  },
  {
    name: 'Rootbound Depths',
    description: 'Underground network formed by massive root systems from ancient trees on the surface.'
  },
  {
    name: 'Savanna Expanse',
    description: 'Open grassland dotted with occasional trees, supporting large herds and their predators.'
  },
  {
    name: 'Shattered Plains',
    description: 'Once-continuous flatland now broken into a labyrinth of ravines by some cataclysmic event.'
  },
  {
    name: 'Stormwracked Coast',
    description: 'Shoreline battered by perpetual tempests, with wave-carved caves and lightning-scarred cliffs.'
  },
  {
    name: 'Verdant Basin',
    description: 'Lush valley surrounded by harsh terrain, creating an isolated paradise with unique development.'
  },
  {
    name: 'Arcane Nexus',
    description: 'Convergence of ley lines creating unstable magical conditions and attracting arcane practitioners.'
  },
  {
    name: 'Astral Breach',
    description:
      'Area where the barrier between the material plane and Astral Plane has weakened, causing gravity anomalies.'
  },
  {
    name: 'Awoken Land',
    description:
      'Region that has developed consciousness, responding to those who travel through it based on their intentions.'
  },
  {
    name: 'Blurred Reality',
    description: 'Zone where illusions may become temporarily real and reality appears malleable.'
  },
  {
    name: 'Celestial Footprint',
    description:
      'Site where a divine being once walked, leaving permanent magical effects that slowly change the landscape.'
  },
  {
    name: 'Chaos-Warped',
    description: 'Area distorted by chaotic magic, with unpredictable effects on magic, physics, and living beings.'
  },
  {
    name: 'Conjuration Backwash',
    description: 'Region where summoned creatures frequently appear without being called, due to planar thinning.'
  },
  {
    name: 'Dream Resonance',
    description: 'Location where the Plane of Dreams leaks into reality, manifesting dream elements when people sleep.'
  },
  {
    name: 'Elemental Confluence',
    description:
      'Zone where two or more elemental planes overlap with the material world, creating hybrid environments.'
  },
  {
    name: 'Faerzress Field',
    description:
      'Area infused with strange radiation from the Underdark that enhances certain spells and interferes with others.'
  },
  {
    name: 'Feytouched',
    description:
      'Region influenced by the Feywild, with vibrant colors, emotionally reactive plantlife, and time distortions.'
  },
  {
    name: 'Incarnate Magic',
    description: 'Area where spells may take physical form as sentient creatures for brief periods after being cast.'
  },
  {
    name: 'Lifeshaping Energy',
    description: 'Magical field that accelerates evolution and growth, creating unusual flora and fauna adaptations.'
  },
  {
    name: 'Mana Fountain',
    description:
      'Natural wellspring of magical energy that saturates the area, enhancing spellcasting but risking wild surges.'
  },
  {
    name: 'Necromantic Seepage',
    description: 'Zone where the barrier to negative energy is thin, causing spontaneous animation of dead matter.'
  },
  {
    name: 'Primordial Essence',
    description: 'Region imbued with magic from the dawn of creation, fundamentally altering how elements behave.'
  },
  {
    name: 'Shadow Veil',
    description: 'Area where the Shadowfell bleeds into the material plane, dulling colors and muting emotions.'
  },
  {
    name: 'Spellscarred',
    description:
      'Land bearing the marks of a magical catastrophe, with lingering effects that can be beneficial or harmful.'
  },
  {
    name: 'Temporal Anomaly',
    description:
      'Location where time flows differently—faster, slower, or nonlinearly—compared to the surrounding world.'
  },
  {
    name: 'Wild Magic Zone',
    description: 'Area where magic becomes unpredictable and may produce dramatically different effects than intended.'
  },
  {
    name: 'Ancient Battlefield',
    description:
      'Land scarred by a historic conflict, with lingering war magic and restless spirits of fallen combatants.'
  },
  {
    name: 'Contested Territory',
    description: 'Region claimed by multiple factions or powers, resulting in unclear borders and frequent skirmishes.'
  },
  {
    name: 'Cult Sanctuary',
    description:
      'Remote area where secretive religious orders practice their rites away from the judging eyes of civilization.'
  },
  {
    name: 'Displaced Society',
    description: 'Home to a people who fled their original lands, bringing unique customs and architectural styles.'
  },
  {
    name: 'Divided Realm',
    description:
      'Region artificially split by magical barriers, physical walls, or planar boundaries, dividing once-united peoples.'
  },
  {
    name: 'Druidic Circle',
    description:
      'Natural sanctuary maintained by druids for generations, with carefully cultivated plant and animal life.'
  },
  {
    name: 'Eldritch Colony',
    description: 'Settlement established by aberrations or their servants, with alien architecture and customs.'
  },
  {
    name: 'Fallen Capital',
    description: 'Former seat of a mighty empire now in ruins, housing forgotten treasures and lingering enchantments.'
  },
  {
    name: 'Forgotten Wonder',
    description: 'Site of a legendary marvel of magic or engineering that has been lost to common knowledge.'
  },
  {
    name: "Giant's Legacy",
    description:
      'Area once inhabited by giants, with oversized ruins and artifacts too massive for smaller races to use easily.'
  },
  {
    name: 'Godforged Land',
    description:
      'Terrain literally shaped by deities during ancient conflicts or creation events, bearing divine signatures.'
  },
  {
    name: 'Hallowed Ground',
    description:
      'Site of profound religious significance that has been sanctified through ritual or divine intervention.'
  },
  {
    name: 'Hermit Haven',
    description:
      'Region favored by those seeking isolation, dotted with caves, towers, and cabins of eccentric individuals.'
  },
  {
    name: 'Mercantile Nexus',
    description: 'Trading hub where cultures mix freely, with markets, warehouses, and guilds dominating the landscape.'
  },
  {
    name: 'Monastic Retreat',
    description: 'Area dotted with monasteries and meditation sites, often with unique fighting or magical traditions.'
  },
  {
    name: "Pilgrim's Path",
    description: 'Route traveled by the faithful, marked by shrines, hostels, and monuments to spiritual events.'
  },
  {
    name: 'Reclaimed Territory',
    description: 'Region recently recovered from monster infestation, natural disaster, or enemy occupation.'
  },
  {
    name: 'Sealed Evil',
    description: 'Land cordoned off to contain a powerful malevolent force, with wards, guardians, and warning markers.'
  },
  {
    name: 'Tribal Domains',
    description:
      'Territory divided among traditional kinship groups, each with distinct hunting grounds and sacred sites.'
  },
  {
    name: 'Warped Civilization',
    description: 'Society that has adapted to extreme magical conditions, developing unusual practices and abilities.'
  },
  {
    name: 'Beast Dominion',
    description:
      'Territory ruled by intelligent animals or magical beasts who have organized into a functional society.'
  },
  {
    name: 'Boundless Migration',
    description:
      'Region where massive herds of magical creatures perpetually travel in a circuit, shaping the environment.'
  },
  {
    name: 'Celestial Stewardship',
    description: 'Area watched over by angels or other celestial beings who subtly guide its development.'
  },
  {
    name: 'Constructed Guardians',
    description: 'Zone protected by magical automatons or constructs still following ancient programming.'
  },
  {
    name: "Dragon's Demesne",
    description: 'Territory claimed by one or more dragons, with landscape and climate altered to suit their nature.'
  },
  {
    name: 'Drow Outreach',
    description: 'Surface region with secret connections to the Underdark, used by drow for reconnaissance or trade.'
  },
  {
    name: 'Elemental Embodiments',
    description: 'Area where elemental spirits have taken physical form, becoming features of the landscape itself.'
  },
  {
    name: 'Feral Magic',
    description: 'Region where magic has become untamed and manifests as semi-sentient predatory phenomena.'
  },
  {
    name: 'Flesh-Warping Denizens',
    description: 'Home to creatures who can alter their physical forms, either naturally or through magical means.'
  },
  {
    name: 'Giant-Kin Tribes',
    description:
      'Territory claimed by ogres, trolls, ettins, or other giant-kin who have established primitive societies.'
  },
  {
    name: 'Hive Network',
    description: 'Region dominated by hive-minded creatures with complex tunnel systems and coordinated activities.'
  },
  {
    name: 'Hybridized Populace',
    description: 'Area where two or more species have interbred over generations, creating unique mixed traits.'
  },
  {
    name: 'Lycanthrope Packs',
    description: 'Forests or hills claimed by werewolves or other were-creatures who maintain secret communities.'
  },
  {
    name: 'Myconid Circles',
    description: 'Underground societies of fungus-folk who communicate through spores and cultivate mindscapes.'
  },
  {
    name: 'Planar Immigrants',
    description: 'Region settled by outsiders from other planes who have brought their customs and environments.'
  },
  {
    name: 'Reanimated Workforce',
    description: 'Area where undead are used for labor, either through ancient curses or contemporary necromancy.'
  },
  {
    name: 'Shapeshifter Haven',
    description: 'Territory where doppelgangers and other shapeshifters live openly among themselves.'
  },
  {
    name: 'Spirit-Bound',
    description: 'Region where local spirits have formed symbiotic relationships with plants, animals, or humanoids.'
  },
  {
    name: "Titans' Playground",
    description:
      'Land where enormous primordial entities still roam, unknowingly affecting the smaller societies below.'
  },
  {
    name: 'Yuan-Ti Infiltration',
    description: 'Region where snake-people have established hidden temples and are gradually assuming control.'
  },
  {
    name: 'Antimagic Zones',
    description: 'Pockets where magic fails unpredictably, creating hazards for spellcasters and magical creatures.'
  },
  {
    name: 'Blood-Iron Deposits',
    description: 'Region rich with magnetic ore that affects navigation, metallic equipment, and blood-based magic.'
  },
  {
    name: 'Chorus Stone',
    description:
      'Area where certain rocks resonate with harmonic frequencies that can alter emotions or enhance sonic magic.'
  },
  {
    name: 'Color-Shifted',
    description: 'Zone where the visible spectrum is altered, changing the appearance of everything within it.'
  },
  {
    name: 'Colossal Flora',
    description:
      'Region where plant life grows to enormous proportions, creating forests of grass or flowers the size of trees.'
  },
  {
    name: 'Crystalline Contagion',
    description:
      'Area where living things gradually develop crystal growths that may be beautiful, harmful, or empowering.'
  },
  {
    name: 'Dimensional Echoes',
    description: 'Location where actions may be repeated in shadowy form, creating phantom images of recent events.'
  },
  {
    name: 'Dream Residue',
    description: 'Region where particularly powerful dreams have left tangible remnants in the waking world.'
  },
  {
    name: 'Emotion Fields',
    description: 'Areas that magically amplify specific emotions, potentially driving visitors to extreme behaviors.'
  },
  {
    name: 'Entropically Accelerated',
    description: 'Zone where objects age and decay more rapidly than they should, challenging visitors and inhabitants.'
  },
  {
    name: 'Everchanging Paths',
    description: 'Terrain that subtly rearranges itself, making maps unreliable and navigation challenging.'
  },
  {
    name: 'Flameless Heat',
    description: 'Region that maintains unusual temperatures without visible sources of heat or cold.'
  },
  {
    name: 'Gravitic Anomaly',
    description: 'Area with unusual gravitational properties—stronger, weaker, or oriented in an unexpected direction.'
  },
  {
    name: 'Living Metal',
    description: 'Region where metal seems animate, sometimes forming into simple constructs or tools spontaneously.'
  },
  {
    name: 'Memory Wood',
    description: 'Trees that absorb memories from nearby beings, which can be recovered by those who know the method.'
  },
  {
    name: 'Mirrored Reality',
    description:
      'Zone where every object, creature, or feature has a duplicate or reflection somewhere within the region.'
  },
  {
    name: 'Prismatic Infusion',
    description: 'Area where light separates into vivid rainbow hues that grant temporary magical properties.'
  },
  {
    name: 'Quicksilver Pools',
    description: 'Natural deposits of magical liquid metal that responds to thoughts or emotions of nearby creatures.'
  },
  {
    name: 'Resonant Echo',
    description:
      'Phenomenon where sounds occasionally repeat with altered meaning, as if the land itself is communicating.'
  },
  {
    name: 'Vitality Springs',
    description:
      'Natural wellsprings of life energy that can heal wounds, extend youth, or cause rapid growth in plants.'
  }
]

const settlements: Element[] = [
  {
    name: 'Uninhabited',
    description:
      'The region is completely devoid of sentient life. It may be inhospitable, dangerous, or simply too remote for any settlement to exist.'
  },
  {
    name: 'Abandoned',
    description:
      'The region is effectively empty of sentient inhabitants. Any previous settlements are now ruins or have been reclaimed by nature. Only the occasional hermit, exile, or monster might be found here.'
  },
  {
    name: 'Ruins',
    description:
      'The remnants of a once-thriving settlement, now abandoned and overgrown. The ruins may hold valuable resources or ancient secrets.'
  },
  {
    name: 'Nomadic',
    description:
      'The region is home to nomadic tribes or groups that move seasonally through this area in search of resources. They may have temporary camps or settlements but no permanent structures.'
  },
  {
    name: 'Outpost',
    description:
      'A tiny settlement of a few dozen individuals, possibly a trading post, watchtower, research station, or religious retreat. Extremely isolated with minimal facilities.'
  },
  {
    name: 'Sparse',
    description:
      'Population spread across a large area. Might include nomadic individuals, scattered homesteads, or a tiny village. Limited resources and services available.'
  },
  {
    name: 'Village',
    description:
      'One primary settlement plus surrounding farms or camps. Contains basic services like a blacksmith, general store, small temple, and a tavern.'
  },
  {
    name: 'Populous',
    description:
      'Several villages or a town. The region has established trade routes and contains multiple settlements with specialized craftspeople and services.'
  },
  {
    name: 'Dense',
    description:
      'Multiple large towns or a small city with outlying villages. Regional political center with diverse occupations, multiple industries, and organized governance.'
  },
  {
    name: 'Crowded',
    description:
      'A city-state or capital city. Features significant urban development, complex social hierarchies, specialized districts, and substantial defenses.'
  },
  {
    name: 'Metropolis',
    description:
      "Massive city or densely populated region. Could be a city-state or a nation's capital. Contains wonders of architecture, centers of learning, diverse neighborhoods, and complex political structures."
  }
]
