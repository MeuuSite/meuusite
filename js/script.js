var $doc = $('html, body');

$('.scrollSuave').on('click', function() {

    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

		
function sendMail()
{
    var yourMessage = $("#descricao").val();
    var subject = $("#nome").val() + " - " + $("#email").val();
    document.location.href = "mailto:meeusite.gama@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);

        limpar();
}




		function salvar(){
			var nome = $("#nome").val();
			var email = $("#email").val();
			var descricao = $("#desricao").val();
			$.post("https://script.google.com/macros/s/AKfycbw8qvt-6K7e1OP9NR3PxDKUQBzxtkW6Dgzi6qrjSUSnQBoSljY/exec",{
				Nome: nome,
				Email: email,
				Descricao: descricao
			});

			alert("Cadastro enviado com sucesso!");
			// limpar();
		}
		function limpar(){
			$("#nome").val("");
			$("#email").val("");
			$("#descricao").val("");
			location.reload();
		}


