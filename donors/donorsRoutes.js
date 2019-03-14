const router = require("express").Router();
const bcrypt = require("bcryptjs");
const makeToken = require("../auth/makeToken.js");
const Donors = require("./donorsModel.js");

// "/donor"

router.post("/register", (req, res) => {
  let donor = req.body;

  // generate hash from donor's password
  const hash = bcrypt.hashSync(donor.password, 10); // 2^n
  // override donor.password with new hash
  donor.password = hash;

  Donors.add(donor)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Donors.findBy({ username })
    .first()
    .then(donor => {
      // check that passwords match
      if (donor && bcrypt.compareSync(password, donor.password)) {
        const token = makeToken.generateToken(donor); // generate new token

        res
          .status(200)
          .json({ message: `Welcome ${donor.username}, have a token!`, token });
      } else {
        res.status(401).json({
          message:
            "Invalid Credentials. Please enter a valid donor name and password. Thank you."
        });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
