const app = Vue.createApp({
    data(){
        return{
            showNav:false,
        }
    },
    methods:{
        toggleShowNav(){
            this.showNav =!this.showNav
        },
    }
})
app.mount('#app');

const apps = Vue.createApp({
    data(){
        return{
            showFsec:true,
            show2sec:false,
            show3sec:false,
            show4sec:false,
            show5sec:false,
            show6sec:false,
        
        }
    },
    methods:{
        toggleFsec(){
            this.showFsec =!this.showFsec
            this.show2sec =false
            this.show3sec =false
            this.show4sec =false
            this.show5sec =false
            this.show6sec =false
        },
        toggle2sec(){
            this.show2sec =!this.show2sec
            this.showFsec =false
            this.show3sec =false
            this.show4sec =false
            this.show5sec =false
            this.show6sec =false
        },
        toggle3sec(){
            this.show3sec =true
            this.show2sec =false
            this.showFsec =false
            this.show4sec =false
            this.show5sec =false
            this.show6sec =false
        },
        toggle4sec(){
            this.show4sec =true
            this.showFsec =false
            this.show2sec =false
            this.show3sec =false
            this.show5sec =false
            this.show6sec =false
        },
        toggle5sec(){
            this.show5sec =true
            this.showFsec =false
            this.show2sec =false
            this.show3sec =false
            this.show4sec =false
            this.show6sec =false
        },
        toggle6sec(){
            this.show6sec =true
            this.show3sec =false
            this.show2sec =false
            this.showFsec =false
            this.show4sec =false
            this.show5sec =false
        },
    }
})
apps.mount('#apps');
