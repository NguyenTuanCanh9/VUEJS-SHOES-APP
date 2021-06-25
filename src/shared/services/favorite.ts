import service from './index'

const like = (info: string) => {
    return service.post("api/user/favorite-products", info, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

const unLike = (id: Object) => {
    return service.delete(`api/user/favorite-products/${id}`)
}


export { like, unLike }
