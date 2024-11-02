import {defineArrayMember, defineField, defineType} from 'sanity'

export const caseFanType = defineType({
  name: 'caseFan',
  title: 'Case fan',
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
      name: 'size',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
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
      name: 'airflow',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'number',
          name: 'airflowItem',
        }),
      ],
    }),
    defineField({
      name: 'noise_level',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'number',
          name: 'noiseItem',
        }),
      ],
    }),
    defineField({
      name: 'pwm',
      type: 'boolean',
    }),
  ],
})
