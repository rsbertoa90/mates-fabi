<template>
    <div class="container">
        <div class="row p-5 d-flex flex-column info" v-if="configs">
            <h1>Mayorista Mates Fabi</h1>
            
          <p>
                <span class="fa fa-check fucsia"></span> En Mayorista Mates Fabi tenemos precios y diseños únicos porque somos fabricantes
          </p>
          <p>
               <span class="fa fa-check fucsia"></span>
               Podes visitar nuestras sucursales ubicadas en Once de lunes a viernes de 9 a 18 hs o hacer tu pedido Online.
          </p>
          <p>
               <span class="fa fa-check fucsia"></span>
                La compra mínima acercándote personalmente a cualquiera de nuestras sucursales es de $2500.
          </p>
          <p>
               <span class="fa fa-check fucsia"></span>
                check La compra mínima Online es de $5000.
          </p>
          <p>
               <span class="fa fa-check fucsia"></span>
                La compra es entregada sin cargo al transporte de carga elegido por el cliente. ( La elección del transporte y costo del mismo es a cargo del comprador)
          </p>
          <p>
               <span class="fa fa-check fucsia"></span>
              Los despachos se realizan de 2 a 6 días hábiles a partir del      informe y acreditación de pago.
          </p>
              
        </div>

        <div mt-4>
            <router-link to="/cotizador" class="d-flex w-100 justify-content-center">
                <v-lazy-image v-if="$mq == 'lg'" src="/storage/images/app/bannerCotizador.png" alt="presupuesto" />
                <v-lazy-image v-else src="/storage/images/app/banner-cotizador-mobile.png" alt="presupuesto" />
            </router-link>
        </div>

       <!--  <home-maps></home-maps> -->

        <div>
            <p class="text-center">
               <span class="fa fa-whatsapp"></span> Atencion Personalizada llamando o por whatsapp al <b> 11-4951-5417 </b>
            </p>
        </div>

        <home-offers></home-offers>
        <hr>
        <div class="mt-4">
            <h2>Productos de Mayorista Mates Fabi  </h2>
            <home-categories-mobile v-if="$mq!='lg'"></home-categories-mobile>
            <home-categories-wide v-else></home-categories-wide>
        </div>

    </div>
</template>

<script>
import homeMaps from './maps.vue';
import homeOffers from './offers.vue';
import homeCategoriesMobile from './categories-mobile.vue';
import homeCategoriesWide from './categories-wide.vue';
export default {
    components:{
        homeMaps,
        homeOffers,
        'home-categories-mobile' : homeCategoriesMobile,
        'home-categories-wide' : homeCategoriesWide
    },
    computed:{
        configs(){
            return this.$store.getters.getConfig;
        }
    }
}
</script>

<style lang="scss" scoped>
.info{
    p{
        font-size:16px;
    }
}
    .fa-whatsapp{
        color:#25d366;
        font-size: 2rem;
    }
</style>

