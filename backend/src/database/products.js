const express = require("express");
const Product = require("../models/Product");
const getAllProducts = async () => {
  try {
    // .find({}) retrieves all documents in the collection
    const allProducts = await Product.find({});
    return allProducts;
  } catch (error) {
    console.error("DB Error: Failed to fetch all products:", error.message);
    throw error;
  }
};
const createOneProduct = async (data) => {
  try {
    const newProduct = await Product.create(data);
    return newProduct;
  } catch (error) {
    console.error("DB Error: Failed to create new product:", error.message);
    throw error;
  }
};
const getOneProduct = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.error(`DB Error: Failed to fetch product ${id}:`, error.message);
    throw error;
  }
};
const updateOneProduct = async (id, changes) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, changes, {
      new: true,
      runValidators: true,
    });
    return updatedProduct;
  } catch (error) {
    console.error(`DB Error: Failed to update product ${id}:`, error.message);
    throw error;
  }
};
const deleteOneProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct ? 1 : 0;
  } catch (error) {
    console.error(`DB Error: Failed to delete product ${id}:`, error.message);
    throw error;
  }
};
module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
