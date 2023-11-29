import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
  slug: 'blog',
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  hooks: {
    afterOperation: [
      async (args) => {
        const collectionName = 'blog'; // Nama koleksi (collection) di mana aksi terjadi
        const logAction = args.operation.charAt(0).toUpperCase() + args.operation.slice(1); // Capitalize operation

        // Hanya buat log untuk operasi create, update, dan delete
        if (['create', 'update', 'delete'].includes(args.operation)) {
          console.log('Operation:', args.operation);

          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.title, // Ganti dengan field yang sesuai
              log: args.result.id,
              timestamp: new Date(),
              action: `Blog ${logAction}`,
              where: collectionName,
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          displayFormat: 'd MMM yyy',
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
        name: 'image',
        type: 'text',
        required: true,
      },
    {
      name: 'writer',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
        name: 'fullcontent',
        type: 'textarea',
        required: true,
      },
  ],
};

export default Blog;
