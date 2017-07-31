// ----------------------- FUNCAO PARA VALIDAR BUSCA
function validarBusca() {
	if( document.querySelector('#q').value == '' ) {
		alert('O campo de busca deve ser preenchedio para realizar uma pesquisa.');
		return false;
	}
}
document.querySelector('#form-busca').onsubmit = validarBusca;

// ----------------------- FUNCAO PARA BANNER
var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;
var controle = document.querySelector('.pause');
var timer = setInterval(trocaBanner, 4000);

// rodar banner
function trocaBanner() {
	bannerAtual = (bannerAtual+1) % 2;
	document.querySelector('.img-destaque').src = banners[bannerAtual];
}

// pause/resume banner
controle.onclick = function() {
	alert("teste");
	if( controle.className == 'pause' ) {
		clearInterval(timer);
		controle.className = 'play';
	}
	else {
		timer = setInterval(trocaBanner, 4000);
		controle.className = 'pause';
	}
	return false;
}