import{a as q,S as M,i as c}from"./assets/vendor-06b1bbdf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();async function u(e,o){const n="https://pixabay.com/api/";return(await q.get(n,{params:{key:"43104791-fccc42375971f64c47e678deb",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data}const S=document.querySelector(".gallery"),E=new M(".gallery a",{captionsData:"alt"});async function h(e){const o=e.map(({largeImageURL:n,webformatURL:r,tags:t,likes:s,views:a,comments:w,downloads:v})=>`<li class="photos-list-item">
        <a class="photos-list-link" href="${n}">
        <img class="photo" src="${r}" alt="${t}"/>
        </a>
        <ul class="photo-information-container">
        <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${s}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${a}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${w}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${v}</p></li>
        </ul>
        </li>`).join("");S.insertAdjacentHTML("beforeend",o),E.refresh()}const m=document.querySelector(".gallery"),P=document.querySelector("form"),g=document.querySelector(".loader"),d=document.querySelector(".btnMore");let i=1,l,p,O=15;function y(){g.classList.remove("is-hidden")}function L(){g.classList.add("is-hidden")}P.addEventListener("submit",R);async function R(e){if(e.preventDefault(),m.innerHTML="",i=1,l=e.target.elements.search.value.trim(),y(),l===""){c.warning({color:"yellow",message:"Please fill in the field for search!",position:"topRight"}),deleteLoader();return}try{const o=await u(l,i);o.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}),p=Math.ceil(o.totalHits/O),o.hits.length<15&&f(),h(o.hits),e.target.reset()}catch(o){console.log(o),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}b(),L(),e.target.reset()}function $(){d.classList.remove("is-hidden")}function f(){d.classList.add("is-hidden")}function b(){i>=p?f():$()}function I(){const e=m.firstElementChild.getBoundingClientRect().height;scrollBy({top:e,behavior:"smooth"})}d.addEventListener("click",k);async function k(){i+=1,y();try{const e=await u(l,i);h(e.hits),i>=p&&(f(),c.info({title:"Info:",message:"You have reached the end of the list",position:"topRight"}))}catch(e){console.log(e),c.info({title:"Info:",message:"You have reached the end of the list",position:"topRight"})}I(),b(),L()}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("back-to-top");window.addEventListener("scroll",function(){window.pageYOffset>300?e.style.display="block":e.style.display="none"}),e.addEventListener("click",function(o){o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map
