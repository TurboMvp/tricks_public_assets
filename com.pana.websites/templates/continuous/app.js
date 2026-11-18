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

(()=>{const D=document.documentElement,$$=s=>[...document.querySelectorAll(s)],h=document.querySelector('.h5');
const secs=$$('[data-bg]'),links=$$('.rail a'),tg=$$('.rail a').map(a=>document.querySelector(a.getAttribute('href')));
const hx=c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16)),mix=(a,b,t)=>'rgb('+a.map((v,i)=>Math.round(v+(b[i]-v)*t)).join(',')+')';
const C=secs.map(s=>({el:s,bg:hx(s.dataset.bg),fg:hx(s.dataset.fg),ac:hx(s.dataset.ac)}));
const figs=$$('.ch-fig'),rl=document.querySelector('.rail');
if(!D.classList.contains('mo'))return;
const pv=window.onTplScroll;window.onTplScroll=vh=>{pv&&pv(vh);
 const r=h.getBoundingClientRect();h.style.setProperty('--hp',Math.min(1,Math.max(0,-r.top/Math.max(1,r.height-vh))).toFixed(4));
 let a=null,b=null,t=0;for(let i=0;i<C.length;i++){const top=C[i].el.getBoundingClientRect().top-vh*.55;if(top<=0)a=i}
 if(a!==null){const n=C[a+1];if(n){const ta=C[a].el.getBoundingClientRect().bottom-vh*.55;t=Math.min(1,Math.max(0,1-ta/(vh*.45)))}
  const A=C[a],B=n||A;D.style.setProperty('--bg',mix(A.bg,B.bg,t));D.style.setProperty('--ink',mix(A.fg,B.fg,t));D.style.setProperty('--accent',mix(A.ac,B.ac,t));
  D.style.setProperty('--surface','color-mix(in srgb,var(--bg) 88%,var(--ink))');}
 else{['--bg','--ink','--accent','--surface'].forEach(p=>D.style.removeProperty(p))}
 for(const f of figs){const q=f.getBoundingClientRect();if(q.bottom<0||q.top>vh)continue;f.style.setProperty('--cp',Math.min(1,Math.max(0,1-(vh-q.top)/(vh*.85))).toFixed(3))}
 rl.classList.toggle('off',scrollY<vh*1.6);let on=-1;tg.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<vh*.5)on=i});links.forEach((l,i)=>l.classList.toggle('on',i===on))};})();

(()=>{const n=document.querySelector('.m5-n'),cs=['c1','c2','c3','stay'].map(i=>document.getElementById(i)).filter(Boolean);if(!n)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)n.textContent=String(cs.indexOf(e.target)+1).padStart(2,'0')}),{rootMargin:'-45% 0px -45% 0px'});cs.forEach(c=>io.observe(c))})();