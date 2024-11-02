import {defineField, defineType} from 'sanity'

export const fanControllerType = defineType({
  name: 'fanController',
  title: 'Fan controller',
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
      name: 'channels',
      type: 'number',
    }),
    defineField({
      name: 'channel_wattage',
      type: 'number',
    }),
    defineField({
      name: 'pwm',
      type: 'boolean',
    }),
    defineField({
      name: 'form_factor',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
