(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_goods_collection-index"],{"0778":function(t,e,i){"use strict";i.r(e);var o=i("c33c"),n=i("e3fd");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("eadb");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"4bff0b6f",null,!1,o["a"],c);e["default"]=s.exports},"2e56":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.collectionGoods[data-v-518ceeb8]{background-color:#fff;border-top:%?1?% solid #eee}.collectionGoods .item[data-v-518ceeb8]{margin-left:%?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #eee;height:%?180?%}.collectionGoods .item .pictrue[data-v-518ceeb8]{width:%?130?%;height:%?130?%}.collectionGoods .item .pictrue uni-image[data-v-518ceeb8]{width:100%;height:100%;border-radius:%?6?%}.collectionGoods .item .text[data-v-518ceeb8]{width:%?535?%;height:%?130?%;font-size:%?28?%;color:#282828}.collectionGoods .item .text .name[data-v-518ceeb8]{width:100%}.collectionGoods .item .text .money[data-v-518ceeb8]{font-size:%?26?%}.collectionGoods .item .text .delete[data-v-518ceeb8]{font-size:%?26?%;color:#282828;width:%?144?%;height:%?46?%;border:1px solid #bbb;border-radius:%?4?%;text-align:center;line-height:%?46?%}.noCommodity[data-v-518ceeb8]{background-color:#fff;padding-top:%?1?%;border-top:0}',""]),t.exports=e},"35cf":function(t,e,i){"use strict";var o=i("4ea4");i("99af"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("ade3")),a=i("a26c"),c=i("2f62"),r=i("6875"),s=o(i("e806")),u=o(i("0778")),d=(0,n.default)({components:{recommend:s.default,home:u.default},data:function(){return{hostProduct:[],loadTitle:"加载更多",loading:!1,loadend:!1,collectProductList:[],limit:8,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,c.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.loadend=!1,this.page=1,this.collectProductList=[],this.get_user_collect_product(),this.get_host_product()):(0,r.toLogin)()},onShow:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.get_user_collect_product()},onReachBottom:function(){this.get_user_collect_product()},methods:{onLoadFun:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.get_user_collect_product(),this.get_host_product()},authColse:function(t){this.isShowAuth=t},get_user_collect_product:function(){var t=this;this.loading||this.loadend||(t.loading=!0,t.loadTitle="",(0,a.getCollectUserList)({page:t.page,limit:t.limit}).then((function(e){var i=e.data,o=i.length<t.limit;t.collectProductList=t.$util.SplitArray(i,t.collectProductList),t.$set(t,"collectProductList",t.collectProductList),t.loadend=o,t.loadTitle=o?"我也是有底线的":"加载更多",t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},delCollection:function(t,e){var i=this;(0,a.collectDel)(t).then((function(t){return i.$util.Tips({title:"取消收藏成功",icon:"success"},(function(){i.collectProductList.splice(e,1),i.$set(i,"collectProductList",i.collectProductList)}))}))},get_host_product:function(){var t=this;t.hotScroll||(0,a.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))}}},"onReachBottom",(function(){this.get_host_product()}));e.default=d},3732:function(t,e,i){var o=i("5a1f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("6a99681e",o,!0,{sourceMap:!1,shadowMode:!1})},"3a05":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend"},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v("热门推荐")]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,o){return i("v-uni-view",{key:o,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒杀")]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍价")]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼团")]):t._e()],1),i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},a=[]},"3f9a":function(t,e,i){"use strict";i("99af"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=n,e.goPage=a;var o=getApp();function n(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))}function a(){return new Promise((function(t){if(0!=o.globalData.isIframe)return!1;t(!0)}))}},"5a1f":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recommend[data-v-70403386]{background-color:#fff}.recommend .title[data-v-70403386]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-70403386]{margin:0 %?28?%}.recommend .title .iconfont[data-v-70403386]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-70403386]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-70403386]{padding:0 %?30?%}.recommend .recommendList .item[data-v-70403386]{width:%?335?%;margin-bottom:%?30?%}.recommend .recommendList .item .pictrue[data-v-70403386]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue uni-image[data-v-70403386]{width:100%;height:100%;border-radius:%?6?%}.recommend .recommendList .item .name[data-v-70403386]{font-size:%?28?%;color:#282828;margin-top:%?20?%}.recommend .recommendList .item .money[data-v-70403386]{font-size:%?20?%;margin-top:%?8?%}.recommend .recommendList .item .money .num[data-v-70403386]{font-size:%?28?%}',""]),t.exports=e},"648f":function(t,e,i){"use strict";i.r(e);var o=i("70bf"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"6cc1":function(t,e,i){"use strict";i.r(e);var o=i("35cf"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"70bf":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("2f62"),n=i("3f9a"),a={computed:(0,o.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(t){(0,n.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=a},"7a1f":function(t,e,i){"use strict";var o=i("3732"),n=i.n(o);n.a},"7dfc":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4bff0b6f]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"90c8":function(t,e,i){var o=i("7dfc");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("df3f3738",o,!0,{sourceMap:!1,shadowMode:!1})},"9cee":function(t,e,i){"use strict";i.r(e);var o=i("df60"),n=i("6cc1");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d3ee");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"518ceeb8",null,!1,o["a"],c);e["default"]=s.exports},a26c:function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=a,e.getProductCode=c,e.collectAdd=r,e.collectDel=s,e.postCartAdd=u,e.getCategoryList=d,e.getProductslist=l,e.getProductHot=f,e.collectAll=v,e.getGroomList=p,e.getCollectUserList=g,e.getReplyList=h,e.getReplyConfig=m,e.getSearchKeyword=b;var n=o(i("66dd"));function a(t){return n.default.get("product/detail/"+t,{},{noAuth:!0})}function c(t){return n.default.get("product/code/"+t,{})}function r(t,e){return n.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function s(t,e){return n.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function u(t){return n.default.post("cart/add",t)}function d(){return n.default.get("category",{},{noAuth:!0})}function l(t){return n.default.get("products",t,{noAuth:!0})}function f(t,e){return n.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function v(t,e){return n.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function p(t,e){return n.default.get("groom/list/"+t,e,{noAuth:!0})}function g(t){return n.default.get("collect/user",t)}function h(t,e){return n.default.get("reply/list/"+t,e)}function m(t){return n.default.get("reply/config/"+t)}function b(){return n.default.get("search/keyword",{},{noAuth:!0})}},c33c:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},a=[]},c5f7:function(t,e,i){var o=i("2e56");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("bfd37c4c",o,!0,{sourceMap:!1,shadowMode:!1})},d3ee:function(t,e,i){"use strict";var o=i("c5f7"),n=i.n(o);n.a},df60:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[t.collectProductList.length?o("v-uni-view",{staticClass:"collectionGoods"},[t._l(t.collectProductList,(function(e,i){return o("v-uni-navigator",{key:i,staticClass:"item acea-row row-between-wrapper",attrs:{url:"/pages/goods_details/index?id="+e.pid,"hover-class":"none"}},[o("v-uni-view",{staticClass:"pictrue"},[o("v-uni-image",{attrs:{src:e.image}})],1),o("v-uni-view",{staticClass:"text acea-row row-column-between"},[o("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),o("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[o("v-uni-view",{staticClass:"money font-color"},[t._v("￥"+t._s(e.price))]),o("v-uni-view",{staticClass:"delete",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.delCollection(e.pid,i)}}},[t._v("删除")])],1)],1)],1)})),o("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[o("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1)],2):!t.collectProductList.length&&t.page>1?o("v-uni-view",{staticClass:"noCommodity"},[o("v-uni-view",{staticClass:"pictrue"},[o("v-uni-image",{attrs:{src:i("e9e2")}})],1),o("recommend",{attrs:{hostProduct:t.hostProduct}})],1):t._e(),o("home")],1)},a=[]},e0c0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("2f62"),n={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,o.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=n},e3fd:function(t,e,i){"use strict";i.r(e);var o=i("e0c0"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},e806:function(t,e,i){"use strict";i.r(e);var o=i("3a05"),n=i("648f");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("7a1f");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"70403386",null,!1,o["a"],c);e["default"]=s.exports},e9e2:function(t,e,i){t.exports=i.p+"static/img/noCollection.46d9f620.png"},eadb:function(t,e,i){"use strict";var o=i("90c8"),n=i.n(o);n.a}}]);