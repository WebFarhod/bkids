import { Router } from "express";
import TeachersController from "../controllers/teacherController"
// import { authMiddleware } from "../middleware/authMiddleware";
// import { rolesMiddleware } from "../middleware/rolesMiddleware";
import { Role } from "../enums/role";

const routerTeacher = Router();

routerTeacher.get("/rank", TeachersController.findAllRank);
routerTeacher.post(
  "/rank",
//   authMiddleware,
//   rolesMiddleware([Role.ADMIN]),
  TeachersController.createRank
);
routerTeacher.post(
  "/",
//   authMiddleware,
//   rolesMiddleware([Role.ADMIN]),
  TeachersController.create
);
routerTeacher.get("/", TeachersController.findAll);
routerTeacher.get("/:id", TeachersController.findOne);
routerTeacher.put(
  "/",
//   authMiddleware,
//   rolesMiddleware([Role.ADMIN]),
  TeachersController.update
);
routerTeacher.delete(
  "/",
//   authMiddleware,
//   rolesMiddleware([Role.ADMIN]),
  TeachersController.remove
);

export default routerTeacher;
