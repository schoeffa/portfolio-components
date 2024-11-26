import{m as A,g as G,j as m,k as u,l as H,e as J,T as K,n as c,o as g,f as Q,q as X}from"./vue.esm-bundler-_ss_0Gkt.js";const z={__name:"PortfolioTooltip",props:A({isDarkMode:Boolean,position:String},{isDarkMode:!1,position:"top"}),setup(l){const p=G(!1),F=["portfolio-tooltip-wrapper",{"portfolio-tooltip-wrapper--dark-mode":l.isDarkMode}],I=["tooltip-arrow",`tooltip-${l.position}`],O=["portfolio-tooltip",`tooltip-${l.position}`],U=()=>{p.value=!0},W=()=>{p.value=!1};return(d,Y)=>(g(),m("div",{class:c(F),onMouseenter:U,onMouseleave:W},[u(d.$slots,"default"),H(K,{name:"fade"},{default:J(()=>[p.value?(g(),m("div",{key:0,class:c(O)},[u(d.$slots,"tooltip"),Q("div",{class:c(I)})])):X("",!0)]),_:3})],32))}};z.__docgenInfo={exportName:"default",displayName:"PortfolioTooltip",description:"",tags:{},props:[{name:"isDarkMode",type:{name:"boolean"}},{name:"position",type:{name:"string"}}],slots:[{name:"default"},{name:"tooltip"}],sourceFiles:["C:/Users/schoe/WebstormProjects/portfolio-components/src/components/PortfolioTooltip.vue"]};const ee={title:"components/PortfolioTooltip",component:z,decorators:[()=>({template:'<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; font-family: Neuropol, sans-serif"><story /></div>'})],tags:["autodocs"],parameters:{backgrounds:{default:"Light"},slots:{default:{description:"Tooltip trigger",template:"<p>Mouseover to view tooltip</p>"},tooltip:{descriptions:"Tooltip Content",template:"<p>Tooltip Content</p>"}}}},e={args:{position:"top"}},o={args:{position:"right"}},t={args:{position:"bottom"}},r={args:{position:"left"}},s={args:{isDarkMode:!0,position:"top"},decorators:[()=>({template:'<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'})],parameters:{backgrounds:{default:"Dark"}}},a={args:{isDarkMode:!0,position:"right"},decorators:[()=>({template:'<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'})],parameters:{backgrounds:{default:"Dark"}}},i={args:{isDarkMode:!0,position:"bottom"},decorators:[()=>({template:'<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'})],parameters:{backgrounds:{default:"Dark"}}},n={args:{isDarkMode:!0,position:"left"},decorators:[()=>({template:'<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'})],parameters:{backgrounds:{default:"Dark"}}};var f,h,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    position: 'top'
  }
}`,...(k=(h=e.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var y,T,M;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    position: 'right'
  }
}`,...(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var D,v,b;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,L,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    position: 'left'
  }
}`,...(x=(L=r.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var j,S,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isDarkMode: true,
    position: 'top'
  },
  decorators: [() => ({
    template: '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
  })],
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var B,N,P;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDarkMode: true,
    position: 'right'
  },
  decorators: [() => ({
    template: '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
  })],
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}`,...(P=(N=a.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,R,V;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isDarkMode: true,
    position: 'bottom'
  },
  decorators: [() => ({
    template: '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
  })],
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var $,E,q;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isDarkMode: true,
    position: 'left'
  },
  decorators: [() => ({
    template: '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
  })],
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}`,...(q=(E=n.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const oe=["TooltipLightModeTop","TooltipLightModeRight","TooltipLightModeBottom","TooltipLightModeLeft","TooltipDarkModeTop","TooltipDarkModeRight","TooltipDarkModeBottom","TooltipDarkModeLeft"];export{i as TooltipDarkModeBottom,n as TooltipDarkModeLeft,a as TooltipDarkModeRight,s as TooltipDarkModeTop,t as TooltipLightModeBottom,r as TooltipLightModeLeft,o as TooltipLightModeRight,e as TooltipLightModeTop,oe as __namedExportsOrder,ee as default};
