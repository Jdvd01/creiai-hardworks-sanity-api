import {defineField, defineType} from 'sanity'

export const thermalPasteType = defineType({
  name: 'thermalPaste',
  title: 'Thermal paste',
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
      name: 'amount',
      type: 'number',
    }),
  ],
})
