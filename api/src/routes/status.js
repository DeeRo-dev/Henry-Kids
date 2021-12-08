const { Router } = require("express");
const {createStatus, createSubscriber} = require("../controllers/status.js");
const {filterClassesPerStatus} = require("../filters/filterClassByStatus.js");
const {filterStudentsPerStatus} = require("../filters/filterUserByStatus.js");
const router = Router();


router.get("/", createStatus);
router.post("/", createSubscriber);
router.get("/user/:userId", filterClassesPerStatus);
router.get("/class/:classId", filterStudentsPerStatus);

module.exports = router;