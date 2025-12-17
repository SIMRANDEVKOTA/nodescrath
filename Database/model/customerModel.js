import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Customers = sequelize.define("customers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerContactno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
