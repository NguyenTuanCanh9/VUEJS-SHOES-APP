import service from './index'
const categories = () => {
    return service.get("api/categories")
}
const products = (params: object) => {
    return service.get(`api/products`, {
        params: params
    })
}
export { categories, products }
