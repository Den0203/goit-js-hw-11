import{a as p,S as m,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g="52302073-d61d50c7fb08e45dcd07f0efb",h="https://pixabay.com/api/";async function y(s){try{return(await p.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Error fetching images:",r),r}}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new m(".gallery a");function w(s){const r=s.map(t=>`
      <div class="wraper">
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </li>
    </div>
  `).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function b(){u.innerHTML=""}function v(){d.classList.add("visible")}function c(){d.classList.remove("visible")}const f=document.querySelector(".form"),l=f.querySelector("input[name='search-text']");f.addEventListener("submit",async s=>{s.preventDefault();const r=l.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),v();try{const t=await y(r);if(c(),t.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ff4d4f"});return}w(t.hits),l.value=""}catch{c(),n.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight",backgroundColor:"#ff4d4f"})}});
//# sourceMappingURL=index.js.map
