"use strict";(self.webpackChunkBalena_Labs=self.webpackChunkBalena_Labs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o="Device support",i={unversionedId:"device-support",id:"device-support",title:"Device support",description:"Recommended",source:"@site/docs/06-device-support.md",sourceDirName:".",slug:"/device-support",permalink:"/project-template/device-support",draft:!1,editUrl:"https://github.com/balena-labs-projects/project-template/edit/main/docs/06-device-support.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/project-template/architecture"},next:{title:"Support",permalink:"/project-template/support"}},p={},u=[{value:"Recommended",id:"recommended",level:2},{value:"Experimental",id:"experimental",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"device-support"},"Device support"),(0,a.kt)("h2",{id:"recommended"},"Recommended"),(0,a.kt)("p",null,"balenaSound has been developed and tested to work on the following devices:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Device Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default mode"),(0,a.kt)("th",{parentName:"tr",align:null},"Standalone mode (",(0,a.kt)("inlineCode",{parentName:"th"},"STANDALONE"),")"),(0,a.kt)("th",{parentName:"tr",align:null},"Multi-room mode (",(0,a.kt)("inlineCode",{parentName:"th"},"MULTI_ROOM"),")"),(0,a.kt)("th",{parentName:"tr",align:null},"Multi-room client mode (",(0,a.kt)("inlineCode",{parentName:"th"},"MULTI_ROOM_CLIENT"),")"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raspberry Pi (v1 / Zero / Zero W)",(0,a.kt)("sup",null,"1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STANDALONE")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2718 ",(0,a.kt)("sup",null,"2")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STANDALONE")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2718 ",(0,a.kt)("sup",null,"2")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 ",(0,a.kt)("sup",null,"3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MULTI_ROOM")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714 ",(0,a.kt)("sup",null,"4")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 ",(0,a.kt)("sup",null,"3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MULTI_ROOM")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Intel NUC"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MULTI_ROOM")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"balenaFin",(0,a.kt)("sup",null,"1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MULTI_ROOM")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes")),(0,a.kt)("p",null,"[1]",": We recommend using a DAC or USB sound card for these device types. See ",(0,a.kt)("a",{parentName:"p",href:"/project-template/audio-interfaces"},"audio interfaces")," for more details."),(0,a.kt)("p",null,"[2]",": Multi-room ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," functionality is disabled on Raspberry Pi 1 and 2 family devices due to performance constraints. They can however function in multi-room client mode in conjunction with another device that supports multi-room mode. Read more about modes of operation ",(0,a.kt)("a",{parentName:"p",href:"/project-template/usage#modes-of-operation"},"here"),"."),(0,a.kt)("p",null,"[3]",": There is a known issue where on the 64 bit version of balenaOS no output is coming through the audio jack/hdmi. See troubleshooting section ",(0,a.kt)("a",{parentName:"p",href:"https://sound.balenalabs.io/docs/support#troubleshooting"},"here")," (Scroll down to ",(0,a.kt)("inlineCode",{parentName:"p"},"No audio when using balenaOS 64 bit on Raspberry Pi 3's"),")"),(0,a.kt)("p",null,"[4]",": There is a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/raspberrypi/linux/issues/1444"},"known issue")," with all variants of the Raspberry Pi 3 where Bluetooth and WiFi interfere with each other. This will only impact the performance of balenaSound if you use a ",(0,a.kt)("strong",{parentName:"p"},"Pi 3 as the master server to do multi-room bluetooth streaming"),", resulting in stuttering audio (Airplay and Spotify Connect will work fine, as well as all streaming methods with multi-room disabled). In this cases we recommend the use of a Raspberry Pi 4 as the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," server or a Pi 3 with a bluetooth dongle."),(0,a.kt)("h2",{id:"experimental"},"Experimental"),(0,a.kt)("p",null,"Devices with experimental support ",(0,a.kt)("strong",{parentName:"p"},"have been tested to work"),", though we have found compelling reasons for not including them as first-class citizens of balenaSound. If you are shopping for parts, we do not recommend you buy a device from this list."),(0,a.kt)("p",null,"Some of the reasons we've flagged devices as experimental include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"device requires multiple extra hardware pieces (USB dongles, adapters, etc)"),(0,a.kt)("li",{parentName:"ul"},"device has known bugs that prevent some features to work properly and the timeline for a fix is not clear")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Device Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Standalone mode (",(0,a.kt)("inlineCode",{parentName:"th"},"STANDALONE"),")"),(0,a.kt)("th",{parentName:"tr",align:null},"Multi-room mode (",(0,a.kt)("inlineCode",{parentName:"th"},"MULTI_ROOM"),")"),(0,a.kt)("th",{parentName:"tr",align:null},"Multi-room client mode (",(0,a.kt)("inlineCode",{parentName:"th"},"MULTI_ROOM_CLIENT"),")"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NVIDIA Jetson Nano"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"- Requires WiFi USB dongle (or ethernet cable)",(0,a.kt)("br",null),"- Requires Bluetooth USB dongle.",(0,a.kt)("br",null),"- No built-in audio support (see ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/balenablocks/audio/issues/35"},"this")," bug). As a workaround, requires USB or DAC soundcard.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BeagleBone Black"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"- Requires WiFi USB dongle (or ethernet cable)",(0,a.kt)("br",null),"- Requires Bluetooth USB dongle.",(0,a.kt)("br",null),"- Requires USB sound card",(0,a.kt)("br",null),"- Requires USB hub as it has a single USB port")))))}m.isMDXComponent=!0}}]);