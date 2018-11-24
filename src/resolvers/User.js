import getUserId from '../utils/getUserId';

export default {
    email(parent, args, { request }, info) {
        const userId = getUserId(request, false);

        if (userId && userId === parent.id) {
            return parent.email;
        } else {
            return null;
        }
    }
};