import {defineField, defineType} from 'sanity'

export const caseAccessoryType = defineType({
  name: 'caseAccessory',
  title: 'Case Accessory',
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
      name: 'form_factor',
      type: 'number',
    }),
  ],
})
