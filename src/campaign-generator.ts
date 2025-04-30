type Campaign = {
  characters: string
  setting: string
  plot: string
}

export function generateCampaignText() {
  const campaign = generateCampaign()
  return `The players are ${campaign.characters} adventuring in a ${campaign.setting} setting experiencing events similar to to movie ${campaign.plot}.`
}

function generateCampaign(): Campaign {
  const character = randomElement(characters)
  const setting = randomElement(settings)
  const plot = randomElement(plots)

  return {
    characters: character,
    setting: setting,
    plot: plot
  }
}

function randomElement(array: string[]): string {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

const characters = [
  'Aliens',
  'Angels and/or Demons',
  'Animals',
  'Barbarians',
  'Bounty Hunters',
  'Celebrities',
  'Children',
  'Clones',
  'Commoners',
  'Criminals',
  'Explorers',
  'Family',
  'Goblinoids',
  'Hitmen',
  'Inquisitors',
  'Merchants',
  'Nobles',
  'Pirates',
  'Police',
  'Politicians',
  'Priests',
  'Robots',
  'Scientists',
  'Smugglers',
  'Soldiers',
  'Spies',
  'Students',
  'Teachers',
  'Thieves',
  'Time Travelers',
  'Treasure Hunters',
  'Wizards',
  'Farmers',
  'Entertainers',
  'Salesmen',
  'Savage Tribesmen',
  'Retail Clerks',
  'Fast Food Workers',
  'Stewardesses',
  'Escaped Prisoners',
  'Musicians'
]

const settings = [
  'Candy Land',
  'Comedic Fantasy',
  'Cyberpunk',
  'Dark Sun',
  'Dieselpunk',
  'Egyptian',
  'Eldritch Horror',
  'Elemental Planes',
  'Espionage',
  'Etherpunk',
  'Feywild',
  'Flood World',
  'Grimdark',
  'High Fantasy',
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
  'Underdark',
  'Wild West',
  'World War I',
  'World War II',
  'World War III',
  'Swashbuckling Duellists',
  'Hollow Earth',
  'Zombie Apocalypse',
  'Autoduelling',
  'Hard Sci-Fi',
  'Superheroes',
  'Wuxia'
]

const plots = [
  'A Nightmare on Elm Street',
  'Airplane!',
  'Alien',
  'Army of Darkness',
  'Big Trouble in Little China',
  'Blade Runner',
  'Braveheart',
  'Close Encounters of the Third Kind',
  'Die Hard',
  'Dr. Strangelove',
  'E.T. the Extra-Terrestrial',
  'Fargo',
  'Fight Club',
  'Ghostbusters',
  'Gladiator',
  'Godzilla',
  'Groundhog Day',
  'James Bond',
  'Jaws',
  'Johnny Dangerously',
  'Jurassic Park',
  "Logan's Run",
  'M*A*S*H',
  'Mad Max',
  'Maverick',
  'Mission: Impossible',
  'O Brother, Where Art Thou?',
  'Pirates of the Caribbean',
  'Raiders of the Lost Ark',
  'Saving Private Ryan',
  'Star Wars',
  'Terminator',
  'The Big Lebowski',
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
  'Day of the Triffids',
  'Conan the Barbarian',
  'Smokey and the Bandit',
  'Animal House',
  'The Adventures of Buckaroo Banzai',
  'Plan 9 From Outer Space',
  'The Blair Witch Project',
  'The Dirty Dozen',
  "Ferris Bueller's Day Off",
  'Police Academy',
  'Run Silent, Run Deep',
  'Caddyshack',
  'Mortal Kombat',
  'Starship Troopers',
  "National Lampoon's Vacation",
  "Brewster's Millions",
  'Oklahoma!',
  'The Warriors',
  'The Blues Brothers',
  "Weekend at Bernie's",
  'Tremors'
]
