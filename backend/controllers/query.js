require("dotenv").config({ path: ".env" });
const pool = require("../config/postgreSql");
const ExpressError = require("../utils/ExpressError");
const { GoogleGenAI } = require("@google/genai");

module.exports.executeQuery = async (req, res) => {
  let { query } = req.body;
  if (!query) {
    throw new ExpressError(404, "Query is undefined");
  }

  let trimmedQuery = query.trim().toLowerCase()
  
  if(!trimmedQuery.startsWith("select")) {
    throw new ExpressError(403, "Only Select Query Allowed")
  }

  if(trimmedQuery.includes(";")) {
    throw new ExpressError(403, "Only One Statement is Allowed")
  }
  
  const result = await pool.query(query);
  if (!result) {
    throw new ExpressError(404, "Please Enter Valid Query");
  }
  const user = result.rows;
  res.status(200).json(user);
};

module.exports.hint = async (req, res) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const { userQuery, question } = req.body;

  if (!userQuery || !question) {
    throw new ExpressError(400, "Missing required fields");
  }

  const input = `You are a SQL teacher. Question: ${question} Student result: ${userQuery}. Give only a short hint. Don't reveal the correct query. Give Answer Only what Missing or Incorrect`;
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: input,
  });

  const hint = result.text;

  res.status(200).json({ message: hint });
};
