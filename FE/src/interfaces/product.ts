import { CategoryType } from "./category";

export interface ProductType {
  _id?: string | undefined;
  name: string;
  image: string;
  description: string;
  about: string;
  discount: string;
  price: number;
  categoryId: CategoryType;
}
