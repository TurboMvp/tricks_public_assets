(()=>{const s=document.getElementById('box-h')?.closest('section')||document;const q=n=>s.querySelectorAll(`[data-pin="${n}"]`);
const set=(n,v)=>q(n).forEach(e=>e.classList.toggle('on',v));
s.querySelectorAll('.kb-item,.kb-pin').forEach(e=>{const n=e.dataset.pin;if(!n)return;
['mouseenter','focus'].forEach(t=>e.addEventListener(t,()=>set(n,true)));['mouseleave','blur'].forEach(t=>e.addEventListener(t,()=>set(n,false)));});})();
