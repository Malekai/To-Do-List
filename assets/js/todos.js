// Strike through text when clicked

$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});

$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var toDoText = ($(this).val());
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-minus'></i></span> " + toDoText + "</li>")
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});