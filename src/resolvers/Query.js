export default {
    users(parent, args, { prisma }, info) {
        const opArgs = {};

        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                },{
                    email_contains: args.query
                }]
            };
        }

        return prisma.query.users(opArgs, info);
    },
    posts(parent, args, { prisma }, info) {
        const opArgs = {};

        if (args.query) {
            opArgs.where = {
                OR: [{
                    title_contains: args.query
                },{
                    body_contains: args.query
                }]
            };
        }

        return prisma.query.posts(opArgs, info);
    },
    comments(parent, args, { db, prisma }, info) {
        return db.comments;
    },
    me() {
        return {
            id: 'ABC123',
            name: 'Me',
            email: 'me@mail.com'
        };
    },
    post() {
        return {
            id: 'ABC456',
            title: 'post 1',
            body: 'body 1',
            published: true
        };
    }
};