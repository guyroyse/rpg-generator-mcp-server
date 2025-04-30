import type { PopulationCharacteristic, PopulationLevel, RegionTag } from './tables.js'
import { populationLevels, populationCharacteristics, regions } from './tables.js'

export type Region = {
  tags: RegionTag[]
  population: Population
}

export type Population = {
  level: PopulationLevel
  characteristic: PopulationCharacteristic
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
  const roll = randomNumber(8)
  return populationCharacteristics[roll.toString()]
}

function randomNumber(max: number): number {
  return Math.floor(Math.random() * max) + 1
}
