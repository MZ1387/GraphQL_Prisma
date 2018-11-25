import '@babel/polyfill';
import { GraphQLServer, PubSub } from 'graphql-yoga';
import { resolvers, fragmentReplacements } from './resolvers';
import db from './db';
import prisma from './prisma';

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', 
    resolvers,
    context(request) {
        return {
            db,
            pubsub,
            prisma,
            request
        };
    },
    fragmentReplacements
});

const port = process.env.PORT || 4000;

server.start({ port }, () => console.log(`SERVER RUNNING ON PORT: ${port}`));