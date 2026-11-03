
import express from "express";
import emailRoutes from "./src/routes/emailRoutes.js";
import dotenv from 'dotenv/config.js'

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

// All email routes start with /api.
app.use("/api", emailRoutes);


//Testing API Key
console.log(
    "API KEY LOADED:",
    Boolean(process.env.GEMINI_API_KEY)
);

app.get("/", (req, res) => {
  res.json({ message: "Email Generator API is running" });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
