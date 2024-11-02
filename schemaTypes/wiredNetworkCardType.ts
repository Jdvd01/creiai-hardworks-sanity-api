import {defineField, defineType} from 'sanity'

export const wiredNetworkCardType = defineType({
  name: 'wiredNetworkCard',
  title: 'Wired network card',
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
      name: 'interface',
      type: 'string',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
