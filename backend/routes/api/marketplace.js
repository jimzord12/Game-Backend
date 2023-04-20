const express = require("express");
const router = express.Router();

const marketplaceCntl = require("../../controllers/subControllers/marketplaceCntl");

router.route("/").post(marketplaceCntl.createPurchase);

router
  .route("/:id")
  .get(marketplaceCntl.getSoldCards)

  .delete(marketplaceCntl.deletePurchase);

module.exports = router;
