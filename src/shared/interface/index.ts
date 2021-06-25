interface typeProduct {
    id: number,
    name: string,
    category_id: number,
    price: number,
    is_favorited: boolean,
    colors: object[],
    images: object[],
    category: object
}

interface typeCart {
    id: number,
    cart_id: number,
    product_id: number,
    price: number,
    discount: number,
    quantity: number,
    product: {
        id: number,
        name: String,
        images: object[],
    }
}

interface typeBuy {
    quantity: number,
    price : number,
    id: number
}

interface typeUtils {
    name: string,
    content: string,
    description: string
}

interface typeSocials {
    icon: {
        path: string,
        color: string
    },
    name: string,
    number: number,
    hashtag: string,
}


interface typeLogos {
    name: string
}

interface infoAddQuantity {
    id: number,
    number: number
}

interface formLogin {
    email: string,
    password: string
}

interface formRegistration {
    FirstName: String,
    SecondName: String,
    Email: String,
    Password: String,
    City: String,
    Code: String,
    Address: String
}

export { typeProduct, typeCart, typeBuy, infoAddQuantity, formLogin, formRegistration, typeUtils, typeSocials, typeLogos }






