import { Component, Vue, Watch } from 'vue-property-decorator'
import { like, unLike } from "@/shared/services/favorite";
import { addToCart, progressCart } from "@/shared/services/cart";
import { success } from "@/plugins/toast.plugin"
import { ADDTOCART__SUCCESS, LIKED__SUCCESS, UNLIKE__SUCCESS } from "@/shared/constants/message"
import { namespace } from "vuex-class";
import {
    typeProduct,
    typeCart,
} from "@/shared/interface/index";
import qs from "qs";

const user = namespace("user");
const cart = namespace("cart");
@Component
class FavoriteBuy extends Vue {
    products: typeProduct[] = [];
    infoFavoriteProduct: object = {};
    infoAddToCart: object = {};
    @user.State
    isLogin!: Boolean;
    @cart.Mutation
    setCart!: (infoCart: typeCart[]) => void;
    handleLike(info: object): void {
        this.infoFavoriteProduct = info;
        if (!(info as any).status) {
            like(qs.stringify({ product_id: (info as any).id })).then(() => {
                let index = this.products.findIndex((product) => {
                    return (product as typeProduct).id === (info as any).id;
                });
                this.$set(this.products[index], "is_favorited", true);
                this.infoFavoriteProduct = {};
                success(LIKED__SUCCESS);
            });
        } else {
            unLike((info as any).id).then(() => {
                let index = this.products.findIndex((product) => {
                    return (product as typeProduct).id === (info as any).id;
                });
                this.$set(this.products[index], "is_favorited", false);
                this.infoFavoriteProduct = {};
                success(UNLIKE__SUCCESS);
            });
        }
    }
    handleAddToCart(info: any) {
        this.infoAddToCart = info;
        const getCart = async () => {
            await addToCart(
                qs.stringify({
                    "items[0][product_id]": `${info.product_id}`,
                    "items[0][price]": `${info.price}`,
                    "items[0][discount]": "10",
                    "items[0][quantity]": `${info.quantity}`,
                })
            )
            const response = await progressCart();
            this.setCart((response as any).data.items);
            this.infoAddToCart = {};
            success(ADDTOCART__SUCCESS);
        }
        getCart();
    }
    @Watch("isLogin")
    reHandleRequest(): void {
        if ((this.infoFavoriteProduct as any).id) {
            this.handleLike(this.infoFavoriteProduct);
        }
        if ((this.infoAddToCart as any).product_id) {
            this.handleAddToCart(this.infoAddToCart);
        }
    }
}
export default FavoriteBuy