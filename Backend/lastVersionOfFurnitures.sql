-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema furniture_shop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema furniture_shop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `furniture_shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `furniture_shop` ;

-- -----------------------------------------------------
-- Table `furniture_shop`.`furnitures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `furniture_shop`.`furnitures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(5000) NULL DEFAULT NULL,
  `price` INT NOT NULL,
  `length` INT NULL DEFAULT NULL,
  `width` INT NULL DEFAULT NULL,
  `height` INT NULL DEFAULT NULL,
  `posted_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `category_id` INT NULL DEFAULT NULL,
  `quantity`INT NULL DEFAULT NULL,
  `image` VARCHAR(2048) NULL DEFAULT NULL,  -- Ajout de la colonne pour l'URL de l'image
  PRIMARY KEY (`id`),
INDEX `fk_furnitures_category` (`category_id` ASC) VISIBLE,

  CONSTRAINT `fk_furnitures_category`

    FOREIGN KEY (`category_id`)

    REFERENCES `furniture_shop`.`categories` (`id`)

)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `furniture_shop`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `furniture_shop`.`categories` (

  `id` INT NOT NULL AUTO_INCREMENT,

  `type` VARCHAR(255) NULL DEFAULT NULL,

  PRIMARY KEY (`id`)

) ENGINE = InnoDB

DEFAULT CHARACTER SET = utf8mb4

COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `furniture_shop`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `furniture_shop`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
`role` ENUM('admin', 'user') NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `furniture_shop`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `furniture_shop`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `furniture_id` INT NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `furniture_id` (`furniture_id` ASC) VISIBLE,
  INDEX `fk_orders_users` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `furniture_shop`.`users` (`id`),
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`furniture_id`)
    REFERENCES `furniture_shop`.`furnitures` (`id`),
  CONSTRAINT `orders_ibfk_2`
    FOREIGN KEY (`user_id`)
    REFERENCES `furniture_shop`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `furniture_shop`.`orders_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `furniture_shop`.`orders_products` (
  `id_product` INT NOT NULL,
  `id_order` INT NOT NULL,
  PRIMARY KEY (`id_product`, `id_order`),
  INDEX `id_order` (`id_order` ASC) VISIBLE,
  CONSTRAINT `orders_products_ibfk_1`
    FOREIGN KEY (`id_product`)
    REFERENCES `furniture_shop`.`furnitures` (`id`),
  CONSTRAINT `orders_products_ibfk_2`
    FOREIGN KEY (`id_order`)
    REFERENCES `furniture_shop`.`orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `Basket cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `furniture_shop`.`cart`(
`id` INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`),
`user_id` INT NOT NULL,
`furniture_id` INT NOT NULL ,
`quantity` INT NOT NULL DEFAULT 1,
`created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `furniture_shop`.`users` (`id`),
  FOREIGN KEY (`furniture_id`) REFERENCES `furniture_shop`.`furnitures` (`id`)
  );
  


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;