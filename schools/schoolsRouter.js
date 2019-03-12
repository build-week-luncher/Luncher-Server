const router = require("express").Router();

const Schools = require("./schoolsModule.js");

// "/api/schools"

router.get("/", async (req, res) => {
  try {
    const schools = await Schools.find(req.query);
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const school = await Schools.findById(req.params.id);

    if (school.length > 0) {
      res.status(200).json(school);
    } else {
      res
        .status(404)
        .json({ message: "The school with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
