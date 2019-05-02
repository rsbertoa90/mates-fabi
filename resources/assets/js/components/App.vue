<template>
    <div class="app-container">
        <userLayout v-if="!user || user.role_id > 2"></userLayout>
        <admin-layout v-if="user && user.role_id < 3"></admin-layout>
        <total-bouncer></total-bouncer>
    </div>  
</template>

<script>
import totalBouncer from './layout/total-bouncer/total-bouncer.vue';
import userLayout from './layout/User-layout.vue';
import adminLayout from './layout/Admin-layout.vue';
export default {
    components:{
        userLayout,adminLayout,totalBouncer
    },
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    }
}
</script>


<style lang="scss" scoped>
    .app-container{
        width:98.5vw;
        margin:0;
        padding:1%;
        border:1px solid #868686;
        overflow: hidden;
    }
</style>

