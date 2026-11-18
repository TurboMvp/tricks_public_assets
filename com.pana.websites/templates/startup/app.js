(()=>{const c=document.getElementById('field'),x=c.getContext('2d'),mo=document.documentElement.classList.contains('mo');
let W,H,R,dpr,pts=[],t=0,mx=0,my=0;
// Fibonacci sphere with quasi-periodic radial modulation: an "aperiodic" lattice
const N=innerWidth<820?700:1500;for(let i=0;i<N;i++){const y=1-2*(i+.5)/N,r=Math.sqrt(1-y*y),a=i*2.399963;pts.push([Math.cos(a)*r,y,Math.sin(a)*r,i%7==0?1:0])}
function size(){dpr=Math.min(devicePixelRatio||1,2);W=c.clientWidth;H=c.clientHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);R=Math.min(W*(W<820?.48:.3),H*.42)}
function draw(){x.clearRect(0,0,W,H);const cx=W<820?W*.62:W*.7,cy=W<820?H*.3:H*.46,ay=t*.12+mx*.4,ax=.35+my*.25,cA=Math.cos(ay),sA=Math.sin(ay),cB=Math.cos(ax),sB=Math.sin(ax);
for(const p of pts){let[X,Y,Z,h]=p;const m=1+.07*Math.sin(X*7+t*.8)*Math.cos(Y*11-t*.5)+.04*Math.sin(Z*13*1.618+t);X*=m;Y*=m;Z*=m;
let x1=X*cA-Z*sA,z1=X*sA+Z*cA,y1=Y*cB-z1*sB,z2=Y*sB+z1*cB;const s=2.6/(3.2-z2),px=cx+x1*R*s,py=cy+y1*R*s,d=(z2+1)/2;
x.globalAlpha=.15+d*.8;x.fillStyle=h?'#F2B544':(d>.6?'#7FE3D6':'#5d6b6a');const rr=(h?2.1:1.2)*s;x.fillRect(px-rr/2,py-rr/2,rr,rr)}
x.globalAlpha=.5;x.strokeStyle='rgba(242,181,68,.25)';x.lineWidth=1;x.beginPath();x.ellipse(cx,cy,R*1.32,R*.34,-.25,0,7);x.stroke();x.globalAlpha=1}
size();draw();addEventListener('resize',()=>{size();draw()});
if(mo){let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(c);addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
(function loop(){if(vis){t+=.012;draw()}requestAnimationFrame(loop)})();
const hz=document.getElementById('hz');let n=2184906;setInterval(()=>{n+=Math.floor(Math.random()*40+8);hz.textContent='Candidates screened · '+n.toLocaleString('en-US')},180)}
// reveals + count-up
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target)}),{rootMargin:'0px 0px -10% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
if(mo){const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,to=+el.dataset.n,dg=+(el.dataset.d||0),t0=performance.now();
(function f(now){const k=Math.min((now-t0)/1600,1),v=to*(1-Math.pow(1-k,4));el.textContent=v.toFixed(dg);if(k<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(el=>co.observe(el))}
})();
