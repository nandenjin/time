import{d as f,r as n,o as p,a as m,c as v,b as u,t as a,e as y,n as g,f as _,g as h}from"./vendor.15e7cb60.js";const b=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};b();const L={class:"time"},M=f({setup(d){const r=n(),i=n(),l=n(),e=n(),t=n(),s=n(0),c=n();return p(()=>{c.value=setInterval(()=>{const o=new Date;r.value=o.getFullYear().toString(),i.value=("00"+(o.getMonth()+1)).slice(-2),l.value=("00"+o.getDate()).slice(-2),e.value=("00"+o.getHours()).slice(-2),t.value=("00"+o.getMinutes()).slice(-2),s.value=o.getTime()},1e3)}),m(()=>{clearInterval(c.value)}),(o,N)=>(_(),v("div",L,[u(a(r.value)+"."+a(i.value)+"."+a(l.value)+" "+a(e.value),1),y("span",{style:g(`visibility: ${Math.floor(s.value/1e3)%2?"visible":"hidden"}`)},":",4),u(a(t.value),1)]))}});h(M).mount("#app");
