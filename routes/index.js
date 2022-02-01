const router = require("express").Router();
const userRoutes = require("./api/user-routes"); //users file name
const thoughtRoutes = require("./api/thought-routes"); //thought file name

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
