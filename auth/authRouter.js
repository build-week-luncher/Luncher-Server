const router = require("express").Router();
const bcrypt = require("bcryptjs");
const makeToken = require("../auth/makeToken.js");
const Users = require("../users/usersModule.js");

router.post("/register", (req, res) => {
  let user = req.body;

  // generate has from user's password
  const hash = bcrypt.hashSync(user.password, 10); // 2^n
  // override user.password with new hash
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req,res) => {
    let { username, password } = req.body;

    Users.findBy({ username }).first().then( user => {
        // check that passwords match
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = makeToken.generateToken(user); // generate new token

            res.status(200).json({ message: `Welcome ${user.username}, have a token!`, token})
        } else {
            res.status(401).json({ message: "Invalid Credentials. Please enter a valid user name and password. Thank you."});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});


module.exports = router;