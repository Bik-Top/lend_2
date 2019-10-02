<template>
    <b-col>
        <Home></Home>
        <Features></Features>
        <About></About>
        <Video></Video>
        <Clients></Clients>
        <Screenshots></Screenshots>
        <Pricing></Pricing>
        <Download></Download>
        <Contact></Contact>
        <router-view> </router-view>
    </b-col>
</template>

<script>
    import Home from '@/views/Home.vue'
    import Features from '@/views/Features.vue'
    import About from '@/views/About.vue'
    import Video from '@/views/Video.vue'
    import Clients from '@/views/Clients.vue'
    import Screenshots from '@/views/Screenshots.vue'
    import Pricing from '@/views/Pricing.vue'
    import Download from '@/views/Download.vue'
    import Contact from '@/views/Contact.vue'

    export default {
        name: "Content",
        components: {
            Home,
            Features,
            About,
            Video,
            Clients,
            Screenshots,
            Pricing,
            Download,
            Contact
        },
    }
</script>

<style scoped>

</style>
