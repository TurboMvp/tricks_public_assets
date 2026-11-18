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

(()=>{const D=document.documentElement,MO=D.classList.contains('mo');const fs=[...document.querySelectorAll('.fd,.map8')];
if(!MO){fs.forEach(e=>e.classList.add('in'));return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -12% 0px'});fs.forEach(e=>io.observe(e));
const zs=[...document.querySelectorAll('[data-zoom]')];let tk=0;
const f=()=>{tk=0;const vh=innerHeight;for(const z of zs){const r=z.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)continue;const p=Math.max(0,Math.min(1,(vh-r.top)/(vh+r.height)));z.style.setProperty('--z',(1.16-p*.16).toFixed(4))}};
addEventListener('scroll',()=>{if(!tk){tk=1;requestAnimationFrame(f)}},{passive:true});f()})();
/* quality pass: ink scrub, room parallax, footer reveal, compact bar */
(()=>{const D=document.documentElement,MO=D.classList.contains('mo');
const ink=document.querySelector('.ink');let iw=[];
if(ink){const ws=ink.textContent.trim().split(/\s+/);ink.setAttribute('aria-label',ink.textContent.trim());ink.innerHTML=ws.map(w=>`<span class="iw" aria-hidden="true">${w}</span>`).join(' ');iw=[...ink.querySelectorAll('.iw')]}
const fb=document.querySelector('.f8-big');
const bar=document.createElement('div');bar.className='m8s';bar.setAttribute('aria-hidden','true');bar.innerHTML='<a class="m8-logo" href="#top" tabindex="-1"><span>Maren</span></a><a class="m8-book" href="#visit" tabindex="-1">Book</a>';document.body.appendChild(bar);
if(!MO){fb&&fb.classList.add('in');bar.remove();return}
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.disconnect()}}),{rootMargin:'0px 0px -10% 0px'}).observe(fb);
const rooms=[...document.querySelectorAll('[data-speed]')],hero=document.querySelector('.hx');let tk=0;
const f=()=>{tk=0;const vh=innerHeight;
 if(ink){const r=ink.getBoundingClientRect();const p=Math.max(0,Math.min(1,(vh*.85-r.top)/(vh*.5)));const n=iw.length;iw.forEach((w,i)=>w.style.setProperty('--o',(Math.max(.18,Math.min(1,p*n-i+.18))).toFixed(2)))}
 if(innerWidth>=900)for(const e of rooms){const r=e.getBoundingClientRect();if(r.bottom<0||r.top>vh)continue;e.style.setProperty('--py',((r.top+r.height/2-vh/2)*-e.dataset.speed).toFixed(1)+'px')}
 bar.classList.toggle('on',hero.getBoundingClientRect().bottom<80)};
addEventListener('scroll',()=>{if(!tk){tk=1;requestAnimationFrame(f)}},{passive:true});addEventListener('resize',f,{passive:true});f()})();
/* v6: faq, hours, band parallax */
(()=>{const D=document.documentElement,MO=D.classList.contains('mo');
document.querySelectorAll('.fq8-i').forEach(it=>{const b=it.querySelector('.fq8-q');if(b.getAttribute('aria-expanded')==='true')it.classList.add('open');b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',o);it.classList.toggle('open',o)})});
const n=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Lisbon'})),d=n.getDay(),h=n.getHours()+n.getMinutes()/60;
const rows=[...document.querySelectorAll('#vhours>div')],st=document.getElementById('vst');
const r=rows.find(x=>x.dataset.days.split(',').includes(''+d));
if(r&&st){r.classList.add('today');const op=h>=+r.dataset.o&&h<+r.dataset.c;st.dataset.state=op?'open':'closed';st.querySelector('span').textContent=op?'Open now · until '+r.dataset.c+':00':(h<+r.dataset.o?'Opens at '+r.dataset.o+':00':'Closed now')}
const u=document.querySelector('.m8-util span');if(u&&r){u.lastChild.textContent=`Open today, ${r.dataset.o}:00 to ${r.dataset.c}:00`}
const bi=document.querySelector('[data-band]');if(!MO||!bi)return;let tk=0;
const f=()=>{tk=0;const vh=innerHeight,b=bi.parentElement.getBoundingClientRect();if(b.bottom<0||b.top>vh)return;bi.style.setProperty('--by',(((b.top+b.height/2)-vh/2)*-.12).toFixed(1)+'px')};
addEventListener('scroll',()=>{if(!tk){tk=1;requestAnimationFrame(f)}},{passive:true});f()})();
/* v7 hero: open status + slow scroll zoom/parallax */
(()=>{const D=document.documentElement,MO=D.classList.contains('mo');
const n=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Lisbon'})),d=n.getDay(),h=n.getHours()+n.getMinutes()/60;
const H={0:[11,17],6:[10,18]}[d]||[9,20],o=document.getElementById('hxo');
if(o){const op=h>=H[0]&&h<H[1];o.dataset.state=op?'open':'closed';o.querySelector('span').textContent=op?`Open now · until ${H[1]}:00`:(h<H[0]?`Opens today at ${H[0]}:00`:'Closed now · opens tomorrow')}
const im=document.querySelector('[data-hz]'),hx=document.querySelector('.hx');if(!MO||!im)return;let tk=0;
const f=()=>{tk=0;const r=hx.getBoundingClientRect();if(r.bottom<0)return;const p=Math.max(0,Math.min(1,-r.top/r.height));im.style.setProperty('--hz',(1.04+p*.12).toFixed(4));im.style.setProperty('--hy',(p*r.height*.18).toFixed(1)+'px')};
im.style.transition='transform 1.8s cubic-bezier(.2,.7,.1,1)';requestAnimationFrame(()=>{f();setTimeout(()=>im.style.transition='',1900)});
addEventListener('scroll',()=>{if(!tk){tk=1;requestAnimationFrame(f)}},{passive:true})})();
