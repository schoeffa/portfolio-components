import{m as M,g as v,j as n,k as l,f as y,F as P,p as h,t as _,q as E,s as I,n as S,o as a,d as V,u as N,v as $,l as x}from"./vue.esm-bundler-_ss_0Gkt.js";import{P as d}from"./PortfolioTextInput-D1c2Jg5o.js";import"./PortfolioDropdown-DcIqnN1h.js";import{_ as B}from"./PortfolioButton-BRNsp1VX.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as L}from"./PortfolioTextAreaInput-CtzxYnjp.js";const j={class:"form-body"},T={key:0,class:"form-error"},F={__name:"PortfolioForm",props:M({isDarkMode:Boolean,formError:String,formFields:Array},{isDarkMode:!1,formFields:()=>[]}),setup(e){const m=v(Object.fromEntries(e.formFields.map(r=>[r.model,""])));return(r,i)=>(a(),n("form",{onSubmit:i[0]||(i[0]=I(o=>r.$emit("submit",m.value),["prevent"])),class:S(["portfolio-form",{"portfolio-form--dark-mode":e.isDarkMode}])},[l(r.$slots,"form-header",{},void 0,!0),y("div",j,[(a(!0),n(P,null,h(e.formFields,(o,D)=>(a(),V($(o.component),N({key:D,ref_for:!0},o.props,{modelValue:m.value[o.model],"onUpdate:modelValue":b=>m.value[o.model]=b,"input-id":`input-${o.model}`}),null,16,["modelValue","onUpdate:modelValue","input-id"]))),128)),e.formError?(a(),n("div",T,_(e.formError),1)):E("",!0)]),l(r.$slots,"form-footer",{},()=>[x(B,{type:"submit",isDarkMode:e.isDarkMode,isPrimary:!0,text:"Submit"},null,8,["isDarkMode"])],!0)],34))}},U=C(F,[["__scopeId","data-v-15900f58"]]);F.__docgenInfo={exportName:"default",displayName:"PortfolioForm",description:"",tags:{},props:[{name:"isDarkMode",type:{name:"boolean"}},{name:"formError",type:{name:"string"}},{name:"formFields",type:{name:"array"}}],events:[{name:"submit"}],slots:[{name:"form-header"},{name:"form-footer"}],sourceFiles:["C:/Users/schoe/WebstormProjects/portfolio-components/src/components/PortfolioForm.vue"]};const G={title:"components/PortfolioForm",component:U,decorators:[],tags:["autodocs"],parameters:{backgrounds:{default:"Light"}},args:{isDarkMode:!1,formError:"There is an error with the values you have input.",formFields:[{component:d,model:"name",props:{label:"Name",inputId:"name-input"}},{component:d,model:"email",props:{label:"email",inputId:"email-input"}},{component:L,model:"message",props:{label:"message",inputId:"message-input"}}]}},s={},t={args:{isDarkMode:!0},parameters:{backgrounds:{default:"Dark"}}};var f,p,u;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,g,k;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isDarkMode: true
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const H=["FormLightMode","FormDarkMode"];export{t as FormDarkMode,s as FormLightMode,H as __namedExportsOrder,G as default};
