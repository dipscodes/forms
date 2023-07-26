import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/custom_form_db", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const formSchema = new mongoose.Schema({
  question: String,
  type: String,
});

const Form = mongoose.model("Form", formSchema);

app.post("/api/forms", async (req, res) => {
  try {
    const { question, type } = req.body;
    const form = new Form({ question, type });
    const savedForm = await form.save();
    res.json(savedForm);
  } catch (error) {
    res.status(500).json({ error: "Error saving form question." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
