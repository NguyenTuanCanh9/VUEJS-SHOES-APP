import service from './index'

const products = (params: object) => {
    return service.get(`api/products`, {
        params: params
    })
}
export { products }
