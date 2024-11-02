import {defineArrayMember, defineField, defineType} from 'sanity'

export const monitorType = defineType({
  name: 'monitor',
  title: 'Monitor',
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
      name: 'screen_size',
      type: 'number',
    }),
    defineField({
      name: 'resolution',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'number',
          name: 'resolutionItem',
        }),
      ],
    }),
    defineField({
      name: 'refresh_rate',
      type: 'number',
    }),
    defineField({
      name: 'response_time',
      type: 'number',
    }),
    defineField({
      name: 'panel_type',
      type: 'string',
    }),
    defineField({
      name: 'aspect_ratio',
      type: 'string',
    }),
  ],
})
