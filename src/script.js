$(document).ready(function(){
    $("#slider1").carousel();
    $('.banner-items').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
    })
    $('.sale-product-slider').owlCarousel({
        responsive : {
            1280: {
                items: 4,
            },
            1024: {
                items: 3,
            },
            768: {
                items: 2,
            },
            320:{
                items: 1,
                margin: 0
            }
        },
        loop: false,
        nav: true,
        margin: 20,
        

    });
    $('.day-products-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        mouseDrag: false
    });
    function isActive(elem, activeClass){
        $(elem).click(function () {
            if ( $(elem).hasClass(activeClass)) {
                $(elem).removeClass(activeClass)
            }
            $(this).addClass(activeClass)
        })
    }
    function isActiveElem(elem, activeClass) {
        $(elem).each(function (){
            $(this).click(function () {
                if($(this).hasClass(activeClass)){
                    $(this).removeClass(activeClass)
                }else{
                    $(this).addClass(activeClass)
                }
            })
        })
    }
    isActiveElem('.card-eyes', 'active-card-icon-item' )
    isActiveElem('.add-to-cart-btn', 'active-add-to-cart-btn' )
    isActiveElem('.share', 'active-card-icon-item' )
    isActiveElem('.compare', 'active-compare' )
    isActiveElem('.one-click-btn', 'active-one-click-btn')

    isActive('.sale-tab-item', 'active-tab-item')
    isActive('.menu-item', 'active-menu-item')
    isActive('.header-icon-item', 'active-header-icon-item')
    isActive('.color-item', 'active-color-item')
    isActive('.product-size-item', 'active-product-size-item')
    isActive('.location-item', 'location-active-item')
    isActive('.material-item', 'material-active-item')
    isActive('.size-item ', 'size-active-item')


    $('.btn a').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('active-btn')
    })
    $('.card-active-property').click(function () {
        $(this).next().toggle();
        $(this).closest(".sale-slider-item").toggleClass('product-card-height')

    })
    $('.menu-close-btn').click(function () {
        $('.mob-menu-section').hide();
    })
    $('.burger-btn').click(function(){
        $('.mob-menu-section').show();
    })
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.search-inp').addClass('show-search')
        $('.search-inp').show()
    })
    $('.active-location').click(function () {
        $('.location-list').show()
    })

    $('.location-item').click(function () {
        if ($('.location-item').hasClass('location-active-item')) {
            let text = $('.location-active-item').text()
            $('.location-list').hide()
            $('.active-location p').text(text)
        }
    })
    $('.material-item ').click(function () {
        if ($('.material-item ').hasClass('material-active-item')) {
            const text = $('.material-active-item').text()
            const parent = $(this).closest('.material-list').prev('.card-active-property');
            parent.children('.active-material').text(text)
        }
    })
    $('.size-item').click(function () {
        if ($('.size-item').hasClass('size-active-item')) {
            const text = $('.size-active-item').text()
            const parent = $(this).closest('.size-list').prev('.card-active-property');
            parent.children('.active-size').text(text)
        }
    })
    $(document).mouseup( function(e){
		let input = $( ".search-inp" );
        if ($(window).width() <= '1023' && $(window).width() >= '768'){ 
            if ( !input.is(e.target) 
                && input.has(e.target).length === 0 ) { 
                input.removeClass('show-search') ;
                input.hide();
            }
        }
	});
    $('.carousel-control-next').click(function (event) {
        event.stopPropagation();
        console.log(event) 
    })
})


const ratingIcons = document.querySelectorAll('.rating-icons');
const  productFavoritesBtn = document.querySelectorAll('.card-favorities');

/*fixed menu*/
const navbar = document.querySelector(".header");
const sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*add ans remove favorites count*/

function AddAndRemoveElement(arr, countElem, activeClass) {
    let count = 0;
    for (const item of arr) {
        item.addEventListener('click', function(){
            if ( this.classList.contains(activeClass)) {
                this.classList.remove(activeClass);
                count--;
                if (count < 0) {
                    count=0
                }
                document.querySelector(countElem).innerHTML = count; 
            } else{
                this.classList.add(activeClass);
                count++;
                document.querySelector(countElem).innerHTML = count;
            }
        })
    }
}
AddAndRemoveElement(productFavoritesBtn, '.favorites-count', 'active-card-icon-item');

/* click to rating*/
for (const elem of ratingIcons) {
    let starsArr = Array.from(elem.children)
    starsArr.map((star, index) =>{
        star.addEventListener('click', function () {
            for (let i = 0; i <= index; i++) {
                starsArr[i].classList.add('active-rating-icon');
            }
        })
      })    
  }
/* tabs */
const saleProductSlider = document.querySelectorAll('.slider-wrap');
const saleTabItem = document.querySelectorAll('.sale-tab-item')
  for (const menuItem of saleTabItem) {
    menuItem.addEventListener('click', function () {
        for (const elem of saleProductSlider) {
            if (this.id === elem.dataset.id) {
                elem.classList.remove("hide-product-cards")
            } else{
                elem.classList.add('hide-product-cards')
            }
        }
    })
}


