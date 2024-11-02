import {defineField, defineType} from 'sanity'

export const upsType = defineType({
  name: 'ups',
  title: 'UPS',
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
      name: 'capacity_w',
      type: 'number',
    }),
    defineField({
      name: 'capacity_va',
      type: 'number',
    }),
  ],
})
