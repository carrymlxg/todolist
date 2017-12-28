Vue.component('shuru', {
    props:["title"],
    template:`<div class="select-input">
        <input type="text" @focus="focus()" v-model="title">
    </div>`,

    methods:{
        focus(){
            this.$emit("customvent");
        }
    }
});
Vue.component('list', {
    props:["list","status"],
    template:`<ul>
        <li v-for="v in list" @click="click(v)" >{{v}}</li>
    </ul>`,
    methods:{
        click(val){
            this.$emit("customvent",val);
        }
    }
});