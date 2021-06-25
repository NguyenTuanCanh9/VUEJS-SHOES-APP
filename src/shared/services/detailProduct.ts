import service from './index'

const detailProduct = (id: string) => {
    return service.get(`api/products/${id}`)
}

const relateToProduct = (params: object) => {
    return service.get("api/products", {
        params: params
    })
}


export { detailProduct, relateToProduct }
