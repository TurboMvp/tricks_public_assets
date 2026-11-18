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
dots.forEach((d,i)=>d.onclick=()=>{q(i);stop()});$$('[data-t]').forEach(b=>b.onclick=()=>{q(qi+ +b.dataset.t);stop()});if(!RM&&MO)qt=setInterval(()=>q(qi+1),9000);
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

(()=>{const D=document.documentElement;const h=document.querySelector('.hero2'),m=document.querySelector('.mf');
if(m){const ws=m.innerHTML.split(/\s+(?![^<]*>)/);m.innerHTML=ws.map((w,i)=>'<span class="mw" style="--i:'+i+'">'+w+'</span>').join(' ')}
if(!D.classList.contains('mo'))return;const mws=[...document.querySelectorAll('.mw')];
window.onTplScroll=vh=>{const r=h.getBoundingClientRect();const p=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height-vh)));h.style.setProperty('--hp',p.toFixed(4));
 if(m){const mr=m.getBoundingClientRect();const q=Math.min(1,Math.max(0,(vh*.85-mr.top)/(mr.height+vh*.35)));const n=Math.round(q*mws.length);mws.forEach((w,i)=>w.classList.toggle('on',i<n))}};})();
/* v8: story scrub, chapter rail, copy */
(()=>{const D=document.documentElement,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$$('[data-copy]').forEach(b=>b.addEventListener('click',()=>{navigator.clipboard&&navigator.clipboard.writeText(b.dataset.copy).then(()=>{const t=b.textContent;b.textContent='Copied';b.classList.add('ok');setTimeout(()=>{b.textContent=t;b.classList.remove('ok')},1800)})}));
const rail=$('.rail'),links=rail?$$('.rail a'):[],secs=links.map(a=>document.getElementById(a.dataset.s));
const st=$('.story'),chs=st?$$('.story-ch li'):[],num=st&&$('.story-prog b');let cur=-1;
const MO=D.classList.contains('mo');
const tick=()=>{const vh=innerHeight;
 if(st&&MO){const r=st.getBoundingClientRect();const q=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height-vh)));st.style.setProperty('--q',q.toFixed(4));const i=Math.min(chs.length-1,Math.floor(q*chs.length*.999+.0001));if(i!==cur){cur=i;chs.forEach((c,j)=>c.classList.toggle('on',j===i));if(num)num.textContent='0'+(i+1)}}
 if(rail){let a=0;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<vh*.45)a=i});links.forEach((l,i)=>{l.classList.toggle('on',i===a);l.toggleAttribute('aria-current',i===a)});
  const sr=st&&st.getBoundingClientRect();rail.classList.toggle('dark',!!sr&&sr.top<vh*.5&&sr.bottom>vh*.5);const f=document.querySelector('.f2');rail.classList.toggle('hide',!!f&&f.getBoundingClientRect().top<vh*.6)}};
let tk=false;addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(()=>{tk=false;tick()})}},{passive:true});addEventListener('resize',tick,{passive:true});tick();
})();
