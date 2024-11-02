import {defineField, defineType} from 'sanity'

export const powerSupplyType = defineType({
  name: 'powerSupply',
  title: 'Power supply',
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
      name: 'efficiency',
      type: 'string',
    }),
    defineField({
      name: 'wattage',
      type: 'number',
    }),
    defineField({
      name: 'modular',
      type: 'boolean',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
