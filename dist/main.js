(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".menu-side");e.addEventListener("click",(e=>{let c=e.target;c.closest(".block-user__icon_transform")||c.classList.contains("menu-side__close")?t.classList.toggle("menu-side_active"):c.matches(".menu-side__block")||c.matches("menu ul, li")?t.classList.add("menu-side_active"):t.classList.remove("menu-side_active")}))})(),(()=>{const e=document.querySelector(".slider-container"),t=document.querySelector(".slider-container__slider-track"),c=document.querySelectorAll(".slider-container__block"),s=document.querySelector(".control__arrow-left"),l=document.querySelector(".control__arrow-right"),r=c.length,o=e.clientWidth,i=o;let n=0;const d=()=>{t.style.transform=`translateX(${n}px)`};s.addEventListener("click",(()=>{n+=i,d(),a()})),l.addEventListener("click",(()=>{n-=i,d(),a()}));const a=()=>{0===n?(s.style.opacity=.5,s.disabled=!0):n<=-(r-1)*o?(l.style.opacity=.5,l.disabled=!0):(s.style.opacity=1,s.disabled=!1,l.style.opacity=1,l.disabled=!1)};a()})(),document.querySelector(".search-form__text-field").addEventListener("click",(e=>{e.preventDefault()}))})();