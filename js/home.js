$(document).ready(function() {

    var owl = $("#owl-feeling");

    owl.owlCarousel({
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1000,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        navigationText: ["<img src='images/left.png'>","<img src='images/right.png'>"],
    });

    var owlProducts = $("#owl-comments");

    owlProducts.owlCarousel({
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1299,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        navigationText: ["<img src='images/left.png'>","<img src='images/right.png'>"],
    });

    // Custom Navigation Events
    // $(".next").click(function(){
    //     owl.trigger('owl.next');
    // })
    // $(".prev").click(function(){
    //     owl.trigger('owl.prev');
    // })
    // $(".play").click(function(){
    //     owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    // })
    // $(".stop").click(function(){
    //     owl.trigger('owl.stop');
    // })

    var owlProducts = $("#owl-products");

    owlProducts.owlCarousel({
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1299,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        navigationText: ["<img src='images/left.png'>","<img src='images/right.png'>"],
    });
});