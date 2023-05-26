import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'default',
  title: "Pablo's Coffee House",

  projectId: '5yty8k8t',
  dataset: 'production',

  plugins: [deskTool({structure: deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
