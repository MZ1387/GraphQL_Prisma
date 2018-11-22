import { Prisma } from 'prisma-binding';

export default new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
});

// const createPostForUser = async (authorId, data) => {

//     const userExists = await prisma.exists.User({ id: authorId });

//     if (!userExists) {
//         throw new Error('User not found.');
//     }

//     const post = await prisma.mutation.createPost({ 
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name posts { id title } } }');

//     return post;
// };

// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({ id: postId });

//     if (!postExists) {
//         throw new Error('Post not found.');
//     }

//     const post = await prisma.mutation.updatePost({ 
//         data,
//         where: { id: postId }
//     }, '{ author { id name posts { id title } } }');

//     return post;
// };