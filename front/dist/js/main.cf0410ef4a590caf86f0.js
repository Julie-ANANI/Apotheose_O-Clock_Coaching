(self.webpackChunkreact_modele=self.webpackChunkreact_modele||[]).push([[179],{6734:(e,t,n)=>{"use strict";var r=n(7294),a=n(3727),o=n(3935),i=(n(7327),n(2222),n(2526),n(1817),n(9753),n(1539),n(2165),n(6992),n(8783),n(3948),n(7042),n(8309),n(1038),n(9669)),l=n.n(i),c=n(5977),s=(n(6699),n(2023),n(1249),n(284)),u=n(416);const m=function(e){var t=e.navlinks,n=e.searchedText,o=e.setSearchedText,i=e.activeItem,l=e.setActiveItem,c=e.history,m=e.themes,d=e.searchedThemes,f=e.setSearchedThemes,p=function(e,t){var n=t.name;console.log("On a cliqué",e),l(n)};return(0,r.useEffect)((function(){!function(){console.log("GET SEARCHED THEME");var e=[];if(console.log(m),n.length>0){var t=n.toLowerCase();console.log("ON EST DANS LE IF DE GET SEARCHED THEME"),l("parcours coaching"),e=m.filter((function(e){var n=e.title.toLowerCase();return console.log(n),n.includes(t)})),f(e)}else f(m);console.log(d)}()}),[n,m]),r.createElement("div",{className:"navbar"},r.createElement(s.Z,{secondary:!0},t.map((function(e){return r.createElement(s.Z.Item,{onClick:p,key:e.label,as:a.rU,to:e.route,className:"header-menu-item",name:e.label,active:i===e.label})})),r.createElement(s.Z.Menu,{position:"right"},r.createElement(s.Z.Item,null,r.createElement(u.Z,{type:"text",className:"searchbar",icon:"search",placeholder:"Rechercher un thème...",value:n,onChange:function(e){console.log("il y a du changement par ici"),o(e.target.value),console.log(n),c.push("/parcours-coaching")}})),r.createElement(s.Z.Item,{as:"a",className:"header-menu-item navbar-name"},"Michel M."),r.createElement(s.Z.Item,{className:"header-menu-item deconnexion",name:"deconnexion",active:"deconnexion"===i,onClick:p})),r.createElement("div",{className:"logo-menu"})))},d=n.p+"images/753ba13fc67a76e0eefa7935dbec797b.svg";var f=n(345),p=n(6763),h=n(9445);const g=function(e){var t=e.titre;return r.createElement("div",null,r.createElement(f.Z,{hidden:!0}),r.createElement(f.Z,{hidden:!0}),r.createElement(f.Z,{hidden:!0}),r.createElement(f.Z,{hidden:!0}),r.createElement(f.Z,{hidden:!0}),r.createElement(p.Z,{src:d,size:"medium",centered:!0,className:"logo-inpage"}),r.createElement(h.Z,{className:"header-accueil",as:"h1",textAlign:"center"},t),r.createElement(f.Z,{hidden:!0}),r.createElement(f.Z,{hidden:!0}))};const y=function(){return r.createElement("div",{className:"accueil"},r.createElement("div",{className:"img-container"},r.createElement("div",{className:"img-accueil"})),r.createElement("div",{className:"text-accueil-container"},r.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eveniet eum provident dolore, impedit eius mollitia quod corporis molestias similique, asperiores eos et sunt officiis sint cupiditate itaque beatae repellat. Molestiae fuga sequi eaque dolorum. Facilis tempore sint hic. Esse quos cupiditate magnam numquam expedita facilis? Suscipit tempora cupiditate ducimus alias magni temporibus sint est. Recusandae consequuntur eius dignissimos autem. Blanditiis dolorem itaque, nobis consectetur voluptates commodi minus vitae veniam error repellendus. Nulla culpa tempora consequatur, repellendus cupiditate omnis facere reiciendis sit vero id aliquam neque reprehenderit, recusandae, necessitatibus molestias? Odit, fuga eius harum iusto consequatur ipsum excepturi officia incidunt similique deleniti unde nam sunt neque magni quidem cupiditate delectus in! Asperiores adipisci porro aliquam reiciendis sunt sapiente necessitatibus quaerat! Inventore nemo, repellat est quidem nulla earum itaque? Nihil hic tempora, aspernatur reprehenderit excepturi nostrum doloremque officiis veniam voluptatibus magnam quas, error vel iusto sint animi eos laudantium corporis possimus.")))};n(9601);var v=n(3626),E=n(2835);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const Z=function(e){var t=e.id,n=e.title,a=e.base_url,o=e.userInteraction,i=e.userId,c=b((0,r.useState)(0),2),s=c[0],u=c[1];return(0,r.useEffect)((function(){console.log("COMPUTE THEME SCORE"),l().get("".concat(a,"/v1/api/students/").concat(i,"/themes/").concat(t,"/score")).then((function(e){console.log("SCORE",e.data),u(e.data)}))}),[o]),r.createElement(v.Z,{fluid:!0,className:"theme-card"},r.createElement(v.Z.Content,{className:"theme-card-header",header:n}),r.createElement(v.Z.Content,{extra:!0},r.createElement(E.Z,{percent:s.bytheme_ratio,indicating:!0,progress:!0})))};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const C=function(e){var t=e.themes,n=e.userId,o=e.userInteraction,i=e.generalScore,l=e.setGeneralScore,c=e.userMissionsCompleted,s=e.allMissions,u=e.base_url,m=e.searchedText;console.log(m);return(0,r.useEffect)((function(){!function(){console.log("COMPUTE GENERAL SCORE");var e=Math.round(c.length/s.length*100);console.log("userMissionsCompleted",c),l(e)}()})),r.createElement("div",{className:"student-dashboard"},r.createElement("div",{className:"progress-container"},r.createElement(E.Z,{className:"general-progress-bar",percent:i,indicating:!0,progress:!0}),r.createElement("span",{className:"progressbar-message"},"Message qui évolue en fonction de l'état d'avancement")),r.createElement(f.Z,{hidden:!0}),r.createElement(f.Z,{hidden:!0}),r.createElement(v.Z.Group,{centered:!0},t.map((function(e){return r.createElement("div",{key:e.id,className:"theme-card-container"},r.createElement(a.rU,{name:e.id,to:"/theme/".concat(e.id)},r.createElement(Z,A({name:e.id},e,{base_url:u,userInteraction:o,userId:n}))))}))))};n(9826),n(1058);var I=n(1719),j=n(760),O=n(5382);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const w=function(e){var t=e.id,n=e.title,a=e.advice,o=e.userId,i=e.userInteraction,c=e.setUserInteraction,s=T((0,r.useState)(-1),2),u=s[0],m=s[1],d=T((0,r.useState)(!1),2),f=d[0],p=d[1],h=function(e,n){console.log("on a cliqué sur la checkbox"),n.checked?l()({url:"/v1/api/student/interact/",method:"post",data:{mission_id:t,user_id:o}}).then((function(e){console.log(e.data),c(i+1)})).catch((function(e){console.log(e)})):l()({url:"/v1/api/student/interact/missions/".concat(t,"/users/").concat(o),method:"delete"}).then((function(e){console.log(e.data),c(i+1)})).catch((function(e){console.log(e)}))};return(0,r.useEffect)((function(){l().get("/v1/api/missions/".concat(t,"/users/").concat(o)).then((function(e){console.log(e.data),p(!0)})).catch((function(e){console.log(e),p(!1)}))}),[]),r.createElement(v.Z,{fluid:!0,className:"mission-card"},r.createElement(v.Z.Content,{className:"mission-card-header"},r.createElement("div",{className:"checkbox-container"},1==f&&r.createElement(I.Z,{label:n,id:"missions-".concat(parseInt(t)),defaultChecked:!0,toggle:!0,onClick:h}),1!=f&&r.createElement(I.Z,{label:n,id:"missions-".concat(parseInt(t)),defaultChecked:!1,toggle:!0,onClick:h}))),r.createElement(v.Z.Content,null,r.createElement(j.Z,null,r.createElement(j.Z.Title,{className:"button-accordion",active:0===u,index:0,onClick:function(e,t){console.log("on a cliqué",t);var n=t.index;m(u===n?-1:n)}},r.createElement(O.Z,{name:"dropdown"}),"Astuces"),r.createElement(j.Z.Content,{active:0===u,className:"astuce-container"},r.createElement("p",{className:"astuce-text"},a)))))};const M=function(e){var t=e.title,n=e.description,a=e.id,o=e.base_url,i=e.themeScore,c=e.setThemeScore,s=e.userInteraction,u=(e.missionByTheme,e.missionByThemeUser),m=e.userId;e.activeRole;return(0,r.useEffect)((function(){console.log("COMPUTE THEME SCORE"),l().get("".concat(o,"/v1/api/students/").concat(m,"/themes/").concat(a,"/score")).then((function(e){console.log("SCORE",e.data),c(e.data)}))}),[u,s]),r.createElement("div",{className:"theme-presentation"},r.createElement(h.Z,{className:"theme-title",as:"h1",textAlign:"center"},t),r.createElement("div",{className:"theme-progress-container"},r.createElement(E.Z,{className:"theme-progress-bar",percent:i.bytheme_ratio,indicating:!0,progress:!0})),r.createElement("div",{className:"description-theme"},r.createElement("p",null,n)))};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const U=function(e){var t=e.themes,n=e.allMissions,a=e.userId,o=e.userMissionsCompleted,i=e.setUserInteraction,l=e.userInteraction,s=e.missionByTheme,u=e.missionByThemeUser,m=e.setMissionByTheme,d=e.setMissionByThemeUser,f=e.theme,p=e.setTheme,h=e.activeRole,g=e.base_url,y=q((0,r.useState)(0),2),E=y[0],b=y[1],S=(0,c.UO)().idTheme,Z=function(e){return console.log("FILTER MISSIONS BY THEME"),e.filter((function(e){return e.theme_id==S}))};return(0,r.useEffect)((function(){console.log("USE EFFECT THEME PAGE"),function(){console.log("GET SELECTED THEME");var e=t.find((function(e){return e.id==S}));p(e),console.log("theme=",e)}(),function(){console.log("SETMISSIONS");var e=Z(o);d(e),console.log("missionCompletedByTheme=",e.length);var t=Z(n);m(t),console.log("missionByTheme=",t.length)}()}),[o]),r.createElement("div",{className:"missions"},r.createElement(M,x({},f,{userInteraction:l,setThemeScore:b,themeScore:E,missionByThemeUser:u,missionByTheme:s,userId:a,activeRole:h,base_url:g})),r.createElement(v.Z.Group,{className:"mission-card-container"},s.map((function(e){return r.createElement(w,x({key:e.id,name:e.id},e,{userId:a,userInteraction:l,setUserInteraction:i}))}))))};n(8674),n(7727);var R=n(8696),P=n(8788),B=n(8237);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const _=function(){var e=D((0,r.useState)(""),2),t=e[0],n=e[1],a=D((0,r.useState)(!0),2),o=a[0],i=a[1],c=D((0,r.useState)(!1),2),s=c[0],u=c[1],m=D((0,r.useState)(!1),2),d=m[0],f=m[1],p=D((0,r.useState)(!1),2),h=p[0],g=p[1],y=D((0,r.useState)(""),2),v=y[0],E=y[1],b="/v1/api/admin/add",S=function(){d?(i(!1),u(!0),console.log("j'affiche un message ok!")):(i(!1),u(!0),console.log("j'affiche un message pas cools!"))};return r.createElement(R.Z,{success:!0},r.createElement(P.Z,{hidden:o,visible:s,success:d,negative:h,compact:!0,content:v}),r.createElement(R.Z.Input,{label:"Email",type:"text",placeholder:"mail du nouvel admin",value:t,onChange:function(e){return n(e.target.value)}}),r.createElement(B.Z,{className:"bouton-addadmin",onClick:function(){var e={email:t};l().post(b,e,{headers:{"Content-Type":"application/json"}}).then((function(e){E("Vous avez ajouté un nouvel administrateur ! Bienvenue à lui!"),f(!0),S(),n("")})).catch((function(e){g(!0),E(e.response.data),S()})).finally(console.log("post url",b),console.log("je suis dans le finally"))}},"Adouber un Coach"))};const G=function(){return r.createElement("div",{className:"addAdmin"},r.createElement(_,null))},$=[{route:"/accueil",label:"accueil",role:"student"},{route:"/parcours-coaching",label:"parcours coaching",role:"student"},{route:"/profil",label:"profil",role:"student"},{route:"/accueiladmin",label:"accueil",role:"admin"},{route:"/gestion-themes",label:"gestion themes",role:"admin"},{route:"/ajouter-administrateur",label:"ajout admin",role:"admin"}],L={description:"Salut jeune padawan, bienvenue sur ton espace coaching personnalisé !",page:"student-accueil"},W={description:"Jeune padawan, le chemin ne fait que commencer ! Choisis un thème et commence à remplir tes missions ! Que la force soit avec toi !",page:"student-parcours-coaching"},z={description:"Il est temps d'avancer dans ta quête initiatique ! Accomplis missions et valide les quand tu les as terminées. ",page:"student-missions"},V={description:"Bonne journée ! Courage, force et honneur ! On lâche rien !!",page:"admin"},F={description:"Tu as ici le pouvoir de coopter un nouvel utilisateur parmis les rangs des maîtres coaching. Un grand pouvoir, pour une grande responsabilité.",page:"add-admin"},Q={description:"Ajoutons des pailletes dans la vie de nos chers étudiants ! Quoi de mieux qu'une petite mission pour cela ?",page:"gestion-themes"};n(9600);var J=n(4631);function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const X=function(e){var t=e.currentTitle,n=e.currentDescription,a=e.id,o=e.setRefresh,i=(e.refresh,K((0,r.useState)(""),2)),c=i[0],s=i[1],u=K((0,r.useState)(""),2),m=u[0],d=u[1],f=K((0,r.useState)(38),2),p=(f[0],f[1],K((0,r.useState)(null),2)),h=(p[0],p[1]),g=K((0,r.useState)(!1),2),y=g[0],v=g[1],E="/v1/api/admin/themes/".concat(a);return r.createElement(J.Z,{as:R.Z,onClose:function(){return v(!1)},onOpen:function(){return v(!0)},open:y,trigger:r.createElement(O.Z,{className:"edit-theme-modal",size:"large",link:!0,name:"edit"})},r.createElement(J.Z.Header,null,"Modifier un thème"),r.createElement(J.Z.Content,null,r.createElement(R.Z.Input,{label:"Titre",required:!0,type:"text",placeholder:t,value:c,onChange:function(e){return s(e.target.value)}}),r.createElement(R.Z.Input,{label:"description",required:!0,type:"text",placeholder:n,value:m,onChange:function(e){return d(e.target.value)}})),r.createElement(J.Z.Actions,null,r.createElement(B.Z,{color:"red",onClick:function(){return v(!1)}},"Annuler"),r.createElement(B.Z,{color:"green",type:"submit",onClick:function(){var e={title:c,description:m};l().post(E,e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(E),console.log(e.data),h(e.data),s(""),d(""),o(!0)})).catch((function(e){console.log(e)})).finally(console.log("je suis dans le finally"),v(!1),o(!1))}},"Valider")))};function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const ne=function(e){e.currentTitle,e.currentDescription;var t=e.idMission,n=e.setRefresh,a=(e.refresh,ee((0,r.useState)(""),2)),o=a[0],i=a[1],c=ee((0,r.useState)(""),2),s=c[0],u=c[1],m=ee((0,r.useState)(38),2),d=(m[0],m[1],ee((0,r.useState)(null),2)),f=(d[0],d[1]),p=ee((0,r.useState)(!1),2),h=p[0],g=p[1],y="/v1/api/admin/missions/".concat(t);return r.createElement(J.Z,{as:R.Z,onClose:function(){return g(!1)},onOpen:function(){return g(!0)},open:h,trigger:r.createElement(O.Z,{className:"edit-mission-modal",size:"large",link:!0,name:"edit"})},r.createElement(J.Z.Header,null,"Modifier une mission"),r.createElement(J.Z.Content,null,r.createElement(R.Z.Input,{label:"Titre",required:!0,type:"text",placeholder:"titre",value:o,onChange:function(e){return i(e.target.value)}}),r.createElement(R.Z.Input,{label:"description",required:!0,type:"text",placeholder:"advice",value:s,onChange:function(e){return u(e.target.value)}})),r.createElement(J.Z.Actions,null,r.createElement(B.Z,{color:"red",onClick:function(){return g(!1)}},"Annuler"),r.createElement(B.Z,{color:"green",type:"submit",onClick:function(){var e={title:o,advice:s};l().post(y,e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),f(e.data),i(""),u(""),n(!0)})).catch((function(e){console.log(e)})).finally(console.log("post url",y),console.log("je suis dans le finally"),g(!1),n(!1))}},"Valider")))};function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ae=function(e){var t=Object.assign({},e);return r.createElement("div",re({className:"addmission-container"},t),r.createElement("h1",null,"Ajouter une mission"))};function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const le=function(e){var t=e.id,n=e.setRefresh,a=(e.refresh,oe((0,r.useState)(""),2)),o=a[0],i=a[1],c=oe((0,r.useState)(""),2),s=c[0],u=c[1],m=oe((0,r.useState)(1),2),d=m[0],f=(m[1],oe((0,r.useState)(null),2)),p=(f[0],f[1]),h=oe((0,r.useState)(!1),2),g=h[0],y=h[1],v="/v1/api/admin/themes/".concat(t,"/missions");return r.createElement(J.Z,{as:R.Z,onClose:function(){return y(!1)},onOpen:function(){return y(!0)},open:g,trigger:r.createElement(ae,null)},r.createElement(J.Z.Header,null,"Ajouter une nouvelle mission"),r.createElement(J.Z.Content,null,r.createElement(R.Z.Input,{label:"Titre",required:!0,type:"text",placeholder:"titre",value:o,onChange:function(e){return i(e.target.value)}}),r.createElement(R.Z.Input,{label:"description",required:!0,type:"text",placeholder:"description",value:s,onChange:function(e){return u(e.target.value)}})),r.createElement(J.Z.Actions,null,r.createElement(B.Z,{color:"red",onClick:function(){return y(!1)}},"Annuler"),r.createElement(B.Z,{color:"green",type:"submit",onClick:function(){var e={title:o,advice:s,position:d};l().post(v,e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),p(e.data),i(""),u(""),n(!0)})).catch((function(e){console.log(e),console.log("ca marche pas!")})).finally(console.log("je suis dans le finally"),console.log("post url",v),console.log("setTitleTheme",o),console.log("setDescriptionTheme",s),y(!1),n(!1))}},"Valider")))};function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}["Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem dolores facere modi distinctio blanditiis quisquam repellendus earum, velit quod qui doloribus ex suscipit consequuntur vero assumenda non dolore molestiae."].join(" ");const ue=function(e){var t=e.title,n=e.id,a=e.description,o=e.setRefresh,i=e.refresh,c=ce((0,r.useState)([]),2),s=c[0],u=c[1],m=ce((0,r.useState)(-1),2),d=m[0],f=m[1],p=function(e,t){var n=t.idmission;l().delete("/v1/api/admin/missions/".concat(n)).then((function(e){console.log(e.data),o(!0)})).catch((function(e){})).finally(o(!1))};return(0,r.useEffect)((function(){console.log("http://localhost:3000/v1/api/themes/".concat(n,"/missions")),l().get("http://localhost:3000/v1/api/themes/".concat(n,"/missions")).then((function(e){u(e.data)})).catch((function(e){}))}),[i]),r.createElement(v.Z,{fluid:!0,className:"mission-card"},r.createElement(v.Z.Content,{className:"mission-card-header"},r.createElement("div",{className:"checkbox-container"},r.createElement("h2",{className:"theme-title"},t),r.createElement("div",{className:"theme-icons-container"},r.createElement(X,{currentTitle:t,currentDescription:a,id:n,setRefresh:o,refresh:i}),r.createElement(O.Z,{onClick:function(e,t){var n=t.id;l().delete("/v1/api/admin/themes/".concat(n)).then((function(e){console.log(e.data),o(!0)})).catch((function(e){})).finally(o(!1))},size:"large",link:!0,name:"trash",id:n})))),r.createElement(v.Z.Content,null,r.createElement(j.Z,null,r.createElement(j.Z.Title,{className:"button-accordion",active:0===d,index:0,onClick:function(e,t){console.log("on a cliqué",t);var n=t.index;console.log(n),console.log(d),f(d===n?-1:n)}},r.createElement(O.Z,{name:"dropdown"}),"Missions"),r.createElement(j.Z.Content,{active:0===d,className:"astuce-container"},r.createElement("div",{className:"mission-container"},r.createElement(le,{id:n,setRefresh:o,refresh:i})),s.map((function(e){return r.createElement("div",{key:e.id,className:"mission-container"},r.createElement("p",{className:"astuce-text"},e.title),r.createElement("div",{className:"theme-icons-container"},r.createElement(ne,{idMission:e.id,idTheme:n,setRefresh:o,refresh:i}),r.createElement(O.Z,{idmission:e.id,size:"large",link:!0,name:"trash",onClick:p})))}))))))};n(9070),n(7941),n(5003),n(9554),n(4747),n(9337),n(3321);function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const he=function(e,t){var n=Object.assign({},t),a=Object.assign({},e);return console.log(fe({},a),fe({},n)),r.createElement("div",me({className:"addtheme-container"},a,n),r.createElement("h1",null,"Ajouter un theme"))};function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const ve=function(e){var t=e.setRefresh,n=(e.refresh,ge((0,r.useState)(""),2)),a=n[0],o=n[1],i=ge((0,r.useState)(""),2),c=i[0],s=i[1],u=ge((0,r.useState)(38),2),m=u[0],d=(u[1],ge((0,r.useState)(!1),2)),f=(d[0],d[1],ge((0,r.useState)(null),2)),p=(f[0],f[1]),h=ge((0,r.useState)(!1),2),g=h[0],y=h[1];return r.createElement(J.Z,{as:R.Z,onClose:function(){return y(!1)},onOpen:function(){return y(!0)},open:g,trigger:r.createElement(he,null)},r.createElement(J.Z.Header,null,"Ajouter un nouveau thème"),r.createElement(J.Z.Content,null,r.createElement(R.Z.Input,{label:"Titre",required:!0,type:"text",placeholder:"titre",value:a,onChange:function(e){return o(e.target.value)}}),r.createElement(R.Z.Input,{label:"description",required:!0,type:"text",placeholder:"description",value:c,onChange:function(e){return s(e.target.value)}})),r.createElement(J.Z.Actions,null,r.createElement(B.Z,{color:"red",onClick:function(){return y(!1)}},"Annuler"),r.createElement(B.Z,{color:"green",type:"submit",onClick:function(){var e={title:a,description:c,position:m};l().post("/v1/api/admin/themes",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),p(e.data),o(""),s(""),t(!0)})).catch((function(e){console.log(e)})).finally(console.log("je suis dans le finally"),y(!1),t(!1))}},"Valider")))};function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const Ze=function(e){var t=e.themes,n=e.setRefresh,a=e.refresh,o=be((0,r.useState)("theme"),2),i=(o[0],o[1],be((0,r.useState)("mission"),2)),l=(i[0],i[1],be((0,r.useState)("plus square"),2)),c=l[0];l[1];return r.createElement("div",{className:"themesGestion"},r.createElement(ve,{refresh:a,setRefresh:n}),r.createElement(v.Z.Group,{centered:!0},t.map((function(e){return r.createElement("div",{key:e.id,className:"theme-card-container"},r.createElement(ue,Ee({iconPlus:c,name:e.id},e,{refresh:a,setRefresh:n})))}))))};const Ae=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.createElement("div",{className:"search-page"},r.createElement("div",{className:"search-title"},r.createElement("h1",null,"Ce qui a été recherché dans la barre de recherche")),r.createElement(v.Z.Group,{className:"profi-card-container"},r.createElement(v.Z,null,r.createElement(v.Z.Content,null,r.createElement(v.Z.Header,{className:"profi-card",content:"nom de l'étudiant"}),r.createElement(v.Z.Meta,{content:"Promotion et spé"}),r.createElement(v.Z.Description,null,r.createElement(E.Z,{className:"general-progress-bar-student",percent:33,indicating:!0,progress:!0})))),r.createElement(v.Z,null,r.createElement(v.Z.Content,null,r.createElement(v.Z.Header,{content:"nom de l'étudiant"}),r.createElement(v.Z.Meta,{content:"Promotion et spé"}),r.createElement(v.Z.Description,null,r.createElement(E.Z,{className:"general-progress-bar-student",percent:33,indicating:!0,progress:!0})))),r.createElement(v.Z,null,r.createElement(v.Z.Content,null,r.createElement(v.Z.Header,{content:"nom de l'étudiant"}),r.createElement(v.Z.Meta,{content:"Promotion et spé"}),r.createElement(v.Z.Description,null,r.createElement(E.Z,{className:"general-progress-bar-student",percent:33,indicating:!0,progress:!0})))),r.createElement(v.Z,null,r.createElement(v.Z.Content,null,r.createElement(v.Z.Header,{content:"nom de l'étudiant"}),r.createElement(v.Z.Meta,{content:"Promotion et spé"}),r.createElement(v.Z.Description,null,r.createElement(E.Z,{className:"general-progress-bar-student",percent:33,indicating:!0,progress:!0}))))))};function Ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const je=function(e){var t,n=e.base_url,a=(0,c.k6)(),o=Ce((0,r.useState)("student"),2),i=o[0],s=(o[1],Ce((0,r.useState)(3),2)),u=s[0],d=(s[1],Ce((0,r.useState)([]),2)),f=d[0],p=d[1],h=Ce((0,r.useState)(f),2),v=h[0],E=h[1],b=Ce((0,r.useState)(0),2),S=b[0],Z=b[1],A=Ce((0,r.useState)(!1),2),I=A[0],j=A[1],O=Ce((0,r.useState)([]),2),T=O[0],N=O[1],w=Ce((0,r.useState)([]),2),M=w[0],x=w[1],q=Ce((0,r.useState)({}),2),k=q[0],R=q[1],P=Ce((0,r.useState)([]),2),B=P[0],D=P[1],H=Ce((0,r.useState)([]),2),_=H[0],J=H[1],K=Ce((0,r.useState)(0),2),Y=K[0],X=K[1],ee=Ce((0,r.useState)(""),2),te=ee[0],ne=ee[1],re=Ce((0,r.useState)("Accueil"),2),ae=re[0],oe=re[1],ie=(t=i,$.filter((function(e){return e.role===t})));return(0,r.useEffect)((function(){console.log("on est dans le useEffect de app et on charge les thèmes et les missions"),l().get("".concat(n,"/v1/api/themes")).then((function(e){console.log("on récupère les thèmes",e.data),p(e.data)})),"student"===i&&l().get("".concat(n,"/v1/api/missions")).then((function(e){D(e.data),console.log("allMissions=",e.data)}))}),[]),(0,r.useEffect)((function(){console.log("on est dans le useEffect de app et on charge les missions de l'utilisateur"),function(){if("student"===i){var e="".concat(n,"/v1/api/missions/users/").concat(u);l()({url:e,method:"get"}).then((function(e){J(e.data)})).then((function(){console.log("userMissionsCompleted",_),console.log("userMissionsCompleted.length",_.length),console.log("allMissions.length",B.length)}))}}()}),[B,Y]),r.createElement("div",{className:"app"},r.createElement(m,{navlinks:ie,activeItem:ae,setActiveItem:oe,searchedText:te,setSearchedText:ne,history:a,themes:f,searchedThemes:v,setSearchedThemes:E}),r.createElement(c.rs,null,r.createElement(c.AW,{path:"/",exact:!0},r.createElement(g,{titre:L.description}),r.createElement(y,null)),r.createElement(c.AW,{path:"/accueil"},r.createElement(g,{titre:L.description}),r.createElement(y,null)),r.createElement(c.AW,{path:"/accueiladmin"},r.createElement(g,{titre:V.description}),r.createElement(y,null)),r.createElement(c.AW,{path:"/parcours-coaching"},r.createElement(g,{titre:W.description}),r.createElement(C,{themes:v,generalScore:S,userMissionsCompleted:_,allMissions:B,setGeneralScore:Z,userInteraction:Y,base_url:n,userId:u,searchedText:te})),r.createElement(c.AW,{path:"/theme/:idTheme"},r.createElement(g,{titre:z.description}),r.createElement(U,{themes:f,base_url:n,missionByTheme:T,setMissionByTheme:N,missionByThemeUser:M,setMissionByThemeUser:x,theme:k,setTheme:R,userInteraction:Y,setUserInteraction:X,allMissions:B,userMissionsCompleted:_,userId:u,activeRole:i})),r.createElement(c.AW,{path:"/ajouter-administrateur"},r.createElement(g,{titre:F.description}),r.createElement(G,null)),r.createElement(c.AW,{path:"/gestion-themes"},r.createElement(g,{titre:Q.description}),r.createElement(Ze,{themes:f,refresh:I,setRefresh:j})),r.createElement(c.AW,{path:"/search-profil"},r.createElement(g,{titre:Q.description}),r.createElement(Ae,null))))};var Oe=r.createElement(a.VK,null,r.createElement(je,{base_url:""})),Te=document.getElementById("root");(0,o.render)(Oe,Te)},9193:()=>{}},e=>{"use strict";var t=t=>e(e.s=t);e.O(0,[821],(()=>(t(9193),t(6734))));e.O()}]);