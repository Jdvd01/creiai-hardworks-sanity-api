import {defineField, defineType} from 'sanity'

export const soundCardType = defineType({
  name: 'soundCard',
  title: 'Sound card',
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
      name: 'channels',
      type: 'number',
    }),
    defineField({
      name: 'digital_audio',
      type: 'number',
    }),
    defineField({
      name: 'snr',
      type: 'number',
    }),
    defineField({
      name: 'sample_rate',
      type: 'number',
    }),
    defineField({
      name: 'chipset',
      type: 'string',
    }),
    defineField({
      name: 'interface',
      type: 'string',
    }),
  ],
})
