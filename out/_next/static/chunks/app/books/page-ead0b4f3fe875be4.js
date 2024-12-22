(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{6789:(e,t,s)=>{Promise.resolve().then(s.bind(s,719))},719:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>B});var r=s(5155),l=s(2115),a=s(6046),d=s(24),i=s(1898),n=s(6721),o=s(6742),c=s(676),x=s(9515),m=s(1046),h=s(2413),u=s(8879),f=s(2667),b=s(7523),g=s(7058),j=s(4932);let p=["Pending","Active","Completed"],v=e=>{let{fetchBooks:t}=e,[s,a]=l.useState(!1),[i,n]=l.useState({title:"",description:"",status:"Pending"}),[o,c]=l.useState(!1),v=(0,g.rJ)(d.db,"books"),w=e=>{let{name:t,value:s}=e.target;n(e=>({...e,[t]:s}))},N=async e=>{var s;e.preventDefault();let r=null===(s=d.j2.currentUser)||void 0===s?void 0:s.uid;if(!r){console.error("No authenticated user found.");return}console.log("User ID:",r);try{await (0,g.gS)(v,{...i,userId:r}),j.oR.success("Book Added Successfully"),n({title:"",description:"",status:"Pending"}),await t(),a(!1),c(!1)}catch(e){j.oR.error("Unable to add Book")}},A={Pending:"bg-[#f8bbd0] text-xs md:text-lg",Active:"bg-[#bbdefb] text-xs md:text-lg",Completed:"bg-[#64ffda] text-xs md:text-lg"};return(0,r.jsxs)(x.bL,{open:o,onOpenChange:c,children:[(0,r.jsx)(x.l9,{children:(0,r.jsx)(u.A,{title:"Add Book",icon:(0,r.jsx)(b.A,{className:"size-3 md:size-6"}),className:"flex items-center gap-x-2 px-4 text-xs md:text-base"})}),(0,r.jsxs)(x.ZL,{children:[(0,r.jsx)(x.hJ,{className:"fixed inset-0 bg-black/50"}),(0,r.jsxs)(x.UC,{className:"fixed top-1/2 left-1/2 w-64 md:w-96 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md",children:[(0,r.jsx)(x.hE,{className:"text-md md:text-xl font-bold",children:"Add Book"}),(0,r.jsxs)("form",{onSubmit:N,className:"space-y-4 mt-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-xs md:text-lg font-medium",children:"Name"}),(0,r.jsx)("input",{type:"text",name:"title",id:"title",value:i.title,onChange:w,required:!0,className:"w-full p-2 mt-1 border rounded hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 text-xs md:text-xl"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("label",{htmlFor:"description-toggle",className:"text-xs md:text-lg font-medium",children:"Description (Optional)"}),(0,r.jsx)(h.dO,{id:"description-toggle",checked:s,onCheckedChange:a,className:"w-12 h-6 bg-gray-200 rounded-full relative flex items-center transition-colors data-[state=checked]:bg-[#6366F1]",children:(0,r.jsx)("span",{className:"block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ".concat(s?"translate-x-6":"translate-x-1")})})]}),s&&(0,r.jsx)("div",{children:(0,r.jsx)("textarea",{name:"description",id:"description",value:i.description,onChange:w,className:"w-full p-2 mt-1 border rounded hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 text-xs md:text-lg"})}),(0,r.jsxs)("div",{className:"py-4",children:[(0,r.jsx)("label",{htmlFor:"status",className:"block text-xs md:text-lg font-medium",children:"Status"}),(0,r.jsxs)(m.bL,{value:i.status,onValueChange:e=>{n(t=>({...t,status:e}))},children:[(0,r.jsxs)(m.l9,{className:"w-full p-2 mt-1 border rounded flex justify-between items-center ".concat(A[i.status]),children:[(0,r.jsx)(m.WT,{className:"text-md",children:i.status}),(0,r.jsx)(m.In,{className:"ml-2",children:"▼"})]}),(0,r.jsx)(m.ZL,{children:(0,r.jsx)(m.UC,{className:"bg-white shadow-md rounded mt-2",children:(0,r.jsx)(m.LM,{children:p.map(e=>(0,r.jsx)(m.q7,{value:e,className:"p-2 cursor-pointer hover:outline-none hover:font-semibold ".concat(A[e]),children:(0,r.jsx)(m.p4,{children:e})},e))})})})]})]}),(0,r.jsxs)("div",{className:"flex justify-center md:justify-end w-full space-x-2 items-center",children:[(0,r.jsx)(x.bm,{asChild:!0,children:(0,r.jsx)(f.A,{title:"Cancel",className:"!rounded py-0.5 md:py-1.5"})}),(0,r.jsx)("button",{type:"submit",children:(0,r.jsx)(u.A,{title:"Save",className:"!rounded py-1 !px-10 md:py-2"})})]})]})]})]})]})};var w=s(8715),N=s(3762);let A=["Pending","Active","Completed"],y=e=>{let{book:t,fetchBooks:s}=e,[a,i]=l.useState(!!t.description),[n,o]=l.useState(t),[c,b]=l.useState(!1),p=e=>{let{name:t,value:s}=e.target;o(e=>({...e,[t]:s}))},v=async e=>{e.preventDefault();try{let e=(0,g.H9)(d.db,"books",t.id),{id:r,...l}=n;await (0,g.mZ)(e,l),j.oR.success("Book Updated Successfully"),await s(),b(!1)}catch(e){j.oR.error("Failed to update the book")}},w={Pending:"bg-[#f8bbd0] text-xs md:text-lg",Active:"bg-[#bbdefb] text-xs md:text-lg",Completed:"bg-[#64ffda] text-xs md:text-lg"};return(0,r.jsxs)(x.bL,{open:c,onOpenChange:b,children:[(0,r.jsx)(x.l9,{children:(0,r.jsx)(N.A,{title:"Edit",className:"w-3 h-3 md:w-5 md:h-5"})}),(0,r.jsxs)(x.ZL,{children:[(0,r.jsx)(x.hJ,{className:"fixed inset-0 bg-black/50"}),(0,r.jsxs)(x.UC,{className:"fixed top-1/2 left-1/2 w-64 md:w-96 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md",children:[(0,r.jsx)(x.hE,{className:"text-md md:text-xl font-bold",children:"Edit Book"}),(0,r.jsxs)("form",{onSubmit:v,className:"space-y-4 mt-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"title",className:"block text-xs md:text-lg font-medium",children:"Title"}),(0,r.jsx)("input",{type:"text",name:"title",id:"title",value:n.title,onChange:p,required:!0,className:"w-full p-2 mt-1 border rounded hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 text-xs md:text-xl"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("label",{htmlFor:"description-toggle",className:"text-xs md:text-lg font-medium",children:"Description"}),(0,r.jsx)(h.dO,{id:"description-toggle",checked:a,onCheckedChange:i,className:"w-12 h-6 bg-gray-200 rounded-full relative flex items-center transition-colors data-[state=checked]:bg-[#6366F1]",children:(0,r.jsx)("span",{className:"block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ".concat(a?"translate-x-6":"translate-x-1")})})]}),a&&(0,r.jsx)("div",{children:(0,r.jsx)("textarea",{name:"description",id:"description",value:n.description,onChange:p,className:"w-full p-2 mt-1 border rounded hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 text-xs md:text-lg"})}),(0,r.jsxs)("div",{className:"py-4",children:[(0,r.jsx)("label",{htmlFor:"status",className:"block text-xs md:text-lg font-medium",children:"Change Status"}),(0,r.jsxs)(m.bL,{value:n.status,onValueChange:e=>{o(t=>({...t,status:e}))},children:[(0,r.jsxs)(m.l9,{className:"w-full p-2 mt-1 border rounded flex justify-between items-center ".concat(w[n.status]),children:[(0,r.jsx)(m.WT,{children:n.status}),(0,r.jsx)(m.In,{className:"ml-2",children:"▼"})]}),(0,r.jsx)(m.ZL,{children:(0,r.jsx)(m.UC,{className:"bg-white shadow-md rounded mt-2",children:(0,r.jsx)(m.LM,{children:A.map(e=>(0,r.jsx)(m.q7,{value:e,className:"p-2 cursor-pointer hover:outline-none hover:font-semibold ".concat(w[e]),children:(0,r.jsx)(m.p4,{children:e})},e))})})})]})]}),(0,r.jsxs)("div",{className:"flex justify-center md:justify-end w-full space-x-2 items-center",children:[(0,r.jsx)(x.bm,{asChild:!0,children:(0,r.jsx)(f.A,{title:"Cancel",className:"!rounded py-0.5 md:py-1.5"})}),(0,r.jsx)("button",{type:"submit",children:(0,r.jsx)(u.A,{title:"Save Changes",className:"!rounded py-1 text-xs md:text-lg !px-10 md:py-2"})})]})]})]})]})]})};var k=s(5565);let C={src:"/_next/static/media/book4.3f7f64fb.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUapv9Ri/Rjd/huaPYsuvc8ovEsu/dPjPMusvJuZ/ZIlfZPjvNOkvRNjfSETPV/Vvc6qPQ4qfY8qvdagvZDrP8ZiUtKAAAAFXRSTlMBeINdhA14NziAW1Mfg3mIZkSLuCIgVBCiAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAD9JREFUeJwVxscRgDAQALF1uOSEDfRfK4NeAgGOgzQf7iqkZtupSu7WX7QSxfoQrVxlmJ39J/Iz281aETnN9AE+IgHwgiJ3WAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},S=e=>{let{fetchBooks:t}=e;return(0,r.jsx)(c.A,{children:(0,r.jsx)("div",{className:"flex h-screen justify-center items-center",children:(0,r.jsxs)("div",{className:"w-full flex flex-col justify-center",children:[(0,r.jsx)("div",{className:"w-full flex justify-center items-center mb-[30px]",children:(0,r.jsx)(k.default,{src:C,alt:"empty-state-icon",width:100,height:100,className:"w-[59px] h-[59px] md:w-[99px] md:h-[99px]"})}),(0,r.jsxs)("div",{className:"flex w-full flex-col justify-center gap-[15px] text-center",children:[(0,r.jsx)("div",{className:"font-[500] text-[14px] md:text-[24px] text-black leading-[30.24px]",children:"You currently do not have any books!"}),(0,r.jsx)("div",{className:"font-[500] text-[12px] md:text-[18px] leading-[22.68px] text-[#292d32]",children:"Click the button below to add one"})]}),(0,r.jsx)("div",{className:"flex justify-center mt-6",children:(0,r.jsx)(v,{fetchBooks:async()=>t()})})]})})})};var E=s(2018);let F=()=>{let[e,t]=(0,l.useState)([]),[s,a]=(0,l.useState)(!0);(0,g.rJ)(d.db,"books");let i=async()=>{try{var e;a(!0);let s=null===(e=d.j2.currentUser)||void 0===e?void 0:e.uid;if(!s)throw Error("User is not authenticated");let r=(0,g.rJ)(d.db,"books"),l=(0,g.P)(r,(0,g._M)("userId","==",s)),i=(await (0,g.GG)(l)).docs.map(e=>({...e.data(),id:e.id}));t(i)}catch(e){console.error(e)}finally{a(!1)}},n=async e=>{try{let s=(0,g.H9)(d.db,"books",e);await (0,g.kd)(s),j.oR.success("Book Removed Successfully"),t(t=>t.filter(t=>t.id!==e))}catch(e){j.oR.error("Failed to remove the book"),console.error(e)}};(0,l.useEffect)(()=>{i()},[]);let o={Pending:e.filter(e=>"Pending"===e.status),Active:e.filter(e=>"Active"===e.status),Completed:e.filter(e=>"Completed"===e.status)};return s?(0,r.jsx)(E.A,{}):0===e.length?(0,r.jsx)(S,{fetchBooks:i}):(0,r.jsx)(c.A,{children:(0,r.jsxs)("div",{className:"mt-2 mx-4 md:mx-20",children:[(0,r.jsx)("div",{className:"flex justify-end mt-10 mb-2",children:(0,r.jsx)(v,{fetchBooks:i})}),(0,r.jsxs)("table",{className:"table-fixed w-full border-collapse border border-gray-300",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"text-xs md:text-lg",children:[(0,r.jsx)("th",{className:"w-1/3 border bg-[#f8bbd0] border-gray-300 px-4 py-2 text-left",children:"Pending"}),(0,r.jsx)("th",{className:"w-1/3 border bg-[#bbdefb] border-gray-300 px-4 py-2 text-left",children:"Active"}),(0,r.jsx)("th",{className:"w-1/3 border bg-[#64ffda] border-gray-300 px-4 py-2 text-left",children:"Completed"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"w-1/3 border border-gray-300 align-top break-words whitespace-normal",children:o.Pending.map(e=>(0,r.jsxs)("div",{className:"border-b last:border-none p-2 hover:bg-gray-100",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("p",{className:"font-semibold text-xs md:text-lg break-words overflow-hidden",children:e.title}),(0,r.jsxs)("div",{className:"flex items-center justify-end gap-0 md:gap-2 mt-0 md:mt-2",children:[(0,r.jsx)(y,{fetchBooks:i,book:e}),(0,r.jsx)("button",{title:"Delete",onClick:()=>n(e.id),className:"text-red-500 hover:text-red-700",children:(0,r.jsx)(w.A,{className:"w-3 h-3 md:w-5 md:h-5"})})]})]}),(0,r.jsx)("p",{className:"text-xs md:text-sm text-gray-500 break-words overflow-hidden pr-4 md:pr-14",children:e.description})]},e.id))}),(0,r.jsx)("td",{className:"w-1/3 border border-gray-300 align-top break-words whitespace-normal",children:o.Active.map(e=>(0,r.jsxs)("div",{className:"border-b last:border-none p-2 hover:bg-gray-100",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("p",{className:"font-semibold text-xs md:text-lg break-words overflow-hidden",children:e.title}),(0,r.jsxs)("div",{className:"flex items-center justify-end gap-0 md:gap-2 mt-0 md:mt-2",children:[(0,r.jsx)(y,{fetchBooks:i,book:e}),(0,r.jsx)("button",{title:"Delete",onClick:()=>n(e.id),className:"text-red-500 hover:text-red-700",children:(0,r.jsx)(w.A,{className:"w-3 h-3 md:w-5 md:h-5"})})]})]}),(0,r.jsx)("p",{className:"text-xs md:text-sm text-gray-500 break-words overflow-hidden pr-4 md:pr-14",children:e.description})]},e.id))}),(0,r.jsx)("td",{className:"w-1/3 border border-gray-300 align-top break-words whitespace-normal",children:o.Completed.map(e=>(0,r.jsxs)("div",{className:"border-b last:border-none p-2 hover:bg-gray-100",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("p",{className:"font-semibold text-xs md:text-lg break-words overflow-hidden",children:e.title}),(0,r.jsxs)("div",{className:"flex items-center justify-end gap-0 md:gap-2 mt-0 md:mt-2",children:[(0,r.jsx)(y,{fetchBooks:i,book:e}),(0,r.jsx)("button",{title:"Delete",onClick:()=>n(e.id),className:"text-red-500 hover:text-red-700",children:(0,r.jsx)(w.A,{className:"w-3 h-3 md:w-5 md:h-5"})})]})]}),(0,r.jsx)("p",{className:"text-xs md:text-sm text-gray-500 break-words overflow-hidden pr-4 md:pr-14",children:e.description})]},e.id))})]})})]})]})})},R=()=>{let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{t(!(window.innerWidth<1200))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)("div",{className:"min-h-screen overflow-hidden",children:[(0,r.jsx)(n.A,{}),(0,r.jsxs)("div",{className:"flex pt-14",children:[(0,r.jsx)(o.A,{onToggle:e=>{t(e)}}),(0,r.jsx)("div",{className:"transition-all duration-300 ".concat(e?"lg:ml-[344px]":"lg:ml-0"," flex-1"),children:(0,r.jsx)(F,{})})]})]})},B=()=>{var e,t;let[s,n]=(0,l.useState)(!0),o=(0,a.useRouter)();return(console.log(null===(e=d.j2.currentUser)||void 0===e?void 0:e.email),console.log(null===(t=d.j2.currentUser)||void 0===t?void 0:t.uid),(0,l.useEffect)(()=>{let e=(0,i.hg)(d.j2,e=>{e?n(!1):o.push("/login")});return()=>e()},[o]),s)?(0,r.jsx)(E.A,{}):(0,r.jsx)(R,{})}},6721:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);s(2115);var l=s(676);let a=()=>(0,r.jsx)(l.A,{children:(0,r.jsx)("nav",{className:"flex bg-white overflow-hidden p-8 py-2 fixed inset-x-0 top-0 z-10 shadow-md",children:(0,r.jsx)("header",{className:"text-2xl text-[#6366F1] font-bold cursor-pointer font-serif mx-4",children:"Codex"})})})},6742:(e,t,s)=>{"use strict";s.d(t,{A:()=>b});var r=s(5155),l=s(2115),a=s(6046),d=s(8173),i=s.n(d),n=s(5180),o=s(187),c=s(9793),x=s(8363),m=s(1898),h=s(24),u=s(4932),f=s(8879);let b=e=>{let{onToggle:t}=e,[s,d]=(0,l.useState)(!1),[b,g]=(0,l.useState)(!1),j=(0,a.usePathname)(),p=(0,a.useRouter)(),v=(0,l.useCallback)(async()=>{try{await (0,m.CI)(h.j2),u.oR.success("Logged out successfully!"),p.push("/login")}catch(s){var e;let t=null!==(e=s.message)&&void 0!==e?e:"Error during logout.";u.oR.error(t)}},[p]),w=()=>{let e=!s;d(e),null==t||t(e)};(0,l.useEffect)(()=>{let e=()=>{let e=window.innerWidth<1200;g(e),d(!e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let N=e=>{let{href:t,label:s,Icon:l}=e,a=j===t;return(0,r.jsx)("li",{children:(0,r.jsxs)(i(),{href:t,className:"flex items-center p-2 rounded-lg transition ".concat(a?"bg-indigo-600 text-white":"text-indigo-600 hover:bg-gray-300 hover:text-"),"aria-current":a?"page":void 0,children:[(0,r.jsx)(l,{className:"mr-3 w-6 h-6"}),(0,r.jsx)("span",{children:s})]})})};return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute left-0 px-4 text-indigo-600 hover:bg-indigo-100",children:(0,r.jsx)(n.A,{className:"w-8 h-8 cursor-pointer",onClick:w,"aria-label":"Toggle sidebar"})}),(0,r.jsxs)("aside",{className:"fixed top-0 left-0 w-72 bg-gray-100 min-h-screen flex flex-col transition-transform duration-300 ease-in-out z-50 ".concat(s?"translate-x-0":"-translate-x-full"),children:[(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)(n.A,{className:"w-8 h-8 text-indigo-600 cursor-pointer",onClick:w,"aria-label":"Close sidebar"})}),(0,r.jsxs)("nav",{className:"flex-1 p-6 flex flex-col",children:[(0,r.jsxs)("ul",{className:"space-y-4 text-lg font-medium",children:[(0,r.jsx)(N,{href:"/dashboard",label:"Dashboard",Icon:o.A}),(0,r.jsx)(N,{href:"/books",label:"Books",Icon:c.A})]}),(0,r.jsx)("div",{className:"p-4 border-t border-gray-300 mt-auto",children:(0,r.jsx)(f.A,{title:"Log Out",className:"w-full flex gap-x-4 align-middle items-center text-xl hover:opacity-95",icon:(0,r.jsx)(x.A,{className:"size-8"}),onClick:v})})]})]}),s&&b&&(0,r.jsx)("div",{className:"fixed inset-0 bg-black opacity-25 z-40",onClick:w,"aria-hidden":"true"})]})}},8879:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155);s(2115);let l=e=>{let{title:t,onClick:s,className:l,type:a,icon:d,disabled:i}=e;return(0,r.jsxs)("div",{onClick:s,className:"bg-indigo-600 cursor-pointer text-white flex justify-center py-2 px-4 rounded-xl hover:saturate-200 ".concat(l),children:[d,t,a,i]})}},2667:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155);s(2115);let l=e=>{let{title:t,onClick:s,className:l,icon:a}=e;return(0,r.jsxs)("button",{onClick:s,className:"bg-white border-2 border-[#00b0ff] text-[#00b0ff] flex justify-center py-2 px-4 rounded-full hover:text-white hover:bg-[#00b0ff] ".concat(l),children:[a,t]})}},2018:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);s(2115);var l=s(676);let a=e=>{let{className:t}=e;return(0,r.jsx)(l.A,{children:(0,r.jsx)("div",{className:"flex justify-center items-center h-screen ".concat(t),children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"})})})}},676:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155);s(2115);let l=e=>{let{children:t,className:s}=e;return(0,r.jsx)("div",{className:"max-w-7xl mx-auto md:px-6 ".concat(s),children:t})}},24:(e,t,s)=>{"use strict";s.d(t,{db:()=>n,hJ:()=>o,j2:()=>i});var r=s(9904),l=s(7058),a=s(1898);let d=0===(0,r.Dk)().length?(0,r.Wp)({apiKey:"AIzaSyBkamuXCK7CC8VGNo8dbjvSrwRr9v4f2nI",authDomain:"book-reading-tracker-f73c2.firebaseapp.com",projectId:"book-reading-tracker-f73c2",storageBucket:"book-reading-tracker-f73c2.appspot.com",messagingSenderId:"600665945443",appId:"1:600665945443:web:887b2b2ce94abaf042cf56",measurementId:"G-K7ZGWSF9P1"}):(0,r.Dk)()[0],i=(0,a.xI)(d),n=(0,l.aU)(d),o=new a.HF}},e=>{var t=t=>e(e.s=t);e.O(0,[992,697,173,551,898,565,690,441,517,358],()=>t(6789)),_N_E=e.O()}]);