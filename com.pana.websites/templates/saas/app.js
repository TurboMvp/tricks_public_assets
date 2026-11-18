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

/* hero: one live moment, a receipt gets matched */
(()=>{const MO=document.documentElement.classList.contains('mo'),app=document.getElementById('app');if(!app)return;
const chip=document.getElementById('txs'),row=chip.closest('li'),toast=document.getElementById('toast'),kb=app.querySelector('.kpi b span'),mt=app.querySelector('.kpi .mt i');
const match=()=>{chip.className='chip ok';chip.textContent='Matched';row.classList.add('flash');toast.classList.add('show');if(kb){const d=parseInt(kb.textContent.replace(/\D/g,''),10),n=kb.parentNode.firstChild,c=parseInt(n.nodeValue,10);if(d&&c<d)n.nodeValue=String(c+1)}if(mt&&kb){const d=parseInt(kb.textContent.replace(/\D/g,''),10),c=parseInt(kb.parentNode.firstChild.nodeValue,10);if(d)mt.style.width=(100*Math.min(c,d)/d).toFixed(1)+'%'}setTimeout(()=>row.classList.remove('flash'),1600)};
if(!MO){match();row.classList.remove("flash");return}const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){o.disconnect();setTimeout(match,2200)}},{threshold:.3});o.observe(app)})();

/* product tabs: click, arrow keys, autoplay while in view */
(()=>{const tabs=[...document.querySelectorAll('.pd-tabs [role=tab]')],panes=[...document.querySelectorAll('.pd-pane')];if(!tabs.length)return;
const MO=document.documentElement.classList.contains('mo'),DUR=6500;let cur=0,auto=MO,vis=false,t0=0,raf=0;
const show=(i,focus)=>{cur=(i+tabs.length)%tabs.length;tabs.forEach((t,j)=>{const on=j===cur;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;t.querySelector('.fill').style.setProperty('--f',0)});panes.forEach((p,j)=>p.classList.toggle('on',j===cur));if(focus)tabs[cur].focus();t0=performance.now()};
const stop=()=>{auto=false;cancelAnimationFrame(raf);tabs.forEach(t=>t.querySelector('.fill').style.setProperty('--f',0))};
tabs.forEach((t,i)=>{t.addEventListener('click',()=>{stop();show(i)});t.addEventListener('keydown',e=>{const k={ArrowRight:1,ArrowLeft:-1}[e.key];if(e.key==='Home'){e.preventDefault();stop();show(0,1)}else if(e.key==='End'){e.preventDefault();stop();show(tabs.length-1,1)}else if(k){e.preventDefault();stop();show(cur+k,1)}})});
const pane=document.querySelector('.pd-panes');
let hold=false;pane.addEventListener('pointerenter',()=>hold=true);pane.addEventListener('pointerleave',()=>{hold=false});
let last=performance.now();const tick=n=>{const dt=n-last;last=n;if(auto&&vis){if(hold)t0+=dt;const p=(n-t0)/DUR;if(p>=1)show(cur+1);else tabs[cur].querySelector('.fill').style.setProperty('--f',p.toFixed(3))}if(auto)raf=requestAnimationFrame(tick)};
if(!MO)return;new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis)t0=performance.now()},{threshold:.35}).observe(pane);raf=requestAnimationFrame(tick)})();
