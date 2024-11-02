import {defineField, defineType} from 'sanity'

export const opticalDriveType = defineType({
  name: 'opticalDrive',
  title: 'Optical drive',
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
      name: 'bd',
      type: 'string',
    }),
    defineField({
      name: 'dvd',
      type: 'string',
    }),
    defineField({
      name: 'cd',
      type: 'string',
    }),
    defineField({
      name: 'bd_write',
      type: 'string',
    }),
    defineField({
      name: 'dvd_write',
      type: 'string',
    }),
    defineField({
      name: 'cd_write',
      type: 'string',
    }),
  ],
})
