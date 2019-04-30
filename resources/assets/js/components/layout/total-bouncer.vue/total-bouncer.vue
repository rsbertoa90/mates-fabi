<template>
    <div>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDown">
            <div v-if="total > 0" id="total"  class="col-12 row d-flex flex-column justify-content-center align-items-center w-100">
                <div  class="bg-success p-1 col-6 col-lg-2">
                    <div class="col-12 bg-white d-flex justify-content-center">
                    TOTAL : ${{total | price}}
                    </div>
                </div>
                <div  class="bg-success p-1 col-6 col-lg-2">
                    <div class="col-12 bg-white d-flex justify-content-center">
                        <a href="#form">Terminar pedido</a>
                    </div>
                </div>    
            </div>    
        </transition>
    </div>
</template>

<script>
export default {
    computed:{
        total()
        {
            return this.$store.getters.getTotal;
        }
    }
}
</script>
