import {defineField, defineType} from 'sanity'

export const externalHardDriveType = defineType({
  name: 'externalHardDrive',
  title: 'External hard drive',
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
      name: 'interface',
      type: 'string',
    }),
    defineField({
      name: 'capacity',
      type: 'number',
    }),
    defineField({
      name: 'price_per_gb',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
  ],
})
