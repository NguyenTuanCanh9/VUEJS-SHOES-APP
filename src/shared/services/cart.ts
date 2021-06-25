import service from './index'

const addToCart = (infoProduct: string) => {
    return service.post("api/user/cart-items", infoProduct, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

const progressCart = () => {
    return service.get('api/user/carts/me')
}


export { addToCart, progressCart }
