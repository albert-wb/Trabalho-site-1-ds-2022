VanillaTilt.init(document.querySelectorAll(".suzybot"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".botao"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".principal2"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".cabecalho-logo"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".rodape-img"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

// tarefas

VanillaTilt.init(document.querySelectorAll(".conteudo-tarefas"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});
VanillaTilt.init(document.querySelectorAll(".turma-a-conteudo"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});
VanillaTilt.init(document.querySelectorAll(".turma-b-conteudo"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

// horarios 

VanillaTilt.init(document.querySelectorAll(".manha"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".tarde"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".cabecalho-logo"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

VanillaTilt.init(document.querySelectorAll(".botaot"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

document.getElementById("btn-train").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","train");
  })
  
  document.getElementById("btn-shine").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","shine");
  })
  
  document.getElementById("btn-tv").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","tv");
  })
  document.getElementById("btn-subway").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","subway");
  })
  
  document.getElementById("btn-sal").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","sal");
  })
  
  document.getElementById("btn-mine").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","mine");
  })
