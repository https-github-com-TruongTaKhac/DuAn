import { StatusCodes } from "http-status-codes";
import Product from "../models/product";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      slug: slugify(req.body.name, { lower: true, replacement: "-" }), // Đặt option cho slugify
      categoryId: req.body.categoryId,
      image: req.body.image,
      price: req.body.price,
      gallery: req.body.gallery || [],
      title: req.body.title || "",
      description: req.body.description || "",
      about: req.body.about || "",
      discount: req.body.discount || 0,
      countInStock: req.body.countInStock || 0,
      featured: req.body.featured || false,
      tags: req.body.tags || [],
      attributes: req.body.attributes || [],
    };

    const product = await Product.create(productData);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId", "name");
    if (products.length === 0) {
      return res.status(StatusCodes.OK).json({ data: [] });
    }
    return res.status(StatusCodes.OK).json({ data: products });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId",
      "name"
    );
    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không tìm thấy sản phẩm nào!" });
    }
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const related = async (req, res) => {
  try {
    const product = await Product.find({
      category: req.params.categoryId,
      _id: { $ne: req.params.productId },
    }).populate("categoryId", "name");
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params; // Lấy categoryId từ tham số URL
    const products = await Product.find({ categoryId }).populate(
      "categoryId",
      "name"
    );

    if (products.length === 0) {
      return res.status(StatusCodes.OK).json({ data: [] });
    }
    return res.status(StatusCodes.OK).json({ data: products });
  } catch (error) {
    console.error(error); // Ghi lỗi ra console để dễ dàng theo dõi
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
