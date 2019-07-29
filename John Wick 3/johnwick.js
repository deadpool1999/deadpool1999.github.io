window.onload = function(){
var pt1 = document.getElementById('pt1') ;
var pt2 = document.getElementById('pt2') ;
var pt3 = document.getElementById('pt3') ;
var carousel = document.querySelector('.carousel1') ;
var carouseltext1 = document.getElementById('carouseltext1');
var carouseltext2 = document.getElementById('carouseltext2');
var carouseltext3 = document.getElementById('carouseltext3');
var carouseltext1_anim=0,carouseltext2_anim=1,carouseltext3_anim=1;
var body = document.body ;
var reviewtext1_anim = 0, reviewtext2_anim = 0, reviewtext3_anim = 0 ;
var review1 = document.querySelector('.review1') ;
var review2 = document.querySelector('.review2') ;
var review3 = document.querySelector('.review3') ;

var reviews = [review1,review2,review3] ;
var typereviews = [ "ONE OF THE BEST DAMN TRILOGIES EVER MADE", "ONE OF THE HOLLYWOODS BEST ACTIONS FRANCHISE GETS BIGGER" , "INSANELY EXPLOSIVE TWO-FISTED EXHILERATION" ] ; 
var review = document.querySelector('.reviews') ;

var togler = document.querySelector('.toggler') ;





var fade = [
    {
        opacity : 1,
        height: "150px",
        transform: "translateY(0)"
       // borderRadius: 0
        
    },
    {
        opacity : "0.3",
        height: "50px",
        transform: "translateY(50px)"
        //borderRadius: "80%"
    }
];
var show = [
    {
        opacity: "0.1",
        height: "50px",
        transform : "translateY(50px)"
    },
    {
        opacity: "1",
        height: "150px",
        transform : "translateY(0)"
    }
];

var slideleft = [
    {
        transform : "translateX(0)",
        opacity: 1
    },
    {
        transform : "translateX(-100px)",
        opacity: 0
    }
];


var slideright = [
    {
        transform : "translateX(100px)",
        opacity: 0
    },
    {
        transform : "translateX(0px)",
        opacity: 1
    }
];

var slideleft1 = [
    {
        transform : "translateX(-100px)",
        opacity: 0
    },
    {
        transform : "translateX(0px)",
        opacity: 1
    }
];


var slideright1 = [
    {
        transform : "translateX(0px)",
        opacity: 1
    },
    {
        transform : "translateX(100px)",
        opacity: 0
    }
];

body.onmousemove = function(e){
    console.log("mouse on body with x and y  ",e.clientX," ", e.clientY) ;  
    body.style["background-position"] = '-' + e.clientX/20 + 'px' + ' -' + e.clientY/10  + 'px' ;

}



pt1.onclick = function(){
    
    carouseltext2.style["opacity"] = 0 ;
    carouseltext2.style["opacity"] = 0 ;
    carouseltext3.style["opacity"] = 0 ;
    
    if(carouseltext2_anim)
    {
        carouseltext2.animate(
            slideright1,
            {
                duration:200,
                easing: 'ease-in-out'
            }
        );
        carouseltext2_anim = 0 ;
    }
    else if(carouseltext3_anim)
    {
        carouseltext3.animate(
            slideright1,
            {
                duration:200,
                easing: 'ease-in-out'
            }
        );
        carouseltext3_anim = 0 ;
    }

    
    

    carousel.animate(
        fade,
        {
            duration : 800,
            easeing : 'ease-in-out'
        }
    );  
    setTimeout(
        function(){
            carousel.style["opacity"] = "0.1" ;
            carousel.style["background-image"] = "url('./promo_continental.jpg')" ;
            carousel.animate(
                show,
                {
                    duration : 800,
                    easeing : 'ease-in-out'
                }
            );
            
            
            carouseltext1.animate(
                slideleft1,
                {
                    duration: 300,
                    easeing: 'ease-in-out'
                }
            );
            

        
            carouseltext1.style["opacity"] = 1 ;
            carousel.style["opacity"] = "1" ;
        },
        750
    );  
    carouseltext1_anim = 1 ;
   


}




pt2.onclick = function(){
    
    
    carouseltext1.style["opacity"] = 0 ; 
    carouseltext2.style["opacity"] = 0 ; 
    carouseltext3.style["opacity"] = 0 ;


    if(carouseltext1_anim)
    {
        carouseltext1.animate(
           slideleft,
           {
              duration:300,
              easing : "ease-in-out"
           }
         );
         
    }
    else if(carouseltext3_anim)
    {
        carouseltext3.animate(
            slideright1,
            {
                duration:200,
                easeing: 'ease-in-out'
            }
        );
        
    }
    
   
    

    carousel.animate(
        fade,
        {
            duration : 800,
            easeing : 'ease-in-out'
        }
    );  
    setTimeout(
        function(){
            carousel.style["opacity"] = "0.1" ;
            carousel.style["background-image"] = "url('./promo_ar.jpg')" ;
            carousel.animate(
                show,
                {
                    duration : 800,
                    easeing : 'ease-in-out'
                }
            );
 
            if(carouseltext1_anim)
            {
                carouseltext2.animate(
                    slideright,
                    {
                        duration: 300,
                        easeing: 'ease-in-out'
                    }
                );
                carouseltext1_anim = 0 ;
                
            }
            else if(carouseltext3_anim)
            {
                carouseltext2.animate(
                    slideleft1,
                    {
                        duration: 300,
                        easeing: 'ease-in-out'
                    }
                );
                carouseltext3_anim = 0 ;
            }
 

           

            carouseltext2.style["opacity"] = 1 ;
            
            carousel.style["opacity"] = "1" ;
        },
        750
    );  
   
    carouseltext2_anim = 1 ;


}


pt3.onclick = function(){
    

    carouseltext2.style["opacity"] = 0 ;
    carouseltext1.style["opacity"] = 0 ;
    carouseltext3.style["opacity"] = 0 ; 
   
    if(carouseltext2_anim)
    {
        carouseltext2.animate(
            slideleft,
            {
                duration:200,
                easeing: 'ease-in-out'
            }
        );
        carouseltext2_anim=0 ;
    }
    else if(carouseltext1_anim)
    {
        carouseltext1.animate(
            slideleft,
            {
                duration:200,
                easeing: 'ease-in-out'
            }
        );
        carouseltext1_anim=0 ;
    }

    
    
    
    
    
    carousel.animate(
        fade,
        {
            duration : 800,
            easeing : 'ease-in-out'
        }
    );  
    setTimeout(
        function(){
            carousel.style["opacity"] = "0.1" ;
            carousel.style["background-image"] = "url('./promo_tickets.jpg')" ;
            carousel.animate(
                show,
                {
                    duration : 800,
                    easeing : 'ease-in-out'
                }
            );
        
            
            carouseltext3.animate(
                slideright,
                {
                    duration: 300,
                    easeing: 'ease-in-out'
                }
            );
            
        
            carouseltext3.style["opacity"] = 1 ;
            carousel.style["opacity"] = "1" ;
        },
        750
    );  
    
    carouseltext3_anim = 1 ;
}

const buble1 = document.createElement("div") ;
const buble = document.createElement("div") ;
buble1.style["transitionProperty"] = "all" ;
buble1.style["transitionDuration"] = "2s" ;

buble.style["transitionProperty"] = "all" ;
buble.style["transitionDuration"] = "2s" ;

 const createbuble = (i) =>{
        
         if(i==2)
           i=0 ;
         buble1.innerHTML = typereviews[i] ;
         review.appendChild(buble1) ;
         buble.innerHTML = typereviews[i+1] ;
         review.appendChild(buble) ;

 }
 
 
//  reviews[0].style["margin-top"] = "-90%" ;
//         setTimeout(
//             function(){
//                    reviews[1].style["margin-top"] = "-90%" ;
//             },
//             3000
//         );


 var x=0 ;

 setInterval(
     function(){
        
        if(x==1)
        {
            review.removeChild(reviews[x-1]) ;
            reviews[x-1].style["margin-top"] = "-5px" ;
            review.appendChild(reviews[x-1]) ;
            //reviews[x-1].style["margin-top"] = "0px" ;
        }

        if(x==2)
        {
            //for(i=0;i<3;i++)
            //  review.removeChild(reviews[i]) ;
            //for(i=0;i<3;i++)
            //  reviews[i].style["margin-top"] = "0%" ;
            //for(i=0;i<3;i++)
            //  review.appendChild(reviews[i]) ;    
            reviews[x-1].style["margin-top"] = "0px" ;
            review.removeChild(reviews[x-1]) ;
            
            review.appendChild(reviews[x-1]) ;
            //reviews[x-1].style["margin-top"] = "px" ;
            //var temp = reviews[0] ;
            //reviews[0] = reviews[2] ;
            //reviews[2] = temp ;
            //x=0 ;
        }

        if(x==3)
          {
            review.removeChild(reviews[x-1]) ;
            reviews[x-1].style["margin-top"] = "31px" ;
            //reviews[x-1].style["top"] = "0" ;
            //reviews[x-1].style["margin-top"] = "0%" ;
            review.appendChild(reviews[x-1]) ;
            
            x=0 ;
          }

        console.log("x is : ", x) ;
        reviews[x++].style["margin-top"] =  "-87.5%" ;
        
        //  setTimeout(
        //      function(){
        //          //review.removeChild(reviews[x]) ;
        //          //reviews[x].style["margin-top"] = "0" ;
                 
        //      },
        //      1000
        //  ); 
        //  setTimeout(
        //      function(){x++ ;console.log("now x is : ",x);},
        //      1100
        //    )
           
     } ,
     2000
 ); 

//  reviews.onmouseenter = function(){
//     review1.style["margin-top"] = "-90%" ;

//  }







}