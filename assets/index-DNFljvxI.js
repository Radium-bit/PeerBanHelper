const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dummyChart-X68BoLdA.js","./echarts-cIka2c3l.js","./libs-Cs9lzzqV.js","./index-Bvjrjwb3.js","./arcoDesign-B08Y0ebX.js","./index-DRoH6C0v.css"])))=>i.map(i=>d[i]);
import{u as j,a as G,g as X,b as J,_ as Ve,c as Re,f as _e}from"./index-Bvjrjwb3.js";import{a as g,B as N,ah as q,L as re,al as ve,am as ye,F as Q,an as le,X as be,m as we,S as De,q as Y,a5 as ie,C as F,ao as ke,T as xe,R as Ie,o as Ae,Q as Le,w as Pe,v as Ue}from"./arcoDesign-B08Y0ebX.js";import{u as H,E as K,i as Z,a as me,b as Se,c as ee,d as he,e as fe,f as Ee}from"./echarts-cIka2c3l.js";import{f as I,a6 as $,r as R,a as te,c as L,w as ae,a7 as oe,j as f,s as w,t as s,y as r,a2 as o,v as _,x as h,q as ze,o as Be,I as $e,k as B,F as de,P as ce,A as Oe,n as Me,M as Fe,N as je,p as pe,u as Ne,l as qe,a8 as We}from"./libs-Cs9lzzqV.js";import{I as Ge}from"./index-Chiu03kB.js";async function Xe(p,e=!1){const t=j();await t.serverAvailable;const n=new URLSearchParams({type:"count",field:p,filter:e?"0.01":"0"}),a=new URL(G(t.endpoint,"api/statistic/analysis/field?"+n.toString()),location.href);return fetch(a,{headers:X()}).then(i=>(t.assertResponseLogin(i),i.json()))}async function Je(p,e,t){const n=j();await n.serverAvailable;const a=new URL(G(n.endpoint,"api/chart/geoIpInfo"),location.href),i=p.getTime(),l=e.getTime();return a.searchParams.append("startAt",i.toString()),a.searchParams.append("endAt",l.toString()),a.searchParams.append("bannedOnly",String(t)),fetch(a,{headers:X()}).then(b=>(n.assertResponseLogin(b),b.json()))}async function Qe(p,e,t){const n=j();await n.serverAvailable;const a=new URLSearchParams({startAt:p.getTime().toString(),endAt:e.getTime().toString(),type:t,field:"banAt"}),i=new URL(G(n.endpoint,"api/statistic/analysis/date?"+a.toString()),location.href);return fetch(i,{headers:X()}).then(l=>(n.assertResponseLogin(l),l.json()))}async function Ye(p,e){const t=j();await t.serverAvailable;const n=new URLSearchParams({startAt:p.getTime().toString(),endAt:e.getTime().toString()}),a=new URL(G(t.endpoint,"api/chart/trend?"+n.toString()),location.href);return fetch(a,{headers:X()}).then(i=>(t.assertResponseLogin(i),i.json()))}async function He(p,e){const t=j();await t.serverAvailable;const n=new URLSearchParams({startAt:p.getTime().toString(),endAt:e.getTime().toString()}),a=new URL(G(t.endpoint,"api/chart/traffic?"+n.toString()),location.href);return fetch(a,{headers:X()}).then(i=>(t.assertResponseLogin(i),i.json()))}const Ke=I({__name:"ispPie",setup(p){const{t:e}=$();H([Z,me,Se,ee]);const t=J(),n=R(),a=te({field:"isp",enableThreshold:!0,bannedOnly:!0,range:[g().startOf("day").add(-7,"day").toDate(),new Date]}),i=L(()=>({text:e("page.charts.loading"),color:t.isDark?"rgb(60, 126, 255)":"rgb(22, 93, 255)",textColor:t.isDark?"rgba(255, 255, 255, 0.9)":"rgb(29, 33, 41)",maskColor:t.isDark?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.4)"})),l=R({tooltip:{trigger:"item",appendToBody:!0,formatter:'<p style="word-wrap:break-all"><b>{b}</b></p>  {c} ({d}%)'},legend:{orient:"vertical",left:"right",type:"scroll",right:10,top:20,bottom:20,data:[],textStyle:{overflow:"truncate",width:100},tooltip:{show:!0}},backgroundColor:t.isDark?"rgba(0, 0, 0, 0.0)":void 0,series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]});ae(a,m=>{D(m.range[0],m.range[1],a.bannedOnly)});const{loading:b,run:D,refresh:O}=oe(Je,{defaultParams:[g().startOf("day").add(-7,"day").toDate(),new Date,a.bannedOnly],onSuccess:m=>{if(m.data){const c=m.data[a.field];let d;if(a.enableThreshold){const v=c.reduce((y,C)=>y+C.value,0)*.01;d=c.filter(y=>y.value>=v)}else d=c;l.value.legend.data=d.map(u=>u.key),l.value.series[0].data=d.map(u=>({name:u.key==="N/A"&&a.field==="province"?e("page.charts.data.province.na"):u.key,value:u.value})),l.value.series[0].name=e("page.charts.options.field."+a.field)}},onError:m=>{n.value=m}});return(m,c)=>{const d=N,u=q,v=re,y=ve,C=ye,x=Q,A=le,P=be,U=we,z=De,M=Y,V=ie,E=F;return f(),w(E,{hoverable:"",title:o(e)("page.charts.title.geoip")+(a.bannedOnly?o(e)("page.charts.subtitle.bannedOnly"):"")},{extra:s(()=>[r(V,null,{content:s(()=>[r(M,{model:a},{default:s(()=>[r(x,{field:"field",label:o(e)("page.charts.options.field")},{default:s(()=>[r(C,{modelValue:a.field,"onUpdate:modelValue":c[1]||(c[1]=T=>a.field=T),"trigger-props":{autoFitPopupMinWidth:!0}},{default:s(()=>[r(y,{value:"isp"},{default:s(()=>[_(h(o(e)("page.charts.options.field.isp")),1)]),_:1}),r(y,{value:"province"},{default:s(()=>[_(h(o(e)("page.charts.options.field.province")),1)]),_:1}),r(y,{value:"city"},{default:s(()=>[_(h(o(e)("page.charts.options.field.city")),1)]),_:1}),r(y,{value:"region"},{default:s(()=>[_(h(o(e)("page.charts.options.field.region")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(x,{field:"range",label:o(e)("page.charts.options.days")},{default:s(()=>[r(A,{modelValue:a.range,"onUpdate:modelValue":c[2]||(c[2]=T=>a.range=T),"show-time":"","value-format":"Date",shortcuts:[{label:o(e)("page.charts.options.shortcut.7days"),value:()=>[o(g)().startOf("day").add(-7,"day").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.14days"),value:()=>[o(g)().startOf("day").add(-14,"day").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.30days"),value:()=>[o(g)().startOf("day").add(-30,"day").toDate(),new Date]}]},null,8,["modelValue","shortcuts"])]),_:1},8,["label"]),r(x,{field:"enableThreshold"},{default:s(()=>[r(z,null,{default:s(()=>[r(P,{modelValue:a.enableThreshold,"onUpdate:modelValue":c[3]||(c[3]=T=>a.enableThreshold=T)},null,8,["modelValue"]),r(U,null,{default:s(()=>[_(h(o(e)("page.charts.options.thresold")),1)]),_:1})]),_:1})]),_:1}),r(x,{field:"bannedOnly"},{default:s(()=>[r(z,null,{default:s(()=>[r(P,{modelValue:a.bannedOnly,"onUpdate:modelValue":c[4]||(c[4]=T=>a.bannedOnly=T)},null,8,["modelValue"]),r(U,null,{default:s(()=>[_(h(o(e)("page.charts.options.bannedOnly")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),default:s(()=>[r(v,null,{default:s(()=>[_(h(o(e)("page.charts.options.more")),1)]),_:1})]),_:1})]),default:s(()=>[n.value?(f(),w(u,{key:0,status:"500",title:o(e)("page.charts.error.title"),class:"chart chart-error"},{subtitle:s(()=>[_(h(n.value.message),1)]),extra:s(()=>[r(d,{type:"primary",onClick:c[0]||(c[0]=()=>{n.value=void 0,o(O)()})},{default:s(()=>[_(h(o(e)("page.charts.error.refresh")),1)]),_:1})]),_:1},8,["title"])):(f(),w(o(K),{key:1,class:"chart",option:l.value,loading:o(b),autoresize:"","loading-options":i.value,theme:o(t).isDark?"dark":"light","init-options":{renderer:"svg"}},null,8,["option","loading","loading-options","theme"]))]),_:1},8,["title"])}}});var Ze=Object.defineProperty,et=(p,e,t)=>e in p?Ze(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t,k=(p,e,t)=>et(p,typeof e!="symbol"?e+"":e,t);const se=(p,e)=>{const t=p.__vccOpts||p;for(const[n,a]of e)t[n]=a;return t},tt={},at={class:"cell"};function ot(p,e){return f(),B("span",at,h(""))}const st=se(tt,[["render",ot],["__scopeId","data-v-511ca080"]]),nt=I({__name:"TileView",props:{tile:{}},setup(p){const e=p,{tile:t}=Oe(e),n=L(()=>{var a=["tile"];return a.push("tile"+t.value.value),t.value.mergedInto||a.push("position_"+t.value.row+"_"+t.value.column),t.value.mergedInto&&a.push("merged"),t.value.isNew()&&a.push("new"),t.value.hasMoved()&&(a.push("row_from_"+t.value.fromRow()+"_to_"+t.value.toRow()),a.push("column_from_"+t.value.fromColumn()+"_to_"+t.value.toColumn()),a.push("isMoving")),a.join(" ")});return(a,i)=>(f(),B("span",{class:Me(n.value)},h(o(t).value),3))}}),rt=se(nt,[["__scopeId","data-v-fa56f5f8"]]),lt={class:"overlay"},it={class:"message"},dt=I({__name:"GameEndOverlay",props:{board:{},onrestart:{type:Function}},setup(p){const e=p,{board:t}=Oe(e),n=L(()=>t.value.hasWon()||t.value.hasLost()),a=L(()=>t.value.hasWon()?"Good Job!":t.value.hasLost()?"Game Over":""),i=()=>{e.onrestart&&e.onrestart()};return(l,b)=>Fe((f(),B("div",lt,[pe("p",it,h(a.value),1),pe("button",{class:"tryAgain",onClick:i},"Try again")],512)),[[je,n.value]])}}),ct=se(dt,[["__scopeId","data-v-4b39d1e3"]]),Ce=class Te{constructor(e,t,n){k(this,"value"),k(this,"row"),k(this,"column"),k(this,"oldRow"),k(this,"oldColumn"),k(this,"markForDeletion"),k(this,"mergedInto"),k(this,"id"),this.value=e||0,this.row=t||-1,this.column=n||-1,this.oldRow=-1,this.oldColumn=-1,this.markForDeletion=!1,this.mergedInto=null,this.id=Te.id++}moveTo(e,t){this.oldRow=this.row,this.oldColumn=this.column,this.row=e,this.column=t}isNew(){return this.oldRow===-1&&!this.mergedInto}hasMoved(){return this.fromRow()!==-1&&(this.fromRow()!==this.toRow()||this.fromColumn()!==this.toColumn())||this.mergedInto!==null}fromRow(){return this.mergedInto?this.row:this.oldRow}fromColumn(){return this.mergedInto?this.column:this.oldColumn}toRow(){return this.mergedInto?this.mergedInto.row:this.row}toColumn(){return this.mergedInto?this.mergedInto.column:this.column}};k(Ce,"id",0);let ut=Ce;const W=class S{constructor(){k(this,"tiles"),k(this,"cells"),k(this,"won"),this.tiles=[],this.cells=[];for(let e=0;e<S.size;++e)this.cells[e]=[this.addTile(),this.addTile(),this.addTile(),this.addTile()];this.addRandomTile(),this.setPositions(),this.won=!1}addTile(e){const t=new ut(e);return this.tiles.push(t),t}moveLeft(){let e=!1;for(let t=0;t<S.size;++t){const n=this.cells[t].filter(i=>i.value!=0),a=[];for(let i=0;i<S.size;++i){let l=n.length>0?n.shift():this.addTile();if(n.length>0&&n[0].value===l.value){const b=l;l=this.addTile(l.value),b.mergedInto=l;const D=n.shift();D.mergedInto=l,l.value+=D.value}a[i]=l,this.won=this.won||l.value===2048,e=e||l.value!==this.cells[t][i].value}this.cells[t]=a}return e}setPositions(){this.cells.forEach((e,t)=>{e.forEach((n,a)=>{n.oldRow=n.row,n.oldColumn=n.column,n.row=t,n.column=a,n.markForDeletion=!1})})}addRandomTile(){const e=[];for(let i=0;i<S.size;++i)for(let l=0;l<S.size;++l)this.cells[i][l].value===0&&e.push({r:i,c:l});const t=Math.floor(Math.random()*e.length),n=e[t],a=Math.random()<S.fourProbability?4:2;this.cells[n.r][n.c]=this.addTile(a)}move(e){this.clearOldTiles();for(let n=0;n<e;++n)this.cells=this.rotateLeft(this.cells);const t=this.moveLeft();for(let n=e;n<4;++n)this.cells=this.rotateLeft(this.cells);return t&&this.addRandomTile(),this.setPositions(),this}clearOldTiles(){this.tiles=this.tiles.filter(e=>!e.markForDeletion),this.tiles.forEach(e=>e.markForDeletion=!0)}hasWon(){return this.won}hasLost(){let e=!1;for(let t=0;t<S.size;++t)for(let n=0;n<S.size;++n){e=e||this.cells[t][n].value===0;for(let a=0;a<4;++a){const i=t+S.deltaX[a],l=n+S.deltaY[a];i<0||i>=S.size||l<0||l>=S.size||(e=e||this.cells[t][n].value===this.cells[i][l].value)}}return!e}rotateLeft(e){const t=e.length,n=e[0].length,a=[];for(let i=0;i<t;++i){a.push([]);for(let l=0;l<n;++l)a[i][l]=e[l][n-i-1]}return a}};k(W,"size",4),k(W,"fourProbability",.1),k(W,"deltaX",[-1,0,1,0]),k(W,"deltaY",[0,-1,0,1]);let ge=W;const pt={class:"board",tabIndex:"1"},mt=I({__name:"BoardView",setup(p){const e=R(new ge),t=i=>{if(!e.value.hasWon()&&i.keyCode>=37&&i.keyCode<=40){i.preventDefault();var l=i.keyCode-37;e.value.move(l)}},n=()=>{e.value=new ge};Be(()=>{window.addEventListener("keydown",t)}),$e(()=>{window.removeEventListener("keydown",t)});const a=L(()=>e.value.tiles.filter(i=>i.value!=0));return(i,l)=>(f(),B("div",pt,[(f(!0),B(de,null,ce(e.value.cells,(b,D)=>(f(),B("div",{key:D},[(f(!0),B(de,null,ce(b,(O,m)=>(f(),w(st,{key:m}))),128))]))),128)),(f(!0),B(de,null,ce(a.value,(b,D)=>(f(),w(rt,{tile:b,key:D},null,8,["tile"]))),128)),r(ct,{board:e.value,onrestart:n},null,8,["board"])]))}}),ht=se(mt,[["__scopeId","data-v-dd29ef2e"]]),ft={name:"vue-2048",components:{BoardView:ht}};function _t(p,e,t,n,a,i){const l=ze("BoardView");return f(),w(l,{style:{margin:"0 auto"}})}const ne=se(ft,[["render",_t]]),gt=p=>{p.component(ne.name,ne)};ne.install=gt;const vt={class:"chart"},yt=I({__name:"2048",setup(p){const{t:e}=$();return(t,n)=>{const a=ke,i=xe,l=F;return f(),w(l,{hoverable:"",title:"2048"},{extra:s(()=>[r(i,{content:o(e)("page.charts.tooltip.2048")},{default:s(()=>[r(a)]),_:1},8,["content"])]),default:s(()=>[pe("div",vt,[r(o(ne),{style:{margin:"0 auto"}})])]),_:1})}}}),bt=I({__name:"banLine",setup(p){const{t:e}=$(),t=L(()=>({text:e("page.charts.loading"),color:n.isDark?"rgb(60, 126, 255)":"rgb(22, 93, 255)",textColor:n.isDark?"rgba(255, 255, 255, 0.9)":"rgb(29, 33, 41)",maskColor:n.isDark?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.4)"})),n=J(),a=R();H([Z,he,fe,ee]);const i=c=>{c==="day"?l.range=[g().startOf("day").add(-7,"day").toDate(),new Date]:l.range=[g().startOf("hour").add(-6,"hour").toDate(),new Date]},l=te({timeStep:"day",range:[g().startOf("day").add(-7,"day").toDate(),new Date]}),b=R({xAxis:{type:"time",max:"dataMax"},yAxis:{type:"value"},tooltip:{trigger:"axis"},series:[{data:[],type:"line",name:e("page.charts.line.options.field")}]});ae(l,c=>{O(c.range[0],c.range[1],c.timeStep)});const{loading:D,run:O,refresh:m}=oe(Qe,{defaultParams:[g().startOf("day").add(-7,"day").toDate(),new Date,"day"],onSuccess:c=>{if(c.data){const d=new Map;for(let u=g(l.range[0]);u.isBefore(g(l.range[1]));u=u.add(1,l.timeStep))d.set(u.valueOf(),0);c.data.forEach(u=>{d.set(g(u.timestamp).startOf(l.timeStep).valueOf(),u.count)}),b.value.series[0].data=Array.from(d).sort(([u],[v])=>u-v).map(([u,v])=>[new Date(u),v])}},onError:c=>{a.value=c}});return(c,d)=>{const u=re,v=Ie,y=Ae,C=Q,x=le,A=Y,P=ie,U=N,z=q,M=F;return f(),w(M,{hoverable:"",title:o(e)("page.charts.title.line")},{extra:s(()=>[r(P,null,{content:s(()=>[r(A,{model:l},{default:s(()=>[r(C,{field:"timeStep",label:o(e)("page.charts.options.steps"),"label-col-flex":"100px"},{default:s(()=>[r(y,{modelValue:l.timeStep,"onUpdate:modelValue":d[0]||(d[0]=V=>l.timeStep=V),onChange:d[1]||(d[1]=V=>i(V))},{default:s(()=>[r(v,{value:"day"},{default:s(()=>[_(h(o(e)("page.charts.options.day")),1)]),_:1}),r(v,{value:"hour"},{default:s(()=>[_(h(o(e)("page.charts.options.hour")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(C,{field:"range",label:o(e)("page.charts.options.days"),"label-col-flex":"100px"},{default:s(()=>[r(x,{modelValue:l.range,"onUpdate:modelValue":d[2]||(d[2]=V=>l.range=V),"show-time":"","value-format":"Date",shortcuts:l.timeStep==="day"?[{label:o(e)("page.charts.options.shortcut.7days"),value:()=>[o(g)().startOf("day").add(-7,"day").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.14days"),value:()=>[o(g)().startOf("day").add(-14,"day").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.30days"),value:()=>[o(g)().startOf("day").add(-30,"day").toDate(),new Date]}]:[{label:o(e)("page.charts.options.shortcut.6hours"),value:()=>[o(g)().startOf("hour").add(-6,"hour").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.12hours"),value:()=>[o(g)().startOf("hour").add(-12,"hour").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.24hours"),value:()=>[o(g)().startOf("hour").add(-24,"hour").toDate(),new Date]}]},null,8,["modelValue","shortcuts"])]),_:1},8,["label"])]),_:1},8,["model"])]),default:s(()=>[r(u,null,{default:s(()=>[_(h(o(e)("page.charts.options.more")),1)]),_:1})]),_:1})]),default:s(()=>[a.value?(f(),w(z,{key:0,status:"500",title:o(e)("page.charts.error.title"),class:"chart chart-error"},{subtitle:s(()=>[_(h(a.value.message),1)]),extra:s(()=>[r(U,{type:"primary",onClick:d[3]||(d[3]=()=>{a.value=void 0,o(m)()})},{default:s(()=>[_(h(o(e)("page.charts.error.refresh")),1)]),_:1})]),_:1},8,["title"])):(f(),w(o(K),{key:1,class:"chart",option:b.value,loading:o(D),"loading-options":t.value,theme:"ovilia-green",autoresize:"","init-options":{renderer:"svg"}},null,8,["option","loading","loading-options"]))]),_:1},8,["title"])}}}),wt=I({__name:"fieldPie",setup(p){const{t:e}=$();H([Z,me,Se,ee]);const t=J(),n=te({field:"peerId",enableThreshold:!0,mergeSameVersion:!1}),a=L(()=>({text:e("page.charts.loading"),color:t.isDark?"rgb(60, 126, 255)":"rgb(22, 93, 255)",textColor:t.isDark?"rgba(255, 255, 255, 0.9)":"rgb(29, 33, 41)",maskColor:t.isDark?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.4)"})),i=R(),l=R({tooltip:{trigger:"item",appendToBody:!0,formatter:'<p style="word-wrap:break-all"><b>{b}</b></p>  {c} ({d}%)'},legend:{orient:"vertical",left:"right",type:"scroll",right:10,top:20,bottom:20,data:[],textStyle:{overflow:"truncate",width:100},tooltip:{show:!0}},backgroundColor:t.isDark?"rgba(0, 0, 0, 0.0)":void 0,series:[{name:e("page.charts.options.field."+n.field),type:"pie",radius:"55%",center:["50%","60%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]});ae(n,m=>{D(m.field,m.enableThreshold)});const{loading:b,run:D,refresh:O}=oe(Xe,{defaultParams:["peerId",!0],onSuccess:m=>{if(m.data){const c=m.data.map(d=>(d.data===""&&(d.data=e("page.charts.options.field.empty")),d));if(n.mergeSameVersion&&n.field==="peerId"){const d=new Map;c.forEach(u=>{let v=u.data;const y=v.match(/^([-]?[a-zA-z]+)[0-9]+.*/);y&&(y==null?void 0:y.length)>=2&&(v=y[1]+"*"),d.has(v)?d.set(v,d.get(v)+u.count):d.set(v,u.count)}),l.value.legend.data=[],l.value.series[0].data=[],Array.from(d).forEach(([u,v])=>{l.value.legend.data.push(u),l.value.series[0].data.push({name:u,value:v})})}else l.value.legend.data=c.map(d=>d.data),l.value.series[0].data=c.map(d=>({name:d.data,value:d.count}))}},onError:m=>{i.value=m}});return(m,c)=>{const d=N,u=q,v=re,y=ve,C=ye,x=Q,A=be,P=we,U=De,z=Y,M=ie,V=F;return f(),w(V,{hoverable:"",title:o(e)("page.charts.options.field."+n.field)},{extra:s(()=>[r(M,null,{content:s(()=>[r(z,{model:n,style:{width:"25vh"}},{default:s(()=>[r(x,{field:"field",label:o(e)("page.charts.options.field")},{default:s(()=>[r(C,{modelValue:n.field,"onUpdate:modelValue":c[1]||(c[1]=E=>n.field=E),"trigger-props":{autoFitPopupMinWidth:!0}},{default:s(()=>[r(y,{value:"peerId"},{default:s(()=>[_(h(o(e)("page.charts.options.field.peerId")),1)]),_:1}),r(y,{value:"torrentName"},{default:s(()=>[_(h(o(e)("page.charts.options.field.torrentName")),1)]),_:1}),r(y,{value:"module"},{default:s(()=>[_(h(o(e)("page.charts.options.field.module")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(x,{field:"enableThreshold"},{default:s(()=>[r(U,null,{default:s(()=>[r(A,{modelValue:n.enableThreshold,"onUpdate:modelValue":c[2]||(c[2]=E=>n.enableThreshold=E)},null,8,["modelValue"]),r(P,null,{default:s(()=>[_(h(o(e)("page.charts.options.thresold")),1)]),_:1})]),_:1})]),_:1}),n.field==="peerId"?(f(),w(x,{key:0,field:"mergeSameVersion"},{default:s(()=>[r(U,null,{default:s(()=>[r(A,{modelValue:n.mergeSameVersion,"onUpdate:modelValue":c[3]||(c[3]=E=>n.mergeSameVersion=E)},null,8,["modelValue"]),r(P,null,{default:s(()=>[_(h(o(e)("page.charts.options.mergeSame")),1)]),_:1})]),_:1})]),_:1})):Ne("",!0)]),_:1},8,["model"])]),default:s(()=>[r(v,null,{default:s(()=>[_(h(o(e)("page.charts.options.more")),1)]),_:1})]),_:1})]),default:s(()=>[i.value?(f(),w(u,{key:0,status:"500",title:o(e)("page.charts.error.title"),class:"chart chart-error"},{subtitle:s(()=>[_(h(i.value.message),1)]),extra:s(()=>[r(d,{type:"primary",onClick:c[0]||(c[0]=()=>{i.value=void 0,o(O)()})},{default:s(()=>[_(h(o(e)("page.charts.error.refresh")),1)]),_:1})]),_:1},8,["title"])):(f(),w(o(K),{key:1,class:"chart",option:l.value,loading:o(b),autoresize:"","loading-options":a.value,theme:o(t).isDark?"dark":"light","init-options":{renderer:"svg"}},null,8,["option","loading","loading-options","theme"]))]),_:1},8,["title"])}}}),Dt=I({__name:"plusWarpper",props:{title:{}},setup(p){const e=We(()=>Ve(()=>import("./dummyChart-X68BoLdA.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),{t}=$(),n=j(),a=L(()=>n.plusStatus),i=()=>{n.emmitter.emit("open-plus-modal")};return(l,b)=>{var d;const D=Ge,O=N,m=q,c=F;return(d=a.value)!=null&&d.activated?qe(l.$slots,"default",{key:0},void 0,!0):(f(),w(c,{key:1,hoverable:"",title:l.title},{default:s(()=>[r(m,{class:"overlay",status:"warning",title:o(t)("page.charts.locked")},{icon:s(()=>[r(D)]),subtitle:s(()=>[_(h(o(t)("page.charts.locked.tips")),1)]),extra:s(()=>[r(O,{type:"primary",onClick:i},{default:s(()=>[_(h(o(t)("page.charts.locked.active")),1)]),_:1})]),_:1},8,["title"]),r(o(e))]),_:1},8,["title"]))}}}),ue=Re(Dt,[["__scopeId","data-v-fa9c84e8"]]),kt=I({__name:"traffic",setup(p){H([Z,me,Ee,fe,he,ee]);const e=te({range:[g().startOf("day").add(-7,"day").toDate(),new Date]}),t=J(),n=L(()=>({text:a("page.charts.loading"),color:t.isDark?"rgb(60, 126, 255)":"rgb(22, 93, 255)",textColor:t.isDark?"rgba(255, 255, 255, 0.9)":"rgb(29, 33, 41)",maskColor:t.isDark?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.4)"})),{t:a,d:i}=$(),l=R(),b=R({tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(d){return i(d[0].data[0],"short")+":<br/>"+d.map(u=>`${u.marker} ${u.seriesName}: ${_e(u.data[1])}`).join("<br>")}},legend:{data:[a("page.charts.traffic.options.download"),a("page.charts.traffic.options.upload")]},xAxis:{type:"time",max:"dataMax",min:"dataMin",minInterval:3600*24*1e3},yAxis:{type:"value",axisLabel:{formatter:d=>_e(d)}},series:[{name:a("page.charts.traffic.options.download"),type:"line",emphasis:{focus:"series"},data:[]},{name:a("page.charts.traffic.options.upload"),type:"line",emphasis:{focus:"series"},data:[]}]});ae(e,d=>{O(d.range[0],d.range[1])});const{loading:D,run:O,refresh:m,data:c}=oe(He,{defaultParams:[g().startOf("day").add(-7,"day").toDate(),new Date],onSuccess:d=>{d.data&&(b.value.series[0].data=d.data.map(u=>[new Date(u.timestamp),u.dataOverallDownloaded]),b.value.series[1].data=d.data.map(u=>[new Date(u.timestamp),u.dataOverallUploaded]))},onError:d=>{l.value=d}});return(d,u)=>{const v=re,y=le,C=Q,x=Y,A=ke,P=xe,U=ie,z=N,M=q,V=Le,E=F;return f(),w(E,{hoverable:"",title:o(a)("page.charts.title.traffic")},{extra:s(()=>[r(U,null,{content:s(()=>[r(x,{model:e},{default:s(()=>[r(C,{field:"range",label:o(a)("page.charts.options.days"),"label-col-flex":"100px"},{default:s(()=>[r(y,{modelValue:e.range,"onUpdate:modelValue":u[0]||(u[0]=T=>e.range=T),"show-time":"","value-format":"Date",shortcuts:[{label:o(a)("page.charts.options.shortcut.7days"),value:()=>[o(g)().startOf("day").add(-7,"day").toDate(),new Date]},{label:o(a)("page.charts.options.shortcut.14days"),value:()=>[o(g)().startOf("day").add(-14,"day").toDate(),new Date]},{label:o(a)("page.charts.options.shortcut.30days"),value:()=>[o(g)().startOf("day").add(-30,"day").toDate(),new Date]}]},null,8,["modelValue","shortcuts"])]),_:1},8,["label"])]),_:1},8,["model"])]),default:s(()=>[r(v,null,{default:s(()=>[_(h(o(a)("page.charts.options.more")),1)]),_:1}),r(P,{content:o(a)("page.charts.tooltip.traffic")},{default:s(()=>[r(A)]),_:1},8,["content"])]),_:1})]),default:s(()=>{var T;return[l.value?(f(),w(M,{key:0,status:"500",title:o(a)("page.charts.error.title"),class:"chart chart-error"},{subtitle:s(()=>[_(h(l.value.message),1)]),extra:s(()=>[r(z,{type:"primary",onClick:u[1]||(u[1]=()=>{l.value=void 0,o(m)()})},{default:s(()=>[_(h(o(a)("page.charts.error.refresh")),1)]),_:1})]),_:1},8,["title"])):(T=o(c))!=null&&T.data&&!o(D)?(f(),w(V,{key:1,class:"chart",style:{"align-items":"center",display:"flex","justify-content":"center","flex-direction":"column"}})):(f(),w(o(K),{key:2,class:"chart",option:b.value,loading:o(D),"loading-options":n.value,theme:"ovilia-green",autoresize:"","init-options":{renderer:"svg"}},null,8,["option","loading","loading-options"]))]}),_:1},8,["title"])}}}),xt=I({__name:"trends",setup(p){H([fe,Z,he,ee]);const{t:e}=$(),t=te({range:[g().startOf("day").add(-7,"day").toDate(),new Date]}),n=R(),a=J(),i=L(()=>({text:e("page.charts.loading"),color:a.isDark?"rgb(60, 126, 255)":"rgb(22, 93, 255)",textColor:a.isDark?"rgba(255, 255, 255, 0.9)":"rgb(29, 33, 41)",maskColor:a.isDark?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.4)"})),l=R({xAxis:{type:"time",max:"dataMax"},yAxis:{type:"value"},tooltip:{trigger:"axis"},series:[{data:[],type:"line",color:"#A5A051",areaStyle:{color:"#A5A051"},name:e("page.charts.trends.options.peers")},{data:[],type:"line",color:"#DB4D6D",areaStyle:{color:"#DB4D6D"},name:e("page.charts.trends.options.bans")}]});ae(t,m=>{D(m.range[0],m.range[1])});const{loading:b,run:D,refresh:O}=oe(Ye,{defaultParams:[g().startOf("day").add(-7,"day").toDate(),new Date],onSuccess:m=>{m.data&&(l.value.series[0].data=m.data.connectedPeersTrend.sort((c,d)=>c.key-d.key).map(c=>[new Date(c.key),c.value]),l.value.series[1].data=m.data.bannedPeersTrend.sort((c,d)=>c.key-d.key).map(c=>[new Date(c.key),c.value]))},onError:m=>{n.value=m}});return(m,c)=>{const d=le,u=Q,v=Y,y=N,C=q,x=F;return f(),w(x,{hoverable:"",title:o(e)("page.charts.title.trends")},{extra:s(()=>[r(v,{model:t},{default:s(()=>[r(u,{field:"range",label:o(e)("page.charts.options.days"),style:{"margin-bottom":"0"}},{default:s(()=>[r(d,{modelValue:t.range,"onUpdate:modelValue":c[0]||(c[0]=A=>t.range=A),"value-format":"Date",style:{width:"275px"},shortcuts:[{label:o(e)("page.charts.options.shortcut.7days"),value:()=>[o(g)().startOf("day").add(-7,"day").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.14days"),value:()=>[o(g)().startOf("day").add(-14,"day").toDate(),new Date]},{label:o(e)("page.charts.options.shortcut.30days"),value:()=>[o(g)().startOf("day").add(-30,"day").toDate(),new Date]}]},null,8,["modelValue","shortcuts"])]),_:1},8,["label"])]),_:1},8,["model"])]),default:s(()=>[n.value?(f(),w(C,{key:0,status:"500",title:o(e)("page.charts.error.title"),class:"chart chart-error"},{subtitle:s(()=>[_(h(n.value.message),1)]),extra:s(()=>[r(y,{type:"primary",onClick:c[1]||(c[1]=()=>{n.value=void 0,o(O)()})},{default:s(()=>[_(h(o(e)("page.charts.error.refresh")),1)]),_:1})]),_:1},8,["title"])):(f(),w(o(K),{key:1,class:"chart",option:l.value,loading:o(b),"loading-options":i.value,theme:"ovilia-green",autoresize:"","init-options":{renderer:"svg"}},null,8,["option","loading","loading-options"]))]),_:1},8,["title"])}}}),Rt=I({__name:"index",setup(p){const{t:e}=$();return(t,n)=>{const a=Ue,i=Pe;return f(),w(i,{justify:"center",align:"stretch",wrap:!0,gutter:[{xs:12,sm:12,md:12,lg:12,xl:24},{xs:12,sm:12,md:12,lg:12,xl:24}]},{default:s(()=>[r(a,{xl:12,lg:24,md:24,sm:24,xs:24},{default:s(()=>[r(bt)]),_:1}),r(a,{xl:12,lg:24,md:24,sm:24,xs:24},{default:s(()=>[r(wt)]),_:1}),r(a,{xl:12,lg:24,md:24,sm:24,xs:24},{default:s(()=>[r(ue,{title:o(e)("page.charts.title.geoip")},{default:s(()=>[r(Ke)]),_:1},8,["title"])]),_:1}),r(a,{xl:12,lg:24,md:24,sm:24,xs:24},{default:s(()=>[r(yt)]),_:1}),r(a,{xl:24,lg:24,md:24,sm:24,xs:24},{default:s(()=>[r(ue,{title:o(e)("page.charts.title.trends")},{default:s(()=>[r(xt)]),_:1},8,["title"])]),_:1}),r(a,{xl:24,lg:24,md:24,sm:24,xs:24},{default:s(()=>[r(ue,{title:o(e)("page.charts.title.traffic")},{default:s(()=>[r(kt)]),_:1},8,["title"])]),_:1})]),_:1})}}});export{Rt as default};
