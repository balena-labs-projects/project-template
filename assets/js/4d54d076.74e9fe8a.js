"use strict";(self.webpackChunkBalena_Labs=self.webpackChunkBalena_Labs||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i="Contributing",l={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"balenaSound was created as a hack friday project and has since grown to be a fully featured product with multiple community contributions. If you are interested in contributing to balenaSound this document will help you get started.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/project-template/contributing",draft:!1,editUrl:"https://github.com/balena-labs-projects/project-template/edit/main/docs/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Support",permalink:"/project-template/support"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Commit guidelines",id:"commit-guidelines",level:2},{value:"Commit structure",id:"commit-structure",level:3},{value:"Commit examples",id:"commit-examples",level:3},{value:"PR guidelines",id:"pr-guidelines",level:2},{value:"PR approval",id:"pr-approval",level:3},{value:"Commit squashing",id:"commit-squashing",level:3},{value:"balena-ci bot",id:"balena-ci-bot",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"balenaSound was created as a ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/blog/hack-friday-september/"},"hack friday")," project and has since grown to be a fully featured product with multiple community contributions. If you are interested in contributing to balenaSound this document will help you get started."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Make sure you checkout our ","[architecture][architecture.md]"," guide, which aims to explain how all pieces fit together. It's a good starting point for understanding how we designed and built balenaSound."),(0,o.kt)("p",null,"Another way to improve how you use and contribute to balenaSound is to take our ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/docs/learn/more/masterclasses/overview/"},"masterclasses"),". Each lesson is a self-contained, deep walkthrough on core skills to be successful with your next edge project. Check them out at our ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/docs/learn/more/masterclasses/overview/"},"docs"),"."),(0,o.kt)("h2",{id:"commit-guidelines"},"Commit guidelines"),(0,o.kt)("p",null,"We enforce certain rules on commits with the following goals in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Be able to reliably auto-generate the ",(0,o.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," ",(0,o.kt)("em",{parentName:"li"},"without")," any human intervention."),(0,o.kt)("li",{parentName:"ul"},"Be able to automatically and correctly increment the semver version number based on what was done since the last release."),(0,o.kt)("li",{parentName:"ul"},"Be able to get a quick overview of what happened to the project by glancing over the commit history."),(0,o.kt)("li",{parentName:"ul"},"Be able to automatically reference relevant changes from a dependency upgrade.")),(0,o.kt)("p",null,"Our CI will run checks to ensure this guidelines are followed and won't allow merging contributions that don't adhere to them. Version number and changelog are automatically handled by the CI build flow after a pull request is merged. You only need to worry about the commit itself."),(0,o.kt)("h3",{id:"commit-structure"},"Commit structure"),(0,o.kt)("p",null,"Each commit message should consist of a header a body and a footer, structured in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<scope (optional)>: <subject (mandatory)>\n--BLANK LINE--\n(optional) <body>\n--BLANK LINE--\n(optional) Connects-to: #issue-number\n(mandatory) Change-type: major | minor | patch\n(optional) Signed-off-by: Foo Bar <foobar@balena.io>\n")),(0,o.kt)("p",null,"Note that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Blank lines are required to separate header from body and body from footer. You don't need to add two blank lines if you don't add a body."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scope"),": If your commit touches a well defined component/part/service please addthe scope tag to clarify. Some examples: ",(0,o.kt)("inlineCode",{parentName:"li"},"docs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"airplay"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"multi-room"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subject"),": The subject should contain a short description of the change. Use the imperative, present tense."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"body"),": A detailed description of changes being made and reasoning if necessary. This may contain several paragraphs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Connects-to"),": If your commit fixes or is connected to an existing issue, link it by adding this tag with ",(0,o.kt)("inlineCode",{parentName:"li"},"#issue-number"),". Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"Connects-to: #123")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Change-type"),": At least one of your commits on a PR needs to have this tag. You have the flexibility, and it's good practise, to use this tag in as many commits as you see fit; in the end, the resulting change type for the scope of the PR will be folded down to the biggest one as marked in the commits (",(0,o.kt)("inlineCode",{parentName:"li"},"major>minor>patch"),"). Our version numbering adheres to ",(0,o.kt)("a",{parentName:"li",href:"http://semver.org/"},"Semantic Versioning"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Signed-off-by"),": Sign your commits by providing your full name and email address in the format: ",(0,o.kt)("inlineCode",{parentName:"li"},"Name Surname <email@something.com>"),". ",(0,o.kt)("em",{parentName:"li"},"This is an optional tag."))),(0,o.kt)("h3",{id:"commit-examples"},"Commit examples"),(0,o.kt)("p",null,"Here are some examples of valid commits:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Big new feature")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"multi-room: Add multi-room feature\n\nThis feature adds multi-room audio streaming to balenaSound.\nNo breaking changes were made, but considering this a major version bump since it's a big feature and all services were affected.\n\nNew services added:\n- snapcast-server\n- snapcast-client\n- fleet-supervisor\n\nOther changes:\n- By default, all audio services now stream to a fifo pipe file instead of alsa backend.\n- Multi-room can be disabled via env var DISABLE_MULTI_ROOM.\n\nChange-type: major\nSigned-off-by: Tom\xe1s Migone <tomas@balena.io>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Simple change")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Remove mplayer, use WAV notification sounds\n\nChange-type: patch\nSigned-off-by: Chris Crocker-White <chriscw@balena.io>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fix an issue")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fix spotify password error if it has spaces\n\nChange-type: patch\nConnects-to: #90\n")),(0,o.kt)("h2",{id:"pr-guidelines"},"PR guidelines"),(0,o.kt)("p",null,"Pull requests are the only way of pushing your code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch. When creating a PR make sure you choose a short but sensical PR title and add a few lines describing your contribution."),(0,o.kt)("h3",{id:"pr-approval"},"PR approval"),(0,o.kt)("p",null,"The PR will only be able to be merged only after:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It has been approved at least by one ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balena-labs-projects/balena-sound/blob/master/.github/CODEOWNERS"},"codeowner")),(0,o.kt)("li",{parentName:"ul"},"All the checks and tests carried out by our CI are passed")),(0,o.kt)("h3",{id:"commit-squashing"},"Commit squashing"),(0,o.kt)("p",null,"If your PR contains multiple commits you might be asked to rebase your PR branch on top of the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," and squash your commits before merging. This can be achieved with the following steps, assuming that the current branch is that to be merged to master in your local file system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout master\ngit pull\ngit checkout your-branch\ngit rebase -i master\n")),(0,o.kt)("p",null,"At this point ",(0,o.kt)("inlineCode",{parentName:"p"},"git rebase")," will prompt you to choose an action for each commit and resolve any conflicts. You should ",(0,o.kt)("inlineCode",{parentName:"p"},"pick")," one commit, ",(0,o.kt)("inlineCode",{parentName:"p"},"reword")," it if necessary and ",(0,o.kt)("inlineCode",{parentName:"p"},"squash")," the rest. The reason behind using rebase is that it makes for tidier git branching history. Push the rebased PR branch to the remote and you should be good to go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git push --force-with-lease origin your-branch\n")),(0,o.kt)("p",null,"We strongly encourage using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--force-with-lease")," option instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," when performing git push to a repository. The reason is that ",(0,o.kt)("inlineCode",{parentName:"p"},"git push --force")," can accidentally overwrite work that has been pushed by a team member in the meantime."),(0,o.kt)("h2",{id:"balena-ci-bot"},"balena-ci bot"),(0,o.kt)("p",null,"If for some reason it looks like the checks and tests for the PR have failed, add a comment to the PR with ",(0,o.kt)("inlineCode",{parentName:"p"},"@balena-ci retest"),". This should force balenaCI to re-run all the tests again."))}p.isMDXComponent=!0}}]);