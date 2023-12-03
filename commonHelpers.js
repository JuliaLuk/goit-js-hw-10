import{a as l}from"./assets/vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();l.defaults.headers.common["x-api-key"]="live_jkkLyqjTr8RbEPHLuS5UGhwJV6rcFi9zJesfe2p6RuvQ5zCatKJJ401i56PpvO61";function p(){return l.get("https://api.thecatapi.com/v1/breeds")}function f(t){return l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`)}const i=document.querySelector(".breed-select"),a=document.querySelector(".loader"),d=document.querySelector(".div-picture"),u=document.querySelector(".cat-info");p().then(t=>{console.log(t),i.style.visibility="visible",i.insertAdjacentHTML("beforeend",h(t))}).catch(t=>{console.log(t),a.style.display="none"});i.addEventListener("change",m);d.innerHTML="";u.innerHTML="";function m(t){t.preventDefault();const s=this.value;a.style.display="block",f(s).then(c=>{const n=c[0];d.innerHTML=`
    <img class="picture" src="${n.url}" alt="${n.breeds[0].name}">`,u.innerHTML=`
      <h2 class="title">${n.breeds[0].name}</h2>
      <p class="text">${n.breeds[0].description}</p>
      <p class="temp"><strong>Temperament:</strong> ${n.breeds[0].temperament}</p>`})}function h(t){return t.map(({name:s,image:c,temperament:n,description:e})=>`
    <div class="cat-info">
      <p class="cat-name">${s}</p>
      <img class="div-picture" src="${c.url}" alt="${s}" />
      <p class="cat-temp">${n}</p>
      <p class="cat-descr">${e}</p>
    </div>
  `).join("")}
//# sourceMappingURL=commonHelpers.js.map
