import instance from "../config/axios";
import { ProductType } from "../interfaces/product";

// Hàm lấy tất cả sản phẩm
export const GetAllProduct = async (): Promise<ProductType[]> => {
  try {
    const response = await instance.get<{ data: ProductType[] }>("products");
    return response.data.data; // Trích xuất mảng sản phẩm từ thuộc tính data
  } catch (error) {
    console.error('Lấy tất cả sản phẩm thất bại:', error);
    throw error;
  }
};

// Hàm lấy sản phẩm theo ID
export const GetProductByID = async (id: string | undefined): Promise<ProductType> => {
  try {
    const response = await instance.get<ProductType>(`products/${id}`);
    return response.data; // Trích xuất sản phẩm từ thuộc tính data
  } catch (error) {
    console.error(`Lấy sản phẩm với ID ${id} thất bại:`, error);
    throw error;
  }
};

// Hàm thêm sản phẩm mới
export const AddProduct = async (productData: ProductType): Promise<ProductType> => {
  try {
    const response = await instance.post<ProductType>("products", productData);
    return response.data; // Trích xuất sản phẩm mới thêm vào từ thuộc tính data
  } catch (error) {
    console.error('Thêm sản phẩm thất bại:', error);
    throw error;
  }
};

// Hàm cập nhật sản phẩm
export const UpdateProduct = async (id: string | undefined, productData: ProductType): Promise<ProductType> => {
  try {
    const response = await instance.put<ProductType>(`products/${id}`, productData);
    return response.data; // Trích xuất sản phẩm đã cập nhật từ thuộc tính data
  } catch (error) {
    console.error(`Cập nhật sản phẩm với ID ${id} thất bại:`, error);
    throw error;
  }
};

// Hàm xóa sản phẩm
export const DeleteProduct = async (id: string | undefined): Promise<void> => {
  try {
    await instance.delete(`products/${id}`);
  } catch (error) {
    console.error(`Xóa sản phẩm với ID ${id} thất bại:`, error);
    throw error;
  }
};

export const GetProductsByCategory = async (categoryId: string | undefined): Promise<ProductType[]> => {
  try {
    const response = await instance.get<{ data: ProductType[] }>(`products/category/${categoryId}`);
    return response.data.data; // Trích xuất mảng sản phẩm theo danh mục từ thuộc tính data
  } catch (error) {
    console.error(`Lấy sản phẩm theo danh mục ${categoryId} thất bại:`, error);
    throw error;
  }
};
;
