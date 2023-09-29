import { Product } from "src/app/models/product.model";

export const ProductState: Product = {
    productList: [
        {
            "id": 1,
            "name": "Product 1",
            "description": "Description of Product 1",
            "categoryId": 1,
            "attributes": [
                {
                    "id": 101,
                    "name": "Size",
                    "values": ["Small", "Medium", "Large"]
                },
                {
                    "id": 102,
                    "name": "Color",
                    "values": ["Red", "Blue", "Green"]
                }
            ]
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "Description of Product 2",
            "categoryId": 2,
            "attributes": [
                {
                    "id": 103,
                    "name": "Size",
                    "values": ["Medium", "Large"]
                },
                {
                    "id": 104,
                    "name": "Color",
                    "values": ["Blue", "Green"]
                }
            ]
        },
        {
            "id": 3,
            "name": "Product 3",
            "description": "Description of Product 3",
            "categoryId": 1,
            "attributes": [
                {
                    "id": 101,
                    "name": "Size",
                    "values": ["Small", "Large"]
                },
                {
                    "id": 105,
                    "name": "Material",
                    "values": ["Cotton", "Polyester"]
                }
            ]
        }
    ]

}