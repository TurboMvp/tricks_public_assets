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

(()=>{const D=document.documentElement;if(!D.classList.contains('mo'))return;const cs=[...document.querySelectorAll('.card9')];let tk=0;
const f=()=>{tk=0;for(let i=0;i<cs.length-1;i++){const n=cs[i+1].getBoundingClientRect(),r=cs[i].getBoundingClientRect();const d=Math.max(0,Math.min(1,(r.bottom-n.top)/r.height));cs[i].style.setProperty('--d',d.toFixed(3))}};
addEventListener('scroll',()=>{if(!tk){tk=1;requestAnimationFrame(f)}},{passive:true});f()})();
