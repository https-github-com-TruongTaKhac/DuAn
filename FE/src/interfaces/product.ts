import { CategoryType } from "./category";

export interface ProductType {
  _id?: string | undefined;
  name: string;
  image: string;
  price: number;
  categoryId: CategoryType;
}