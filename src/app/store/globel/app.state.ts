import { productReducer } from "../products/product.reducer";
import { AppStateModel } from "./app.state.model";

export const AppState = {
    product: productReducer
}