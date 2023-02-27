let aboutoffset = $('#about').offset().top 
$(Window).scroll(function(){
    let wscroll = $(window).scrollTop();
    if (wscroll >= aboutoffset - 100){
        $('#main-nav').css('cssText' , 'bacground-color:rgba(0,0,0,0.4) !important')
         $('#btnUp').fadeIn(500);
    }
    else{
        $('#main-nav').css('cssText' , 'bacground-color:transparent !important')
        $('#btnUp').fadeOut(500);
    }
    console.log(wscroll);
})


$('#btnUp').on('click' ,function () {
    $('html,body').animate({scrollTop:'0px'},1000)

})

$('.nav-link[href^= "#"]').click(function (e){

    let linkHref =$(e.target).attr('href')
    let linkOffset =$(linkHref).offset().top;
    $('html,body').animate({scrollTop:`${linkOffset}px`},1000)
} )
 

$(document).ready(function(){
  $('#loading.loader').fadeOut(1000,()=>{
   $('#loading').fadeOut(1000)
   $('body').css('overflow','auto')
  } )
 let aboutOffset =$('#about').offset().top;
 $(window).scroll(function () {
  let wscroll = $(window).scrollTop();
 })
    
 
})

