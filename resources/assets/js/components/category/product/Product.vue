<template>
    <div v-if="product">
        <div class="row justify-content-center" itemscope itemtype="http://schema.org/Product">
            <div class="col-12 col-lg-6 row">
                <div class="col-12" @click="show">
                    <v-lazy-image v-if="!product.images[0]"  src="/storage/images/app/no-photo.png" alt="sin foto"/>
                    <v-lazy-image  itemprop="image" v-else 
                        :src="product.images[selectedImage].url" 
                        :alt="product.name" />
                </div>
                <div class="col-12 row" v-if="product.images[1]">
                    <div  v-if="i-1 != selectedImage"  class="col-4" v-for="i in product.images.length" :key="i" @click="selectedImage=i-1">
                        <v-lazy-image :src="product.images[i-1].url" :alt="product.name"  />
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6" itemprop="offer">
                <div class="d-flex flex-column align-items-start justify-content-around h-100">
                    <div class="d-flex flex-column">
                        <h2 itemprop="name"> {{product.name | ucFirst}} </h2>
                        <span class="text-secondary"> {{product.category.name |ucFirst}} </span>
                    </div>
                    <div  class="d-flex align-items-center">
                        <h2 itemprop="price">  ${{product.price}} </h2>
                        <h5> <del class="text-secondary ml-2"> ${{product.price*1.4 |price}} </del> </h5>
                    </div>
                    <div class="d-flex flex-column mt-3" v-if="product.description">
                        <h4>Sobre el producto:</h4>
                        <p class="texto"> {{product.description | ucFirst}} </p>
                        <span style="font-size: 0.7rem ; font-style:italic">* Los diseños estan sujetos a disponibilidad</span>
                    </div>
                    <div class="mt-3">
                        <shop-button :product="product"></shop-button>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6 d-flex align-items-center">
                             <span class="fa fa-truck mr-2"></span>
                             <span class="ml-2">Envio a todo el país</span>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                            <i class="fas fa-hand-holding-usd"></i>
                            <span class="ml-2">Somos fabricantes!</span>
                        </div>
                        <div class="col-12 d-flex flex-column" v-if="configs">
                            <span><i class="fa fa-check"></i>  Los precios publicados son sin IVA</span>
                            <span><i class="fa fa-check"></i> Acercándote personalmente a las sucursales la compra mínima es de ${{configs.minbuy}}.</span>
                            <span><i class="fa fa-check"></i> La Compra minima <b> ONLINE </b> es de ${{configs.minbuy_ship}}</span>
                            <span><i class="fa fa-check"></i> Los despachos o retiros de las compras online se realizan de 2 a 6 días hábiles luego del informe y acreditación de pago.</span>
                            <span><i class="fa fa-check"></i> <b> Envío: </b> la elección del trasporte y el costo del mismo corre a cargo del comprador. Mates Fabi lo lleva sin cargo  desde la fabrica hasta el transporte de tu elección.</span>
                            <span><i class="fa fa-check"></i> <b> Formas de pago: </b> Efectivo o Deposito /Transferencia Bancaria.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <related-products :category_id="product.category_id"></related-products>
        </div>
    </div>
</template>

<script>
import shopButton from './shop-button.vue';
import relatedProducts from './related.vue';
export default {
    components:{relatedProducts,shopButton},
     metaInfo(){
        return{
            title:this.metatitle,
            meta: [
                { charset: 'utf-8' },
                { vmid: 'description', name: 'description', content: this.metadescription }
            ]
        }
    },
    data(){
        return{
            selectedImage : 0
        }
    },
    computed:{
         metatitle(){
            if (this.product )
            {
                
                return this.product.metatitle ? this.product.metatitle : this.product.name+' por mayor'
            }else{return ''}
            
        },
        metadescription(){
            if (this.product){
                if (this.product.metadescription)
                {
                    return this.product.metadescription;
                }
                else if (this.product.description)
                {
                    return this.product.description;
                }
                else return this.product.name+" "+'por mayor';
                    
            }  else{return ''}
            
        },
        configs(){
            return this.$store.getters.getConfig;
        },
        categories(){
            return this.$store.getters.getCategories;
        },
        product(){
              let vm =this;
            let res = null;
            if(this.categories){

                this.categories.forEach(c => {
                    let p = c.products.find(pr => {
                        if(pr.slug){
                          
                            let productSlug = '/'+pr.slug;
                            productSlug = productSlug.replace('//','/');
                            let routeParam = '/'+vm.$route.params.product_slug;
                            routeParam = routeParam.replace('//','/');
                           
                            return routeParam.trim().toLowerCase() == productSlug.trim().toLowerCase(); 
                        }
                      
                    });
                    if (p){
                        res = p;
                     
                        return res;
                    }
               });
            }
            return res;
        },
    },
    methods:{
        show(){
            if (this.product.images[0]){
                let url = this.product.images[this.selectedImage].url;
                let image = document.createElement('img');
                image.setAttribute('src',url);
                swal({
                    content:image,
                });
            }else{
                    var content = document.createElement("img");
                    $(content).attr('src','/storage/images/app/no-photo.png');
                    content.style.width = '100%';
                    swal({content : content});
            }
        }
    }
}
</script>


<style scope>
    .fa,.fas{
        font-size: 1.5rem;
    }
</style>