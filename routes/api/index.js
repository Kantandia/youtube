const router = require("express").Router();
const homeRoutes = require("./home-page");
// const videoRoutes = require("./videos");

console.log("------>>>>on routes api index")
// 
router.use("/home", homeRoutes);

// Video routes
// router.use("/videos", videoRoutes);

module.exports = router;