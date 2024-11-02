import {defineField, defineType} from 'sanity'

export const wirelessNetworkCardType = defineType({
  name: 'wirelessNetworkCard',
  title: 'Wireless network card',
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
      name: 'protocol',
      type: 'string',
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
