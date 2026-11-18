/* core motion: native scroll only, no wheel handlers */
(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],D=document.documentElement;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,MO=D.classList.contains('mo');
$$('h1.rv,h2.rv').forEach(h=>{if(h.children.length)return;const ws=h.textContent.trim().split(/\s+/);h.innerHTML=ws.map((w,i)=>`<span class="w"><span style="--i:${i}">${w}</span></span>`).join(' ');h.setAttribute('aria-label',ws.join(' '));h.classList.remove('rv');h.classList.add('split')});
['.svc-list','.about-facts','.stats'].forEach(s=>$$(s).forEach(g=>{[...g.children].forEach((c,i)=>{c.style.setProperty('--i',i);c.classList.remove('rv','d1','d2','d3')});g.classList.add('stg')}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
$$('.rv,.split,.stg').forEach(el=>MO?io.observe(el):el.classList.add('in'));
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,to=+el.dataset.count,suf=el.dataset.suf||'';if(RM||!MO)return;const t0=performance.now();const f=t=>{const p=Math.min(1,(t-t0)/1600);el.textContent=Math.round(to*(1-Math.pow(1-p,4)))+suf;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
$$('[data-count]').forEach(el=>cio.observe(el));
const qs=$$('.quote'),dots=$$('#tdots button');if(qs.length){let qi=0,qt;const q=i=>{qi=(i+qs.length)%qs.length;qs.forEach((x,j)=>x.classList.toggle('on',j===qi));dots.forEach((d,j)=>d.setAttribute('aria-current',j===qi))};const stop=()=>clearInterval(qt);
dots.forEach((d,i)=>d.onclick=()=>{q(i);stop()});$$('[data-t]').forEach(b=>b.onclick=()=>{q(qi+ +b.dataset.t);stop()});if(!RM&&MO)qt=setInterval(()=>q(qi+1),6000);
const st=$('#tst');let sx=0;st&&st.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});st&&st.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40){q(qi+(d<0?1:-1));stop()}})}
$$('.btn').forEach(b=>{if(b.querySelector('.roll,svg'))return;const t=b.textContent.trim();if(!t)return;b.innerHTML='<span class="roll"><span>'+t+'</span><span aria-hidden="true">'+t+'</span></span>'});
if(RM||!MO)return;
const els=$$('.cta,.pf-item,.gal button');els.forEach((e,i)=>{e.classList.add('sc');e.style.setProperty('--s',i%2?1:-1)});
const par=$$('[data-par]');let vh=innerHeight,tk=false;addEventListener('resize',()=>vh=innerHeight,{passive:true});
const run=()=>{tk=false;D.style.setProperty('--sp',(scrollY/Math.max(1,D.scrollHeight-vh)).toFixed(4));
 for(const e of els){const r=e.getBoundingClientRect();if(r.bottom<-100||r.top>vh+100)continue;e.style.setProperty('--p',Math.max(0,Math.min(1,(vh-r.top)/(vh*.75))).toFixed(3))}
 for(const p of par){const r=p.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)continue;p.style.transform=`translate3d(0,${(((r.top+r.height/2-vh/2)/vh)*-40).toFixed(1)}px,0) scale(1.1)`}
 window.onTplScroll&&window.onTplScroll(vh)};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(run)}},{passive:true});run();
})();

(()=>{const sb=document.getElementById('sb10'),h=document.querySelector('.mq10')||document.querySelector('.h10'),c=document.getElementById('cta');if(!sb||!h)return;let a=false,b=false;const u=()=>sb.classList.toggle('on',a&&!b);
new IntersectionObserver(([e])=>{a=!e.isIntersecting&&e.boundingClientRect.top<0;u()}).observe(h);if(c)new IntersectionObserver(([e])=>{b=e.isIntersecting;u()}).observe(c)})();

/* v4: scrubbed statement, how rail, chart draw-in + counters */
(()=>{const D=document.documentElement,MO=D.classList.contains('mo');
const t=document.querySelector('.sc10-t'),sec=document.getElementById('why');
if(t){const ws=t.textContent.trim().split(/\s+/),hl=/^(lie\.|Diffs|matters)/;t.setAttribute('aria-label',ws.join(' '));t.innerHTML=ws.map(w=>`<span class="sw${hl.test(w)?' hl':''}" aria-hidden="true">${w}</span>`).join(' ')}
const sws=t?[...t.querySelectorAll('.sw')]:[],rail=document.getElementById('hw10l');
const cs=[...document.querySelectorAll('.ch10-c')];
const fmt=(v,d)=>d?v.toFixed(d):Math.round(v)+'';
const count=c=>c.querySelectorAll('[data-to]').forEach(b=>{const to=+b.dataset.to,d=+(b.dataset.dec||0),t0=performance.now();b.textContent=fmt(0,d);const f=n=>{const p=Math.min(1,(n-t0-300)/1500),e=p<0?0:1-Math.pow(1-p,4);b.textContent=fmt(to*e,d);if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});
if(!MO){cs.forEach(c=>c.classList.add('in'));sws.forEach(s=>s.classList.add('on'));return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');count(e.target);io.unobserve(e.target)}}),{threshold:.35});
cs.forEach(c=>{c.querySelectorAll('[data-to]').forEach(b=>b.textContent=fmt(0,+(b.dataset.dec||0)));io.observe(c)});
let tk=false;const run=()=>{tk=false;const vh=innerHeight;
 if(sec){const r=sec.getBoundingClientRect(),p=Math.max(0,Math.min(1,(-r.top+vh*.15)/Math.max(1,(r.height-vh)*.9))),n=Math.round(p*sws.length);sws.forEach((s,i)=>s.classList.toggle('on',i<n))}
 if(rail){const r=rail.getBoundingClientRect();rail.style.setProperty('--hp',Math.max(0,Math.min(1,(vh*.7-r.top)/r.height)).toFixed(3))}};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(run)}},{passive:true});addEventListener('resize',run,{passive:true});run()})();
