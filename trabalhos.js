// -------------------------------------- VIDEOS PLAYER-DETALHES-------------------------------------------------

function redimensionar(){
    const overlayVideo = document.styleSheets[0].cssRules[56]
    const textoOverlayVideo = document.getElementById('box-texto-overlay')
    const VideoDetalhes = document.getElementById('divisao-video-detalhes')
    const windowDefaultSize = 1366
    let diferenca = windowDefaultSize - window.innerWidth
    let heightVideoDetalhes = parseFloat(VideoDetalhes.style.height) * 1.786
    let heightMenor = 430 - diferenca / 2

    if(window.innerWidth <= 1366){
        VideoDetalhes.style = 'height: '+ heightMenor +'px;'
        overlayVideo.style = 'width: ' + heightVideoDetalhes + 'px; content: ""; position: absolute; background: rgba(141, 53, 6, 0.5); height: 100%; object-fit: contain; top: 0;left: 0; border-radius: 3px;'
    }

    if(window.innerWidth > 1366){
        let positivando = diferenca * (-1)
        let heightMaior = 430 + positivando / 3
        overlayVideo.style = 'width: ' + heightVideoDetalhes + 'px; content: ""; position: absolute; background: rgba(141, 53, 6, 0.5); height: 100%; object-fit: contain; top: 0;left: 0; border-radius: 3px;'
        
        document.getElementById('player-video').style = 'width: 100%px;'
        VideoDetalhes.style = 'height: '+ heightMaior +'px;'
    }

    textoOverlayVideo.style.maxWidth = overlayVideo.style.width 
}

window.addEventListener('resize', redimensionar)
setInterval(redimensionar, 500)






// ------------------------------------------ RESUMO -------------------------------------------------------------------

const textoResumo = document.getElementById('texto-resumo')
const expandido = document.getElementsByClassName('expandido')

function expandirResumo(){
    textoResumo.innerHTML = '<div class="expandido" onclick="contrairResumo()">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. <br> <br> Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio. <br><br> Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa. <br><br> Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>'
}


function contrairResumo(){
    textoResumo.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant... <span id="ver-mais" onclick="expandirResumo()">ver mais</span>'
}

// expandido.addEventListener('click', contrairResumo)





//----------------------------- BOTAO-CRIAR-TOPICO -----------------------------------------

const textoIdeiasDuvidas = document.getElementById('texto-ideias-duvidas')
const botao = document.getElementById('botao-criar-topico')
const icones = document.getElementById('icones-box-discussoes')
const textoEstimulo = document.getElementById('texto-estimulo-comentario')
const hr = document.querySelector('.hr')

function criarNovoTopico(){
    textoIdeiasDuvidas.innerHTML = 'Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!<br>'
    textoIdeiasDuvidas.style = 'font-weight: 400; color: #5C5C5C; font-family: "Quicksand"; font-size: 15px; line-height: 18px;'
    icones.style.display = 'none'
    botao.style.display = 'none'
    hr.style = 'top: 0px;'

    textoEstimulo.innerHTML = '<div class="criando-topico"><span class="titulo-assunto" style="text-align: left;">Assunto</span><input style="height: 39px; border-radius: 3px; border: 1px solid #CCCCCC; padding-left: 23px;" for="" placeholder="Defina um tópico sucinto para notificar os autores..."></input> <span class="titulo-assunto" style="text-align: left; margin: 10px 0px 4px; 0px;">Conteúdo</span>  <textarea style="max-height: 90px; resize: none; margin-bottom: 0px; border-radius: 3px; border: 1px solid #CCCCCC; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" name="" id="" cols="30" rows="10"></textarea><div id="bold-italic-botao" style="margin-bottom: 15px; background: #EAF1F2; border-radius: 3px; border: 1px solid #CCCCCC; height: 31px; border-top-left-radius: 0px; border-top-right-radius: 0px;"><span style="float: left; margin-left: 29px; margin-top: 4px;"><img src="/imagens/bold.png" alt=""> <img style="margin-left: 30px;" src="/imagens/italic.png" alt=""></span><button style="height:32px; width: 20%; float: right; border: 0px; border-bottom-right-radius: 4px; background: var(--gradient-orange); color: white;">Enviar</button></div></div>'

    
}
