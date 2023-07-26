const { Router } = require("express");
const { getServer } = require("../controllers/rootController");

const router = Router();

router.route("/").get(getServer);

module.exports = router;
