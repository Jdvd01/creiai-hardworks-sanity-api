import {defineField, defineType} from 'sanity'

export const mouseType = defineType({
  name: 'mouse',
  title: 'Mouse',
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
      name: 'tracking_method',
      type: 'string',
    }),
    defineField({
      name: 'connection_type',
      type: 'string',
    }),
    defineField({
      name: 'max_dpi',
      type: 'number',
    }),
    defineField({
      name: 'hand_orientation',
      type: 'string',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
