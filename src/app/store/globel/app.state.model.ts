import { Attribute } from "src/app/models/attribute.model";
import { Category } from "src/app/models/category.model";
import { Product } from "src/app/models/product.model";

export interface AppStateModel {
    product: Product,
    category: Category,
    attribute: Attribute
}