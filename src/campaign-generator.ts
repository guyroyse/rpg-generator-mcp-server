import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

export function setUpCampaignGenerator(server: McpServer) {
  server.tool('ttrgp_campaign_elements', 'Select random elements for a campaign idea for a TTRPG', {}, async () => {
    const players = randomPlayer()
    const settings = randomSetting()
    const plots = randomPlot()

    return {
      content: [
        {
          type: 'text',
          text: `The role of the players in the campaign : ${players}`
        },
        {
          type: 'text',
          text: `The settings the campaign takes place in: ${settings}`
        },
        {
          type: 'text',
          text: `The plot from a movie, television show, or books that the campaign follows: ${plots}`
        }
      ]
    }
  })

  server.prompt('ttrgp_campaign_generator', 'Generate a campaign idea for a TTRPG', {}, () => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Using the ttrgp_campaign_elements tool, generate a campaign idea for a TTRPG.`
        }
      }
    ]
  }))
}

function randomPlayer(): string {
  return randomElement(characters)
}

function randomSetting(): string {
  return randomElement(settings)
}

function randomPlot(): string {
  return randomElement(plots)
}

function randomElement(array: string[]): string {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled[0]
}

const characters = [
  'Aliens',
  'Angels',
  'Animals',
  'Anthropomorphic Animals',
  'Barbarians',
  'Bounty Hunters',
  'Celebrities',
  'Children',
  'Clones',
  'Commoners',
  'Criminals',
  'Cyborgs',
  'Demons',
  'Detectives',
  'Dwarves',
  'Elves',
  'Entertainers',
  'Escaped Prisoners',
  'Explorers',
  'Family',
  'Farmers',
  'Fast Food Workers',
  'Fighters',
  'Folk Heroes',
  'Ghosts',
  'Gnomes',
  'Goblinoids',
  'Half-Elves',
  'Half-Orcs',
  'Hitmen',
  'Humans',
  'Hybrids',
  'Immortals',
  'Inquisitors',
  'Merchants',
  'Musicians',
  'Mutants',
  'Nobles',
  'Pirates',
  'Police',
  'Politicians',
  'Priests',
  'Psychics',
  'Rangers',
  'Rebels',
  'Retail Clerks',
  'Robots',
  'Samurai',
  'Salesmen',
  'Savage Tribesmen',
  'Scientists',
  'Smugglers',
  'Soldiers',
  'Spacers',
  'Spies',
  'Stewardesses',
  'Street Gangs',
  'Street Performers',
  'Street Urchins',
  'Students',
  'Superheroes',
  'Survivors',
  'Teachers',
  'Thieves',
  'Thugs',
  'Tinkers',
  'Time Travelers',
  'Treasure Hunters',
  'Waiters',
  'Witches',
  'Wizards',
  'Writers',
  'Zombies'
]

const settings = [
  'American Civil War',
  'Ancient Greece',
  'Autoduelling',
  'Candy Land',
  'Colonial America',
  'Comedic Fantasy',
  'Cyberpunk',
  'Dark Sun',
  'Dieselpunk',
  'Egyptian',
  'Eldritch Horror',
  'Elemental Planes',
  'Espionage',
  'Etherpunk',
  'Feudal Japan',
  'Feywild',
  'Flood World',
  'Grimdark',
  'Hard Sci-Fi',
  'High Fantasy',
  'Hollow Earth',
  'Low Fantasy',
  'Mecha',
  'Medieval Europe',
  'Modern',
  'Outer Planes',
  'Outer Space',
  'Pirates',
  'Post Apocalypse',
  'Roman Empire',
  'Science Fantasy',
  'Science Fiction',
  'Shadowfell',
  'Space Opera',
  'Spelljammer',
  'Steampunk',
  'Stone Age',
  'Superheroes',
  'Swashbuckling Duellists',
  'Underdark',
  'Victorian England',
  'Virtual Reality',
  'Vikings',
  'Wild West',
  'World War I',
  'World War II',
  'World War III',
  'Wuxia',
  'Zombie Apocalypse'
]

const plots = [
  'A Nightmare on Elm Street',
  'Airplane!',
  'Alien & Aliens',
  'Animal House',
  'Army of Darkness',
  'Big Trouble in Little China',
  'Blade Runner',
  'Braveheart',
  "Brewster's Millions",
  'Caddyshack',
  'Casablanca',
  'Close Encounters of the Third Kind',
  'Conan the Barbarian',
  'Day of the Triffids',
  'Die Hard',
  'Dr. Strangelove',
  'E.T. the Extra-Terrestrial',
  'Fargo',
  "Ferris Bueller's Day Off",
  'Fight Club',
  'Finding Nemo',
  'Forbidden Planet',
  'Forest Gump',
  'Ghostbusters',
  'Gladiator',
  'Godzilla',
  'Groundhog Day',
  'Independence Day',
  'Invasion of the Body Snatchers',
  'James Bond',
  'Jaws',
  'Johnny Dangerously',
  'Jurassic Park',
  "Logan's Run",
  'M*A*S*H',
  'Mad Max',
  'Maverick',
  'Mission: Impossible',
  'Monty Python and the Holy Grail',
  'Mortal Kombat',
  "National Lampoon's Vacation",
  'O Brother, Where Art Thou?',
  'Oklahoma!',
  'Pirates of the Caribbean',
  'Plan 9 From Outer Space',
  'Police Academy',
  'Raiders of the Lost Ark',
  'Run Silent, Run Deep',
  'Saving Private Ryan',
  'Smokey and the Bandit',
  'Star Wars',
  'Starship Troopers',
  'Terminator',
  'The Adventures of Buckaroo Banzai',
  'The Big Lebowski',
  'The Blair Witch Project',
  'The Blues Brothers',
  'The Dirty Dozen',
  'The Good, the Bad and the Ugly',
  'The Hunger Games',
  'The Island of Doctor Moreau',
  'The Lost Room',
  'The Matrix',
  'The Princess Bride',
  'The Shining',
  'The Walking Dead',
  'The Wizard of Oz',
  'Titanic',
  'Toy Story',
  'Tremors',
  'Twelve Monkeys',
  "Weekend at Bernie's"
]
