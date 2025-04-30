# RPG Generator MCP Server

A Model Context Protocol (MCP) server that generates random tabletop RPG content—campaign ideas and fantasy region attributes—built with TypeScript using the official MCP SDK.

## What is this?

This project demonstrates how to build a simple [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that LLMs can use to generate random tabletop RPG content.

MCP is an open standard that provides a common way for AI models to connect with specialized tools and data sources. By implementing the MCP specification, this server allows LLMs to generate random campaign ideas and fantasy region attributes, which can help spark creativity by forcing connections between unrelated elements.

The server offers two main functions:

- `random_campaign_idea` - Generates a random campaign idea by combining character types, settings, and movie inspirations
- `random_region_attributes` - Generates random region tags, population levels, and population characteristics for fantasy world-building

## Why Random Generators?

Just like gamemasters use random tables to spark creativity by forcing connections between seemingly unrelated elements, LLMs can break out of predictable patterns with randomized inputs. This project demonstrates how MCP can be used to extend an LLM's creative capabilities through specialized tool connections.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/guyroyse/rpg-generator-mcp-server.git
cd rpg-generator-mcp-server
```

2. Install dependencies:

```bash
npm install
```

3. Build and install:

```bash
npm run build
```

## Using the MCP Server

### With Claude

1. Open Claude in the [Claude Desktop app](https://claude.ai/download)

2. Go to Settings, select Developer, and click on the Edit Config button. This will open the folder that contains your claude_desktop_config.json file.

3. Add the server to the JSON file:

```json
{
  "mcpServers": {
    "rpg-generator": {
      "command": "rpg-generator-mcp-server"
    }
  }
}
```

4. Exit and restart Claude Desktop.
5. Now, you can ask Claude to generate random campaign ideas or region attributes.

Example prompts:

- "Generate a random campaign idea for my TTRPG"
- "I need some random regions for my fantasy world"

## Function Reference

### `random_campaign_idea`

**Parameters**: None

**Response**: A string describing a campaign idea that combines:

- Character types (e.g., "Mercenaries", "Escaped Prisoners", "Athletes")
- Settings (e.g., "Feywild", "Mecha", "Urban Fantasy")
- Movie inspirations (e.g., "Jurassic Park", "The Princess Bride", "Aliens")

Example response:

```
The players are Escaped Prisoners adventuring in a Mecha setting experiencing events similar to the movie Jurassic Park.
```

### `random_region_attributes`

**Parameters**: None

**Response**: A markdown-formatted string containing:

- Region Tags (2 random tags with descriptions)
- Population Level (density and size of settlements)
- Population Characteristic (cultural or societal trait)

Example response:

```
**Region Tags**
Feral Magic: Region where magic has become untamed and manifests as semi-sentient predatory phenomena.
Monastic Retreat: Area dotted with monasteries and meditation sites, often with unique fighting or magical traditions.

**Population Level**
Outpost: A tiny settlement of 10-50 individuals, possibly a trading post, watchtower, research station, or religious retreat. Extremely isolated with minimal facilities.

**Population Characteristic**
Military Tradition: Martial skills are highly valued, with many citizens receiving combat training regardless of their primary occupation. This might stem from a history of conflict, strategic location, or cultural values. Martial accomplishments bring prestige, and military leaders often hold political authority as well.
```

## Extending the Server

This project can be easily extended with additional random generators. To add your own:

1. Create a new generator function modelled after the [existing](src/campaign-generator.ts) [ones](src/region-generator.ts).
2. Add the generator as a tool in [mcp-server.ts](src/mcp-server.ts).
3. Build

If you want to test your MCP server without building and installing, you can use the MCP Inspector:

```
npm run inspect
```

## Acknowledgements

- Built with the official [Model Context Protocol SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- Implements the [Model Context Protocol](https://modelcontextprotocol.io/) specification
- Inspired by countless hours of tabletop RPG fun
