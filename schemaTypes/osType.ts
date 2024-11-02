import {defineField, defineType} from 'sanity'

export const osType = defineType({
  name: 'os',
  title: 'Operating system',
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
      name: 'mode',
      type: 'number',
    }),
    defineField({
      name: 'max_memory',
      type: 'number',
    }),
  ],
})
