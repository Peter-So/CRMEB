(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_pay_status-index"],{"14b7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.coupons .title[data-v-bc9c89ce]{margin:%?30?% 0 %?25?% 0}.coupons .title .line[data-v-bc9c89ce]{width:%?70?%;height:1px;background:#dcdcdc}.coupons .title .name[data-v-bc9c89ce]{font-size:%?24?%;color:#999;margin:0 %?10?%}.coupons .list[data-v-bc9c89ce]{padding:0 %?20?%}.coupons .list .item[data-v-bc9c89ce]{margin-bottom:%?20?%;box-shadow:0 2px 10px 0 rgba(0,0,0,.06)}.coupons .list .item .price[data-v-bc9c89ce]{width:%?236?%;height:%?160?%;font-size:%?26?%;color:#fff;font-weight:800}.coupons .list .item .price uni-text[data-v-bc9c89ce]{font-size:%?54?%}.coupons .list .item .text[data-v-bc9c89ce]{width:%?385?%}.coupons .list .item .text .name[data-v-bc9c89ce]{font-size:#282828;font-size:%?30?%}.coupons .list .item .text .priceMin[data-v-bc9c89ce]{font-size:%?24?%;color:#999;margin-top:%?10?%}.coupons .list .item .text .time[data-v-bc9c89ce]{font-size:%?24?%;color:#999;margin-top:%?15?%}.coupons .list .open[data-v-bc9c89ce]{font-size:%?24?%;color:#999;margin-top:%?30?%}.coupons .list .open .iconfont[data-v-bc9c89ce]{font-size:%?25?%;margin:%?5?% 0 0 %?10?%}.payment-status[data-v-bc9c89ce]{background-color:#fff;margin:%?195?% %?30?% 0 %?30?%;border-radius:%?10?%;padding:%?1?% 0 %?28?% 0}.payment-status .icons[data-v-bc9c89ce]{font-size:%?70?%;width:%?140?%;height:%?140?%;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;text-shadow:0 4px 0 hsla(0,0%,100%,.5);border:%?6?% solid #f5f5f5;margin:%?-76?% auto 0 auto;background-color:#999}.payment-status .icons.icon-iconfontguanbi[data-v-bc9c89ce]{text-shadow:0 4px 0 #6c6d6d}.payment-status .iconfont.fail[data-v-bc9c89ce]{text-shadow:0 4px 0 #7a7a7a}.payment-status .status[data-v-bc9c89ce]{font-size:%?32?%;font-weight:700;text-align:center;margin:%?25?% 0 %?37?% 0}.payment-status .wrapper[data-v-bc9c89ce]{border:%?1?% solid #eee;margin:0 %?30?% %?47?% %?30?%;padding:%?35?% 0;border-left:0;border-right:0}.payment-status .wrapper .item[data-v-bc9c89ce]{font-size:%?28?%;color:#282828}.payment-status .wrapper .item ~ .item[data-v-bc9c89ce]{margin-top:%?20?%}.payment-status .wrapper .item .itemCom[data-v-bc9c89ce]{color:#666}.payment-status .returnBnt[data-v-bc9c89ce]{width:%?630?%;height:%?86?%;border-radius:%?50?%;color:#fff;font-size:%?30?%;text-align:center;line-height:%?86?%;margin:0 auto %?20?% auto}',""]),t.exports=e},"1b32":function(t,e,i){"use strict";i.r(e);var n=i("e1f8"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"25b0":function(t,e,i){"use strict";i.r(e);var n=i("31e2"),o=i("1b32");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("56b7");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"bc9c89ce",null,!1,n["a"],s);e["default"]=c.exports},"31e2":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[t.orderLottery&&t.order_pay_info.paid||!t.loading||!t.lotteryLoading?t._e():i("v-uni-view",{staticClass:"payment-status"},[t.order_pay_info.paid||"offline"==t.order_pay_info.pay_type?i("v-uni-view",{staticClass:"iconfont icons icon-duihao2 bg-color"}):i("v-uni-view",{staticClass:"iconfont icons icon-iconfontguanbi"}),"offline"!=t.order_pay_info.pay_type?i("v-uni-view",{staticClass:"status"},[t._v(t._s(t.order_pay_info.paid?"订单支付成功":"订单支付失败"))]):i("v-uni-view",{staticClass:"status"},[t._v("订单创建成功")]),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v("订单编号")]),i("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.orderId))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v("下单时间")]),i("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info._add_time))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v("支付方式")]),i("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info._status._payType||"暂未支付"))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v("支付金额")]),i("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.pay_price))])],1),0==t.order_pay_info.paid&&"offline"!=t.order_pay_info.pay_type?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v("失败原因")]),i("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(2==t.status?"取消支付":t.msg))])],1):t._e()],1),0==t.status?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{formType:"submit","hover-class":"none"}},[t._v("查看订单")])],1):t._e(),0==t.order_pay_info.paid&&1==t.status?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{"hover-class":"none"}},[t._v("重新购买")])],1):t._e(),0==t.order_pay_info.paid&&2==t.status?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{"hover-class":"none"}},[t._v("重新支付")])],1):t._e(),t.order_pay_info.pink_id&&0!=t.order_pay_info.paid&&2!=t.status&&1!=t.status?i("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPink(t.order_pay_info.pink_id)}}},[t._v("邀请好友参团")]):i("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[t._v("返回首页")]),t.$wechat.isWeixin()||t.order_pay_info.paid?t._e():i("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getOrderPayInfo.apply(void 0,arguments)}}},[t._v("刷新支付状态")]),t.couponList.length?i("v-uni-view",{staticClass:"coupons"},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"line"}),i("v-uni-view",{staticClass:"name"},[t._v("赠送优惠券")]),i("v-uni-view",{staticClass:"line"})],1),i("v-uni-view",{staticClass:"list"},[t._l(t.couponList,(function(e,n){return n<2||!t.couponsHidden?i("v-uni-view",{key:n,staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"moneyCon acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"price acea-row row-center-wrapper"},[i("v-uni-view",[t._v("￥"),i("v-uni-text",[t._v(t._s(e.coupon_price))])],1)],1)],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.coupon_title))]),i("v-uni-view",{staticClass:"priceMin"},[t._v("满"+t._s(e.use_min_price)+"元可用")]),i("v-uni-view",{staticClass:"time"},[t._v("有效期:"+t._s(e.add_time?e.add_time+"-":"")+t._s(e.end_time))])],1)],1):t._e()})),t.couponList.length>2?i("v-uni-view",{staticClass:"open acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openTap.apply(void 0,arguments)}}},[t._v(t._s(t.couponsHidden?"展开更多":"关闭展开")),i("v-uni-text",{staticClass:"iconfont",class:1==t.couponsHidden?"icon-xiangxia":"icon-xiangshang"})],1):t._e()],2)],1):t._e()],1),i("lotteryModel",{directives:[{name:"show",rawName:"v-show",value:t.orderLottery&&t.order_pay_info.paid&&t.loading&&t.lotteryLoading,expression:"orderLottery && order_pay_info.paid && loading && lotteryLoading"}],attrs:{options:t.options},on:{orderDetails:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)},lotteryShow:function(e){arguments[0]=e=t.$handleEvent(e),t.getOrderLottery.apply(void 0,arguments)}}})],1)},a=[]},"56b7":function(t,e,i){"use strict";var n=i("fb73"),o=i.n(n);o.a},e1f8:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("1ffd")),a=i("e0d6"),s=(i("9ef3"),i("c6cd")),r=i("2f62"),c=n(i("c83f")),d={components:{lotteryModel:o.default},mixins:[c.default],data:function(){return{loading:!1,lotteryLoading:!1,orderLottery:!1,orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,status:0,msg:"",couponsHidden:!0,couponList:[],options:{}}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getOrderPayInfo()},deep:!0}},onLoad:function(t){if(this.options=t,!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单支付状态"},{tab:3,url:1});this.orderId=t.order_id,this.status=t.status||0,this.msg=t.msg||""},onShow:function(){this.isLogin?this.getOrderPayInfo():(0,s.toLogin)()},methods:{getOrderLottery:function(t){this.orderLottery=t,this.lotteryLoading=!0},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getOrderPayInfo()},getOrderPayInfo:function(){var t=this,e=this;uni.showLoading({title:"正在加载中"}),(0,a.getOrderDetail)(e.orderId).then((function(i){uni.hideLoading(),e.$set(e,"order_pay_info",i.data),uni.setNavigationBarTitle({title:i.data.paid?"支付成功":"未支付"}),t.loading=!0,t.getOrderCoupon()})).catch((function(e){t.loading=!0,uni.hideLoading()}))},getOrderCoupon:function(){var t=this;(0,a.orderCoupon)(t.orderId).then((function(e){t.couponList=e.data}))},goIndex:function(t){uni.switchTab({url:"/pages/index/index"})},goPink:function(t){uni.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+t})},goOrderDetails:function(t){var e=this;uni.navigateTo({url:"/pages/users/order_details/index?order_id="+e.orderId})}}};e.default=d},fb73:function(t,e,i){var n=i("14b7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("0beb67b4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);