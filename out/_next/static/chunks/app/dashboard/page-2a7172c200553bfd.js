(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{715:(e,t,s)=>{Promise.resolve().then(s.bind(s,2483))},6721:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);s(2115);var l=s(676);let a=()=>(0,r.jsx)(l.A,{children:(0,r.jsx)("nav",{className:"flex bg-white overflow-hidden p-8 py-2 fixed inset-x-0 top-0 z-10 shadow-md",children:(0,r.jsx)("header",{className:"text-2xl text-[#6366F1] font-bold cursor-pointer font-serif mx-4",children:"Codex"})})})},6742:(e,t,s)=>{"use strict";s.d(t,{A:()=>v});var r=s(5155),l=s(2115),a=s(6046),i=s(8173),n=s.n(i),o=s(5180),d=s(187),c=s(9793),m=s(8363),u=s(1898),x=s(24),h=s(4932),f=s(8879);let v=e=>{let{onToggle:t}=e,[s,i]=(0,l.useState)(!1),[v,p]=(0,l.useState)(!1),g=(0,a.usePathname)(),b=(0,a.useRouter)(),j=(0,l.useCallback)(async()=>{try{await (0,u.CI)(x.j2),h.oR.success("Logged out successfully!"),b.push("/login")}catch(s){var e;let t=null!==(e=s.message)&&void 0!==e?e:"Error during logout.";h.oR.error(t)}},[b]),w=()=>{let e=!s;i(e),null==t||t(e)};(0,l.useEffect)(()=>{let e=()=>{let e=window.innerWidth<1200;p(e),i(!e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let k=e=>{let{href:t,label:s,Icon:l}=e,a=g===t;return(0,r.jsx)("li",{children:(0,r.jsxs)(n(),{href:t,className:"flex items-center p-2 rounded-lg transition ".concat(a?"bg-indigo-600 text-white":"text-indigo-600 hover:bg-gray-300 hover:text-"),"aria-current":a?"page":void 0,children:[(0,r.jsx)(l,{className:"mr-3 w-6 h-6"}),(0,r.jsx)("span",{children:s})]})})};return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute left-0 px-4 text-indigo-600 hover:bg-indigo-100",children:(0,r.jsx)(o.A,{className:"w-8 h-8 cursor-pointer",onClick:w,"aria-label":"Toggle sidebar"})}),(0,r.jsxs)("aside",{className:"fixed top-0 left-0 w-72 bg-gray-100 min-h-screen flex flex-col transition-transform duration-300 ease-in-out z-50 ".concat(s?"translate-x-0":"-translate-x-full"),children:[(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)(o.A,{className:"w-8 h-8 text-indigo-600 cursor-pointer",onClick:w,"aria-label":"Close sidebar"})}),(0,r.jsxs)("nav",{className:"flex-1 p-6 flex flex-col",children:[(0,r.jsxs)("ul",{className:"space-y-4 text-lg font-medium",children:[(0,r.jsx)(k,{href:"/dashboard",label:"Dashboard",Icon:d.A}),(0,r.jsx)(k,{href:"/books",label:"Books",Icon:c.A})]}),(0,r.jsx)("div",{className:"p-4 border-t border-gray-300 mt-auto",children:(0,r.jsx)(f.A,{title:"Log Out",className:"w-full flex gap-x-4 align-middle items-center text-xl hover:opacity-95",icon:(0,r.jsx)(m.A,{className:"size-8"}),onClick:j})})]})]}),s&&v&&(0,r.jsx)("div",{className:"fixed inset-0 bg-black opacity-25 z-40",onClick:w,"aria-hidden":"true"})]})}},8879:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155);s(2115);let l=e=>{let{title:t,onClick:s,className:l,type:a,icon:i,disabled:n}=e;return(0,r.jsxs)("div",{onClick:s,className:"bg-indigo-600 cursor-pointer text-white flex justify-center py-2 px-4 rounded-xl hover:saturate-200 ".concat(l),children:[i,t,a,n]})}},2667:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155);s(2115);let l=e=>{let{title:t,onClick:s,className:l,icon:a}=e;return(0,r.jsxs)("button",{onClick:s,className:"bg-white border-2 border-[#00b0ff] text-[#00b0ff] flex justify-center py-2 px-4 rounded-full hover:text-white hover:bg-[#00b0ff] ".concat(l),children:[a,t]})}},2018:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);s(2115);var l=s(676);let a=e=>{let{className:t}=e;return(0,r.jsx)(l.A,{children:(0,r.jsx)("div",{className:"flex justify-center items-center h-screen ".concat(t),children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"})})})}},676:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155);s(2115);let l=e=>{let{children:t,className:s}=e;return(0,r.jsx)("div",{className:"max-w-7xl mx-auto md:px-6 ".concat(s),children:t})}},24:(e,t,s)=>{"use strict";s.d(t,{db:()=>o,hJ:()=>d,j2:()=>n});var r=s(9904),l=s(7058),a=s(1898);let i=0===(0,r.Dk)().length?(0,r.Wp)({apiKey:"AIzaSyBkamuXCK7CC8VGNo8dbjvSrwRr9v4f2nI",authDomain:"book-reading-tracker-f73c2.firebaseapp.com",projectId:"book-reading-tracker-f73c2",storageBucket:"book-reading-tracker-f73c2.appspot.com",messagingSenderId:"600665945443",appId:"1:600665945443:web:887b2b2ce94abaf042cf56",measurementId:"G-K7ZGWSF9P1"}):(0,r.Dk)()[0],n=(0,a.xI)(i),o=(0,l.aU)(i),d=new a.HF},2483:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var r=s(5155),l=s(2115),a=s(6046),i=s(6721),n=s(2667),o=s(1898),d=s(8173),c=s.n(d);let m=()=>{let[e,t]=(0,l.useState)("Guest");return(0,l.useEffect)(()=>{let e=(0,o.xI)(),s=(0,o.hg)(e,e=>{if(e){var s;t(e.displayName||(null===(s=e.email)||void 0===s?void 0:s.split("@")[0])||"User")}else t("Guest")});return()=>s()},[]),(0,r.jsxs)("div",{className:"relative p-4 mt-6 md:mt-0 bg-[#d1c4e9] h-full md:h-[350px] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:shadow-xl",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-4 p-6 md:p-12",children:[(0,r.jsxs)("h1",{className:"text-xl md:text-2xl font-semibold flex justify-center",children:[" Hello, ",e,"!"]}),(0,r.jsx)("p",{className:"text-md md:text-xl font-medium flex justify-center",children:" Become a better reader and improve your skills!"}),(0,r.jsx)("p",{className:"text-md md:text-xl font-medium flex justify-center",children:" Click the button below to add a new book"})]}),(0,r.jsx)(c(),{href:"/books",className:"flex justify-center",children:(0,r.jsx)(n.A,{title:"Get Started"})})]})};var u=s(2018);let x=e=>{let{title:t,description:s,className:l,count:a,bookTitles:i,isLoading:n}=e;return(0,r.jsxs)("div",{className:"relative bg-[#f8bbd0] p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:ring-1 ring-indigo-500 hover:shadow-xl ".concat(l),children:[(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsxs)("h1",{className:"text-md md:text-xl font-semibold",children:[t,(0,r.jsx)("p",{className:"text-blue-500",children:a})]})}),(0,r.jsx)("div",{className:"flex items-center p-4",children:n?(0,r.jsx)(u.A,{className:"!h-full !w-full"}):i.length>0?(0,r.jsx)("ul",{className:"list-disc pl-4",children:i.map((e,t)=>(0,r.jsx)("li",{className:"text-md md:text-md font-medium",children:e},t))}):(0,r.jsx)("p",{className:"text-md md:text-xl font-medium",children:s})})]})},h=l.forwardRef(function(e,t){let{title:s,titleId:r,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),s?l.createElement("title",{id:r},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});var f=s(676),v=s(24),p=s(7058);let g=()=>{let[e,t]=(0,l.useState)(!0),[s,a]=(0,l.useState)({pending:0,active:0,completed:0}),[i,n]=(0,l.useState)({pending:[],active:[],completed:[]}),o=async()=>{try{var e;let s=(0,p.rJ)(v.db,"books"),r=null===(e=v.j2.currentUser)||void 0===e?void 0:e.uid;if(!r)throw Error("User is not authenticated.");let l=(0,p.P)(s,(0,p._M)("userId","==",r)),i=(await (0,p.GG)(l)).docs.map(e=>e.data()),o={pending:i.filter(e=>"pending"===e.status.toLowerCase()).length,active:i.filter(e=>"active"===e.status.toLowerCase()).length,completed:i.filter(e=>"completed"===e.status.toLowerCase()).length};a(o),n({pending:i.filter(e=>"pending"===e.status.toLowerCase()).slice(0,3),active:i.filter(e=>"active"===e.status.toLowerCase()).slice(0,3),completed:i.filter(e=>"completed"===e.status.toLowerCase()).slice(0,3)}),t(!1)}catch(e){console.error("Error fetching book count:",e)}};return(0,l.useEffect)(()=>{o()},[]),(0,r.jsx)(f.A,{children:(0,r.jsxs)("div",{className:"items-center p-5 md:p-20 space-y-10 ",children:[(0,r.jsx)(m,{}),(0,r.jsxs)("div",{className:"border rounded-xl shadow-md hover:shadow-xl",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center p-3 mx-3",children:[(0,r.jsx)("h3",{className:"font-medium text-xl",children:"View Books"}),(0,r.jsx)(c(),{href:"/books",children:(0,r.jsx)(h,{className:"w-8 h-8 cursor-pointer"})})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4",children:[(0,r.jsx)(x,{className:"",title:"Pending Books",description:"No pending books yet",count:s.pending,bookTitles:i.pending.map(e=>e.title),isLoading:e}),(0,r.jsx)(x,{className:"!bg-[#bbdefb]",title:"Active Books",description:"No active books yet",count:s.active,bookTitles:i.active.map(e=>e.title),isLoading:e}),(0,r.jsx)(x,{className:"!bg-[#64ffda] col-span-1 md:col-span-2 lg:col-span-1",title:"Completed Books",description:"No completed books yet",count:s.completed,bookTitles:i.completed.map(e=>e.title),isLoading:e})]})]})]})})};var b=s(6742);let j=()=>{let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{t(!(window.innerWidth<1200))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)("div",{className:"min-h-screen overflow-hidden",children:[(0,r.jsx)(i.A,{}),(0,r.jsxs)("div",{className:"flex pt-14",children:[(0,r.jsx)(b.A,{onToggle:e=>{t(e)}}),(0,r.jsx)("div",{className:"transition-all duration-300 ".concat(e?"lg:ml-[344px]":"lg:ml-0"," flex-1"),children:(0,r.jsx)(g,{})})]})]})},w=()=>{var e,t;let[s,i]=(0,l.useState)(!0),n=(0,a.useRouter)();return(console.log(null===(e=v.j2.currentUser)||void 0===e?void 0:e.email),console.log(null===(t=v.j2.currentUser)||void 0===t?void 0:t.uid),(0,l.useEffect)(()=>{let e=(0,o.hg)(v.j2,e=>{e?i(!1):n.push("/login")});return()=>e()},[n]),s)?(0,r.jsx)(u.A,{}):(0,r.jsx)("div",{children:(0,r.jsx)(j,{})})}},8363:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(2115);let l=r.forwardRef(function(e,t){let{title:s,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),s?r.createElement("title",{id:l},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"}))})},5180:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(2115);let l=r.forwardRef(function(e,t){let{title:s,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),s?r.createElement("title",{id:l},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"}))})},9793:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(2115);let l=r.forwardRef(function(e,t){let{title:s,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),s?r.createElement("title",{id:l},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"}))})},187:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(2115);let l=r.forwardRef(function(e,t){let{title:s,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),s?r.createElement("title",{id:l},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))})}},e=>{var t=t=>e(e.s=t);e.O(0,[992,697,173,551,898,441,517,358],()=>t(715)),_N_E=e.O()}]);