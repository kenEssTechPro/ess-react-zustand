import{u as Ir,f as be,h as Pe,r as w,p as ue,j as h,L as Or,l as Mr,R as L,$ as Ie,i as $e,k as G,m as Ur,n as Br,o as qr,q as Hr,s as Wr,t as zr,v as Kr,w as Xr,x as Gr,B as ur,y as dr,z as Jr,C as Qr}from"./index-gn5g_B-7.js";const fr=({children:e,title:t})=>{const r=Ir(),[i]=be(),o=i.get("redirectTo"),n=Pe();return w.useEffect(()=>{r.data&&n(o||ue.users.getHref(),{replace:!0})},[r.data,n,o]),h.jsx(h.Fragment,{children:h.jsxs("div",{className:"flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[h.jsx("div",{className:"flex justify-center",children:h.jsx(Or,{className:"flex items-center text-white",to:ue.home.getHref(),children:h.jsx("img",{className:"h-24 w-auto",src:Mr,alt:"Workflow"})})}),h.jsx("h2",{className:"mt-3 text-center text-3xl font-extrabold text-gray-900",children:t})]}),h.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:h.jsx("div",{className:"bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10",children:e})})]})})};var ge=e=>e.type==="checkbox",ce=e=>e instanceof Date,T=e=>e==null;const yr=e=>typeof e=="object";var N=e=>!T(e)&&!Array.isArray(e)&&yr(e)&&!ce(e),Yr=e=>N(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,Zr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,et=(e,t)=>e.has(Zr(t)),rt=e=>{const t=e.constructor&&e.constructor.prototype;return N(t)&&t.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function B(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(r||N(e)))if(t=r?[]:{},!r&&!rt(e))t=e;else for(const i in e)e.hasOwnProperty(i)&&(t[i]=B(e[i]));else return e;return t}var ve=e=>Array.isArray(e)?e.filter(Boolean):[],$=e=>e===void 0,y=(e,t,r)=>{if(!t||!N(e))return r;const i=ve(t.split(/[,[\].]+?/)).reduce((o,n)=>T(o)?o:o[n],e);return $(i)||i===e?$(e[t])?r:e[t]:i},Y=e=>typeof e=="boolean";const er={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},hr=L.createContext(null),tt=()=>L.useContext(hr),st=e=>{const{children:t,...r}=e;return L.createElement(hr.Provider,{value:r},t)};var it=(e,t,r,i=!0)=>{const o={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const c=n;return t._proxyFormState[c]!==W.all&&(t._proxyFormState[c]=!i||W.all),e[c]}});return o},O=e=>N(e)&&!Object.keys(e).length,nt=(e,t,r,i)=>{r(e);const{name:o,...n}=e;return O(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find(c=>t[c]===W.all)},Ce=e=>Array.isArray(e)?e:[e];function at(e){const t=L.useRef(e);t.current=e,L.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var X=e=>typeof e=="string",ot=(e,t,r,i,o)=>X(e)?(i&&t.watch.add(e),y(r,e,o)):Array.isArray(e)?e.map(n=>(i&&t.watch.add(n),y(r,n))):(i&&(t.watchAll=!0),r),Me=e=>/^\w*$/.test(e),mr=e=>ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),F=(e,t,r)=>{let i=-1;const o=Me(t)?[t]:mr(t),n=o.length,c=n-1;for(;++i<n;){const m=o[i];let V=r;if(i!==c){const A=e[m];V=N(A)||Array.isArray(A)?A:isNaN(+o[i+1])?{}:[]}e[m]=V,e=e[m]}return e},br=(e,t,r,i,o)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:o||!0}}:{},rr=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),tr=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const me=(e,t,r,i)=>{for(const o of r||Object.keys(e)){const n=y(e,o);if(n){const{_f:c,...m}=n;if(c){if(c.refs&&c.refs[0]&&t(c.refs[0],o)&&!i)break;if(c.ref&&t(c.ref,c.name)&&!i)break;me(m,t)}else N(m)&&me(m,t)}}};var lt=(e,t,r)=>{const i=ve(y(e,r));return F(i,"root",t[r]),F(e,r,i),e},Ue=e=>e.type==="file",ee=e=>typeof e=="function",Fe=e=>{if(!Oe)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},_e=e=>X(e),Be=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const sr={value:!1,isValid:!1},ir={value:!0,isValid:!0};var gr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!$(e[0].attributes.value)?$(e[0].value)||e[0].value===""?ir:{value:e[0].value,isValid:!0}:ir:sr}return sr};const nr={isValid:!1,value:null};var vr=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,nr):nr;function ar(e,t,r="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||Y(e)&&!e)return{type:r,message:_e(e)?e:"",ref:t}}var le=e=>N(e)&&!Ve(e)?e:{value:e,message:""},or=async(e,t,r,i,o)=>{const{ref:n,refs:c,required:m,maxLength:V,minLength:A,min:k,max:g,pattern:Z,validate:z,name:C,valueAsNumber:ie,mount:P,disabled:K}=e._f,v=y(t,C);if(!P||K)return{};const q=c?c[0]:n,J=x=>{i&&q.reportValidity&&(q.setCustomValidity(Y(x)?"":x||""),q.reportValidity())},E={},ne=Be(n),xe=ge(n),re=ne||xe,ae=(ie||Ue(n))&&$(n.value)&&$(v)||Fe(n)&&n.value===""||v===""||Array.isArray(v)&&!v.length,M=br.bind(null,C,r,E),pe=(x,p,S,R=Q.maxLength,H=Q.minLength)=>{const U=x?p:S;E[C]={type:x?R:H,message:U,ref:n,...M(x?R:H,U)}};if(o?!Array.isArray(v)||!v.length:m&&(!re&&(ae||T(v))||Y(v)&&!v||xe&&!gr(c).isValid||ne&&!vr(c).isValid)){const{value:x,message:p}=_e(m)?{value:!!m,message:m}:le(m);if(x&&(E[C]={type:Q.required,message:p,ref:q,...M(Q.required,p)},!r))return J(p),E}if(!ae&&(!T(k)||!T(g))){let x,p;const S=le(g),R=le(k);if(!T(v)&&!isNaN(v)){const H=n.valueAsNumber||v&&+v;T(S.value)||(x=H>S.value),T(R.value)||(p=H<R.value)}else{const H=n.valueAsDate||new Date(v),U=ye=>new Date(new Date().toDateString()+" "+ye),de=n.type=="time",fe=n.type=="week";X(S.value)&&v&&(x=de?U(v)>U(S.value):fe?v>S.value:H>new Date(S.value)),X(R.value)&&v&&(p=de?U(v)<U(R.value):fe?v<R.value:H<new Date(R.value))}if((x||p)&&(pe(!!x,S.message,R.message,Q.max,Q.min),!r))return J(E[C].message),E}if((V||A)&&!ae&&(X(v)||o&&Array.isArray(v))){const x=le(V),p=le(A),S=!T(x.value)&&v.length>+x.value,R=!T(p.value)&&v.length<+p.value;if((S||R)&&(pe(S,x.message,p.message),!r))return J(E[C].message),E}if(Z&&!ae&&X(v)){const{value:x,message:p}=le(Z);if(Ve(x)&&!v.match(x)&&(E[C]={type:Q.pattern,message:p,ref:n,...M(Q.pattern,p)},!r))return J(p),E}if(z){if(ee(z)){const x=await z(v,t),p=ar(x,q);if(p&&(E[C]={...p,...M(Q.validate,p.message)},!r))return J(p.message),E}else if(N(z)){let x={};for(const p in z){if(!O(x)&&!r)break;const S=ar(await z[p](v,t),q,p);S&&(x={...S,...M(p,S.message)},J(S.message),r&&(E[C]=x))}if(!O(x)&&(E[C]={ref:q,...x},!r))return E}}return J(!0),E};function ct(e,t){const r=t.slice(0,-1).length;let i=0;for(;i<r;)e=$(e)?i++:e[t[i++]];return e}function ut(e){for(const t in e)if(e.hasOwnProperty(t)&&!$(e[t]))return!1;return!0}function D(e,t){const r=Array.isArray(t)?t:Me(t)?[t]:mr(t),i=r.length===1?e:ct(e,r),o=r.length-1,n=r[o];return i&&delete i[n],o!==0&&(N(i)&&O(i)||Array.isArray(i)&&ut(i))&&D(e,r.slice(0,-1)),e}var Re=()=>{let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}},ke=e=>T(e)||!yr(e);function te(e,t){if(ke(e)||ke(t))return e===t;if(ce(e)&&ce(t))return e.getTime()===t.getTime();const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(const o of r){const n=e[o];if(!i.includes(o))return!1;if(o!=="ref"){const c=t[o];if(ce(n)&&ce(c)||N(n)&&N(c)||Array.isArray(n)&&Array.isArray(c)?!te(n,c):n!==c)return!1}}return!0}var xr=e=>e.type==="select-multiple",dt=e=>Be(e)||ge(e),Te=e=>Fe(e)&&e.isConnected,pr=e=>{for(const t in e)if(ee(e[t]))return!0;return!1};function Ae(e,t={}){const r=Array.isArray(e);if(N(e)||r)for(const i in e)Array.isArray(e[i])||N(e[i])&&!pr(e[i])?(t[i]=Array.isArray(e[i])?[]:{},Ae(e[i],t[i])):T(e[i])||(t[i]=!0);return t}function wr(e,t,r){const i=Array.isArray(e);if(N(e)||i)for(const o in e)Array.isArray(e[o])||N(e[o])&&!pr(e[o])?$(t)||ke(r[o])?r[o]=Array.isArray(e[o])?Ae(e[o],[]):{...Ae(e[o])}:wr(e[o],T(t)?{}:t[o],r[o]):r[o]=!te(e[o],t[o]);return r}var we=(e,t)=>wr(e,t,Ae(t)),_r=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>$(e)?e:t?e===""?NaN:e&&+e:r&&X(e)?new Date(e):i?i(e):e;function Le(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return Ue(t)?t.files:Be(t)?vr(e.refs).value:xr(t)?[...t.selectedOptions].map(({value:r})=>r):ge(t)?gr(e.refs).value:_r($(t.value)?e.ref.value:t.value,e)}var ft=(e,t,r,i)=>{const o={};for(const n of e){const c=y(t,n);c&&F(o,n,c._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:i}},he=e=>$(e)?e:Ve(e)?e.source:N(e)?Ve(e.value)?e.value.source:e.value:e,yt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function lr(e,t,r){const i=y(e,r);if(i||Me(r))return{error:i,name:r};const o=r.split(".");for(;o.length;){const n=o.join("."),c=y(t,n),m=y(e,n);if(c&&!Array.isArray(c)&&r!==n)return{name:r};if(m&&m.type)return{name:n,error:m};o.pop()}return{name:r}}var ht=(e,t,r,i,o)=>o.isOnAll?!1:!r&&o.isOnTouch?!(t||e):(r?i.isOnBlur:o.isOnBlur)?!e:(r?i.isOnChange:o.isOnChange)?e:!0,mt=(e,t)=>!ve(y(e,t)).length&&D(e,t);const bt={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function gt(e={}){let t={...bt,...e},r={submitCount:0,isDirty:!1,isLoading:ee(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},i={},o=N(t.defaultValues)||N(t.values)?B(t.defaultValues||t.values)||{}:{},n=t.shouldUnregister?{}:B(o),c={action:!1,mount:!1,watch:!1},m={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,A=0;const k={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Re(),array:Re(),state:Re()},Z=rr(t.mode),z=rr(t.reValidateMode),C=t.criteriaMode===W.all,ie=s=>a=>{clearTimeout(A),A=setTimeout(s,a)},P=async s=>{if(k.isValid||s){const a=t.resolver?O((await re()).errors):await M(i,!0);a!==r.isValid&&g.state.next({isValid:a})}},K=(s,a)=>{(k.isValidating||k.validatingFields)&&((s||Array.from(m.mount)).forEach(l=>{l&&(a?F(r.validatingFields,l,a):D(r.validatingFields,l))}),g.state.next({validatingFields:r.validatingFields,isValidating:!O(r.validatingFields)}))},v=(s,a=[],l,f,d=!0,u=!0)=>{if(f&&l){if(c.action=!0,u&&Array.isArray(y(i,s))){const b=l(y(i,s),f.argA,f.argB);d&&F(i,s,b)}if(u&&Array.isArray(y(r.errors,s))){const b=l(y(r.errors,s),f.argA,f.argB);d&&F(r.errors,s,b),mt(r.errors,s)}if(k.touchedFields&&u&&Array.isArray(y(r.touchedFields,s))){const b=l(y(r.touchedFields,s),f.argA,f.argB);d&&F(r.touchedFields,s,b)}k.dirtyFields&&(r.dirtyFields=we(o,n)),g.state.next({name:s,isDirty:x(s,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else F(n,s,a)},q=(s,a)=>{F(r.errors,s,a),g.state.next({errors:r.errors})},J=s=>{r.errors=s,g.state.next({errors:r.errors,isValid:!1})},E=(s,a,l,f)=>{const d=y(i,s);if(d){const u=y(n,s,$(l)?y(o,s):l);$(u)||f&&f.defaultChecked||a?F(n,s,a?u:Le(d._f)):R(s,u),c.mount&&P()}},ne=(s,a,l,f,d)=>{let u=!1,b=!1;const _={name:s},j=!!(y(i,s)&&y(i,s)._f.disabled);if(!l||f){k.isDirty&&(b=r.isDirty,r.isDirty=_.isDirty=x(),u=b!==_.isDirty);const I=j||te(y(o,s),a);b=!!(!j&&y(r.dirtyFields,s)),I||j?D(r.dirtyFields,s):F(r.dirtyFields,s,!0),_.dirtyFields=r.dirtyFields,u=u||k.dirtyFields&&b!==!I}if(l){const I=y(r.touchedFields,s);I||(F(r.touchedFields,s,l),_.touchedFields=r.touchedFields,u=u||k.touchedFields&&I!==l)}return u&&d&&g.state.next(_),u?_:{}},xe=(s,a,l,f)=>{const d=y(r.errors,s),u=k.isValid&&Y(a)&&r.isValid!==a;if(e.delayError&&l?(V=ie(()=>q(s,l)),V(e.delayError)):(clearTimeout(A),V=null,l?F(r.errors,s,l):D(r.errors,s)),(l?!te(d,l):d)||!O(f)||u){const b={...f,...u&&Y(a)?{isValid:a}:{},errors:r.errors,name:s};r={...r,...b},g.state.next(b)}},re=async s=>{K(s,!0);const a=await t.resolver(n,t.context,ft(s||m.mount,i,t.criteriaMode,t.shouldUseNativeValidation));return K(s),a},ae=async s=>{const{errors:a}=await re(s);if(s)for(const l of s){const f=y(a,l);f?F(r.errors,l,f):D(r.errors,l)}else r.errors=a;return a},M=async(s,a,l={valid:!0})=>{for(const f in s){const d=s[f];if(d){const{_f:u,...b}=d;if(u){const _=m.array.has(u.name);K([f],!0);const j=await or(d,n,C,t.shouldUseNativeValidation&&!a,_);if(K([f]),j[u.name]&&(l.valid=!1,a))break;!a&&(y(j,u.name)?_?lt(r.errors,j,u.name):F(r.errors,u.name,j[u.name]):D(r.errors,u.name))}b&&await M(b,a,l)}}return l.valid},pe=()=>{for(const s of m.unMount){const a=y(i,s);a&&(a._f.refs?a._f.refs.every(l=>!Te(l)):!Te(a._f.ref))&&Se(s)}m.unMount=new Set},x=(s,a)=>(s&&a&&F(n,s,a),!te(He(),o)),p=(s,a,l)=>ot(s,m,{...c.mount?n:$(a)?o:X(s)?{[s]:a}:a},l,a),S=s=>ve(y(c.mount?n:o,s,e.shouldUnregister?y(o,s,[]):[])),R=(s,a,l={})=>{const f=y(i,s);let d=a;if(f){const u=f._f;u&&(!u.disabled&&F(n,s,_r(a,u)),d=Fe(u.ref)&&T(a)?"":a,xr(u.ref)?[...u.ref.options].forEach(b=>b.selected=d.includes(b.value)):u.refs?ge(u.ref)?u.refs.length>1?u.refs.forEach(b=>(!b.defaultChecked||!b.disabled)&&(b.checked=Array.isArray(d)?!!d.find(_=>_===b.value):d===b.value)):u.refs[0]&&(u.refs[0].checked=!!d):u.refs.forEach(b=>b.checked=b.value===d):Ue(u.ref)?u.ref.value="":(u.ref.value=d,u.ref.type||g.values.next({name:s,values:{...n}})))}(l.shouldDirty||l.shouldTouch)&&ne(s,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ye(s)},H=(s,a,l)=>{for(const f in a){const d=a[f],u=`${s}.${f}`,b=y(i,u);(m.array.has(s)||!ke(d)||b&&!b._f)&&!ce(d)?H(u,d,l):R(u,d,l)}},U=(s,a,l={})=>{const f=y(i,s),d=m.array.has(s),u=B(a);F(n,s,u),d?(g.array.next({name:s,values:{...n}}),(k.isDirty||k.dirtyFields)&&l.shouldDirty&&g.state.next({name:s,dirtyFields:we(o,n),isDirty:x(s,u)})):f&&!f._f&&!T(u)?H(s,u,l):R(s,u,l),tr(s,m)&&g.state.next({...r}),g.values.next({name:c.mount?s:void 0,values:{...n}})},de=async s=>{c.mount=!0;const a=s.target;let l=a.name,f=!0;const d=y(i,l),u=()=>a.type?Le(d._f):Yr(s),b=_=>{f=Number.isNaN(_)||_===y(n,l,_)};if(d){let _,j;const I=u(),oe=s.type===er.BLUR||s.type===er.FOCUS_OUT,Tr=!yt(d._f)&&!t.resolver&&!y(r.errors,l)&&!d._f.deps||ht(oe,y(r.touchedFields,l),r.isSubmitted,z,Z),Ne=tr(l,m,oe);F(n,l,I),oe?(d._f.onBlur&&d._f.onBlur(s),V&&V(0)):d._f.onChange&&d._f.onChange(s);const je=ne(l,I,oe,!1),Lr=!O(je)||Ne;if(!oe&&g.values.next({name:l,type:s.type,values:{...n}}),Tr)return k.isValid&&P(),Lr&&g.state.next({name:l,...Ne?{}:je});if(!oe&&Ne&&g.state.next({...r}),t.resolver){const{errors:Ye}=await re([l]);if(b(I),f){const Pr=lr(r.errors,i,l),Ze=lr(Ye,i,Pr.name||l);_=Ze.error,l=Ze.name,j=O(Ye)}}else K([l],!0),_=(await or(d,n,C,t.shouldUseNativeValidation))[l],K([l]),b(I),f&&(_?j=!1:k.isValid&&(j=await M(i,!0)));f&&(d._f.deps&&ye(d._f.deps),xe(l,j,_,je))}},fe=(s,a)=>{if(y(r.errors,a)&&s.focus)return s.focus(),1},ye=async(s,a={})=>{let l,f;const d=Ce(s);if(t.resolver){const u=await ae($(s)?s:d);l=O(u),f=s?!d.some(b=>y(u,b)):l}else s?(f=(await Promise.all(d.map(async u=>{const b=y(i,u);return await M(b&&b._f?{[u]:b}:b)}))).every(Boolean),!(!f&&!r.isValid)&&P()):f=l=await M(i);return g.state.next({...!X(s)||k.isValid&&l!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:l}:{},errors:r.errors}),a.shouldFocus&&!f&&me(i,fe,s?d:m.mount),f},He=s=>{const a={...o,...c.mount?n:{}};return $(s)?a:X(s)?y(a,s):s.map(l=>y(a,l))},We=(s,a)=>({invalid:!!y((a||r).errors,s),isDirty:!!y((a||r).dirtyFields,s),isTouched:!!y((a||r).touchedFields,s),isValidating:!!y((a||r).validatingFields,s),error:y((a||r).errors,s)}),Nr=s=>{s&&Ce(s).forEach(a=>D(r.errors,a)),g.state.next({errors:s?r.errors:{}})},ze=(s,a,l)=>{const f=(y(i,s,{_f:{}})._f||{}).ref;F(r.errors,s,{...a,ref:f}),g.state.next({name:s,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&f&&f.focus&&f.focus()},jr=(s,a)=>ee(s)?g.values.subscribe({next:l=>s(p(void 0,a),l)}):p(s,a,!0),Se=(s,a={})=>{for(const l of s?Ce(s):m.mount)m.mount.delete(l),m.array.delete(l),a.keepValue||(D(i,l),D(n,l)),!a.keepError&&D(r.errors,l),!a.keepDirty&&D(r.dirtyFields,l),!a.keepTouched&&D(r.touchedFields,l),!a.keepIsValidating&&D(r.validatingFields,l),!t.shouldUnregister&&!a.keepDefaultValue&&D(o,l);g.values.next({values:{...n}}),g.state.next({...r,...a.keepDirty?{isDirty:x()}:{}}),!a.keepIsValid&&P()},Ke=({disabled:s,name:a,field:l,fields:f,value:d})=>{if(Y(s)){const u=s?void 0:$(d)?Le(l?l._f:y(f,a)._f):d;F(n,a,u),ne(a,u,!1,!1,!0)}},De=(s,a={})=>{let l=y(i,s);const f=Y(a.disabled);return F(i,s,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:s}},name:s,mount:!0,...a}}),m.mount.add(s),l?Ke({field:l,disabled:a.disabled,name:s,value:a.value}):E(s,!0,a.value),{...f?{disabled:a.disabled}:{},...t.progressive?{required:!!a.required,min:he(a.min),max:he(a.max),minLength:he(a.minLength),maxLength:he(a.maxLength),pattern:he(a.pattern)}:{},name:s,onChange:de,onBlur:de,ref:d=>{if(d){De(s,a),l=y(i,s);const u=$(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,b=dt(u),_=l._f.refs||[];if(b?_.find(j=>j===u):u===l._f.ref)return;F(i,s,{_f:{...l._f,...b?{refs:[..._.filter(Te),u,...Array.isArray(y(o,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u}}}),E(s,!1,void 0,u)}else l=y(i,s,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||a.shouldUnregister)&&!(et(m.array,s)&&c.action)&&m.unMount.add(s)}}},Xe=()=>t.shouldFocusError&&me(i,fe,m.mount),Cr=s=>{Y(s)&&(g.state.next({disabled:s}),me(i,(a,l)=>{let f=s;const d=y(i,l);d&&Y(d._f.disabled)&&(f||(f=d._f.disabled)),a.disabled=f},0,!1))},Ge=(s,a)=>async l=>{let f;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=B(n);if(g.state.next({isSubmitting:!0}),t.resolver){const{errors:u,values:b}=await re();r.errors=u,d=b}else await M(i);if(D(r.errors,"root"),O(r.errors)){g.state.next({errors:{}});try{await s(d,l)}catch(u){f=u}}else a&&await a({...r.errors},l),Xe(),setTimeout(Xe);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},Rr=(s,a={})=>{y(i,s)&&($(a.defaultValue)?U(s,B(y(o,s))):(U(s,a.defaultValue),F(o,s,B(a.defaultValue))),a.keepTouched||D(r.touchedFields,s),a.keepDirty||(D(r.dirtyFields,s),r.isDirty=a.defaultValue?x(s,B(y(o,s))):x()),a.keepError||(D(r.errors,s),k.isValid&&P()),g.state.next({...r}))},Je=(s,a={})=>{const l=s?B(s):o,f=B(l),d=O(s),u=d?o:f;if(a.keepDefaultValues||(o=l),!a.keepValues){if(a.keepDirtyValues)for(const b of m.mount)y(r.dirtyFields,b)?F(u,b,y(n,b)):U(b,y(u,b));else{if(Oe&&$(s))for(const b of m.mount){const _=y(i,b);if(_&&_._f){const j=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(Fe(j)){const I=j.closest("form");if(I){I.reset();break}}}}i={}}n=e.shouldUnregister?a.keepDefaultValues?B(o):{}:B(u),g.array.next({values:{...u}}),g.values.next({values:{...u}})}m={mount:a.keepDirtyValues?m.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!k.isValid||!!a.keepIsValid||!!a.keepDirtyValues,c.watch=!!e.shouldUnregister,g.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:d?!1:a.keepDirty?r.isDirty:!!(a.keepDefaultValues&&!te(s,o)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?[]:a.keepDirtyValues?a.keepDefaultValues&&n?we(o,n):r.dirtyFields:a.keepDefaultValues&&s?we(o,s):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Qe=(s,a)=>Je(ee(s)?s(n):s,a);return{control:{register:De,unregister:Se,getFieldState:We,handleSubmit:Ge,setError:ze,_executeSchema:re,_getWatch:p,_getDirty:x,_updateValid:P,_removeUnmounted:pe,_updateFieldArray:v,_updateDisabledField:Ke,_getFieldArray:S,_reset:Je,_resetDefaultValues:()=>ee(t.defaultValues)&&t.defaultValues().then(s=>{Qe(s,t.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:s=>{r={...r,...s}},_disableForm:Cr,_subjects:g,_proxyFormState:k,_setErrors:J,get _fields(){return i},get _formValues(){return n},get _state(){return c},set _state(s){c=s},get _defaultValues(){return o},get _names(){return m},set _names(s){m=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:ye,register:De,handleSubmit:Ge,watch:jr,setValue:U,getValues:He,reset:Qe,resetField:Rr,clearErrors:Nr,unregister:Se,setError:ze,setFocus:(s,a={})=>{const l=y(i,s),f=l&&l._f;if(f){const d=f.refs?f.refs[0]:f.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:We}}function vt(e={}){const t=L.useRef(),r=L.useRef(),[i,o]=L.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...gt(e),formState:i});const n=t.current.control;return n._options=e,at({subject:n._subjects.state,next:c=>{nt(c,n._proxyFormState,n._updateFormState)&&o({...n._formState})}}),L.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),L.useEffect(()=>{if(n._proxyFormState.isDirty){const c=n._getDirty();c!==i.isDirty&&n._subjects.state.next({isDirty:c})}},[n,i.isDirty]),L.useEffect(()=>{e.values&&!te(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,o(c=>({...c}))):n._resetDefaultValues()},[e.values,n]),L.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),L.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),L.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),t.current.formState=it(i,n),t.current}var cr=function(e,t,r){if(e&&"reportValidity"in e){var i=y(r,t);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},Fr=function(e,t){var r=function(o){var n=t.fields[o];n&&n.ref&&"reportValidity"in n.ref?cr(n.ref,o,e):n.refs&&n.refs.forEach(function(c){return cr(c,o,e)})};for(var i in t.fields)r(i)},xt=function(e,t){t.shouldUseNativeValidation&&Fr(e,t);var r={};for(var i in e){var o=y(t.fields,i),n=Object.assign(e[i]||{},{ref:o&&o.ref});if(pt(t.names||Object.keys(e),i)){var c=Object.assign({},y(r,i));F(c,"root",n),F(r,i,c)}else F(r,i,n)}return r},pt=function(e,t){return e.some(function(r){return r.startsWith(t+".")})},wt=function(e,t){for(var r={};e.length;){var i=e[0],o=i.code,n=i.message,c=i.path.join(".");if(!r[c])if("unionErrors"in i){var m=i.unionErrors[0].errors[0];r[c]={message:m.message,type:m.code}}else r[c]={message:n,type:o};if("unionErrors"in i&&i.unionErrors.forEach(function(k){return k.errors.forEach(function(g){return e.push(g)})}),t){var V=r[c].types,A=V&&V[i.code];r[c]=br(c,t,r,o,A?[].concat(A,i.message):i.message)}e.shift()}return r},_t=function(e,t,r){return r===void 0&&(r={}),function(i,o,n){try{return Promise.resolve(function(c,m){try{var V=Promise.resolve(e[r.mode==="sync"?"parse":"parseAsync"](i,t)).then(function(A){return n.shouldUseNativeValidation&&Fr({},n),{errors:{},values:r.raw?i:A}})}catch(A){return m(A)}return V&&V.then?V.then(void 0,m):V}(0,function(c){if(function(m){return m.errors!=null}(c))return{values:{},errors:xt(wt(c.errors,!n.shouldUseNativeValidation&&n.criteriaMode==="all"),n)};throw c}))}catch(c){return Promise.reject(c)}}};const Ft=w.forwardRef((e,t)=>w.createElement(Ie.label,$e({},e,{ref:t,onMouseDown:r=>{var i;(i=e.onMouseDown)===null||i===void 0||i.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}}))),Vr=Ft,Vt=Ur("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),qe=w.forwardRef(({className:e,...t},r)=>h.jsx(Vr,{ref:r,className:G(Vt(),e),...t}));qe.displayName=Vr.displayName;const kt=w.createContext({}),Ee=()=>{const e=w.useContext(kt),t=w.useContext(kr),{getFieldState:r,formState:i}=tt(),o=r(e.name,i);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:n}=t;return{id:n,name:e.name,formItemId:`${n}-form-item`,formDescriptionId:`${n}-form-item-description`,formMessageId:`${n}-form-item-message`,...o}},kr=w.createContext({}),At=w.forwardRef(({className:e,...t},r)=>{const i=w.useId();return h.jsx(kr.Provider,{value:{id:i},children:h.jsx("div",{ref:r,className:G("space-y-2",e),...t})})});At.displayName="FormItem";const $t=w.forwardRef(({className:e,...t},r)=>{const{error:i,formItemId:o}=Ee();return h.jsx(qe,{ref:r,className:G(i&&"text-destructive",e),htmlFor:o,...t})});$t.displayName="FormLabel";const Et=w.forwardRef(({...e},t)=>{const{error:r,formItemId:i,formDescriptionId:o,formMessageId:n}=Ee();return h.jsx(Br,{ref:t,id:i,"aria-describedby":r?`${o} ${n}`:`${o}`,"aria-invalid":!!r,...e})});Et.displayName="FormControl";const St=w.forwardRef(({className:e,...t},r)=>{const{formDescriptionId:i}=Ee();return h.jsx("p",{ref:r,id:i,className:G("text-[0.8rem] text-muted-foreground",e),...t})});St.displayName="FormDescription";const Dt=w.forwardRef(({className:e,children:t,...r},i)=>{const{error:o,formMessageId:n}=Ee(),c=o?String(o==null?void 0:o.message):t;return c?h.jsx("p",{ref:i,id:n,className:G("text-[0.8rem] font-medium text-destructive",e),...r,children:c}):null});Dt.displayName="FormMessage";const Ar=({onSubmit:e,children:t,className:r,options:i,id:o,schema:n})=>{const c=vt({...i,resolver:_t(n)});return h.jsx(st,{...c,children:h.jsx("form",{className:G("space-y-6",r),onSubmit:c.handleSubmit(e),id:o,children:t(c)})})},Nt=({errorMessage:e})=>e?h.jsx("div",{role:"alert","aria-label":e,className:"text-sm font-semibold text-red-500",children:e}):null,$r=e=>{const{label:t,error:r,children:i}=e;return h.jsxs("div",{children:[h.jsxs(qe,{children:[t,h.jsx("div",{className:"mt-1",children:i})]}),h.jsx(Nt,{errorMessage:r==null?void 0:r.message})]})},se=w.forwardRef(({className:e,type:t,label:r,error:i,registration:o,...n},c)=>h.jsx($r,{label:r,error:i,children:h.jsx("input",{type:t,className:G("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:c,...o,...n})}));se.displayName="Input";const jt=w.forwardRef(({className:e,label:t,error:r,registration:i,...o},n)=>h.jsx($r,{label:t,error:r,children:h.jsx("textarea",{className:G("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...i,...o})}));jt.displayName="Textarea";function Ct(e){const t=w.useRef({value:e,previous:e});return w.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const Er="Switch",[Rt,Qt]=qr(Er),[Tt,Lt]=Rt(Er),Pt=w.forwardRef((e,t)=>{const{__scopeSwitch:r,name:i,checked:o,defaultChecked:n,required:c,disabled:m,value:V="on",onCheckedChange:A,...k}=e,[g,Z]=w.useState(null),z=Hr(t,v=>Z(v)),C=w.useRef(!1),ie=g?!!g.closest("form"):!0,[P=!1,K]=Wr({prop:o,defaultProp:n,onChange:A});return w.createElement(Tt,{scope:r,checked:P,disabled:m},w.createElement(Ie.button,$e({type:"button",role:"switch","aria-checked":P,"aria-required":c,"data-state":Sr(P),"data-disabled":m?"":void 0,disabled:m,value:V},k,{ref:z,onClick:zr(e.onClick,v=>{K(q=>!q),ie&&(C.current=v.isPropagationStopped(),C.current||v.stopPropagation())})})),ie&&w.createElement(Mt,{control:g,bubbles:!C.current,name:i,value:V,checked:P,required:c,disabled:m,style:{transform:"translateX(-100%)"}}))}),It="SwitchThumb",Ot=w.forwardRef((e,t)=>{const{__scopeSwitch:r,...i}=e,o=Lt(It,r);return w.createElement(Ie.span,$e({"data-state":Sr(o.checked),"data-disabled":o.disabled?"":void 0},i,{ref:t}))}),Mt=e=>{const{control:t,checked:r,bubbles:i=!0,...o}=e,n=w.useRef(null),c=Ct(r),m=Kr(t);return w.useEffect(()=>{const V=n.current,A=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(A,"checked").set;if(c!==r&&g){const Z=new Event("click",{bubbles:i});g.call(V,r),V.dispatchEvent(Z)}},[c,r,i]),w.createElement("input",$e({type:"checkbox","aria-hidden":!0,defaultChecked:r},o,{tabIndex:-1,ref:n,style:{...e.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function Sr(e){return e?"checked":"unchecked"}const Dr=Pt,Ut=Ot,Bt=w.forwardRef(({className:e,...t},r)=>h.jsx(Dr,{className:G("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:r,children:h.jsx(Ut,{className:G("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})}));Bt.displayName=Dr.displayName;const qt=({onSuccess:e})=>{const t=Xr({onSuccess:e}),[r]=be(),i=r.get("redirectTo");return h.jsxs("div",{children:[h.jsx(Ar,{onSubmit:o=>{t.mutate(o)},schema:Gr,options:{shouldUnregister:!0},children:({register:o,formState:n})=>h.jsxs(h.Fragment,{children:[h.jsx(se,{type:"text",label:"First Name",error:n.errors.firstName,registration:o("firstName")}),h.jsx(se,{type:"text",label:"Last Name",error:n.errors.lastName,registration:o("lastName")}),h.jsx(se,{type:"email",label:"Email Address",error:n.errors.email,registration:o("email")}),h.jsx(se,{type:"password",label:"Password",error:n.errors.password,registration:o("password")}),h.jsx("div",{children:h.jsx(ur,{isLoading:t.isPending,type:"submit",className:"w-full",children:"Register"})})]})}),h.jsx("div",{className:"mt-2 flex items-center justify-end",children:h.jsx("div",{className:"text-sm",children:h.jsx(dr,{to:ue.auth.login.getHref(i),className:"font-medium text-blue-600 hover:text-blue-500",children:"Log In"})})})]})},Ht=()=>{const e=Pe(),[t]=be(),r=t.get("redirectTo");return h.jsx(fr,{title:"Register your account",children:h.jsx(qt,{onSuccess:()=>{e(`${r?`${r}`:ue.users.getHref()}`,{replace:!0})}})})},Yt=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"})),Wt=({onSuccess:e})=>{const t=Jr({onSuccess:e}),[r]=be(),i=r.get("redirectTo");return h.jsxs("div",{children:[h.jsx(Ar,{onSubmit:o=>{t.mutate(o)},schema:Qr,children:({register:o,formState:n})=>h.jsxs(h.Fragment,{children:[h.jsx(se,{type:"email",label:"Email Address",error:n.errors.email,registration:o("email")}),h.jsx(se,{type:"password",label:"Password",error:n.errors.password,registration:o("password")}),h.jsx("div",{children:h.jsx(ur,{isLoading:t.isPending,type:"submit",className:"w-full",children:"Log in"})})]})}),h.jsx("div",{className:"mt-2 flex items-center justify-end",children:h.jsx("div",{className:"text-sm",children:h.jsx(dr,{to:ue.auth.register.getHref(i),className:"font-medium text-blue-600 hover:text-blue-500",children:"Register"})})})]})},zt=()=>{const e=Pe(),[t]=be(),r=t.get("redirectTo");return h.jsx(fr,{title:"Log in to your account",children:h.jsx(Wt,{onSuccess:()=>{e(`${r?`${r}`:ue.users.getHref()}`,{replace:!0})}})})},Zt=Object.freeze(Object.defineProperty({__proto__:null,default:zt},Symbol.toStringTag,{value:"Module"}));export{Zt as l,Yt as r};
