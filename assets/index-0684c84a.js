(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&m(s)}).observe(document,{childList:!0,subtree:!0});function y(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=y(e);fetch(e.href,r)}})();const k="/snow-bingo/assets/spinner-01e3411f.svg",c=[{code:"PPco",name:"Søyler",key:"j"},{code:"PPnd",name:"Nåler",key:"k"},{code:"PPpl",name:"Plater",key:"l"},{code:"PPsd",name:"Stjerner, dendritter",key:"m"},{code:"PPir",name:"Uregelmessige krystaller",key:"n"},{code:"PPgp",name:"Sprøhagl",key:"o"},{code:"PPhl",name:"Ishagl",key:"p"},{code:"PPip",name:"Iskorn",key:"q"},{code:"PPrm",name:"Tåkerim",key:"r"},{code:"MMrp",name:"Runde polykrystallinske partikler",key:"s"},{code:"MMci",name:"Knuste ispartikler",key:"t"},{code:"DFdc",name:"Delvis nedbrutte nedbørpartikler",key:"u"},{code:"DFbk",name:"Nedbørpartikler brutt i stykker av vind",key:"v"},{code:"RGsr",name:"Små avrundede partikler",key:"w"},{code:"RGlr",name:"Store avrundede partikler",key:"x"},{code:"RGwp",name:"Vindpakket",key:"y"},{code:"RGxf",name:"Fasetterte avrundede partikler",key:"z"},{code:"FCso",name:"Massivt fasetterte partikler",key:"A"},{code:"FCsf",name:"Partikler fasetterte nær overflaten",key:"B"},{code:"FCxr",name:"Avrundede fasetterte partikler",key:"C"},{code:"DHcp",name:"Hule kopper",key:"D"},{code:"DHpr",name:"Hule prismer",key:"E"},{code:"DHch",name:"Lenker av begerkrystaller",key:"F"},{code:"DHla",name:"Store, furete krystaller",key:"G"},{code:"DHxr",name:"Avrundede begerkrystaller",key:"H"},{code:"SHsu",name:"Overflaterim",key:"I"},{code:"SHcv",name:"Hulromsrim og sprekkerim",key:"J"},{code:"SHxr",name:"Avrundet overflaterim",key:"K"},{code:"MFcl",name:"Sammensmeltede avrundede korn",key:"L"},{code:"MFpc",name:"Avrundede polykrystaller",key:"M"},{code:"MFsl",name:"Sørpe",key:"N"},{code:"MFcr",name:"Smelte-fryse-skare",key:"Oh"},{code:"IFil",name:"Islag",key:"P"},{code:"IFic",name:"Is-søyle",key:"Q"},{code:"IFbi",name:"Basal-is",key:"R"},{code:"IFrc",name:"Regnskare",key:"S"},{code:"IFsc",name:"Solskare",key:"T"}],u=1500;var o=0,d=!1;const i=c.sort(()=>Math.random()-.5);document.querySelector("#app").innerHTML=`
  <div>
    <h1>Sn❆Bingo</h1>
    <div class="main"/>
  </div>
`;const a=document.querySelector(".main"),l=t=>{const n=`
      <div class="card">
        <span>${t.key}</span>
        <div>
          [${t.code}]
        </div>
      </div>
      <div id="name">
    
        ${t.name}
      </div>
      <div>
        ${o+1} / ${c.length} 
      </div>
      
  `;d?(a.innerHTML=`
     <div class="card">
        <img src=${k} />
      </div>
    `,setTimeout(()=>{d=!1,a.innerHTML=n},u)):a.innerHTML=n},p=()=>{o<c.length-1&&(d=!0,l(i[++o]))},f=()=>{o>0&&l(i[--o])},v=t=>{const n={ArrowLeft:()=>f(),ArrowRight:()=>p()}[t];n==null||n()};document.addEventListener("keydown",t=>v(t.key));l(i[0]);
