import {defineField, defineType} from 'sanity'

export const caseType = defineType({
  name: 'case',
  title: 'Case',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'type',
      type: 'string',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
    defineField({
      name: 'psu',
      type: 'string',
    }),
    defineField({
      name: 'side_panel',
      type: 'string',
    }),
    defineField({
      name: 'external_volume',
      type: 'number',
    }),
    defineField({
      name: 'internal_35_bays',
      type: 'number',
    }),
  ],
})
