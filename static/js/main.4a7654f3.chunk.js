(this["webpackJsonpjul-on-sale-react"]=this["webpackJsonpjul-on-sale-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=(n(14),n(2)),o=n(3),u=n(4),l=n(8),h=n(6),d=n(5),j=(n(15),n(0)),b=["January","February","March","April","May","June","July","August","September","October","November","December"],p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={date:new Date},e}return Object(u.a)(n,[{key:"formatDate",value:function(){return"For the day of "+b[this.state.date.getMonth()]+" "+this.state.date.getDate()+", "+this.state.date.getFullYear()}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"DateHeader",children:Object(j.jsx)("p",{children:this.formatDate()})})}}]),n}(c.a.Component),f=(n(17),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.status?Object(j.jsxs)("div",{className:"loader",children:[Object(j.jsx)("div",{}),Object(j.jsx)("h4",{children:"\u05de\u05d1\u05d9\u05d0 \u05e4\u05e8\u05d9\u05d8\u05d9\u05dd..."})]}):null}}]),n}(c.a.Component)),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={categories:[],isFetchingData:!1},e.fetchData(),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=i.a.findDOMNode(this);this.fetchData(e)}},{key:"fetchData",value:function(e){var t=this;this.setState(Object(s.a)(Object(s.a)({},this.state),{},{isFetching:!0})),fetch("https://jul-on-sale.herokuapp.com/jul").then((function(e){return e.json()})).then((function(n){t.setState(Object(s.a)(Object(s.a)({},t.state),{},{isFetching:!1})),t.props&&t.props.spinnerHandler(),t.buildCategories(e,n.message)})).catch((function(e){t.setState(Object(s.a)(Object(s.a)({},t.state),{},{isFetching:!1})),t.props&&t.props.spinnerHandler()}))}},{key:"buildCategories",value:function(e,t){for(var n=0;n<t.length;n++){var a=t[n],c=document.createElement("div"),r=document.createElement("h3"),i=document.createElement("a"),s=document.createElement("img");r.innerHTML=a.name,s.src="https://github.com/TomerPacific/julOnSale/blob/master/assets/"+a.image+".png?raw=true",s.setAttribute("class","category"),i.href="https://tomerpacific.github.io/julOnSale/categories/"+a.image+"/"+a.image+".html",i.innerHTML="<img src="+s.src+' class="category" alt='+a.name+" title="+a.name+">",c.appendChild(r),c.appendChild(i),c.setAttribute("class","container"),e.appendChild(c)}}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"categories"})}}]),n}(c.a.Component),O=(n(18),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={shouldShowSpinner:!0},e.spinnerHandler=e.spinnerHandler.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"spinnerHandler",value:function(){this.setState(Object(s.a)(Object(s.a)({},this.state),{},{shouldShowSpinner:!1}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:"What's On Sale @ Jul"}),Object(j.jsx)(p,{}),Object(j.jsx)(f,{status:this.state.shouldShowSpinner}),Object(j.jsx)("main",{children:Object(j.jsx)(m,{spinnerHandler:this.spinnerHandler})})]})}}]),n}(c.a.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},g=function(){var e=document.title;window.addEventListener("blur",(function(e){document.title=" \u2764\ufe0f U"})),window.addEventListener("focus",(function(t){document.title=e}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v(),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.4a7654f3.chunk.js.map