(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var r,c=n(5),a=n(54),i=n.n(a),s=(n(89),n(90),n(14)),o=n(38),l=n(21),u=(n(91),n(6)),d=Object(l.i)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object(u.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(u.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(u.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),j=(n(100),n(17)),b=n(24),p=Object(b.a)([function(e){return e.directory}],(function(e){return e.sections})),O=["id"],m=function(){var e=Object(j.d)(p);return Object(u.jsx)("div",{className:"directory-menu",children:e.map((function(e){var t=e.id,n=Object(o.a)(e,O);return Object(u.jsx)(d,Object(s.a)({},n),t)}))})},f=n(39),h=n(40),x=h.a.div(r||(r=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n \n"]))),v=function(){return Object(u.jsx)(x,{children:Object(u.jsx)(m,{})})},g={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},S=n(0),N=n.n(S),y=n(1),w=n(49);n(140),n(103);w.a.initializeApp({apiKey:"AIzaSyAe9WwAGPRF4jF3vA3JCq0DLmuMfJkQ98o",authDomain:"crwn-db-a8d74.firebaseapp.com",projectId:"crwn-db-a8d74",storageBucket:"crwn-db-a8d74.appspot.com",messagingSenderId:"227376372576",appId:"1:227376372576:web:37643be5c2934b2211dc05",measurementId:"G-42STY466SX"});var E=function(){var e=Object(y.a)(N.a.mark((function e(t,n){var r,c,a,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=C.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(s.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating users",e.t0);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),I=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},_=w.a.auth(),C=w.a.firestore(),T=new w.a.auth.GoogleAuthProvider;T.setCustomParameters({prompt:"select_account"});var k,U,A,G,R=function(){return _.signInWithPopup(T)},L=(w.a,function(){return{type:g.FETCH_COLLECTIONS_START}}),P=function(e){return{type:g.FETCH_COLLECTIONS_SUCCESS,payload:e}},F=function(e){return{type:g.FETCH_COLLECTIONS_FAILURE,payload:e}},H=n(79),q=n.n(H),D=function(e){return e.shop},M=Object(b.a)([D],(function(e){return e.collections})),z=Object(b.a)([M],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),B=q()((function(e){return Object(b.a)([M],(function(t){return t?t[e]:null}))})),W=Object(b.a)([D],(function(e){return e.isFetching})),J=Object(b.a)([D],(function(e){return!!e.collections})),K=h.a.div(k||(k=Object(f.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),X=h.a.div(U||(U=Object(f.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),V=["isLoading"],Q=function(e){return function(t){var n=t.isLoading,r=Object(o.a)(t,V);return n?Object(u.jsx)(K,{children:Object(u.jsx)(X,{})}):Object(u.jsx)(e,Object(s.a)({},r))}},Y=(n(105),n(106),n(107),["children","isGoogleSignIn","inverted"]),$=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,c=Object(o.a)(e,Y);return Object(u.jsx)("button",Object(s.a)(Object(s.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),{},{children:t}))},Z="TOGGEL_CART_HIDDEN",ee="ADD_ITEM",te="REMOVE_ITEM",ne="CLEAR_ITEM_FROM_CART",re="CLEAR_CART",ce=function(){return{type:Z}},ae=function(e){return{type:ee,payload:e}},ie=function(e){var t=e.item,n=t.name,r=t.price,c=t.imageUrl,a=Object(j.c)();return Object(u.jsxs)("div",{className:"collection-item",children:[Object(u.jsx)("div",{className:"image",style:{backgroundImage:'url("'.concat(c,'")')}}),Object(u.jsxs)("div",{className:"collection-footer",children:[Object(u.jsx)("span",{className:"name",children:n}),Object(u.jsx)("span",{className:"price",children:r})]}),Object(u.jsx)($,{onClick:function(){return function(e){return a(ae(e))}(t)},inverted:!0,children:"ADD TO CART"})]})},se=(n(108),function(e){var t=e.title,n=e.items;return Object(u.jsxs)("div",{className:"collection-preview",children:[Object(u.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(u.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(u.jsx)(ie,{item:e},e.id)}))})]})}),oe=["id"],le=function(){var e=Object(j.d)(z);return Object(u.jsx)("div",{className:"collections-overview",children:e.map((function(e){var t=e.id,n=Object(o.a)(e,oe);return Object(u.jsx)(se,Object(s.a)({},n),t)}))})},ue=n(32),de=Object(b.b)({isLoading:W}),je=Object(ue.c)(Object(j.b)(de),Q)(le),be=(n(109),function(){var e=Object(l.h)().categoryId,t=Object(j.d)(B(e)),n=t.title,r=t.items;return Object(u.jsxs)("div",{className:"collection-page",children:[Object(u.jsx)("h2",{className:"title",children:n}),Object(u.jsx)("div",{className:"items",children:r.map((function(e){return Object(u.jsx)(ie,{item:e},e.id)}))})]})}),pe=Object(b.b)({isLoading:function(e){return!J(e)}}),Oe=Object(ue.c)(Object(j.b)(pe),Q)(be),me=function(e){var t=e.match,n=Object(j.c)();return Object(c.useEffect)((function(){n(L())}),[n]),Object(u.jsxs)("div",{className:"shop-page",children:[Object(u.jsx)(l.b,{exact:!0,path:"".concat(t.path),component:je}),Object(u.jsx)(l.b,{path:"".concat(t.path,"/:categoryId"),component:Oe})]})},fe=(n(110),function(e){var t=e.cartItem,n=t.name,r=t.imageUrl,c=t.price,a=t.quantity,i=Object(j.c)(),s=function(e){return i(function(e){return{type:ne,payload:e}}(e))},o=function(e){return i(function(e){return{type:te,payload:e}}(e))};return Object(u.jsxs)("div",{className:"checkout-item",children:[Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("img",{src:r,alt:"item"})}),Object(u.jsx)("span",{className:"name",children:n}),Object(u.jsxs)("span",{className:"quantity",children:[Object(u.jsx)("div",{className:"arrow",onClick:function(){return o(t)},children:"\u276e"}),Object(u.jsx)("span",{className:"value",children:a}),Object(u.jsx)("div",{className:"arrow",onClick:function(){return i(ae(t))},children:"\u276f"})]}),Object(u.jsx)("span",{className:"price",children:c}),Object(u.jsx)("div",{className:"remove-button",onClick:function(){return s(t)},children:"\u2715"})]})}),he=n(80),xe=n.n(he),ve=n(81),ge=n.n(ve),Se=function(e){var t=e.price,n=100*t;return Object(u.jsx)(xe.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){ge()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){console.log("payment successful. ")})).catch((function(e){console.log("payment error:  ",JSON.parse(e)),alert("There was an issue with your payment. Please make sure you use the provided credit card.")}))},stripeKey:"pk_test_51JwXF9DBOkR7O6YgI20IMQNQp8BGSzox2gmhqa62wAYGrvAXcBkNkyKJPvrTrXvAFGqADz5qtB6Ni4iSIu6c5Ji7004FhWICEl"})},Ne=n(27),ye=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Ne.a)(e),[Object(s.a)(Object(s.a)({},t),{},{quantity:1})])},we=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity-1}):e}))},Ee={hidden:!0,cartItems:[]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(s.a)(Object(s.a)({},e),{},{hidden:!e.hidden});case ee:return Object(s.a)(Object(s.a)({},e),{},{cartItems:ye(e.cartItems,t.payload)});case ne:return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case te:return Object(s.a)(Object(s.a)({},e),{},{cartItems:we(e.cartItems,t.payload)});case re:return Object(s.a)(Object(s.a)({},e),{},{cartItems:[]});default:return e}},_e=function(e){return e.cart},Ce=Object(b.a)([_e],(function(e){return e.cartItems})),Te=Object(b.a)([Ce],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ke=Object(b.a)([_e],(function(e){return e.hidden})),Ue=Object(b.a)([Ce],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ae=(n(128),function(){var e=Object(j.d)(Ce),t=Object(j.d)(Ue);return Object(u.jsxs)("div",{className:"checkout-page",children:[Object(u.jsxs)("div",{className:"checkout-header",children:[Object(u.jsx)("div",{className:"header-block",children:Object(u.jsx)("span",{children:"Product"})}),Object(u.jsx)("div",{className:"header-block",children:Object(u.jsx)("span",{children:"Product"})}),Object(u.jsx)("div",{className:"header-block",children:Object(u.jsx)("span",{children:"Description"})}),Object(u.jsx)("div",{className:"header-block",children:Object(u.jsx)("span",{children:"Quantity"})}),Object(u.jsx)("div",{className:"header-block",children:Object(u.jsx)("span",{children:"Price"})}),Object(u.jsx)("div",{className:"header-block",children:Object(u.jsx)("span",{children:"Remove"})})]}),e.map((function(e){return Object(u.jsx)(fe,{ket:e.id,cartItem:e})})),Object(u.jsxs)("div",{className:"total",children:[Object(u.jsxs)("span",{children:["TOTAL: $",t]}),Object(u.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card fro payments*",Object(u.jsx)("br",{}),"4242424242424242 CSV: Any 3 digit Exp: Any future date"]}),Object(u.jsx)(Se,{price:t})]})]})}),Ge=["title","titleId"];function Re(){return Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}function Le(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Pe(e,t){var n=e.title,r=e.titleId,a=Le(e,Ge);return c.createElement("svg",Re({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,A||(A=c.createElement("desc",null,"Created with Sketch.")),G||(G=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Fe,He,qe,De,Me,ze,Be,We,Je,Ke,Xe,Ve,Qe,Ye,$e,Ze=c.forwardRef(Pe),et=(n.p,["title","titleId"]);function tt(){return tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tt.apply(this,arguments)}function nt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function rt(e,t){var n=e.title,r=e.titleId,a=nt(e,et);return c.createElement("svg",tt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Fe||(Fe=c.createElement("g",null)),He||(He=c.createElement("g",null)),qe||(qe=c.createElement("g",null)),De||(De=c.createElement("g",null)),Me||(Me=c.createElement("g",null)),ze||(ze=c.createElement("g",null)),Be||(Be=c.createElement("g",null)),We||(We=c.createElement("g",null)),Je||(Je=c.createElement("g",null)),Ke||(Ke=c.createElement("g",null)),Xe||(Xe=c.createElement("g",null)),Ve||(Ve=c.createElement("g",null)),Qe||(Qe=c.createElement("g",null)),Ye||(Ye=c.createElement("g",null)),$e||($e=c.createElement("g",null)))}var ct,at,it,st,ot=c.forwardRef(rt),lt=(n.p,n(129),function(){var e=Object(j.d)(Te),t=Object(j.c)();return Object(u.jsxs)("div",{className:"cart-icon",onClick:function(){return t(ce())},children:[Object(u.jsx)(ot,{className:"shopping-icon"}),Object(u.jsx)("span",{className:"item-count",children:e})]})}),ut=(n(130),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(u.jsxs)("div",{className:"cart-item",children:[Object(u.jsx)("img",{src:n,alt:"item"}),Object(u.jsxs)("div",{className:"item-details",children:[Object(u.jsx)("span",{className:"name",children:c}),Object(u.jsxs)("span",{className:"price",children:[a," X ",r]})]})]})}),dt=(n(131),function(){var e=Object(j.d)(Ce),t=Object(j.c)(),n=Object(l.g)();return Object(u.jsxs)("div",{className:"cart-dropdown",children:[Object(u.jsx)("div",{className:"cart-items",children:e.length?e.map((function(e){return Object(u.jsx)(ut,{item:e},e.id)})):Object(u.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(u.jsx)($,{onClick:function(){n.push("/checkout"),t(ce())},children:"GO TO CHECKOUT"})]})}),jt=Object(b.a)([function(e){return e.user}],(function(e){return e.currentUser})),bt={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:" CHECK_USER_SESSION:",SIGN_OUT_START:" SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},pt=function(e){return{type:bt.SIGN_IN_FAILURE,payload:e}},Ot=function(e){var t=e.user,n=e.additionalData;return{type:bt.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},mt=n(41),ft=h.a.div(ct||(ct=Object(f.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]))),ht=Object(h.a)(mt.b)(at||(at=Object(f.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]))),xt=h.a.div(it||(it=Object(f.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]))),vt=Object(h.a)(mt.b)(st||(st=Object(f.a)(["\n     padding: 10px 15px;\n    cursor: pointer;\n"]))),gt=function(){var e=Object(j.d)(ke),t=Object(j.d)(jt),n=Object(j.c)();return Object(u.jsxs)(ft,{children:[Object(u.jsx)(ht,{to:"/",children:Object(u.jsx)(Ze,{})}),Object(u.jsxs)(xt,{children:[Object(u.jsx)(vt,{to:"/shop",children:"SHOP"}),Object(u.jsx)(vt,{to:"/shop",children:"CONTACT"}),t?Object(u.jsx)(vt,{as:"div",onClick:function(){return n({type:bt.SIGN_OUT_START})},children:"SIGN OUT"}):Object(u.jsx)(vt,{to:"/signin",children:"SIGN IN"}),Object(u.jsx)(lt,{})]}),e?null:Object(u.jsx)(dt,{})]})},St=(n(132),n(4)),Nt=n(20),yt=(n(133),n(134),["handleChange","label"]),wt=function(e){var t,n=e.handleChange,r=e.label,c=Object(o.a)(e,yt);return Object(u.jsxs)("div",{className:"group",children:[Object(u.jsx)("input",Object(s.a)({className:"form-input",onChange:n},c)),r?Object(u.jsx)("label",{className:"".concat((null===c||void 0===c||null===(t=c.value)||void 0===t?void 0:t.length)?"shrink":""," form-input-label"),children:r}):null]})},Et=function(){var e=Object(j.c)(),t=function(t,n){return e({type:bt.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})},n=Object(c.useState)({email:"",password:""}),r=Object(Nt.a)(n,2),a=r[0],i=r[1],o=a.email,l=a.password,d=function(){var e=Object(y.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(o,l);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.value,r=t.name;i(Object(s.a)(Object(s.a)({},a),{},Object(St.a)({},r,n)))};return Object(u.jsxs)("div",{className:"sign-in",children:[Object(u.jsx)("h2",{children:"I already have an account"}),Object(u.jsx)("span",{children:"Sign in with your email and password"}),Object(u.jsxs)("form",{onSubmit:d,children:[Object(u.jsx)(wt,{name:"email",value:o,handleChange:b,label:"email",required:!0}),Object(u.jsx)(wt,{name:"password",type:"password",value:l,handleChange:b,label:"password",required:!0}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)($,{type:"submit",children:"Sign In"}),Object(u.jsxs)($,{type:"button",onClick:function(){return e({type:bt.GOOGLE_SIGN_IN_START})},isGoogleSignIn:!0,children:["","Sign In with Google",""]})]})]})]})},It=(n(135),function(){var e=Object(j.c)(),t=function(t){return e(function(e){return{type:bt.SIGN_UP_START,payload:e}}(t))},n=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:""}),r=Object(Nt.a)(n,2),a=r[0],i=r[1],o=a.displayName,l=a.email,d=a.password,b=a.confirmPassword,p=function(){var e=Object(y.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),d===b){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:t({email:l,password:d,displayName:o});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.target,n=t.name,r=t.value;i(Object(s.a)(Object(s.a)({},a),{},Object(St.a)({},n,r)))};return Object(u.jsxs)("div",{className:"sign-up",children:[Object(u.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(u.jsx)("span",{children:"Sign up with your email and password"}),Object(u.jsxs)("form",{className:"sign-up-form",onSubmit:p,children:[Object(u.jsx)(wt,{type:"text",name:"displayName",value:o,onChange:O,label:"Display Name",required:!0}),Object(u.jsx)(wt,{type:"email",name:"email",value:l,onChange:O,label:"Email",required:!0}),Object(u.jsx)(wt,{type:"password",name:"password",value:d,onChange:O,label:"Password",required:!0}),Object(u.jsx)(wt,{type:"password",name:"confirmPassword",value:b,onChange:O,label:"Confirm Password",required:!0}),Object(u.jsx)($,{type:"submit",children:"SIGN UP"})]})]})}),_t=function(){return Object(u.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(u.jsx)(Et,{}),Object(u.jsx)(It,{})]})},Ct=function(){var e=Object(j.d)(jt),t=Object(j.c)();return Object(c.useEffect)((function(){t({type:bt.CHECK_USER_SESSION})}),[t]),Object(u.jsxs)("div",{children:[Object(u.jsx)(gt,{}),Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",component:v}),Object(u.jsx)(l.b,{path:"/shop",component:me}),Object(u.jsx)(l.b,{path:"/checkout",component:Ae}),Object(u.jsx)(l.b,{path:"/signin",render:function(){return e?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(_t,{})}})]})]})},Tt=n(60),kt=(n(136),{currentUser:null}),Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case bt.SIGN_IN_SUCCESS:return Object(s.a)(Object(s.a)({},e),{},{currentUser:t.payload,error:null});case bt.SIGN_UP_FAILURE:case bt.SIGN_OUT_FAILURE:case bt.SIGN_IN_FAILURE:return Object(s.a)(Object(s.a)({},e),{},{error:t.payload});case bt.SIGN_OUT_SUCCESS:return Object(s.a)(Object(s.a)({},e),{},{currentUser:null,error:null});default:return e}},At={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Rt={collections:null,isFetching:!1,errorMessage:void 0},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.FETCH_COLLECTIONS_START:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!0});case g.FETCH_COLLECTIONS_SUCCESS:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!1,collections:t.payload});case g.FETCH_COLLECTIONS_FAILURE:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},Pt=n(82),Ft={key:"root",storage:n.n(Pt).a,whitelist:["cart"]},Ht=Object(ue.b)({user:Ut,cart:Ie,directory:Gt,shop:Lt}),qt=Object(Tt.a)(Ft,Ht),Dt=n(84),Mt=n(29),zt=N.a.mark(Jt),Bt=N.a.mark(Kt),Wt=N.a.mark(Xt);function Jt(){var e,t,n;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=C.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(Mt.b)(I,t);case 7:return n=r.sent,r.next=10,Object(Mt.c)(P(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(Mt.c)(F(r.t0.message));case 16:case"end":return r.stop()}}),zt,null,[[0,12]])}function Kt(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(g.FETCH_COLLECTIONS_START,Jt);case 2:case"end":return e.stop()}}),Bt)}function Xt(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.b)(Kt)]);case 2:case"end":return e.stop()}}),Wt)}var Vt=n(23),Qt=N.a.mark(Zt),Yt=N.a.mark(en),$t=N.a.mark(tn);function Zt(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.c)({type:re});case 2:case"end":return e.stop()}}),Qt)}function en(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(bt.SIGN_OUT_SUCCESS,Zt);case 2:case"end":return e.stop()}}),Yt)}function tn(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.b)(en)]);case 2:case"end":return e.stop()}}),$t)}var nn=N.a.mark(mn),rn=N.a.mark(fn),cn=N.a.mark(hn),an=N.a.mark(xn),sn=N.a.mark(vn),on=N.a.mark(gn),ln=N.a.mark(Sn),un=N.a.mark(Nn),dn=N.a.mark(yn),jn=N.a.mark(wn),bn=N.a.mark(En),pn=N.a.mark(In),On=N.a.mark(_n);function mn(e,t){var n,r;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(Vt.b)(E,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(Vt.c)((a=Object(s.a)({id:r.id},r.data()),{type:bt.SIGN_IN_SUCCESS,payload:a}));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(Vt.c)(pt(c.t0));case 15:case"end":return c.stop()}var a}),nn,null,[[0,11]])}function fn(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(bt.GOOGLE_SIGN_IN_START,R);case 2:case"end":return e.stop()}}),rn)}function hn(e){var t,n,r,c,a;return N.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,_.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,mn(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(Vt.c)(pt(i.t0));case 14:case"end":return i.stop()}}),cn,null,[[1,10]])}function xn(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(bt.EMAIL_SIGN_IN_START,hn);case 2:case"end":return e.stop()}}),an)}function vn(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=_.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,mn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Vt.c)(pt(t.t0));case 14:case"end":return t.stop()}}),sn,null,[[0,10]])}function gn(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(bt.CHECK_USER_SESSION,vn);case 2:case"end":return e.stop()}}),on)}function Sn(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.signOut();case 3:return e.next=5,Object(Vt.c)({type:bt.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Vt.c)((t=e.t0,{type:bt.SIGN_OUT_FAILURE,payload:t.message}));case 11:case"end":return e.stop()}var t}),ln,null,[[0,7]])}function Nn(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(bt.SIGN_OUT_START,Sn);case 2:case"end":return e.stop()}}),un)}function yn(e){var t,n,r,c,a,i;return N.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,_.createUserWithEmailAndPassword(n,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(Vt.c)(Ot({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Vt.c)((o=s.t0,{type:bt.SIGN_UP_FAILURE,error:o}));case 14:case"end":return s.stop()}var o}),dn,null,[[1,10]])}function wn(e){var t,n,r;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,mn(n,r);case 3:case"end":return c.stop()}}),jn)}function En(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(bt.SIGN_UP_SUCCESS,wn);case 2:case"end":return e.stop()}}),bn)}function In(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(bt.SIGN_UP_START,yn);case 2:case"end":return e.stop()}}),pn)}function _n(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(fn),Object(Vt.b)(xn),Object(Vt.b)(gn),Object(Vt.b)(Nn),Object(Vt.b)(In),Object(Vt.b)(En)]);case 2:case"end":return e.stop()}}),On)}var Cn=N.a.mark(Tn);function Tn(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.b)(Xt),Object(Mt.b)(_n),Object(Mt.b)(tn)]);case 2:case"end":return e.stop()}}),Cn)}var kn=Object(Dt.a)(),Un=[kn];var An=Object(ue.d)(qt,ue.a.apply(void 0,Un));kn.run(Tn);var Gn=Object(Tt.b)(An),Rn=n(83);i.a.render(Object(u.jsx)(j.a,{store:An,children:Object(u.jsx)(mt.a,{children:Object(u.jsx)(Rn.a,{persistor:Gn,children:Object(u.jsx)(Ct,{})})})}),document.getElementById("root"))},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.9cf19d51.chunk.js.map