var contadordeChateo = 0;

$(document).ready(function() {
	var mensaje = $("#textChateo").val();
	var mensajesss = $("#conversa").val();

	localStorage.mensaje = mensaje; // guardando datos
	localStorage.mensajesss = mensajesss; // guardando datos

	// enviar mensaje
	$("#textChateo").enter(function(event) {
		contadordeChateo++;

	});
});