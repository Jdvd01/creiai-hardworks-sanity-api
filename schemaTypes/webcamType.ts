import {defineArrayMember, defineField, defineType} from 'sanity'

export const webcamType = defineType({
  name: 'webcam',
  title: 'Webcam',
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
      name: 'resolutions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'resolutionItem',
        }),
      ],
    }),
    defineField({
      name: 'connection',
      type: 'string',
    }),
    defineField({
      name: 'focus_type',
      type: 'string',
    }),
    defineField({
      name: 'os',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'osItem',
        }),
      ],
    }),
    defineField({
      name: 'fov',
      type: 'number',
    }),
  ],
})
