(()=>{const D=document.documentElement,$$=(s,r=document)=>[...r.querySelectorAll(s)],MO=D.classList.contains('mo');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
$$('.rv').forEach(el=>MO?io.observe(el):el.classList.add('in'));
const C=v=>v<0?0:v>1?1:v,E=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,S=(q,a,b)=>E(C((q-a)/(b-a))),p2=n=>String(n).padStart(2,'0');
const tr=document.querySelector('.how-track'),st=$$('.step'),sl=$$('.sl'),scr=document.querySelector('.dv-how .dv-s');let cur=-1;
/* live phone: one render(q) per screen, q = progress through that step */
const tap=document.createElement('i');tap.className='tap';tap.innerHTML='<i></i>';scr&&scr.appendChild(tap);
const pos=(el,app)=>{let x=el.offsetWidth/2,y=el.offsetHeight/2;while(el&&el!==app){x+=el.offsetLeft;y+=el.offsetTop;el=el.offsetParent}return[x,y]};
const tapAt=(xy,q,t,hold=0)=>{const a=C(1-Math.abs(q-t-hold/2)/(.1+hold/2)),pr=C(1-Math.abs(q-t)/.05),r=C((q-t)/.12);
 return{o:a,x:xy[0],y:xy[1],s:1-pr*.22,ro:q>t?(1-r)*.7:0,rs:.6+r*1.4}};
const R=sl.map((s,i)=>{const A=s.querySelector('.app'),q=x=>s.querySelector(x);
 if(i===0){const tv=q('.tv'),b=q('.tmr b'),li=$$('.lst li',s),sw=li[1].querySelector('.sw'),sub=li[1].querySelector('span');
  const ck=li[0].querySelector('.ck').cloneNode(true);ck.classList.add('ck2');li[2].appendChild(ck);const sub0=sub.innerHTML;
  return q2=>{const t=1104-Math.round(240*S(q2,.06,.96));b.textContent=p2(t/60|0)+':'+p2(t%60);tv.style.strokeDasharray=(62+16*S(q2,.06,.96)).toFixed(2)+' 100';
   const a=q2>=.34,c=q2>=.66;sw.classList.toggle('on',a);li[1].classList.toggle('dn',a);sub.innerHTML=a?'<b>Phone to greyscale</b>22:36 · done':sub0;li[2].classList.toggle('ok',c);
   return q2<.5?tapAt(pos(sw,A),q2,.34):tapAt(pos(ck,A),q2,.66)}}
 if(i===1){const ti=q('.tile.t1'),np=q('.np'),bar=q('.np-bar i');
  return q2=>{const pr=C(1-Math.abs(q2-.24)/.05);ti.style.transform='scale('+(1-pr*.05)+')';ti.classList.toggle('sel',q2>=.24);
   const u=S(q2,.28,.44);np.style.transform='translate3d(0,'+((1-u)*140).toFixed(1)+'%,0)';np.style.opacity=u.toFixed(3);np.classList.toggle('pl',u>.5);
   bar.style.transform='scaleX('+(.02+.6*C((q2-.36)/.64)).toFixed(4)+')';return tapAt(pos(ti.querySelector('i'),A),q2,.24)}}
 if(i===2){const sw=q('.grp .sw'),f=q('.win-f'),k=q('.win-k'),t=q('.win-t'),b=q('.alm b'),w=q('.win');
  return q2=>{const on=q2>=.26;sw.classList.toggle('on',on);w.style.opacity=on?1:.45;const s=.2+.8*S(q2,.44,.8),W=t.offsetWidth,x=W*(.333+.5*s);
   f.style.transform='scaleX('+s.toFixed(4)+')';k.style.transform='translate3d('+x.toFixed(1)+'px,-50%,0) translateX(-50%)';
   const m=410+Math.round(30*s);b.innerHTML='06:50<em>–</em>'+p2(m/60|0)+':'+p2(m%60);
   if(q2<.36)return tapAt(pos(sw,A),q2,.26);const kp=pos(t,A);return tapAt([kp[0]-W/2+x,kp[1]],q2,.44,.36)}}
 const tv=q('.tv'),b=q('.sc b'),bs=$$('.wk-b span i',s),av=q('.wk p span'),al=q('.wk-avg');
 return q2=>{const u=S(q2,.06,.5);tv.style.strokeDasharray=(86*u).toFixed(2)+' 100';b.textContent=Math.round(86*u);
  bs.forEach((e,j)=>e.style.transform='scaleY('+S(q2,.3+j*.05,.52+j*.05).toFixed(4)+')');const v=S(q2,.3,.82);av.textContent='avg '+Math.round(77*v);al.style.opacity=S(q2,.8,.9).toFixed(3);
  return{o:0}}});
let lq=-1;const draw=(i,q)=>{if(!R[i])return;const t=R[i](q);tap.style.opacity=(t.o||0).toFixed(3);if(t.o>0){tap.style.transform='translate3d('+t.x.toFixed(1)+'px,'+t.y.toFixed(1)+'px,0) scale('+t.s.toFixed(3)+')';tap.firstChild.style.opacity=t.ro.toFixed(3);tap.firstChild.style.transform='scale('+t.rs.toFixed(3)+')'}};
const set=i=>{if(i===cur)return;cur=i;st.forEach((s,j)=>s.classList.toggle('on',j===i));sl.forEach((s,j)=>{s.classList.toggle('on',j===i);s.classList.toggle('lf',j<i)});
 if(MO)R.forEach((r,j)=>{if(j<i)r(1);else if(j>i)r(0)})};
if(!MO)R.forEach(r=>r(1));set(0);
const tick=()=>{if(!tr||!tr.offsetHeight||getComputedStyle(tr).display==='none')return;const r=tr.getBoundingClientRect(),run=r.height-innerHeight,p=Math.min(Math.max(-r.top/run,0),.9999),f=p*4,i=Math.floor(f);set(i);st[i]&&st[i].style.setProperty('--sp',(f-i).toFixed(3));if(MO)draw(i,f-i)};
let raf=0;addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(()=>{raf=0;tick()})},{passive:true});addEventListener('resize',tick);tick();
st.forEach((s,i)=>s.querySelector('button').addEventListener('click',()=>{const r=tr.getBoundingClientRect(),run=r.height-innerHeight;scrollTo({top:scrollY+r.top+run*(i+.5)/4,behavior:MO?'smooth':'auto'})}));
const mc=document.querySelector('.mcs'),dt=$$('.dots i');mc&&mc.addEventListener('scroll',()=>{const w=mc.firstElementChild.offsetWidth+14,i=Math.round(mc.scrollLeft/w);dt.forEach((d,j)=>d.classList.toggle('on',j===Math.min(i,3)))},{passive:true});
/* mobile cards: lighter, plays once when a card is mostly in view */
if(MO){const mo=new IntersectionObserver(es=>es.forEach(e=>{if(e.intersectionRatio>.55){const c=e.target;c.classList.add('play');mo.unobserve(c);const b=c.querySelector('.sc b');if(b){const t0=performance.now()+300,f=n=>{const u=E(C((n-t0)/1200));b.textContent=Math.round(86*u);if(u<1)requestAnimationFrame(f)};b.textContent='0';requestAnimationFrame(f)}}}),{threshold:[.55,.8]});$$('.mc').forEach(c=>mo.observe(c))}
})();
