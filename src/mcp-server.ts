import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { generateRegionText } from './region-generator.js'

const server = new McpServer({
  name: 'TTRPG Campaign Generator',
  version: '1.0.0'
})

server.tool(
  'random_region_attributes',
  'Generate random region attributes for a TTRPG fantasty world setting',
  {},
  async () => {
    const regionText = generateRegionText()
    return {
      content: [
        {
          type: 'text',
          text: regionText
        }
      ]
    }
  }
)

export default server
