webpackJsonp([2],{"4yvE":function(t,e,a){var s=a("VU/8")(a("xlkS"),a("t9P9"),!1,null,null,null);t.exports=s.exports},"Sm+h":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 row mt-2"},[a("div",{staticClass:"col-6 col-lg-3 m-0 p-0"},[a("button",{staticClass:"btn btn-block ",class:{"btn-outline-warning":"pendiente"!=t.status,"btn-warning":"pendiente"==t.status},on:{click:function(e){t.changestatus("pendiente")}}},[a("span",{staticClass:"far fa-clock"}),t._v("\n                    Pendientes\n                ")])]),t._v(" "),a("div",{staticClass:"col-6 col-lg-3 m-0 p-0"},[a("button",{staticClass:"btn btn-block",class:{"btn-outline-success":"pagado"!=t.status,"btn-success":"pagado"==t.status},on:{click:function(e){t.changestatus("pagado")}}},[a("span",{staticClass:"fa fa-dollar-sign"}),t._v("\n                    Pagadas\n                ")])]),t._v(" "),a("div",{staticClass:"col-6 col-lg-3 m-0 p-0"},[a("button",{staticClass:"btn btn-block",class:{"btn-outline-info":"enviado"!=t.status,"btn-info":"enviado"==t.status},on:{click:function(e){t.changestatus("enviado")}}},[a("span",{staticClass:"fa fa-truck"}),t._v("\n                    Enviadas\n                ")])]),t._v(" "),a("div",{staticClass:"col-6 col-lg-3 m-0 p-0"},[a("button",{staticClass:"btn btn-block",class:{"btn-outline-danger":"cancelado"!=t.status,"btn-danger":"cancelado"==t.status},on:{click:function(e){t.changestatus("cancelado")}}},[a("span",{staticClass:"fa fa-times"}),t._v("\n                   Canceladas\n                ")])])])]),t._v(" "),a("div",{staticClass:"col-12 row"},[a("div",{staticClass:"col-12 col-lg-4 table-container"},[a("table",{staticClass:"table table-striped table-hover"},[t._m(0),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{colspan:"3"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"text",placeholder:"BUSCAR"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})])]),t._v(" "),t._l(t.filteredOrders,function(e){return a("tr",{key:"order"+e.id,class:{"bg-info":e==t.selected},staticStyle:{cursor:"pointer"},on:{click:function(a){t.selected=e}}},[a("td",[t._v(t._s(t._f("datetime")(e.created_at)))]),t._v(" "),a("td",[t._v(t._s(e.client))]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.viewed,expression:"order.viewed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.viewed)?t._i(e.viewed,null)>-1:e.viewed},on:{change:[function(a){var s=e.viewed,r=a.target,n=!!r.checked;if(Array.isArray(s)){var i=t._i(s,null);r.checked?i<0&&t.$set(e,"viewed",s.concat([null])):i>-1&&t.$set(e,"viewed",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(e,"viewed",n)},function(a){t.update(e)}]}})])])})],2)])]),t._v(" "),a("div",{staticClass:"col-12 col-lg-8 bg-white"},[t.selected?a("app-order",{attrs:{order:t.selected},on:{statusChanged:t.statusChanged}}):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Fecha")]),this._v(" "),e("th",[this._v("Cliente")]),this._v(" "),e("th",[this._v("Visto")])])}]}},Z93Y:function(t,e,a){var s=a("VU/8")(a("ovFz"),a("Sm+h"),!1,function(t){a("mvfn")},"data-v-7edd7601",null);t.exports=s.exports},b6Ny:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"input[type=checkbox][data-v-7edd7601]{height:20px;width:20px}.cursor-pointer[data-v-7edd7601]{cursor:pointer}.table-container[data-v-7edd7601]{height:85vh;max-width:350px;white-space:normal;word-wrap:break-word;scroll-behavior:auto;overflow-x:hidden;overflow-y:auto}.table-container td[data-v-7edd7601],.table-container th[data-v-7edd7601]{max-width:130px}",""])},mvfn:function(t,e,a){var s=a("b6Ny");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("550c7c10",s,!0,{})},ovFz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4yvE"),r=a.n(s);e.default={components:{appOrder:r.a},data:function(){return{searchTerm:"",orders:[],status:"pendiente",filtered:[],selected:null}},methods:{update:function(t){t.viewed?t.viewed=1:t.viewed=0;var e={order:t.id,field:"viewed",value:t.viewed};this.$http.put("/admin/order",e)},statusChanged:function(t){this.status=t.status},changestatus:function(t){this.status=t,this.selected=null}},computed:{filteredOrders:function(){var t=this,e=this.orders.filter(function(e){return e.status==t.status});return t.searchTerm.trim().length>2&&(e=e.filter(function(e){var a=t.searchTerm.trim().toLowerCase(),s="";e.client&&(s=e.client.trim().toLowerCase());var r="";return e.email&&(r=e.email.trim().toLowerCase()),s.indexOf(a)>-1||r.indexOf(a)>-1})),e=(e=_.sortBy(e,"created_at")).reverse()}},created:function(){var t=this;this.$http.get("/admin/getOrders").then(function(e){t.orders=e.data})},filters:{datetime:function(t){return moment(t).format("DD/MM/YYYY H:mm")}}}},t9P9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border border-primary p-3 mt-3"},[a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"font-weight-bold text-primary"},[t._v("Fecha: "+t._s(t._f("datetime")(t.order.created_at))+" ")]),t._v(" "),a("br")]),t._v(" "),a("div",{staticClass:"col-12"},[t.order.seller?a("span",{staticClass:"font-weight-bold text-primary"},[t._v("Vendedor: "+t._s(t.order.seller)+" ")]):t._e()]),t._v(" "),a("div",{staticClass:"col-12"},[t.order.message?a("span",{staticClass:"font-weight-bold text-primary mt-2"},[t._v('Mensaje adjunto: " '+t._s(t.order.message)+' " ')]):t._e()])]),t._v(" "),a("table",{staticClass:"table table-striped table-bordered mt-3"},[t._m(0),t._v(" "),a("tbody",t._l(t.order.order_items,function(e){return a("tr",{key:"op"+e.product_id},[a("td",[t._v(" "+t._s(e.code)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.name)+" ")]),t._v(" "),a("td",[t._v(" $"+t._s(t._f("price")(e.price))+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.qty)+" ")]),t._v(" "),a("td",[t._v(" $"+t._s(t._f("price")(e.qty*e.price))+" ")])])})),t._v(" "),a("tfoot",[a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{color:"blue"}},[t._v("TOTAL")]),t._v(" "),a("td",{staticStyle:{color:"blue"}},[t._v(" $"+t._s(t._f("price")(t.total))+" ")])])])])]),t._v(" "),a("div",[a("ul",[t.order.client?a("li",[t._v("Nombre del cliente: "+t._s(t.order.client)+" ")]):t._e(),t._v(" "),t.order.phone?a("li",[t._v("Telefono: "+t._s(t.order.phone)+" ")]):t._e(),t._v(" "),t.order.email?a("li",[t._v("Email: "+t._s(t.order.email)+" ")]):t._e(),t._v(" "),t.order.message?a("li",[t._v("Mensaje adjunto: "+t._s(t.order.message)+" ")]):t._e()])]),t._v(" "),t.order.shipping?a("div",[a("h4",[t._v("Datos de envío")]),t._v(" "),a("ul",[t.city?a("li",[t._v("  Provincia: "+t._s(t.city.state.name)+" ")]):t._e(),t._v(" "),t.city?a("li",[t._v(" Ciudad: "+t._s(t.city.name)+" ")]):t._e(),t._v(" "),a("li",[t._v(" CP: "+t._s(t.order.cp)+"  ")]),t._v(" "),a("li",[t._v(" Direccion: "+t._s(t.order.address)+" ")]),t._v(" "),a("li",[t._v("Transporte: "+t._s(t.order.transport)+"  ")])])]):a("div",[t._v("\n                - Retira en local.\n      ")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 offset-lg-9 col-lg-3"},[a("a",{staticClass:"btn btn-block btn-outline-primary",attrs:{href:"/admin/pdf/"+t.order.id,target:"_blank"}},[t._v("\n                Generar PDF\n            ")])])]),t._v(" "),a("div",{staticClass:"row mt-3"},["pagado"==t.order.status?a("div",{staticClass:"col-12 col-lg-4"},[a("button",{staticClass:"btn btn-block btn-outline-info",on:{click:function(e){t.setStatus("enviado")}}},[a("span",{staticClass:"fa fa-truck"}),t._v("\n                Marcar como enviado\n            ")])]):t._e(),t._v(" "),"pagado"!=t.order.status&&"cancelado"!=t.order.status?a("div",{staticClass:"col-12 col-lg-4"},[a("button",{staticClass:"btn btn-block btn-outline-success",on:{click:function(e){t.setStatus("pagado")}}},[a("span",{staticClass:"fa fa-dollar-sign"}),t._v("\n                Marcar como pagado\n            ")])]):t._e(),t._v(" "),"cancelado"!=t.order.status?a("div",{staticClass:"col-12 col-lg-4"},[a("button",{staticClass:"btn btn-block btn-outline-danger",on:{click:function(e){t.setStatus("cancelado")}}},[a("span",{staticClass:"fa fa-times"}),t._v("\n                Marcar como Cancelado\n            ")])]):t._e(),t._v(" "),"pendiente"!=t.order.status&&"enviado"!=t.order.status?a("div",{staticClass:"col-12 col-lg-4"},[a("button",{staticClass:"btn btn-block btn-outline-warning",on:{click:function(e){t.setStatus("pendiente")}}},[a("span",{staticClass:"far fa-clock"}),t._v("\n                Marcar como Pendiente\n            ")])]):t._e()]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("hr"),t._v(" "),a("label",{staticClass:"label"},[t._v("Comentarios")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.order.comments,expression:"order.comments",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.order.comments},on:{change:[function(e){t.$set(t.order,"comments",e.target.value)},t.saveComments]}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Codigo")]),t._v(" "),a("th",[t._v("Producto")]),t._v(" "),a("th",[t._v("Precio")]),t._v(" "),a("th",[t._v("Cantidad")]),t._v(" "),a("th",[t._v("Subtotal")])])])}]}},xlkS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["order"],data:function(){return{city:null}},methods:{saveComments:function(){var t={order:this.order.id,field:"comments",value:this.order.comments};this.$http.put("/admin/order",t)},setStatus:function(t){var e=this;this.order.status=t;var a={order:this.order.id,field:"status",value:t};this.$http.put("/admin/order",a).then(function(t){e.$emit("statusChanged",t.data)})}},computed:{total:function(){var t=0;return this.order.order_items&&this.order.order_items.length>0&&this.order.order_items.forEach(function(e){t+=e.price*e.qty}),t}},filters:{datetime:function(t){return moment(t).format("DD/MM/YYYY H:mm")}},created:function(){var t=this;this.order.shipping&&this.$http.get("/api/city/"+t.order.city_id).then(function(e){t.city=e.data})}}}});