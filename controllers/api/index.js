const router = require("express").Router();
const userRoutes = require("./userRoutes");
const playlistRoutes = require("./playlistRoutes");
const songRoutes = require("./songRoutes");

router.use("/users", userRoutes);
router.use("/playlist", playlistRoutes);
router.use("/songs", songRoutes);

module.exports = router;
