
<template>
<div class="container" v-if="offers.length > 0" >
  <hr>
  <h2 class="mb-4">Ofertas de Mates Fabi</h2>
      <!-- swiper -->
      <swiper :options="swiperOption" v-if="render">
        <swiper-slide  v-for="product in notpausedoffers" :key="product.id" 
                       class="">
            <div class="card slide" itemscope itemtype="https://schema.org/Product">
                <v-lazy-image v-if="product.images[0]" class="card-img card-img-top" 
                      :src="product.images[0].url"
                      :title="product.name"
                      itemprop="image" 
                      alt="Card image cap" />
                  <v-lazy-image v-else src="/storage/images/app/no-image.png" alt="no image" />
                  <div class="card-img-overlay">
                    <span v-if="product.offer" class=" badge bg-focus white-bold"> Oferta! </span>
                  </div>
                <div class="card-body">
                    <h5 class="card-title" itemprop="name"> {{product.name | ucFirst}}  </h5>
                    <h4 v-if="config && !config.hide_prices" class="second">  
                      ${{product.price | price}} 
                      <strike style="font-size:1rem" v-if="product.offer && $store && !$store.getters.getConfig.hide_prices" class="text-secondary"> ${{product.price * 1.67 | price}}</strike> 
                    </h4>
                   <!--  <p style="height:45px" class="card-text crop-text" itemprop="description"> {{product.description}}</p> -->
                    <router-link :to="getSlug(product)" class="btn btn-outline-second"> Ver mas</router-link>
                    <shopButton class="mt-1" :product="product"></shopButton>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  
</div>
</template>

<script>
import shopButton from '../category/product/shop-button.vue';
  export default {
    components:{shopButton},
    data() {
      return {
        render:false,
        swiperOption: {
          slidesPerView: null,
          centeredSlides: false,
          spaceBetween: 5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        
      }
    },
    created(){
        if (this.$mq == 'lg')
        {
            this.swiperOption.slidesPerView = 4;
        } else{
            this.swiperOption.slidesPerView = 1.5;
        }
        this.render=true;
    },
    computed:{
      categories(){
        return this.$store.getters['getCategories'];
      },
      config(){
        return this.$store.getters.getConfig;
      },
      offers(){
        
        return this.$store.getters.getOffers;
        },
        notpausedoffers(){
          if (this.offers)
          {
            return this.offers.filter(prod => {
              return !prod.paused;
            });
          }
        }
    },
    methods: {
       getSlug(product){
            let cat = this.categories.find(c => {
                return product.category_id == c.id;
            } );

            let res = cat.slug + '/' + product.slug;
            res =res.replace('//','/');
            return res;
        },
      appendSlide() {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      },
      prependSlide() {
        this.swiperSlides.unshift(this.swiperSlides[0] - 1)
      },
      popSlide() {
        this.swiperSlides.pop()
      },
      shiftSlide() {
        this.swiperSlides.shift()
      }
    }
  }
</script>

<style scoped>

.card-body{
  text-align: center;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: column;
}

  .badge{
    font-size: 1.2rem;
  }
  .append-buttons {
    text-align: center;
    margin-top: 20px;
  }
  .append-buttons a {
    display: inline-block;
    margin: 0 10px;
  }
  .container{
      width: 100vw;
  }
  .card-img-overlay{
    max-height: 60%;
  }
  .slide{
    height: 501px;
  }
</style>