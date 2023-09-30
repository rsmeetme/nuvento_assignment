import { Category } from "src/app/models/category.model";

export const CategoryState: Category = {
    categoryList: [
        {
            "id": 1,
            "name": "Category 1",
            "parentId": null
        },
        {
            "id": 2,
            "name": "Category 2",
            "parentId": 1 
        },
        {
            "id": 3,
            "name": "Category 3",
            "parentId": 1
        }
    ]

}