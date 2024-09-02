"use strict";
const express = require("express");
// const app = require("./../../app.js");
const router = express.Router();
const connection = require("./../db.js");

// Middleware to handle errors
const handleErrors = (err, res) => {
  console.error("Error fetching data:", err);
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

const getAllUsers = (req, res, next) => {
  connection.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleErrors(err, res);

    console.log("Données des utilisateurs:");
    console.log(rows);

    res.status(200).json({
      status: "success",
      data: {
        users: rows, // Affiche les données de la table categories
      },
    });
  });
};

// Function to get user by name
const getUserById = (req, res, next) => {
  const id = req.params.id;
  console.log(`Fetching user with ID: ${id}`);

  connection.query("SELECT * FROM users WHERE id = ?", [id], (err, rows) => {
    if (err) return handleErrors(err, res);

    console.log(`Rows returned: ${rows.length}`);

    if (rows.length === 0) {
      console.log(`No user found with ID: ${id}`);
      return res.status(404).json({
        status: "fail",
        message: `No user found with id ${id}`,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user: rows[0], // Return the first (and only) user found
      },
    });
  });
};


// Fonction pour créer un nouvel utilisateur
const createUser = (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({
      status: "fail",
      message: "Le nom, l'email et le mot de passe sont des champs obligatoires.",
    });
  }

  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;

  connection.query(query, [name, email, password, role], (err, results) => {
    if (err) return handleErrors(err, res);

    res.status(201).json({
      status: "success",
      data: {
        id: results.insertId,
        name,
        email,
        password,
        role,
      },
    });
  });
};

router.route("/").get(getAllUsers).post(createUser);
router.route("/users").get(getAllUsers);
router.route("/:id").get(getUserById);

// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
