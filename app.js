window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-principal-rolagem', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.borda-apresentacao', {
    duration: 2000, 
    distance: '90px',
    delay: 2000
})
revelar.reveal('.apresentacao-titulo', {
    duration: 2000, 
    distance: '90px',
    delay: 2000
})
revelar.reveal('.apresentacao-texto', {
    duration: 2000, 
    distance: '90px',
    delay: 2000
})
revelar.reveal('.borda-skills', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.skills-titulo', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-html-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-html', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-html-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-css-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-css', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-css-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-javascript-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-javascript', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-javascript-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-php-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-php', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-php-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-cmais-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-cmais', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-cmais-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-sql-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-sql', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-sql-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-phyton-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-phyton', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-phyton-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-java-nome', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-java', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.grafico-java-sobre', {
    duration: 2000, 
    distance: '90px'
})
revelar.reveal('.efeito-rodape-rolagem', {
    duration: 2000, 
    distance: '90px'
})


function scrollFunction() {
  var btnTopo = document.getElementById("btnTopo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnTopo.style.display = "block";
  } else {
      btnTopo.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} //botão de voltar ao topo

function redirectToForm () {
  window.open('formulariocontato.html', '_blanl');
}
window.onscroll = function() {
  scrollFunction();
}; //formulário de contato