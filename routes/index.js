const router = require("express").Router();

router.get("/", function (req, res) {
  res.redirect('/applications');
});

module.exports = router;
