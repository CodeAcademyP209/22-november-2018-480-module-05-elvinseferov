let navLink=$(".navbar-nav li a");
let sections=$("section");
navLink.click(function(){
	for(let i=0;i<sections.length;i++){
		if(($(sections[i]).attr("name"))==$(this).html()){
			let section=$(sections[i]);
			console.log(section.offset().top)
			$("html, body").animate({ scrollTop: section.offset().top }, 600);
		}
	}
})


$(window).scroll(function(){
	console.log(Math.floor($(window).scrollTop()))
	if($(window).scrollTop()>50){
		$("#navigation").css({
			background:"black",
			top:$(window).scrollTop()+"px"
		})
	}
})


let slideScroll=$(".slide").offset();

console.log(sliderScroll.left);

let slideAmount=$(".card").width();

let theSlide=286;
console.log(slideAmount)


$(".previous").click(function(){

	theSlide-=slideAmount
	$(".slide").offset({left:theSlide})
	console.log(theSlide)
})



$(".next").click(function(){

	theSlide+=slideAmount
	$(".slide").offset({left:theSlide})
	console.log(theSlide)
})
