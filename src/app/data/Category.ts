import { Food } from "./Food";

export interface Category{
  id: string,
  name: string,
  imageSrcUrl?: string,
  foodItems: Food[]
}
