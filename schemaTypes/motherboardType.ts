import {defineField, defineType} from 'sanity'

export const motherboardType = defineType({
  name: 'motherboard',
  title: 'Motherboard',
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
      name: 'socket',
      type: 'string',
    }),
    defineField({
      name: 'form_factor',
      type: 'string',
    }),
    defineField({
      name: 'max_memory',
      type: 'number',
    }),
    defineField({
      name: 'memory_slots',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
