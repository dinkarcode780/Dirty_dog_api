import express from "express";
import { upload } from "../middleware/multer";
import { adminLogin, getAdmin, updateAdminProfile } from "../controllers/adminController";




const router = express.Router();

router.post("/admin/adminLogin",adminLogin);

router.put("/admin/updateAdminProfile",upload.single("image"),updateAdminProfile);

router.get("/admin/getAdmin",getAdmin);


export default router;