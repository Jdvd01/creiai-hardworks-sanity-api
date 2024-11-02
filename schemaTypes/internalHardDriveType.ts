import {defineField, defineType} from 'sanity'

export const internalHardDriveType = defineType({
  name: 'internalHardDrive',
  title: 'Internal hard drive',
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
      name: 'capacity',
      type: 'number',
    }),
    defineField({
      name: 'price_per_gb',
      type: 'number',
    }),
    defineField({
      name: 'type',
      type: 'string',
    }),
    defineField({
      name: 'cache',
      type: 'string',
    }),
    defineField({
      name: 'form_factor',
      type: 'string',
    }),
    defineField({
      name: 'interface',
      type: 'string',
    }),
  ],
})
