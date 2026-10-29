(function(){
  var d=document, root=d.documentElement;
  var dr=d.getElementById('drawer'), ov=d.getElementById('overlay'), op=d.getElementById('menu-open'), cl=d.getElementById('menu-close');
  if(!dr||!op) return;
  function openM(){dr.classList.add('open');ov.classList.add('open');op.setAttribute('aria-expanded','true');root.style.overflow='hidden';}
  function closeM(){dr.classList.remove('open');ov.classList.remove('open');op.setAttribute('aria-expanded','false');root.style.overflow='';}
  op.addEventListener('click',openM); cl.addEventListener('click',closeM); ov.addEventListener('click',closeM);
  d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
  window.addEventListener('resize',function(){if(window.innerWidth>900)closeM();});
})();
