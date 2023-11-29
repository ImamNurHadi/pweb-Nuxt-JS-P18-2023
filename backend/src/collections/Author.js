import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Author = {
  slug: 'author',
  admin: {
    useAsTitle: 'nama',
  },
  fields: [
    {
      name: 'nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
  ],
  hooks: {
    afterOperation: [
      async (args) => {
        const collectionName = 'author'; // Nama koleksi (collection) di mana aksi terjadi
        const logAction = args.operation.charAt(0).toUpperCase() + args.operation.slice(1); // Capitalize operation

        // Hanya buat log untuk operasi create, update, dan delete
        if (['create', 'update', 'delete'].includes(args.operation)) {
          console.log('Operation:', args.operation);

          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.nama, // Ganti dengan field yang sesuai
              log: args.result.id,
              timestamp: new Date(),
              action: `Author ${logAction}`,
              where: collectionName,
            },
          });
        }
      },
    ],
  },
};

export default Author;
