import{a as u,S as d,i}from"./assets/vendor-De1_4Ayg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const f="https://pixabay.com/api/",p="52302073-d61d50c7fb08e45dcd07f0efb";function m(t,o=1,s=40){const r={key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:s,page:o};return u.get(f,{params:r}).then(e=>e.data)}let l=null;function y(){l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function g(t){const o=document.querySelector(".gallery"),s=t.map(r=>`
      <li class="photo-card">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${r.likes}</span></p>
          <p class="info-item"><b>Views</b><span>${r.views}</span></p>
          <p class="info-item"><b>Comments</b><span>${r.comments}</span></p>
          <p class="info-item"><b>Downloads</b><span>${r.downloads}</span></p>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),y()}function h(){const t=document.querySelector(".gallery");t.innerHTML=""}function b(){const t=document.getElementById("loader");t&&(t.style.display="flex",t.setAttribute("aria-hidden","false"))}function c(){const t=document.getElementById("loader");t&&(t.style.display="none",t.setAttribute("aria-hidden","true"))}const L=document.getElementById("search-form");L.addEventListener("submit",w);function w(t){t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(!s){i.warning({title:"Warning",message:"Please enter a search query"});return}h(),b(),m(s).then(r=>{c();const e=r.hits||[];if(e.length===0){i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e)}).catch(r=>{c(),console.error("API error",r),i.error({title:"Error",message:"Something went wrong. Please try again later."})})}
//# sourceMappingURL=index.js.map
