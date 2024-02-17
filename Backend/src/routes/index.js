const userRouter = require('./user');
const router2 = require('./router2');

const mainRouter = [
    userRouter,
    router2
];

module.exports = mainRouter;
