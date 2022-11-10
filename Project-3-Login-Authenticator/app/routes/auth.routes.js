const controller = require("../controllers/auth.controller");
const verifySignUp = require("../middlewares/verifySignUp");

module.exports = function(app){
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );
    app.post("/api/auth/signin", controller.signin);

    app.post("/api/auth/signout", controller.signout);

};