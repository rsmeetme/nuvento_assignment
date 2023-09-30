import { attributeReducer } from "../attribute/attribute.reducer";
import { categorytReducer } from "../category/category.reducer";
import { productReducer } from "../products/product.reducer";

export const AppState = {
    product: productReducer,
    category:categorytReducer,
    attribute:attributeReducer
}