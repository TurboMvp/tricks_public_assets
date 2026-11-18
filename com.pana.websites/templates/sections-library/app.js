(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
// reveals
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
const MO=document.documentElement.classList.contains('mo');$$('.rv').forEach(el=>MO?io.observe(el):el.classList.add('in'));
// count-up
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,to=+el.dataset.count,suf=el.dataset.suf||'';if(RM){return}const t0=performance.now(),d=1600;const f=t=>{const p=Math.min(1,(t-t0)/d),k=1-Math.pow(1-p,4);el.textContent=Math.round(to*k)+suf;if(p<1)requestAnimationFrame(f)};el.textContent='0'+suf;requestAnimationFrame(f)}),{threshold:.6});
$$('[data-count]').forEach(el=>cio.observe(el));
// how it works
const steps=$$('.how-step'),stages=$$('.how-visual .stage'),bar=$('.how-bar i');
const setStep=i=>{steps.forEach((s,j)=>s.classList.toggle('on',j===i));stages.forEach((s,j)=>s.classList.toggle('on',j===i));bar.style.width=((i+1)/steps.length*100)+'%'};
setStep(0);
const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setStep(+e.target.dataset.i)}),{rootMargin:'-45% 0px -45% 0px'});
steps.forEach(s=>sio.observe(s));
// gallery
const gal=$('#gal');$$('[data-gal]').forEach(b=>b.addEventListener('click',()=>gal.scrollBy({left:+b.dataset.gal*gal.clientWidth*.8,behavior:RM?'auto':'smooth'})));
const items=$$('#gal button'),lb=$('#lb'),fig=$('#lbfig'),cap=$('#lbcap');let cur=0,last;
const show=i=>{cur=(i+items.length)%items.length;const ph=items[cur].querySelector('.ph');fig.className='lb-fig '+ph.className;cap.textContent=items[cur].querySelector('span').textContent+'  '+(cur+1)+' of '+items.length};
const open=i=>{last=document.activeElement;show(i);lb.hidden=false;requestAnimationFrame(()=>lb.classList.add('open'));$('.lb-close').focus();document.body.style.overflow='hidden'};
const close=()=>{lb.classList.remove('open');document.body.style.overflow='';setTimeout(()=>lb.hidden=true,400);last&&last.focus()};
items.forEach((b,i)=>b.addEventListener('click',()=>open(i)));
$('.lb-close').onclick=close;$('.lb-prev').onclick=()=>show(cur-1);$('.lb-next').onclick=()=>show(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb)close()});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
let tx=0;lb.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});
// parallax
const par=$$('[data-par]');if(!RM&&par.length){let tick=false;const run=()=>{const vh=innerHeight;par.forEach(p=>{const r=p.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const k=(r.top+r.height/2-vh/2)/vh;p.style.transform=`translate3d(0,${(k*-40).toFixed(1)}px,0)`});tick=false};addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(run)}},{passive:true});run()}
// testimonials
const qs=$$('.quote'),dots=$$('#tdots button');let qi=0,qt;
const q=i=>{qi=(i+qs.length)%qs.length;qs.forEach((x,j)=>x.classList.toggle('on',j===qi));dots.forEach((d,j)=>d.setAttribute('aria-current',j===qi))};
dots.forEach((d,i)=>d.onclick=()=>{q(i);stop()});$$('[data-t]').forEach(b=>b.onclick=()=>{q(qi+ +b.dataset.t);stop()});
const stop=()=>clearInterval(qt);if(!RM)qt=setInterval(()=>q(qi+1),6000);
let sx=0;const st=$('#tst');st.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});st.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40){q(qi+(d<0?1:-1));stop()}});
// logos
const marks=['<b class="lm lm1">northwind</b>','<b class="lm lm2">HALDEN&amp;CO</b>','<b class="lm lm3">Fieldwork</b>','<b class="lm lm4">ORBIT/</b>','<b class="lm lm5">kiln.</b>','<b class="lm lm6">Marée</b>'];
const fill=(el,o)=>{let h='';for(let k=0;k<2;k++)for(let i=0;i<6;i++)h+='<span>'+marks[(i+o)%6]+'</span>';el.innerHTML=h};fill($('#marq1'),0);fill($('#marq2'),3);
// picker
const prods=$$('.prod');$$('#ppf button').forEach(b=>b.onclick=()=>{$$('#ppf button').forEach(x=>x.setAttribute('aria-pressed',x===b));const f=b.dataset.f;prods.forEach(p=>p.classList.toggle('hide',f!=='all'&&p.dataset.c!==f))});
const tray=$('#tray'),tt=$('#trayt'),ct=$('#cmpt');
const sel=()=>prods.filter(p=>p.querySelector('input').checked);
prods.forEach(p=>p.querySelector('input').addEventListener('change',e=>{if(sel().length>3){e.target.checked=false;tt.textContent='Up to 3 at once';return}const n=sel().length;tt.textContent=n+' selected';tray.classList.toggle('on',n>0);if(!n)ct.hidden=true}));
$('#cmpgo').onclick=()=>{const s=sel();if(s.length<2){tt.textContent='Pick at least 2';return}const row=(l,k)=>'<tr><th scope="row">'+l+'</th>'+s.map(p=>'<td>'+p.dataset[k]+'</td>').join('')+'</tr>';ct.innerHTML='<table><caption class="sr">Product comparison</caption><thead><tr><th scope="col">Product</th>'+s.map(p=>'<th scope="col">'+p.dataset.n+'</th>').join('')+'</tr></thead><tbody>'+row('Price','p')+row('Weight','w')+row('Size','s')+'</tbody></table>';ct.hidden=false;ct.scrollIntoView({behavior:RM?'auto':'smooth',block:'nearest'})};
// pricing
const bill=$('#bill');$$('#bill button').forEach(b=>b.onclick=()=>{const y=b.dataset.b==='y';bill.classList.toggle('y',y);$$('#bill button').forEach(x=>x.setAttribute('aria-pressed',x===b));$$('.plan .amt b').forEach(el=>{el.classList.add('flip');setTimeout(()=>{const v=el.dataset[y?'y':'m'];el.textContent='€'+(+v%1?(+v).toFixed(2):v);el.classList.remove('flip')},RM?0:180)})});
// lead form
$('#leadf').addEventListener('submit',e=>{e.preventDefault();const em=$('#le'),er=$('#lee');if(!em.value||!em.checkValidity()){er.textContent='Please enter a valid email, like name@example.com';em.focus();return}er.textContent='';e.target.classList.add('sent')});
// booking
const days=$('#days'),slots=$('#slots'),sd=$('#sd'),stt=$('#st'),go=$('#bookgo');const base=new Date();base.setHours(0,0,0,0);
$('#month').textContent=base.toLocaleDateString('en',{month:'long',year:'numeric'});
const times=['9:00','9:30','10:00','11:00','13:30','14:00','15:00','16:30'];let pickedDay=null;
for(let i=1;i<=14;i++){const d=new Date(base);d.setDate(d.getDate()+i);const b=document.createElement('button');b.className='day';b.setAttribute('aria-pressed','false');const wk=d.getDay()%6===0;b.disabled=wk;b.innerHTML=d.toLocaleDateString('en',{weekday:'short'})+' <b>'+d.getDate()+'</b>'+(wk?'<span class="sr"> closed</span>':'');b.onclick=()=>{$$('.day').forEach(x=>x.setAttribute('aria-pressed',x===b));pickedDay=d;sd.textContent=d.toLocaleDateString('en',{weekday:'short',day:'numeric',month:'short'});renderSlots(i);stt.textContent='Choose a time';go.setAttribute('aria-disabled','true')};days.appendChild(b)}
const renderSlots=seed=>{slots.innerHTML='';times.forEach((t,j)=>{const b=document.createElement('button');b.className='slot';b.textContent=t;b.setAttribute('aria-pressed','false');b.disabled=((j*7+seed*3)%5===0);b.onclick=()=>{$$('.slot').forEach(x=>x.setAttribute('aria-pressed',x===b));stt.textContent=t;if(pickedDay)go.setAttribute('aria-disabled','false')};slots.appendChild(b)})};
renderSlots(0);
go.onclick=e=>{e.preventDefault();if(go.getAttribute('aria-disabled')==='true')return;go.textContent='Booked. See you then'};
})();
/* v2 motion */
(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,$$=(s)=>[...document.querySelectorAll(s)];
// split headings into masked words
$$('h1.rv,h2.rv').forEach(h=>{if(h.children.length)return;const ws=h.textContent.trim().split(/\s+/);h.innerHTML=ws.map((w,i)=>`<span class="w"><span style="--i:${i}">${w}</span></span>`).join(' ');h.setAttribute('aria-label',ws.join(' '));h.classList.remove('rv');h.classList.add('split')});
// stagger groups
['.bento','.feat-list','.svc-list','.lib-groups','.about-facts'].forEach(s=>$$(s).forEach(g=>{[...g.children].forEach((c,i)=>{c.style.setProperty('--i',i);c.classList.remove('rv','d1','d2','d3')});g.classList.add('stg')}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');[...e.target.querySelectorAll('.rv')].forEach(x=>x.classList.add('in'));io.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px'});
const MO=document.documentElement.classList.contains('mo');$$('.split,.stg').forEach(el=>MO?io.observe(el):el.classList.add('in'));
if(RM)return;
// scrubbed values
$$('.about-media,.feat-big,.how-visual,.b1').forEach(e=>e.classList.add('scrub-card'));
const head=document.querySelector('.lib-head h1'),groups=$$('.group-title h2'),cards=$$('.scrub-card'),pr=document.documentElement;
let vh=innerHeight,tick=false;addEventListener('resize',()=>vh=innerHeight,{passive:true});
const cl=v=>v<0?0:v>1?1:v;
const run=()=>{tick=false;const y=scrollY;pr.style.setProperty('--sp',(y/(pr.scrollHeight-vh)).toFixed(4));
 if(head)head.style.setProperty('--p',cl(y/(vh*.8)).toFixed(3));
 groups.forEach(g=>{const r=g.getBoundingClientRect();if(r.bottom<-50||r.top>vh+50)return;g.style.setProperty('--p',cl((vh-r.top)/(vh*.7)).toFixed(3))});
 cards.forEach(c=>{const r=c.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;c.style.setProperty('--p',cl((vh-r.top)/(vh*.6)).toFixed(3))})};
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(run)}},{passive:true});run();
// native scroll only: custom wheel smoothing removed (snagged over cards)
})();
/* v3 motion: text-roll buttons, scroll-scrubbed tilt/expand (refs: nikolaradeski, vanderhotel) */
(()=>{const $$=s=>[...document.querySelectorAll(s)],D=document.documentElement;
$$('.btn').forEach(b=>{if(b.querySelector('.roll'))return;const t=b.textContent.trim();if(!t)return;b.innerHTML='<span class="roll"><span>'+t+'</span><span aria-hidden="true">'+t+'</span></span>'});
if(!D.classList.contains('mo'))return;
const els=$$('.cta,.pf-item,.bento>*,.plan,.member,.gal button');els.forEach((e,i)=>{e.classList.add('sc');e.style.setProperty('--s',i%2?1:-1)});
let vh=innerHeight,tk=false;addEventListener('resize',()=>vh=innerHeight,{passive:true});
const run=()=>{tk=false;for(const e of els){const r=e.getBoundingClientRect();if(r.bottom<-100||r.top>vh+100)continue;const p=Math.max(0,Math.min(1,(vh-r.top)/(vh*.75)));e.style.setProperty('--p',p.toFixed(3))}};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(run)}},{passive:true});run();
})();
