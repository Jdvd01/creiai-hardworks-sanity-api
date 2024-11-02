import {defineArrayMember, defineField, defineType} from 'sanity'

export const speakersType = defineType({
  name: 'speaker',
  title: 'Speakers',
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
      name: 'configuration',
      type: 'number',
    }),
    defineField({
      name: 'wattage',
      type: 'number',
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
      name: 'color',
      type: 'string',
    }),
  ],
})
