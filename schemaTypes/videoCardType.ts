import {defineField, defineType} from 'sanity'

export const videoCardType = defineType({
  name: 'videoCard',
  title: 'Video card',
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
      name: 'chipset',
      type: 'string',
    }),
    defineField({
      name: 'memory',
      type: 'number',
    }),
    defineField({
      name: 'core_clock',
      type: 'number',
    }),
    defineField({
      name: 'boost_clock',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
    defineField({
      name: 'length',
      type: 'number',
    }),
  ],
})
