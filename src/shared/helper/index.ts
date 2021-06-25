export const getItem = <T>(key: string, defaultValue: T): T => {
    const data = localStorage.getItem(key)
    try {
        if (data) {
            return JSON.parse(data)
        }
    } catch (e) {
        throw e;
    }
    return defaultValue
}

export const setToken = (token: string): void => localStorage.setItem("token", token);
export const removeToken = (): void => localStorage.removeItem("token");

export const setCart = (cart: string): void => localStorage.setItem("cart", cart);
export const removeCart = (): void => localStorage.removeItem("cart");
