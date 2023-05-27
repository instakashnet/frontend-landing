import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'benefits',
  type: 'document',
  title: 'Beneficios',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titulo',
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitulo',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'from',
      type: 'date',
      title: 'Desde',
      description: 'Fecha desde que inicia el beneficio.',
      validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: 'until',
      type: 'date',
      title: 'Hasta',
      description: 'Fecha hasta que finaliza el beneficio.',
      validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: 'accessUrl',
      type: 'url',
      title: 'URL de acceso',
      description: 'Link para el uso del beneficio.',
      validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: 'btnLabel',
      type: 'string',
      title: 'Nombre del acceso',
      description: 'Nombre del botón de acceso.',
      validation: (Rule) => Rule.required().max(25),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descripción',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefitImage',
      type: 'image',
      title: 'Imagen del beneficio (330px).',
      fields: [
        {
          name: 'alt',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
