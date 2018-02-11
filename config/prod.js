module.exports = {
    secret:process.env.SECRET,
    mongoURI: process.env.MONGO_URI,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey:process.env.SEND_GRID_KEY 

};
 