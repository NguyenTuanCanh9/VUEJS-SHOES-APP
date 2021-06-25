
import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import { setToken, removeToken } from '@/shared/helper/index'

@Module({ namespaced: true })
class User extends VuexModule {
    isLogin: boolean = false;
    isModal: boolean = false;

    @Mutation
    setLogin(token: string): void {
        this.isLogin = true;
        setToken(JSON.stringify({ token: token }))

    }

    @Mutation
    changeLogin(status: boolean):void{
        this.isLogin = status;
    }

    @Mutation
    handleModal(status: boolean): void {
        this.isModal = status
    }
}
export default User;