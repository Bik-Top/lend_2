<template>
    <b-container>
        <slider
                :width="300"
                format="push"
                direction="left"
                :opacity="0.15"
                :links="[
                    {'id': 1, 'text': 'Home', 'url': '/'},
                    {'id': 2, 'text': 'Features', 'url': '#features'},
                    {'id': 3, 'text': 'About', 'url': '#about'},
                    {'id': 4, 'text': 'Video', 'url': '#video'},
                    {'id': 5, 'text': 'Clients', 'url': '#clients'},
                    {'id': 6, 'text': 'Screenshots', 'url': '#screenshots'},
                    {'id': 7, 'text': 'Pricing', 'url': '#pricing'},
                    {'id': 8, 'text': 'Download', 'url': '#download'},
                    {'id': 9, 'text': 'Contact', 'url': '#contact'}
                ]"></slider>

        <!--<b-nav id="nav nav-fixed">
            <b-nav-item>
                <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#features">Features</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#about">About</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#video">Video</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#clients">Clients</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#screenshots">Screenshots</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#pricing">Pricing</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#download">Download</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="#contact">Contact</router-link>
            </b-nav-item>
        </b-nav>-->


        <b-row>
            <router-view></router-view>
        </b-row>
    </b-container>
</template>


<script>
    // @ is an alias to /src
    import Slider from '@jeremyhamm/vue-slider'

    export default {
        name: 'app',
        components: {
            'slider': Slider
        },

        methods: {

        },

        /*  watch: {
            '$route' (to, from) {
              const toDepth = to.path.split('/').length;
              const fromDepth = from.path.split('/').length;
              this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
          }*/
    }
</script>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }


    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
