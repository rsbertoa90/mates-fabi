<template>
    <div class="containing p-4 ">
        <div class="date-selectors w-100 d-flex">
            <div class="d-flex flex-column">
                <label>Fecha desde</label>
                <v-datepicker v-model="startDate" :lang="es"></v-datepicker>
            </div>
            <div class="d-flex flex-column">
                <label>Fecha hasta</label>
                <v-datepicker v-model="endDate" :lang="es"></v-datepicker>
            </div>
            <div class="d-flex align-items-end font-weight-bold" >
                <div v-if="totalorders" class="ml-4">
                   Pedidos: {{totalorders}}
                </div>
                <div v-if="totalmoney" clasS="ml-4">
                   Total: ${{totalmoney | price}}
                </div>
            </div>
        </div>
        <div class="row w-100">
            <div class="col-6">

                <table class="table table-striped">
                    <thead>
                        <th> Fecha </th>
                        <th> Pedidos</th>
                        <th>Total de la fecha</th>
                    </thead>
                    <tbody>
                        <tr v-for="(d, key) in sortedData" :key="key" style="cursor:pointer" @click="selected=d">
                            <td>
                                {{d.date |date }}
                            </td>
                            <td>{{d.times}}</td>
                            <td>${{d.total | price}}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div class="col-6">
                <div v-if="selected">
                    <detail :orders="selected.detail"></detail>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import detail from './detail';
import Datepicker from 'vuejs-datepicker';
import { es } from 'vuejs-datepicker/dist/locale'
import datamixin from '../../datamixin.js';
export default {
    mixins:['datamixin'],
     components:{
        'v-datepicker':Datepicker,
        'detail':detail,
    },
    data(){
        return{
            selected:null,
            es:es,
            history:null,
            startDate:new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            endDate: new Date(),
            

        }
    },
    watch:{
        super()
        {
            if (!this.super){
                window.location.replace('/');
            }
        }
    },
    mounted(){
        if(!this.$store.orders || this.$store.orders.length < 1){
            this.$store.dispatch('fetchOrders');
        }
    },
    computed:{
        totalorders(){
            let res = 0;
            if (this.tabledata){
                this.tabledata.forEach(item => {
                    res += item.times;
                });
            }
            return res;
        },
        totalmoney(){
            let res = 0;
            if (this.tabledata){
                this.tabledata.forEach(item => {
                    res += item.total;
                });
            }
            return res;
        },
        orders(){
            return this.$store.getters.getOrders.filter(o => {
                return (o.status != 'cancelado');
            });
        },
        sortedData(){
            if(this.tabledata){
            
                const Moment = require('moment')
                const array = this.tabledata;
                const sortedArray  = array.sort((a,b) => new Moment(a.rawdate).format('YYYYMMDD') - new Moment(b.rawdate).format('YYYYMMDD'))
                
               /*  console.log(sortedArray); */
                return sortedArray.reverse();
            }
        },
        tabledata(){
            if (this.orders)
            {
                let startDate= moment(this.startDate)
                let endDate =moment(this.endDate);
               /*  console.log('startdate',startDate);
                console.log('endtdate',endDate);
                 */
                let res = [];
                this.orders.forEach(order => {
                
                 /*    console.log('crudo',order.created_at); */
                    let date = moment(order.created_at);
                   /*  console.log('procesado',date); */
                    if ( moment(order.created_at).isBetween(this.startDate, this.endDate) )
                    {
                    /*     console.log('date in range'); */
                        let isNew = true;
                        res.forEach(o => {
                            if (date.format('YYYYMMDD') == o.date.format('YYYYMMDD'))
                            {
                         /*        console.log('not new'); */
                                isNew =false;
                                o.times++;
                                o.total=o.total+order.total;
                                o.detail.push(order);
                            }
                        });
                        if (isNew){
                          /*   console.log('new'); */
                            res.push({
                                date:date,
                                times:1,
                                total:order.total,
                                detail:[order],
                                rawdate:order.created_at
                            });
                        }
                    }
                });
                return _.orderBy(res,'date','desc');
            }
        }
    },

    
}
</script>

<style lang="scss" scoped>
.containing{
    min-height: 100vh;
    
    width:100vw;
}


</style>

