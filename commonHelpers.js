import{a}from"./assets/vendor-a61d8330.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();a.defaults.headers.common["x-api-key"]="live_jkkLyqjTr8RbEPHLuS5UGhwJV6rcFi9zJesfe2p6RuvQ5zCatKJJ401i56PpvO61";function p(){return a.get("https://api.thecatapi.com/v1/breeds").then(e=>{if(!e.ok)throw new Error("Oops! Something went wrong! Try reloading the page!");return e.json()}).then(e=>console.log(e)).catch(e=>console.log(e))}function f(e){return a.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(n=>n.data).catch(n=>{throw console.log(n),n})}const l=document.querySelector(".breed-select"),i=document.querySelector(".loader"),d=document.querySelector(".div-picture"),u=document.querySelector(".cat-info");p().then(e=>{l.style.visibility="visible",i.style.display="none";const n=e.map(s=>`<option value="${s.id}">${s.name}</option>`).join("");l.insertAdjacentHTML("beforeend",n)}).catch(e=>{console.log(e),i.style.display="none"});l.addEventListener("change",m);d.innerHTML="";u.innerHTML="";function m(e){e.preventDefault();const n=this.value;i.style.display="block",f(n).then(s=>{i.style.display="none";const r=s[0];d.innerHTML=`
    <img class="picture" src="${r.url}" alt="${r.breeds[0].name}">`,u.innerHTML=`
      <h2 class="title">${r.breeds[0].name}</h2>
      <p class="text">${r.breeds[0].description}</p>
      <p class="temp"><strong>Temperament:</strong> ${r.breeds[0].temperament}</p>`})}
//# sourceMappingURL=commonHelpers.js.map
