const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { schema } = require("./validate");
const { sendEmail } = require("./mail");

app.use(express.json({ extended: false }));
app.use(cors());

//Routes
app.post("/form", async (req, res) => {
  try {
    await schema.validate(req.body);
    const ok = await sendEmail(req.body);

    if (!ok) {
      throw new Error("Email sender failed ;(");
    }

    return res.status(200).json({ ok: true, emailSent: true });
  } catch (error) {
    return res.status(500).json({ ok: false, emailSent: false });
  }
});

//Test Route
app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
