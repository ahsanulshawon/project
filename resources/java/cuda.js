$(document).ready(function(){
    //Sticky menu
    
    $(".js--services--section").waypoint(function(direction){
        if(direction == "down"){
           $("nav").addClass("sticky");
           } else {
           $("nav").removeClass("sticky");
           }
    });
    
    
    
    //Mix it up section
    var mixer = mixitup('.cont');
    
    
});