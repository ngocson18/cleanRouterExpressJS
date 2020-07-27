module.exports = (app) => {
    app.use("/", require('./router/root'));
    app.use("/home", require('./router/home'));
    app.use("/about", require('./router/about'));
}