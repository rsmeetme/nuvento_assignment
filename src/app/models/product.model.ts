import { AttributeModel } from "./attribute.model";

export interface ProductModel {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    attributes: AttributeModel[]
}

export interface Product {
    productList: ProductModel[];
}