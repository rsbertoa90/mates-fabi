<template>
    <div class="container">   
        <div class="row">
            <h1 class="col-12 col-lg-6 text-center" v-if="user && user.role_id > 2">Hace tu pedido Online</h1>
            <h1 class="col-12 col-lg-6 text-center" v-else>Tomar pedido</h1>
            <a href="/descargar-lista-de-precios" target="_blank" class="col-12 col-lg-6 btn btn-lg btn-outline-info"> <span class="fa fa-download"></span> Descargar lista de precios</a>
        </div>
        <div class="row mt-2 d-flex flex-column mb-4 mt-4" v-if="configs">
           
                <span><i class="fa fa-check fucsia"></i>  Los precios publicados son sin IVA</span>
                <span><i class="fa fa-check fucsia"></i> Acercándote personalmente a las sucursales la compra mínima es de ${{configs.minbuy}}.</span>
                <span><i class="fa fa-check fucsia"></i> La Compra minima <b> ONLINE </b> es de ${{configs.minbuy_ship}}</span>
                <span><i class="fa fa-check fucsia"></i> Los despachos o retiros de las compras online se realizan de 2 a 6 días hábiles luego del informe y acreditación de pago.</span>
                <span><i class="fa fa-check fucsia"></i> <b> Envío: </b> la elección del trasporte y el costo del mismo corre a cargo del comprador. Mates Fabi lo lleva sin cargo  desde la fabrica hasta el transporte de tu elección.</span>
                <span><i class="fa fa-check fucsia"></i> <b> Formas de pago: </b> Efectivo o Deposito /Transferencia Bancaria.</span>
           
        </div>

        
           
             
            
             
        <div id="accordion">
            <div v-for="category in categories" 
                  :key="'category-'+category.id" 
                  class="card flex-wrap">
                <div class="card-header" :id="'card'+category.id">
                  
                    <h5 class="mb-0">
                        <button class="btn  btn-link w-100 text-left text-big d-flex align-items-center w-100" 
                                data-toggle="collapse" 
                                :data-target="'#acordion'+category.id" 
                                aria-expanded="true" 
                                :aria-controls="category.name"
                                @click="selectedCategory=category.id">
                                   <div class="category-miniature">
                                        <v-lazy-image :src="category.image"></v-lazy-image>
                                    </div>
                                    <span class="white-space-normal">
                                        {{category.name.ucfirst()}}
                                    </span>
                                   
                        </button>
                    </h5>
                </div>
                <div :id="'acordion'+category.id" class="collapse collapsed " aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                       <table class="table table-striped table-bordered " >
                           <thead class="">
                               <th>Foto</th>
                                <th v-if="user && user.role_id < 3">Codigo</th>
                               <th>Producto</th>
                               <th>Precio</th>
                               <th>Quiero</th>
                               
                           </thead>
                           <tbody v-if="selectedCategory==category.id">
                               <tr is="productRow" v-for="product in category.products" :key="product.id" v-if="!product.paused" :product="product">  
                               </tr>
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
        </div>
        
        
        <hr>
        
       <div v-if="!tutoseen">
            <tutorial v-if="!user || user.role_id > 2"></tutorial>
       </div>
    </div>
</template>

<script>
import productRow from './product-row.vue';
import metadataMixin from '../metadataMixin.js';
 import { mapActions } from 'vuex';
 import { mapGetters } from 'vuex';
   
   
    import tutorial from './tutorial.vue'
   
    export default {
        mixins:[metadataMixin],
        components : {tutorial,productRow},
        data(){
            return {
                selectedCategory:null,              
            }
        },

       
     
        computed: {
            ...mapGetters({
                categories : 'getCategories',
               user : 'getUser',
               configs: 'getConfig',
                total:'getTotal',
                list:'getList',
                tutoseen:'getTutoseen'
            }),
            
          
        },

        mounted()
        {
            if (this.user && this.user.role_id < 3)
            {
                this.$store.dispatch('fetchCategories');
            }
        }

      
    }
</script>

<style scoped>

.icono{
    font-size: 2.75rem;
    margin-right: 15px;
    margin-top:-15px
}


.white-space-normal{
    white-space: normal;
}
.text-big{
    font-size: 1.5rem;
}
.category-miniature{
    min-width: 100px;
    width: 100px;
    margin-right: 15px;
}
.container{
    
    margin-bottom: 100px;
  
    }

    td{
        white-space:normal;
    }
    input[type="number"]{
        width: 70px;
    }

    .sampleImage{width: 100px;}


   .btn-link {color : black;}
   
    img{width:100%}

    @media(max-width: 600px){
        .card-header{
            padding:0;
        }
        .container{
    
            margin-left: -7%;
            width: 100vw;
            padding: 15px;
            }
        .sampleImage{width: 80px;}
        td { white-space :normal;}
        table {
            font-size: 0.66rem;
            font-weight: bold;
        }
       
        .card-body,table th, table td{padding:5px;}
    }
    
    @media(min-width: 600px){
        .sampleImage{width: 150px;}
        table{ font-size: 1rem; font-weight: normal}
        td {white-space: normal;}
        .card-body,.container{padding:1.25rem}
        
    }
   
</style>
