import {defineArrayMember, defineField, defineType} from 'sanity'

export const memoryType = defineType({
  name: 'memory',
  title: 'Memory',
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
      name: 'speed',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'number',
          name: 'speedItem',
        }),
      ],
    }),
    defineField({
      name: 'modules',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'number',
          name: 'moduleItem',
        }),
      ],
    }),
    defineField({
      name: 'price_per_gb',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
    defineField({
      name: 'first_word_latency',
      type: 'number',
    }),
    defineField({
      name: 'cas_latency',
      type: 'number',
    }),
  ],
})
