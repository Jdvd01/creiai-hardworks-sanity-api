import {defineArrayMember, defineField, defineType} from 'sanity'

export const cpuCoolerType = defineType({
  name: 'cpuCooler',
  title: 'CPU cooler',
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
      name: 'rpm',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'number',
          name: 'rpmItem',
        }),
      ],
    }),
    defineField({
      name: 'noise_level',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
    defineField({
      name: 'size',
      type: 'number',
    }),
  ],
})
