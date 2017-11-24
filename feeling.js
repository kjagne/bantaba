$(document).ready(function(){
  $(".feeling").on("click",function(){   // like click
	var data_feeling = $(this).attr("data-feeling");
	$(".like-details").html("You, Varun Singh and 1k others");
	$(".like-btn-emo").removeClass().addClass('like-btn-emo').addClass('like-btn-'+data_feeling.toLowerCase());
	$(".like-btn-text").text(data_feeling).removeClass().addClass('like-btn-text').addClass('like-btn-text-'+data_feeling.toLowerCase()).addClass("active");;

	if(data_feeling == "Like")
	  $(".like-emo").html('<span class="like-btn-like"></span>');
	else
	  $(".like-emo").html('<span class="like-btn-like"></span><span class="like-btn-'+data_feeling.toLowerCase()+'"></span>');
  });
  
  $(".like-btn-text").on("click",function(){ // undo like click
	  if($(this).hasClass("active")){
		  $(".like-btn-text").text("Like").removeClass().addClass('like-btn-text');
		  $(".like-btn-emo").removeClass().addClass('like-btn-emo').addClass("like-btn-default");
		  $(".like-emo").html('<span class="like-btn-like"></span>');
		  $(".like-details").html("Varun Singh and 1k others");
		  
	  }	  
  })
  
  
});