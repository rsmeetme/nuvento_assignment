import { createReducer, on } from "@ngrx/store";
import { CategoryState } from "./cateogry.state";
import { addCategory, deleteCategory, getCategories, updateCategory } from "./category.action";

const _categoryReducer  = createReducer(
    CategoryState,
    on(getCategories, (state) => {
        return {
            ...state
        }
    }),
    on(addCategory, (state, action) => {
        const _category = action.addCategory;
        return {
            ...state,
            categoryList: [...state.categoryList, _category]
        }
    }),
    on(updateCategory, (state, { updateCategory }) => {
        const _category = state.categoryList.map((category) => {
            if (category.id == updateCategory.id) {
                return { ...category, ...updateCategory };
            }
            return category;
        });
        return {
            ...state,
            categoryList: [..._category]
        }
    }),
    on(deleteCategory, (state, { categoryId }) => {
        const _category = state.categoryList.filter(category => category.id != categoryId);
        return {
            ...state,
            categoryList: [..._category]
        }
    })
)


export function categorytReducer(state: any, action: any) {
    return _categoryReducer(state, action);
}