import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import { typeCart } from "@/shared/interface/index"


@Module({ namespaced: true })
class Home extends VuexModule {
    cart: typeCart[] = [];

    get getNumberCart(): number {
        return this.cart.reduce((total: number, currentValue: typeCart) => total + currentValue.quantity, 0);
    }

    get getTotalPrice(): number {
        return this.cart.reduce((total: number, currentValue: typeCart) => total + currentValue.quantity * currentValue.price, 0);
    }

    @Mutation
    setCart(infoCart: typeCart[]): void {
        this.cart = infoCart
    }

    @Mutation
    retsetCart(): void {
        this.cart = [];
    }
}
export default Home;