(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{2892:function(e,t,n){Promise.resolve().then(n.bind(n,2541))},2541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(9268),a=n(2561),o=n(4475),s=n(4273),c=n(1712);let i=(0,a.Ue)((0,o.mW)((e,t)=>({setToken:()=>{let e=c.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,s.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setCekToken:async()=>{try{let n=await (0,s.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(t().setToken())}});return e(e=>({...e,dtTask:n.data.data})),{status:"success",data:n.data}}catch(e){return{status:"error",data:e.response.data}}}})));var u=n(6237),l=n(6008),d=n(6006),f=e=>{let t=(0,l.useRouter)(),[n,a]=(0,d.useState)(""),[o,s]=(0,d.useState)(""),[f,p]=(0,d.useState)(!0),m=async()=>{let e=c.Z.get("token");if(console.log("cek token",e),e){console.log("cek token");let e=await (0,u.Z)();e&&t.push("/admin")}p(!1)};(0,d.useEffect)(()=>{m()},[]);let{setLogin:h}=i(),g=async e=>{e.preventDefault();let r=await h({email:n,password:o}),{status:a,data:s}=r;"success"===a&&(c.Z.set("token",s.token),t.push("/admin"))};return(0,r.jsx)("div",{className:"min-h-screen h-screen",children:f?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsx)("div",{className:"flex h-full lg:w-[80%] justify-center items-center",children:(0,r.jsx)("div",{className:"bg-black px-8 py-4 rounded-lg shadow-lg shadow-secondary",children:(0,r.jsx)("form",{onSubmit:g,children:(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block",htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{onChange:e=>a(e.target.value),type:"email",placeholder:"Email",className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-black"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("label",{className:"block",children:"Password"}),(0,r.jsx)("input",{onChange:e=>s(e.target.value),type:"password",placeholder:"Password",className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-black"})]}),(0,r.jsx)("div",{className:"flex items-baseline justify-between mt-6",children:(0,r.jsx)("button",{className:"px-6 py-2 text-white bg-primary rounded-lg hover:bg-secondary",children:"Login"})})]})})})})})}},4273:function(e,t,n){"use strict";n.d(t,{I8:function(){return o},Sj:function(){return s},_n:function(){return a},hi:function(){return c}});var r=n(4214);let a="https://admin.smarttamalonggehe.my.id",o=r.Z.create({baseURL:"".concat(a,"/auth")}),s=r.Z.create({baseURL:"".concat(a,"/crud")}),c=r.Z.create({baseURL:"".concat(a,"/api")});r.Z.create({baseURL:"".concat(a,"/storage")})},6237:function(e,t,n){"use strict";var r=n(4273),a=n(1712);let o=async()=>{let e=a.Z.get("token");if(!e)return console.log("Token tidak ada"),!1;try{return await (0,r.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(e)}}),!0}catch(e){return a.Z.remove("token"),!1}};t.Z=o},6008:function(e,t,n){e.exports=n(3027)},1712:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return a}});var a=function e(t,n){function a(e,a,o){if("undefined"!=typeof document){"number"==typeof(o=r({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var c in o)o[c]&&(s+="; "+c,!0!==o[c]&&(s+="="+o[c].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+s}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},a=0;a<n.length;a++){var o=n[a].split("="),s=o.slice(1).join("=");try{var c=decodeURIComponent(o[0]);if(r[c]=t.read(s,c),e===c)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){a(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[348,964,667,488,744],function(){return e(e.s=2892)}),_N_E=e.O()}]);