const products = require("../database/products");
const getAllProducts = async () => {
  try {
    const allProducts = await products.getAllProducts();
    return allProducts;
  } catch (error) {
    throw error;
  }
};
const getOneProduct = async (id) => {
  try {
    const oneProduct = await products.getOneProduct(id);
    return oneProduct;
  } catch (error) {
    throw error;
  }
};
const createOneProduct = async (data) => {
  try {
    const newProduct = await products.createOneProduct(data);
    return newProduct;
  } catch (error) {
    throw error;
  }
};
const updateOneProduct = async (id) => {
  try {
    const updatedProduct = await products.updateOneProduct(id);
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};
const deleteOneProduct = async (id) => {
  try {
    const deletedProduct = await products.deleteOneProduct(id);
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
