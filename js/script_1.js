window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme17"]=window.wsb["Theme17"]||window.radpack("@widget/LAYOUT/bs-layout17-Theme-publish-Theme").then(function(t){return new t.default();});
window.onMembershipLogout=function(){window.location.assign("/m/logout")},window.initMembership=function(e,i){var n={membershipSignOut:e+"-membership-sign-out",container:e+(i?"-navId-mobile":"-utility-menu"),signedOut:i?".membership-links-logged-out":".membership-icon-logged-out",signedIn:i?".membership-links-logged-in":" .membership-icon-logged-in",signedInHeaderBlock:".membership-header-logged-in"},o=document.getElementById(n.container),t=document.getElementById(n.membershipSignOut);if(!o||!t)return setTimeout(()=>window.initMembership(e,i),500);t.onclick=window.onMembershipLogout;for(var s=o.querySelector(n.signedOut),l=o.querySelector(n.signedIn),r=i&&o.querySelector(n.signedInHeaderBlock),d=void 0,m=document.cookie.split(";"),a=0;a<m.length;a++){for(var g=m[a];" "===g.charAt(0);)g=g.substring(1,g.length);if(0===g.indexOf("info_c2=")){var c=g.substring("info_c2=".length,g.length);d=c&&JSON.parse(decodeURIComponent(c))}}var p=d&&d.contactEmail;if(d){s.style.display="none",l.style.display="block";var u=o.querySelector("#"+e+"-membership-header");if(i){var h=d&&d.nameFirst,y=d&&d.nameLast;r.style.display="block",h&&y&&(u.textContent=[h,y].join(" "))}var b=o.querySelector("#"+e+"-membership-email");b&&(b.textContent=p,b.style["text-overflow"]="ellipsis",b.style.overflow="hidden",b.style["white-space"]="nowrap",u.style["font-weight"]="bold")}else i&&(r.style.display="none"),l.style.display="none",s.style.display="block"};
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,c;function s(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(c=document.getElementById(o),!c)return;n=document.createElement("div"),n.style.cssText="width:100%;",c.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),c.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",s,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i&&i.removeEventListener("click",s,{useCapture:!0}),c&&(c.removeChild(n),c.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-108742\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"cinzel\",\"cantarell\",\"\"],\"colors\":[\"#671CCA\"],\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"a4232929-2717-4d90-b6e5-ae17fae50651\":{\"pageId\":\"488ebc70-9f9e-4a19-a317-fc6a62336674\",\"routePath\":\"/\"},\"acbfc712-f2d5-449b-9956-9c24b85f2646\":{\"pageId\":\"6ce4c56f-4475-4fd1-9531-f09f2a19df23\",\"widgetId\":null,\"routePath\":\"/dummy\"}},\"isHomepage\":true,\"navigationMap\":{\"7bb68fd2-d74c-45d5-a3a5-a6e38dccb485\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"7bb68fd2-d74c-45d5-a3a5-a6e38dccb485\",\"href\":\"/m/no-access\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"NO_ACCESS\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5cb5091e-8db8-4a20-9497-f5afcd5e87c5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5cb5091e-8db8-4a20-9497-f5afcd5e87c5\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":false,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"df4593ae-e429-4454-b647-c5c73b08a857\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"df4593ae-e429-4454-b647-c5c73b08a857\",\"href\":\"/m/create-account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"b059655f-5954-4611-960c-c40ab9ae20ef\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b059655f-5954-4611-960c-c40ab9ae20ef\",\"href\":\"/m/reset\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"RESET_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6e80ac87-1d5c-495c-be9c-84507dd62915\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6e80ac87-1d5c-495c-be9c-84507dd62915\",\"href\":\"/m/login\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"LOGIN\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"68b381df-35c8-4826-bc03-c7b24531a2cd\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"68b381df-35c8-4826-bc03-c7b24531a2cd\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"488ebc70-9f9e-4a19-a317-fc6a62336674\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"488ebc70-9f9e-4a19-a317-fc6a62336674\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"23bfb00c-946b-4853-881d-8f97eea5aa36\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"23bfb00c-946b-4853-881d-8f97eea5aa36\",\"href\":\"/m/account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":true,\"tags\":[\"SHOW_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ab805213-226b-46b3-9a63-fd6aacee2a79\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ab805213-226b-46b3-9a63-fd6aacee2a79\",\"href\":\"/m/create\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6ce4c56f-4475-4fd1-9531-f09f2a19df23\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6ce4c56f-4475-4fd1-9531-f09f2a19df23\",\"name\":\"Dummy\",\"href\":\"/dummy\",\"target\":\"\",\"visible\":false,\"isSectionLink\":false,\"requiresAuth\":true,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"68a7592d-fa94-4c1c-b37e-4c7025379dbe\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"68a7592d-fa94-4c1c-b37e-4c7025379dbe\",\"name\":\"Terms & Conditions\",\"href\":\"/terms-%26-conditions\",\"target\":\"\",\"visible\":false,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#671CCA\",\"meta\":{\"primary\":\"rgb(103, 28, 202)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"cinzel\",\"description\":\"\",\"tags\":[\"serif\",\"elegant\"],\"meta\":{\"order\":8,\"primary\":{\"id\":\"cinzel\",\"name\":\"Cinzel\",\"url\":\"//fonts.googleapis.com/css?family=Cinzel:400&display=swap\",\"family\":\"'Cinzel', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"locales\":[\"tr-TR\",\"vi-VN\",\"pl-PL\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"serif\"}}}]},\"alternate\":{\"id\":\"cantarell\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":1.5,\"alternate\":{\"id\":\"cantarell\",\"name\":\"Cantarell\",\"url\":\"//fonts.googleapis.com/css?family=Cantarell:400,400i,700,700i&display=swap\",\"family\":\"'Cantarell', Arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"vi-VN\"],\"meta\":{\"alternate\":{\"family\":\"Arial, sans-serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, Meiryo, '\u30E1\u30A4\u30EA\u30AA', sans-serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, '\uAD74\uB9BC', Gulim, '\uAD74\uB9BC\uCCB4', GulimChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, BrowalliaUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, '\u4E2D\u6613\u9ED1\u4F53', SimHei, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, '\u5FAE\u8EDF\u6B63\u9ED1\u9AD4', Microsoft JhengHei, sans-serif\"}}}]}}},\"theme\":\"Theme17\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-108740-navId-mobile\",\"uniqueId\":\"n-108740\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-108748\",\"targetId\":\"logo-text-108749\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-108758\",\"targetId\":\"logo-text-108759\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-108760\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navContainer-108755\",\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateSplitNavSpacing"]=function(e){let{containerId:a,navId:n,splitNavId:i,logoImageId:l,inlineUtilitiesMenu:o,forceBreakpoint:r}=e;let c,s,g,p,d,u,y,m;const b=document.getElementById(n),v=document.getElementById(i);function h(){if(s||!b||!T(b))return;p=Array.from(b.children),g=Array.from(b.children),g.forEach(E),o&&(d=g.pop(),M(d)),u=g.pop();const e=u.querySelector("ul");y=e?Array.from(e.children):[],b.style.whiteSpace="normal",m=T(b.parentElement,"floor"),b.style.whiteSpace="nowrap",window.requestAnimationFrame(I)}function I(){const e=d&&d.querySelector("[data-ux='Pipe']");e&&R(e);const t=g,a=t.map((e=>T(e)));const n=d?T(d):0;let i=0,l=a.concat(n).findIndex((e=>{if(i+e>m)return e;i+=e}));l<0&&(l=a.length);const o=a.slice(0,l);let r,c,s=a.slice(l);if(k(s)+n<m)r=!1,c=0;else{r=!0,c=T(u);let e=0,t=c+n;s.some((a=>{if(t+=a,t>=m)return!0;e++})),s=s.slice(0,e)}for(;o.length>1&&B(o,s.concat([c,n]).filter(Boolean));)s.unshift(o.pop());const b=Array.from(v.children);if(f(b,0,o.length,M),f(t,0,o.length,R),f(y,0,o.length,R),f(b,o.length,o.length+s.length,R),f(t,o.length,o.length+s.length,M),f(y,o.length,o.length+s.length,R),f(b,o.length+s.length,t.length,R),f(t,o.length+s.length,t.length,R),f(y,o.length+s.length,t.length,M),r?M(u):R(u),function(){const e=p.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e){t.find((e=>"visible"===e.style.visibility))&&M(e)}window.dispatchEvent(new Event("NavItemsResized"))}function w(){window.innerWidth<1024&&r&&r!==t.Q||(window.clearTimeout(c),c=window.setTimeout(h,50))}function f(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function E(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function R(e){e.style.display="none",e.classList.remove("visible")}function M(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function k(e){return e.reduce(((e,t)=>e+t),0)}function T(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function B(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=k(e),i=k(t);return Math.abs(n-i)>Math.abs(n-a-(i+a))}if(w(),window.ResizeObserver){const e=new window.ResizeObserver(w);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{s=!0,e.disconnect()}}return window.addEventListener("resize",w,{passive:!0}),()=>{s=!0,window.removeEventListener("resize",w,{passive:!0})}};
window.wsb["CalculateSplitNavSpacing"](JSON.parse("{\"navId\":\"n-108740108754-navId-2\",\"inlineUtilitiesMenu\":true,\"containerId\":\"navContainer-108755\",\"splitNavId\":\"n-108740108753-navId-1\"}"));
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/LAYOUT/bs-FlyoutMenu-Component',props:JSON.parse("{\"toggleId\":\"n-108740108763-membershipId-loggedout\",\"renderCustomIcon\":{\"name\":\"account\",\"size\":28,\"minTarget\":true},\"overrideIconStyle\":{},\"dataAid\":\"MEMBERSHIP_ICON_DESKTOP_RENDERED\",\"hasHover\":true,\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"UtilitiesMenu\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-FlyoutMenu-Component"},false);
Core.utils.deferBootstrap({elId:'bs-4',componentName:'@widget/LAYOUT/bs-FlyoutMenu-Component',props:JSON.parse("{\"toggleId\":\"n-108740108763-membershipId\",\"renderCustomIcon\":{\"name\":\"account\",\"size\":28,\"minTarget\":true},\"overrideIconStyle\":{},\"dataAid\":\"MEMBERSHIP_ICON_DESKTOP_RENDERED\",\"hasHover\":true,\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fea8c75f-e208-47bd-9f71-29fc2f4fb54a\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"UtilitiesMenu\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-FlyoutMenu-Component"},false);
!function(){window.initMembership('n-108740108763',false);}();
!function(){window.initMembership('n-108740',true);}();
window.wsb['context-bs-5']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"cinzel\",\"cantarell\",\"\"],\"colors\":[\"#671CCA\"],\"fontScale\":\"medium\",\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"a4232929-2717-4d90-b6e5-ae17fae50651\":{\"pageId\":\"488ebc70-9f9e-4a19-a317-fc6a62336674\",\"routePath\":\"/\"},\"acbfc712-f2d5-449b-9956-9c24b85f2646\":{\"pageId\":\"6ce4c56f-4475-4fd1-9531-f09f2a19df23\",\"widgetId\":null,\"routePath\":\"/dummy\"}},\"isHomepage\":true,\"navigationMap\":{\"7bb68fd2-d74c-45d5-a3a5-a6e38dccb485\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"7bb68fd2-d74c-45d5-a3a5-a6e38dccb485\",\"href\":\"/m/no-access\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"NO_ACCESS\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5cb5091e-8db8-4a20-9497-f5afcd5e87c5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5cb5091e-8db8-4a20-9497-f5afcd5e87c5\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":false,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"df4593ae-e429-4454-b647-c5c73b08a857\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"df4593ae-e429-4454-b647-c5c73b08a857\",\"href\":\"/m/create-account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"b059655f-5954-4611-960c-c40ab9ae20ef\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b059655f-5954-4611-960c-c40ab9ae20ef\",\"href\":\"/m/reset\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"RESET_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6e80ac87-1d5c-495c-be9c-84507dd62915\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6e80ac87-1d5c-495c-be9c-84507dd62915\",\"href\":\"/m/login\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"LOGIN\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"68b381df-35c8-4826-bc03-c7b24531a2cd\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"68b381df-35c8-4826-bc03-c7b24531a2cd\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"488ebc70-9f9e-4a19-a317-fc6a62336674\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"488ebc70-9f9e-4a19-a317-fc6a62336674\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"23bfb00c-946b-4853-881d-8f97eea5aa36\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"23bfb00c-946b-4853-881d-8f97eea5aa36\",\"href\":\"/m/account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":true,\"tags\":[\"SHOW_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ab805213-226b-46b3-9a63-fd6aacee2a79\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ab805213-226b-46b3-9a63-fd6aacee2a79\",\"href\":\"/m/create\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6ce4c56f-4475-4fd1-9531-f09f2a19df23\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6ce4c56f-4475-4fd1-9531-f09f2a19df23\",\"name\":\"Dummy\",\"href\":\"/dummy\",\"target\":\"\",\"visible\":false,\"isSectionLink\":false,\"requiresAuth\":true,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"68a7592d-fa94-4c1c-b37e-4c7025379dbe\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"68a7592d-fa94-4c1c-b37e-4c7025379dbe\",\"name\":\"Terms & Conditions\",\"href\":\"/terms-%26-conditions\",\"target\":\"\",\"visible\":false,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#671CCA\",\"meta\":{\"primary\":\"rgb(103, 28, 202)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"cinzel\",\"description\":\"\",\"tags\":[\"serif\",\"elegant\"],\"meta\":{\"order\":8,\"primary\":{\"id\":\"cinzel\",\"name\":\"Cinzel\",\"url\":\"//fonts.googleapis.com/css?family=Cinzel:400&display=swap\",\"family\":\"'Cinzel', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"locales\":[\"tr-TR\",\"vi-VN\",\"pl-PL\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"serif\"}}}]},\"alternate\":{\"id\":\"cantarell\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":1.5,\"alternate\":{\"id\":\"cantarell\",\"name\":\"Cantarell\",\"url\":\"//fonts.googleapis.com/css?family=Cantarell:400,400i,700,700i&display=swap\",\"family\":\"'Cantarell', Arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"vi-VN\"],\"meta\":{\"alternate\":{\"family\":\"Arial, sans-serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, Meiryo, '\u30E1\u30A4\u30EA\u30AA', sans-serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, '\uAD74\uB9BC', Gulim, '\uAD74\uB9BC\uCCB4', GulimChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, BrowalliaUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, '\u4E2D\u6613\u9ED1\u4F53', SimHei, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Cantarell, '\u5FAE\u8EDF\u6B63\u9ED1\u9AD4', Microsoft JhengHei, sans-serif\"}}}]}}},\"theme\":\"Theme17\"}");
Core.utils.deferBootstrap({elId:'bs-5',componentName:'@widget/CONTACT/bs-Component',props:JSON.parse("{\"structuredHours\":[{\"hour\":{\"dayOfWeek\":1,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"dayOfWeek\":2,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"dayOfWeek\":3,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"dayOfWeek\":4,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"dayOfWeek\":5,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":false}},{\"hour\":{\"dayOfWeek\":6,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":true}},{\"hour\":{\"dayOfWeek\":0,\"openTime\":\"09:00\",\"closeTime\":\"17:00\",\"byAppointmentOnly\":false,\"closed\":true}}],\"staticContent\":{\"today\":\"Today\",\"submitButtonLoadingLabel\":\"Sending\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"byAppointment\":\"By Appointment\",\"defaultSubmitButtonLabel\":\"Send\",\"unsupportedFileType\":\"Unsupported file type\",\"maxFileCountLimit\":\"Only {0} files are allowed\",\"closed\":\"Closed\",\"attachments\":\"Attachments\",\"termsOfSerivce\":\"Terms of Service\",\"attachFiles\":\"Attach Files\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"mapCTA\":\"Get directions\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"openToday\":\"Open today\",\"couldNotAttach\":\"Could not attach the following file(s)\",\"totalFileSizeLimit\":\"Total files would exceed {0} limit\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"File exceeds {0} limit\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\"},\"collapsible\":false,\"widgetId\":\"73f9be64-cff5-495e-812b-d91da0782fb4\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":4,\"widgetId\":\"73f9be64-cff5-495e-812b-d91da0782fb4\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact7\",\"group\":\"Content\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-5',radpack:"@widget/CONTACT/bs-Component"},false);
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"7cd00b61-dea4-4f02-943a-674d6d0fc4bc\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
Core.utils.renderBootstrap({elId:'bs-6',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{brandId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"YogShala\",\"reamazeBrandId\":null,\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":false,\"domainName\":\"yogsehoga.online\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"b58bc530-5c88-11ef-8331-008cfaff3e74\",\"websiteId\":\"22d71b29-2144-405e-8b20-494c5ca9c985\",\"id\":\"f7633217-fca2-4996-b054-e0821ac31cba\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"EMAIL\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeStarter1\":\"I have a question\",\"reamazeThemeColor\":\"#671CCA\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"https://isteam.wsimg.com/studio-projects/over-projects-api/logos/ad2c8407-eac8-4abf-bb11-fb31b0bde9a1/06a342d4-13cd-4a2d-a8a0-d8c409321b2e/logo.jpg/:/gis\",\"widgetId\":\"f7633217-fca2-4996-b054-e0821ac31cba\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"f7633217-fca2-4996-b054-e0821ac31cba\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-5',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-108739').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_businessCategory":"yoga","wam_site_theme":"layout17","wam_site_locale":"en-IN","wam_site_fontPack":"cinzel","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"personal","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);