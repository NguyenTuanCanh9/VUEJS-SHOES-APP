import service from './index'

const login = (infoAuthen: Object) => {
    return service.post("api/user/login", infoAuthen, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

const logout = () => {
    return service.get("api/user/logout")
}

export { login, logout }
