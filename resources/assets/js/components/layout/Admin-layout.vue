<template>
    <div class="d-flex justify-content-center align-items-center " >
        <div id="app" >
          
            <div>
                <app-navbar></app-navbar>
                

                <div class="col-12 w-100 row" style="margin-left:0.2%">
                    <main class="py-4 w-100 row">
                        
                        <div class="col-12 overflow-hidden">
                            <transition enter-active-class="animated slideInLeft ">
                                <router-view></router-view>
                            </transition>
                        </div>

                    </main>
                
                </div> 
    
            </div>
          
        </div>
    </div>
</template>

<script>
import appNavbar from '../admin/Admin-nav.vue';
import appFooter from './footer/Footer.vue'; 
export default {
    components:{appNavbar,appFooter}
}
</script>

<style lang="scss" scoped>
.overflow-hidden{
    overflow: hidden;
}
</style>

