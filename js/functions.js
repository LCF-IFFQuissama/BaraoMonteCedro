var x = false;
window.onload = function() {

	setTimeout(function(){
		$('#option').modal('show');
		$('#option').css("opacity", "1");
	}, 1000);

	if (window.matchMedia("(orientation: portrait)").matches) {
		show();
	}
	if(innerWidth > 550) {
		$('#tutorial-1').css("background-image", "url(/img/small - 00-1.png)"); 
		$('#tutorial-2').css("background-image", "url(/img/small - 00-2.png)"); 
	}
}

function show() {
	if(x == false) {
		var mensagem = $("#mensagem");
		mensagem.show();
		setTimeout(
			function(){
				mensagem.hide();
			}, 5000);
		x = true;
	}
}

$(document).ready(function(){
    $('.carousel').carousel({
        interval: 14000
    });
});
