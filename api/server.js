import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import path from "path";
import "dotenv/config";

const connection_string =
  "mongodb+srv://vikram:aditya@vikram.ekz7wos.mongodb.net/question-db";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(connection_string, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const formSchema = new mongoose.Schema({
  mcq: String,
  broad: String,
  scale: Number,
  file: {
    data: Buffer,
    contentType: String,
  },
});

const Form = mongoose.model("Form", formSchema);

app.post("/api/forms", upload.single("file"), async (req, res) => {
  try {
    const obj = {
      mcq: req.body.mcq,
      broad: req.body.broad,
      scale: req.body.scale,
      file: {
        data: fs.readFileSync(
          path.join(process.cwd() + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
    };
    const form = new Form(obj);
    const savedForm = await form.save();
    res.json(savedForm);
  } catch (error) {
    res.status(500).json({ error: "Error saving form question." });
  }
});

app.get("/api/forms/:id", async (req, res) => {
  try {
    const formData = await Form.findById(req.params.id);
    res.json(formData);
  } catch (error) {
    res.status(500).json({ error: "Error getting form question." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
