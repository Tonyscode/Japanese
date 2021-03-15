(function(){
 const header = document.querySelector('header');
 window.onscroll= () => {
     if (window.pageYOffset > 50){
        header.classList.add('header_active');
     }
     else{
        header.classList.remove('header_active');
     }
 }
}
)();

//Burger handler
(function(){
   const burgerItem = document.querySelector('.burger');
   const menu =  document.querySelector('.header__nav');
   const menuCloseItem = document.querySelector('.header__nav-close');
   burgerItem.addEventListener('click', ()=> {
      
      menu.classList.add('header__nav_active');
   });
   menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
      console.log(menuCloseItem);
   });
})();

//Плавный скролл
$("a.scroll-to").on("click", function(e){
   e.preventDefault();
    let anchor = $(this).attr('href');
   $('html, body').stop().animate({
       scrollTop: $(anchor).offset().top - 107
   }, 1000);
});