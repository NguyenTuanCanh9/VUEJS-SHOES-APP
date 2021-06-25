import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                textField: "#646262",
                btn: "#2d00ff",
                transparent: "transparent",
                like : "#415ad5",
                liked : "#f50910",
                ts : "#3a54d6",
                track : "#e6e6e6",
                review : "#f9b313",
            },
        },
    }
});
