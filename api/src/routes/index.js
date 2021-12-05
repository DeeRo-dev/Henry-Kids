const { Router } = require("express");
const categoryRutes = require("./category");
const classRoutes = require("./Clases");
const classUser = require("./user");
const relClassUser = require("./relClassUser");
const evaluationRoutes = require("./evaluation");
var nodemailer = require("nodemailer");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/category", categoryRutes); // esto me genera /kids/category*  (traigo las rotuterdel archivo pokemon.js)
router.use("/class", classRoutes);
router.use("/user", classUser);
router.use("/", relClassUser);
// Esto hay que moverlo a Clases.js
router.use("/evaluation", evaluationRoutes);
router.post("/send-emial", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "benedict.gleason74@ethereal.email",
      pass: "4gmRaxVam7X4cwKb2M",
    },
  });
  var mailOptions = {
    form: "remitente",
    to: "felipesanchez231@hotmail.com",
    subject: "enviado desde nodemailer",
    text: "Hola mundo",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error);
    } else {
      console.log("Email enviado");
      res.status(200).send(mailOptions);
    }
  });
});

router.post("/send-emial2", (req, res) => {
  let { userName, mail, name, url, age, sex, size, owner } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "felipesanchez231@gmail.com",
      pass: "aezakmi10381",
    },
  });

  var mailOptions = {
    form: "remitente",
    to: "felipesanchez_13@hotmail.com",
    subject: "enviado desde nodemailer",
    text: "Hola mundo",
    
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).jsonp(req.body);
    }
  });
});
module.exports = router;

// POST /category/
