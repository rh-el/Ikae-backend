import connection from "./db";
const queries = require("../models/queries")

interface Product {
    id: number;
    title: string;
    price: number;
    type: string;
    material: string;
    color: string;
    condition: string;
    description: string;
    in_stock: boolean;
    updated_at: string;
    created_at: string;
    user_id: number;
}

class Product {
    static getAll: (result: (err: Error | null, data: Product[] | null) => void) => void;
    static getProductInfo: (result: (err: Error | null, data: Product | null) => void) => void;
    static getConfirmationInfo: (result: (err: Error | null, data: Product[] | null) => void) => void;
    constructor(product: any) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.type = product.type;
        this.material = product.material;
        this.color = product.color;
        this.condition = product.condition;
        this.description = product.description;
        this.in_stock = product.in_stock;
        this.updated_at = product.updated_at;
        this.created_at = product.created_at;
        this.user_id = product.user_id
    }
}

// defines getAll method for Product
Product.getAll = (result: (err: Error | null, data: Product[] | null) => void) => {
    // gets corresponding query
    const query = queries.getAllProductsQuery()
    // trigs query
    // connection represents our db connection from db.ts file
    connection.query(query, (err: Error, res: Product[]) => {
        // error handler
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return
        }
        // returns query result
        // console.log("products: ", res);
        result(null, res)
        
    })
}

Product.getProductInfo = (productID:number, result: (err: Error | null, data: Product | null) => void) => {
    
    console.log("productID: ", productID)

    const query = queries.getProductInfoQuery(productID)

Product.getProductInfo = (result: (err: Error | null, data: Product | null) => void) => {
    const query = queries.getProductInfoQuery()

        connection.query(query, (err: Error, res: Product) => {
        // error handler
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return
        }
        // returns query result
        console.log("product: ", res);
        result(null, res)
        
    })
}

Product.getConfirmationInfo = (result: (err: Error | null, data: Product[] | null) => void) => {
    const query = queries.getConfirmationInfoQuery()

    connection.query(query, (err: Error, res: Product[]) => {
        if (err) {
            console.log("error: ",err);
            result(err, null)
            return
        }
        console.log("product: ",res);
        result(null,res)
    })
}

Product.getConfirmationInfo = (result: (err: Error | null, data: Product[] | null) => void) => {
    const query = queries.getConfirmationInfoQuery()

    connection.query(query, (err: Error, res: Product[]) => {
        if (err) {
            console.log("error: ",err);
            result(err, null)
            return
        }
        console.log("product: ",res);
        result(null,res)
    })
}



export default Product


