const router = require("express").Router();

const Schools = require("./adminModule.js");

const restricted = require("../auth/middlewareRestricted.js");

// "/admin"

router.get("/", restricted, async (req, res) => {
  try {
    const schools = await Schools.find(req.query);
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", restricted, async (req, res) => {
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

router.post("/", restricted, async (req, res) => {
  if (!req.body.schoolName || !req.body.needAmount) {
    res.status(400).json({
      errorMessage:
        "Please provide a school name and amount needed for the school."
    });
  } else {
    try {
      const school = await Schools.insert(req.body);
      res.status(201).json(school);
    } catch (error) {
      res.status(500).json({
        error: "There was an error while saving the school to the database"
      });
    }
  }
});

router.put("/:id", restricted, async (req, res) => {
  if (!req.body.schoolName || !req.body.needAmount) {
    res.status(400).json({
      errorMessage:
        "Please provide a school name and amount needed for the school."
    });
  } else {
    try {
      const school = await Schools.update(req.params.id, req.body);

      if (school) {
        res.status(200).json({ message: "The school has been updated." });
      } else {
        res.status(404).json({
          message: "The school with the specified ID does not exist."
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "The school information could not be modified." });
    }
  }
});

router.delete("/:id", restricted, async (req, res) => {
  try {
    const count = await Schools.remove(req.params.id);

    if (count > 0) {
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: "The school with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ error: "The school could not be removed" });
  }
});

module.exports = router;
