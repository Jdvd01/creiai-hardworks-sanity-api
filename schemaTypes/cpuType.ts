import {defineField, defineType} from 'sanity'

export const cpuType = defineType({
  name: 'cpu',
  title: 'CPU',
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
      name: 'core_count',
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
      name: 'tdp',
      type: 'number',
    }),
    defineField({
      name: 'graphics',
      type: 'string',
    }),
    defineField({
      name: 'smt',
      type: 'boolean',
    }),
  ],
})
