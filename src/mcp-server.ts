import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { setUpCampaignGenerator } from './campaign-generator.js'
import { setUpHexGenerator } from './hex-generator.js'

const server = new McpServer({
  name: 'TTRPG Random Generators',
  version: '1.0.0'
})

setUpCampaignGenerator(server)
setUpHexGenerator(server)

export default server
