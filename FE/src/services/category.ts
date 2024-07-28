import instance from "../config/axios";
import { CategoryType } from "../interfaces/category";
import { ProductType } from "../interfaces/product";

// Hàm lấy tất cả danh mục
export const GetAllCategory = async (): Promise<CategoryType[]> => {
  try {
    const { data } = await instance.get<CategoryType[]>("categories");
    return data; // Trả về mảng danh mục
  } catch (error) {
    console.error('Failed to fetch all categories:', error);
    throw error;
  }
};

// Hàm lấy danh mục theo ID
export const GetCategoryByID = async (id: string | undefined): Promise<{ category: CategoryType; products: ProductType[] }> => {
  try {
    const { data } = await instance.get<{ category: CategoryType; products: ProductType[] }>(`categories/${id}`);
    return data; // Trả về danh mục và các sản phẩm liên quan
  } catch (error) {
    console.error(`Failed to fetch category with ID ${id}:`, error);
    throw error;
  }
};

// Hàm thêm danh mục mới
export const AddCategory = async (categoryData: CategoryType): Promise<CategoryType> => {
  try {
    const { data } = await instance.post<CategoryType>("categories", categoryData);
    return data; // Trả về danh mục mới thêm vào
  } catch (error) {
    console.error('Failed to add category:', error);
    throw error;
  }
};

// Hàm cập nhật danh mục
export const UpdateCategory = async (categoryData: CategoryType, id: string | undefined): Promise<CategoryType> => {
  try {
    const { data } = await instance.put<CategoryType>(`categories/${id}`, categoryData);
    return data; // Trả về danh mục đã cập nhật
  } catch (error) {
    console.error(`Failed to update category with ID ${id}:`, error);
    throw error;
  }
};

// Hàm xóa danh mục
export const DeleteCategory = async (id: string): Promise<void> => {
  try {
    await instance.delete(`categories/${id}`);
  } catch (error) {
    console.error(`Failed to delete category with ID ${id}:`, error);
    throw error;
  }
};
