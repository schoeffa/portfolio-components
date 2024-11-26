import{m as h,c as N,d as i,e as L,T as _,o as n,f as b,j as y,p as B,F as P,n as z}from"./vue.esm-bundler-_ss_0Gkt.js";import{_ as C}from"./_PortfolioNavLink-AtcbkdKQ.js";const v={__name:"PortfolioNav",props:h({isDarkMode:Boolean,isVertical:Boolean,links:Array},{isDarkMode:!1,isVertical:!1}),setup(e){const x=N(()=>["portfolio-nav",{"portfolio-nav--dark-mode":e.isDarkMode,"portfolio-nav--vertical":e.isVertical}]);return(H,S)=>(n(),i(_,{name:"fade-slide",appear:""},{default:L(()=>[b("nav",{class:z(x.value)},[(n(!0),y(P,null,B(e.links,t=>(n(),i(C,{key:t.text,href:t.href,isDarkMode:e.isDarkMode,text:t.text},null,8,["href","isDarkMode","text"]))),128))],2)]),_:1}))}};v.__docgenInfo={exportName:"default",displayName:"PortfolioNav",description:"",tags:{},props:[{name:"isDarkMode",type:{name:"boolean"}},{name:"isVertical",type:{name:"boolean"}},{name:"links",type:{name:"array"}}],sourceFiles:["C:/Users/schoe/WebstormProjects/portfolio-components/src/components/PortfolioNav.vue"]};const E={title:"Components/PortfolioNav",component:v,decorators:[],tags:["autodocs"],parameters:{backgrounds:{default:"Light"}},args:{links:[{text:"Nav Link 1"},{text:"Nav Link 2"},{text:"Nav Link 3"}]}},a={args:{isDarkMode:!1,isVertical:!1}},r={args:{isDarkMode:!0,isVertical:!1},parameters:{backgrounds:{default:"Dark"}}},s={args:{isDarkMode:!1,isVertical:!0}},o={args:{isDarkMode:!0,isVertical:!0},parameters:{backgrounds:{default:"Dark"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isDarkMode: false,
    isVertical: false
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isDarkMode: true,
    isVertical: false
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,k,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDarkMode: false,
    isVertical: true
  }
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var D,M,V;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDarkMode: true,
    isVertical: true
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}`,...(V=(M=o.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const T=["HorizontalLightMode","HorizontalDarkMode","VerticalLightMode","VerticalDarkMode"];export{r as HorizontalDarkMode,a as HorizontalLightMode,o as VerticalDarkMode,s as VerticalLightMode,T as __namedExportsOrder,E as default};
