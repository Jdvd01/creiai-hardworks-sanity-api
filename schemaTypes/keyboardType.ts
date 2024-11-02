import {defineField, defineType} from 'sanity'

export const keyboardType = defineType({
  name: 'keyboard',
  title: 'Keyboard',
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
      name: 'style',
      type: 'string',
    }),
    defineField({
      name: 'switches',
      type: 'string',
    }),
    defineField({
      name: 'backlit',
      type: 'string',
    }),
    defineField({
      name: 'tenkeyless',
      type: 'boolean',
    }),
    defineField({
      name: 'connection_type',
      type: 'string',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
