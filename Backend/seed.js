const mysql2 = require("mysql2/promise"); // Use the promise-based client
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const fs = require('fs').promises;

async function seedDatabase() {
  try {
    let connection = await mysql2.createConnection({
      host: process.env.HOST,
      port: process.env.PORT_DB,
      user: process.env.USERNAME_DB,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("Connected to the MySQL server.");

    // Insert categories
    await connection.execute("INSERT INTO categories (type) VALUES (?)", ["Couch"]);
    await connection.execute("INSERT INTO categories (type) VALUES (?)", ["Chair"]);
    await connection.execute("INSERT INTO categories (type) VALUES (?)", ["Table"]);
    // Add more categories as needed

    // Read the JSON file
    const furnituresData = await fs.readFile('./furnituresData.json', 'utf-8');
    const furnitures = JSON.parse(furnituresData);

    // Insert furnitures
    for (const furniture of furnitures) {
      const [rows] = await connection.execute(
        "SELECT id FROM categories WHERE type = ?",
        [furniture.category]
      );

      if (!rows.length) {
        console.error(`No categories found with type '${furniture.category}'`);
        continue;
      }

      const categoryId = rows[0].id;

      await connection.execute(
        "INSERT INTO furnitures (name, description, price, length, width, height, category_id, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [furniture.name, furniture.description, furniture.price, furniture.length, furniture.width, furniture.height, furniture.categoryId, furniture.image]
      );
    }

    // await connection.execute(
    //   "INSERT INTO furnitures (name, description, price, length, width, height, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    //   ["Sofa", "Comfortable 3-seater sofa", 500, 200, 80, 80, categoryId]
    // ); // Add more furnitures as needed


    // Insert users
    await connection.execute(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      ["Test User", "test@example.com", "password123", "user"]
    );
    await connection.execute(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      ["Carlos Oliveira", "carol@example.com", "password456", "admin"]
    );
    // Add more users as needed

    // Insert orders
    await connection.execute(
      "INSERT INTO orders (furniture_id, status, user_id) VALUES (?, ?, ?)",
      [1, "Processing", 1]
    );
    // Add more orders as needed

    // Close the connection
    await connection.end();
    console.log("Database seeding completed.");
  } catch (error) {
    console.error("Error seeding database:", error.message);
  }
}
seedDatabase();
