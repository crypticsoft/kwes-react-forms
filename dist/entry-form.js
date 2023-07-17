import{jsxs as u,jsx as l,Fragment as C}from"react/jsx-runtime";import*as g from"react";import S,{forwardRef as I,useRef as q,Fragment as M}from"react";const k=({help:e,children:a})=>u("div",{className:"field",children:[l("div",{className:"control",children:a}),e&&l("p",{className:"help",children:e})]}),R=({className:e,help:a,label:s,...r})=>l(k,{help:a,label:s,children:u("label",{className:e,children:[r.children,"  ",s]})}),V=({value:e,rules:a,name:s,checked:r,...n})=>l("input",{name:s,type:"checkbox",checked:r,value:e,...n}),L=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(R,{name:e,label:a,rules:s,help:r,className:n,children:l(V,{name:e,...i})}),_=e=>{var s;g.useState(new Array(Object.entries(e.options).length).fill(!1));const a=(s=e==null?void 0:e.rules)!=null&&s.includes("required")?"label required":"label";return l(k,{label:e.label,help:e.help,children:u("fieldset",{"data-kw-group":!0,className:"kw-checkbox-group",rules:e.rules,children:[l("legend",{className:a,children:e.label}),e.options&&Object.entries(e.options).map(([r,n],i)=>l(L,{name:e.name,value:n,label:r},`${e.name}-${i}`))]})})};function O(e){const[a,s]=g.useState(!1);return g.useEffect(()=>{const r=new MutationObserver(function(n){for(const i of n)i.type==="attributes"&&(i.target.classList.contains("kw-border-error")&&s(!0),i.target.classList.contains("kw-border-success")&&s(!1))});return e.current&&r.observe(e.current,{attributes:!0,childList:!1,subtree:!1}),()=>{r.disconnect()}}),a}const F=I((e,a)=>l("input",{ref:a,id:`${e.name}-input`,"data-testid":`${e.name}-input`,className:["input",e.className?e.className:""].join(" ").trim(),...e}));F.displayName="InputField";const $=e=>{var i,t;const a=q(null),s=O(a),r={"aria-describedby":`field-error-${e.name}`,"aria-invalid":s||""},n=(i=e==null?void 0:e.rules)!=null&&i.includes("required")?"label required":"label";return l(k,{label:e.label,help:e.help,children:u(M,{children:[e.type!=="hidden"&&l("label",{className:n,htmlFor:`${e.name}-input`,children:e.label}),l(F,{ref:a,id:`${e.name}-input`,"data-testid":`${e.name}-input`,rules:e.rules,...e.type!=="hidden"&&s&&{...r},...e,required:!!((t=e==null?void 0:e.rules)!=null&&t.includes("required"))})]})})},A=({name:e,label:a,onChange:s,value:r})=>l(C,{children:u("label",{children:[l("input",{onChange:s,type:"radio",name:e,value:r})," ",a]},a)}),G=e=>{var s;const a=(s=e==null?void 0:e.rules)!=null&&s.includes("required")?"label required":"label";return u("div",{className:"field",children:[l("div",{className:"control radio-control",children:u("fieldset",{"data-kw-group":!0,...e.rules&&{rules:e.rules},children:[l("legend",{className:a,children:e.label}),Object.entries(e.options).map(([r,n])=>l(A,{label:r,name:e.name,value:n,options:{[r]:n},onChange:e.onChange},r))]})}),e.help&&l("p",{className:"help",children:e.help})]})},H=({name:e,className:a,label:s,rules:r,defaultOption:n,multiple:i,size:t,help:c,options:d})=>{const[m,f]=g.useState(n||""),h=g.useRef(0),v=O(h),w={"aria-describedby":`field-error-${e}`,"aria-invalid":v||""},b=r!=null&&r.includes("required")?"label required":"label";return u("div",{className:"field",children:[l("label",{className:b,htmlFor:`${e}-select`,children:s}),l("div",{className:`control is-fullwidth select ${i?"is-multiple":""} ${v?"has-error is-danger":""} ${a||""}`,children:u("select",{ref:h,id:`${e}-select`,name:e,rules:r,onChange:N=>f(N.currentTarget.value),...m&&!i&&!n&&{value:m},...i&&{multiple:i},...i&&t&&{size:t},...w,children:[!n&&l("option",{value:"",children:"Select One"}),n!==void 0&&typeof n=="object"&&l("option",{value:Object.values(n)[0].value,selected:!0,children:Object.keys(n)[0]}),Object.entries(d).map(([N,y])=>l("option",{value:y.value,children:N},N))]})}),c||m&&l("p",{className:"help",children:u(C,{children:[c||"",m?l("p",{children:JSON.stringify(m)}):""]})})]})},J=({rules:e,label:a,help:s,className:r,...n})=>{const[i,t]=S.useState(n.defaultValue||""),c=q(null),d=O(c),m={"aria-describedby":`field-error-${n.name}`},f=e!=null&&e.includes("required")?"label required":"label";return u(k,{help:s,label:a,children:[n.type!=="hidden"&&l("label",{className:f,htmlFor:`${n.name}-input`,children:a}),l("textarea",{ref:c,id:`${n.name}-textarea`,"data-testid":`${n.name}-textarea`,name:n.name,className:["textarea",n.type,r].join(" "),onChange:h=>t(h.currentTarget.value),...e?{rules:e}:{},...d?{...m}:{},placeholder:n.placeholder,value:i||""})]})},p=({className:e,help:a,label:s,...r})=>u(k,{help:a,label:s,children:[l("label",{className:[e,"label"].join(" "),htmlFor:r.name,children:s}),l("p",{children:r.children})]}),P=({value:e,rules:a,name:s,checked:r,...n})=>l("input",{name:s,type:"file",className:"input",value:e,rules:a,...n}),B=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(p,{name:e,label:a,rules:s,help:r,className:n,children:l(P,{name:e,rules:s,...i})}),K=({min:e,max:a,value:s,rules:r,name:n,checked:i,...t})=>l("input",{name:n,type:"date",className:"input",value:s,min:e,max:a,rules:r,...t}),Q=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(p,{name:e,label:a,rules:s,help:r,className:[n,"kw-datepicker-wrapper"].join(" "),children:l(K,{name:e,rules:s,...i})}),U=({value:e,rules:a,name:s,checked:r,...n})=>l("div",{className:"kw-datepicker-wrapper",children:l("input",{name:s,type:"datepicker",value:e,className:"input",rules:a,...n})}),W=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(p,{name:e,label:a,rules:s,help:r,className:n,children:l(U,{name:e,rules:s,...i})}),X=({min:e,max:a,rules:s,name:r,...n})=>{const[i,t]=S.useState(null);return l("input",{type:"datetime-local",className:"input",name:r,value:i||"",min:e,max:a,rules:s,onChange:c=>t(c.currentTarget.value),...n})},Y=({name:e,min:a,max:s,label:r,rules:n,help:i,className:t,...c})=>l(p,{name:e,label:r,rules:n,help:i,className:[t,"kw-datepicker-wrapper"].join(" "),children:l(X,{name:e,min:a,rules:n,max:s,...c})}),Z=({min:e,max:a,value:s,rules:r,name:n,checked:i,...t})=>l("input",{name:n,type:"time",className:"input timepicker",value:s,min:e,max:a,rules:r,...e&&a&&{title:`Time should be between ${new Date(`${new Date().toLocaleString().split(",").shift()} ${e}`).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})} and ${new Date(`${new Date().toLocaleString().split(",").shift()} ${a}`).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})}`},...t}),ee=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(p,{name:e,label:a,rules:s,help:r,className:[n,"kw-timepicker-wrapper"].join(" "),children:l(Z,{name:e,rules:s,...i})}),le=({help:e,value:a,rules:s,name:r,pattern:n,checked:i,...t})=>l("input",{name:r,type:"tel",className:"input input-tel",value:a,rules:s,pattern:n,"aria-label":e,...t}),ae=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(p,{name:e,label:a,rules:s,help:r,className:[n,"kw-tel-wrapper"].join(" "),children:l(le,{name:e,rules:s,help:r,...i})}),se=({min:e,max:a,rules:s,name:r,checked:n,...i})=>{const[t,c]=S.useState(null);return l("input",{name:r,type:"range",value:t,rules:s,min:e,max:a,onChange:d=>c(d.currentTarget.value),...i})},ne=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(p,{name:e,label:a,rules:s,help:r,className:[n,"kw-tel-wrapper"].join(" "),children:l(se,{name:e,rules:s,...i})}),re=({min:e,max:a,value:s,rules:r,name:n,pattern:i,checked:t,...c})=>l("input",{name:n,type:"number",className:"input",value:s,rules:r,min:e,max:a,...c}),ie=({name:e,label:a,rules:s,help:r,className:n,...i})=>l(p,{name:e,label:a,rules:s,help:r,className:[n,"kw-tel-wrapper"].join(" "),children:l(re,{name:e,rules:s,...i})}),te={select:e=>l(H,{...e}),text:e=>l($,{...e}),textarea:e=>l(J,{...e}),password:e=>l($,{...e}),email:e=>l($,{...e}),file:e=>l(B,{...e}),date:e=>l(Q,{...e}),datepicker:e=>l(W,{...e}),hidden:e=>l($,{...e}),checkbox:e=>l(L,{...e}),checkboxGroup:e=>l(_,{...e}),radio:e=>l(G,{...e}),time:e=>l(ee,{...e}),"datetime-local":e=>l(Y,{...e}),tel:e=>l(ae,{...e}),range:e=>l(ne,{...e}),number:e=>l(ie,{...e})};function j(e){return(0,te[e.type])({...e,key:e.name})}const me=({id:e,data:a,action:s,handler:r})=>{var h,v,w;const n=q(null),i=s??`https://kwes.io/api/foreign/forms/${e}`,t=a.disclaimer,c=((h=a.submission)==null?void 0:h.button)||"Submit",d=((v=a.submission)==null?void 0:v.success)||null,m=((w=a.submission)==null?void 0:w.error)||null;return l("form",{className:"kwes-form",...s?null:{method:"POST"},...s?null:{noValidate:!0},acceptCharset:"utf-8",ref:n,action:i,...r&&{onSubmit:r},...d&&{"success-message":d},...m&&{"error-message":m},children:a&&u("fieldset",{className:"container",children:[a.title&&u("legend",{children:[l("h2",{children:a.title}),a.subTitle&&l("p",{children:a.subTitle})]}),a.fields&&(f=a.fields,f.map((b,N)=>{const y=Object.keys(b)[0]==="group",z=b.type==="hidden";let T;const x=[];return y?(b.group.forEach((o,D)=>{T=o.field.name;const E=o!=null&&o.size?["column",`is-${o.size}`]:["column"];x.push(l("div",{className:E.join(" "),children:j(o.field)},`group-${D}`))}),l("div",{className:"columns",children:x&&x.map(o=>o)},`group-column-${T}`)):z===!1&&y===!1?l("div",{className:"columns",children:l("div",{className:"column",children:j(b)})},`group-${N}`):l("div",{className:"hidden",children:j(b)},`field-${N}`)})),l("div",{className:"field is-grouped is-grouped-centered",children:l("p",{className:"control",children:l("button",{"data-testid":"submit-button",className:"button is-info is-primary is-fullwidth submit-button is-normal",type:"submit",children:c})})}),t&&l("div",{className:"columns",children:l("div",{className:"column",children:l("p",{className:"disclaimer",dangerouslySetInnerHTML:{__html:t}})})})]})});var f};export{me as default};
