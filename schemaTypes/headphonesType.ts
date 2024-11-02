import {defineArrayMember, defineField, defineType} from 'sanity'

export const headphonesType = defineType({
  name: 'headphones',
  title: 'Headphones',
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
      name: 'frequency_response',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'number',
          name: 'frequencyItem',
        }),
      ],
    }),
    defineField({
      name: 'microphone',
      type: 'boolean',
    }),
    defineField({
      name: 'wireless',
      type: 'boolean',
    }),
    defineField({
      name: 'enclosure_type',
      type: 'string',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
