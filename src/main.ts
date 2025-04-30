#! /usr/bin/env node

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import server from './mcp-server.js'

const transport = new StdioServerTransport()
await server.connect(transport)
