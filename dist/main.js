(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".menu-side");e.addEventListener("click",(e=>{let c=e.target;c.closest(".block-user__icon_transform")||c.classList.contains("menu-side__close")?t.classList.toggle("menu-side_active"):c.matches(".menu-side__block")||c.matches("menu ul, li")?t.classList.add("menu-side_active"):t.classList.remove("menu-side_active")}))})(),(()=>{const e=document.querySelector(".slider-container"),t=document.querySelector(".slider-container__slider-track"),c=document.querySelectorAll(".slider-container__block"),o=document.querySelector(".control__arrow-left"),s=document.querySelector(".control__arrow-right"),l=c.length,n=e.clientWidth,r=n;let d=0;const i=()=>{t.style.transform=`translateX(${d}px)`};o.addEventListener("click",(()=>{d+=r,i(),a()})),s.addEventListener("click",(()=>{d-=r,i(),a()}));const a=()=>{0===d?(o.style.opacity=.5,o.disabled=!0):d<=-(l-1)*n?(s.style.opacity=.5,s.disabled=!0):(o.style.opacity=1,o.disabled=!1,s.style.opacity=1,s.disabled=!1)};a()})(),document.querySelector(".search-form__text-field").addEventListener("click",(e=>{e.preventDefault()})),(()=>{const e=document.querySelector(".block-user__link"),t=document.querySelector(".popup"),c=t.querySelector(".popup__body"),o=t.querySelector(".popup__body_none");e.addEventListener("click",(()=>{t.style.display="block"})),t.addEventListener("click",(e=>{e.preventDefault();let s=e.target;!s.matches(".popup__close")&&s.closest(".popup__body")||(t.style.display="none",o.classList.add("popup__body_none"),c.style.display="flex"),s.matches(".popup__btn-register")&&(o.classList.remove("popup__body_none"),c.style.display="none")}))})()})();
