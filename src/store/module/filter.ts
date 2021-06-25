
import { VuexModule, Module, Mutation } from 'vuex-module-decorators';

@Module({ namespaced: true })
class Filter extends VuexModule {
    searchInput: string = '';

    @Mutation
    setSearchInput(name: string): void {
        this.searchInput = name;
    }
}
export default Filter;