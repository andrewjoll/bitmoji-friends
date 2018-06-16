import Vue from 'vue';
import VueResource from 'vue-resource';

import Bitmoji from './Bitmoji.vue';

Vue.use(VueResource);

Vue.component('bitmoji', Bitmoji);

new Vue({
    name: 'app',
    el: '#app',
    data() {
        return {};
    },
    mounted() {
        console.log('Root ready.');
    },
    methods: {

    }
});
