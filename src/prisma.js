import { Prisma } from 'prisma-binding';

export default new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'supersecrettext'
});