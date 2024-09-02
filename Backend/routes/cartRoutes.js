const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const connection = require("./../db.js");

const addCart = (req, res) => {
  const { productId, userId, quantity } = req.body;
  const query = `INSERT INTO cart (user_id, furniture_id, quantity) 
                   VALUES (?, ?, ?)`;

  connection.query(
    query,
    [productId, userId, quantity],
    (err,results) => {
      if (err) {
        console.error("Error", err.message);
        return res.status(500).json({
          status: "error",
          message: "Internal server error",
        });
      }
      // Récupérer les données insérées 
      const insertedData = results.insertId;
      const cartItem = {
        id: insertedData,
        userId,
        productId,
        quantity,
      };

      res.status(201).json({
        status: "success",
        data: cartItem,
      });
    }
  );
}

router.route("/").post(addCart);
module.exports = router;