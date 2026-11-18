/* offer countdown. OFFER_END is the one place to set the launch-price deadline (ISO 8601). After it passes the timers hide and only "Launch price" shows: no resets. */
const OFFER_END='2026-12-01T00:00:00Z';
(()=>{const end=Date.parse(OFFER_END),els=[...document.querySelectorAll('[data-cd]')];if(!els.length||isNaN(end))return;
const day=new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(end),p=n=>String(n).padStart(2,'0');
let t;const tick=()=>{const ms=end-Date.now();if(ms<=0){els.forEach(e=>{e.classList.add('cd--off');e.setAttribute('aria-label','Launch price');const x=e.querySelector('.cdl-x');if(x)x.textContent='€89 instead of €129, while it lasts'});clearInterval(t);return}
 const s=Math.floor(ms/1000),d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60),c=s%60;
 els.forEach(e=>{if(e.hasAttribute('data-cd-lg')){const v={d:p(d),h:p(h),m:p(m),s:p(c)};e.querySelectorAll('[data-u]').forEach(b=>b.textContent=v[b.dataset.u])}else e.querySelector('.cd-t').textContent=`ends in ${p(d)}d ${p(h)}h ${p(m)}m ${p(c)}s`})};
els.forEach(e=>{e.setAttribute('aria-label',`Launch price €89 instead of €129, ends ${day}`);const l=e.querySelector('.cd-l');if(l&&!e.hasAttribute('data-cd-lg'))l.textContent='Launch price'});
tick();if(end>Date.now())t=setInterval(tick,1000)})();
/* calm reveals, counters, a buy bar after the hero, and a lazy video facade (player loads only on tap) */
(()=>{const D=document.documentElement,$$=s=>[...document.querySelectorAll(s)],IO='IntersectionObserver' in window;
$$('.vf').forEach(b=>b.addEventListener('click',()=>{const f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+b.dataset.yt+'?autoplay=1&rel=0';f.title='Course trailer';f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.allowFullscreen=true;b.replaceChildren(f);b.removeAttribute('aria-label')},{once:true}));
const mo=D.classList.contains('mo')&&IO;
/* sticky buy bar: appears once the hero buy box has scrolled away, then follows the reader to the footer */
const bar=document.getElementById('ipbar'),buy=document.getElementById('buy');
if(bar&&buy&&IO){const set=on=>{bar.classList.toggle('on',on);bar.setAttribute('aria-hidden',!on);bar.querySelector('a').tabIndex=on?0:-1;document.body.classList.toggle('has-bar',on)};
 new IntersectionObserver(([e])=>set(!e.isIntersecting&&e.boundingClientRect.top<0)).observe(buy)}
const count=el=>{const to=+el.dataset.count,dec=+(el.dataset.dec||0),t0=performance.now(),f=new Intl.NumberFormat('en',{minimumFractionDigits:dec,maximumFractionDigits:dec});const step=t=>{const p=Math.min(1,(t-t0)/1400),v=to*(1-Math.pow(1-p,3));el.textContent=f.format(v);if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
const els=$$('.rv,.up');if(!mo){els.forEach(e=>e.classList.add('in'));return}
/* stagger siblings that enter together */
const io=new IntersectionObserver(es=>{let i=0;es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.style.setProperty('--dl',Math.min(i++,5)*0.07+'s');t.classList.add('in');t.querySelectorAll('[data-count]').forEach(count);if(t.matches('[data-count]'))count(t);io.unobserve(t)})},{rootMargin:'0px 0px -8% 0px'});
els.forEach(e=>io.observe(e));})();
