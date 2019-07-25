function show(id,str,i){

    if(document.getElementById(id).innerText == "")
    document.getElementById(id).innerHTML = (
        str 
    );
    

}
function carousel_animation(el,effect1,effect2){
     el.animate(
         effect1,
         {
             duration: 800,
             easing: 'ease-in-out'
         }
     );
     
     setTimeout( carousel_animation1(el,effect2),5000) ;

}
function carousel_animation1(el,effect){
    el.animate(
        effect,
        {
            duration: 800,
            easing: 'ease-in-out'
        }
    );
  

}

var anim_pg2 = 0 ;
var anim_pg3=0, anim_img07=0,anim_img08=0,anim_img09=0,anim_index02=0 ;
var anim_index07 = 0, anim_index08 = 0, anim_index09 = 0 ; 
var anim_pg2img =0 , anim_pg3img=0 ;
var anim_carousel=0, parallaxscroll_anim=0 ;
var popup_anim = 0, container_anim = [0,0,0] ;

/*function isElementInViewport(el){
    if(typeof jQuery === "function" && el instanceof jQuery ){
        el = el[0] ;
    }
    var rect = el.getBoundingClientRect() ;
    return (
        rect.top <=0 && rect.bottom >= 0
    )
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight ) && rect.top <= (window.innerHeight || document.documentElement.clientHeight )  )
    ||
    ( rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight ) ) ;

}*/





window.onload = function(){
   
    var pg1_2 = document.getElementById('pg1-2') ;
    var pg2_3 = document.getElementById('pg2-3') ;
    var pg3_4 = document.getElementById('pg3-4') ;
    var pg4_1 = document.getElementById('pg4-1') ;
    var pg1 = document.getElementById('pg1') ;
    var pg2 = document.getElementById('pg2') ;
    var pg3 = document.getElementById('pg3') ;
    var pg4 = document.getElementById('pg4') ;
    var img07 = document.getElementById('img-07') ;
    var img08 = document.getElementById('img-08') ;
    var img09 = document.getElementById('img-09') ;
    var img02 = document.getElementById('abouttext') ; 
    var abtprjct = document.getElementById('aboutproject') ;
    var signup = document.getElementById('signup1') ;
    var signup2 = document.getElementById('signup2') ;
    var index07 = document.getElementById('index-07') ;
    var index08 = document.getElementById('index-08') ;
    var index09 = document.getElementById('index-09') ;
    var pg2img = document.getElementById('pg2image') ;
    var pg3img = document.getElementById('pg3image') ;
    var toggle = document.getElementById('toggle')
    var menu = document.getElementById('menu1') ;
    var menuitems = document.getElementById('menuitems') ;
    var next = document.getElementById('next') ;
    var prev = document.getElementById('prev') ;
    //var parallax1 = document.querySelector('.parallax1') ;
    var parallax1 = document.getElementById('parallax1') ;
    var parallax3 = document.getElementById('parallax3') ;
    var parallax = document.getElementById('parallax') ;
    var parallaxscroll3 = document.querySelector('.parallaxscroll3') ;
    var parallaxscroll1 = document.querySelector('.parallaxscroll1') ;
    var parallaxscroll2 = document.querySelector('.parallaxscroll2') ;
    var parallaxx = document.querySelector('.parallaxx') ;
    var parallaxscroll = document.querySelector('.parallaxscroll') ;  
    var popup1 = document.querySelector('.popup1') ;
    var popup = document.querySelector('.popupanim') ;
    var popuptext = document.getElementById('popuptext') ;
    var container_left = document.querySelectorAll('.left') ;
    var container_right = document.querySelectorAll('.right') ;
    var container  = document.querySelector('.container') ;
    var container_count_left = 0, container_count_right = 0, container_count = 0 ;
    console.log(container_left.length)     ;



    var parallaxanim = [
       {
           visibility : "hidden",
           opacity : 0
       },
       {
           visibility : "visible",
           opacity : 1 
       }
    ];



    window.onscroll = function(){
        if(document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop <= 900 ){
            page2() ;
           
        }
        else if(document.documentElement.scrollTop >=900 && document.documentElement.scrollTop <=1800 ) {
            page3() ;
            anim_pg2 = 0 ;
        }
        else if( document.documentElement.scrollTop >= 4400  && container_anim[0] == 0 )
        {
            // container animation...
            // left container

            var moveup = [
                {
                    transform : "translateY(100px)",
                    opacity : 0
                },
                {
                    transform : "translate(0px)",
                    opacity : 1
                }
            ];
    
            container_left[0].animate(
                moveup,
                {
                    duration : 1300,
                    easing : 'ease-in-out'
                }
            );
            container_left[0].style["opacity"] = 1 ;
            container_anim[container_count] = 1 ;
            container_count++ ;
            console.log(container_count) ;
            console.log(container_anim[container_count-1]) ;
            setTimeout(
                function(){ container_right[0].animate(
                     moveup,
                     {
                         duration : 1300,
                         easing : 'ease-in-out'
                     }   
                );  container_right[0].style["opacity"] = 1;  },
                400

            );
            setTimeout(
                function(){ container_left[1].animate(
                     moveup,
                     {
                         duration : 1300,
                         easing : 'ease-in-out'
                     }   
                ); container_left[1].style["opacity"] = 1 ; },
                800

            ); 


        }

        
        

       else if(document.documentElement.scrollTop >=7650 && document.documentElement.scrollTop <=8400  )
        {
           //parallaxscroll1.style["z-index"] = "1" ;
           parallaxscroll1.style["position"] = "fixed" ;
           parallaxscroll1.style["height"] = "100vh" ;
           parallaxscroll1.style["width"] = "50vmax" ;
           parallaxscroll1.style["left"] = "0" ;
           parallaxscroll1.style["top"] = "0" ;
           parallaxscroll2.style["margin"] = "0" ;
           if(document.documentElement.scrollTop>=7900){
               //parallaxscroll1.animate{
               // parallaxscroll1.style["height"] = "140vh" ;
                parallaxscroll1.style["padding-top"] = "0%" ;

           // parallaxscroll2.style["margin-top"] = "-100vh" ;
           }
           if(document.documentElement.scrollTop>=8100){
            parallaxscroll1.style["position"] = "relative" ;
            parallaxscroll1.style["height"] = "164vh" ;
            parallaxscroll1.style["padding-top"] = "17.9%" ;
           // parallaxx.style["height"] = "200vh" ;
            parallaxscroll2.style["margin-top"] = "-200vh" ;
            //parallaxscroll3.style["margin-top"] = "-100vh" ;
           // parallaxscroll2.style["margin-top"] = "-100vh" ;
           }
          // parallaxscroll3.style["margin"] = "auto" ;
        //    if(document.documentElement.scrollTop>=7900)
        //        {
        //            var y = document.documentElement.scrollTop - 7700 ;
        //            //parallaxscroll1.style["height"] = "auto" ;
        //            parallaxscroll1.style["padding-top"] = y ;
        //        }
           
           //if(parallaxscroll_anim==0)
           //{parallaxscroll2.animate(
           //    parallaxanim,
           //    {
           //        duration : 2000,
           //        easing : 'ease-in-out'
           //    }
           //);
           //parallaxscroll3.animate(
           //    parallaxanim,
           //    {
           //        duration : 2000,
           //        easing : 'ease-in-out'
           //    }
           //);
           // parallaxscroll_anim = 1 ;
           // parallaxscroll3.style["visibility"] = "visible" ;
           // parallaxscroll2.style["visibility"] = "visible" ;
           // parallaxscroll3.style["opacity"] = "1" ;
           // parallaxscroll2.style["opacity"] = "1" ;
           //}

           
        }
        else if(document.documentElement.scrollTop >=8400){
            parallaxscroll1.style["z-index"] = "0" ;
            
            parallaxscroll1.style["position"] = "relative" ;
            parallaxscroll1.style["left"] = "0" ;
            //parallaxscroll2.style["margin-top"] = "-100vh" ;
            //parallaxscroll3.style["margin-top"] = "0" ;
           

            //just trying
           // parallaxscroll1.style["padding-top"] = "49.1%" ;
            parallaxscroll_anim = 0 ;
           
        }
        else{
            parallaxscroll1.style["position"] = "relative" ;
            parallaxscroll1.style["left"] = "0" ;
            parallaxscroll2.style["margin-top"] = "-100vh" ;

            //just trying
            parallaxscroll1.style["padding-top"] = "0%" ;
        }
    }

    function splitScroll(){
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: '100%' ,
            triggerElement: '.parallaxscroll1',
            triggerHook: 0
        })
        .setPin('.parallaxscroll1')
        .addTo(controller) ;
    }

    //splitScroll() ;
    
    function showmouse(event)
    {
       parallax.innerHTML += (event.clientX + "\n") ;
    }

     
    container.onmouseenter = function(){
        var moveup = [
            {
                transform : "translateY(100px)",
                opacity : 0
            },
            {
                transform : "translate(0px)",
                opacity : 1
            }
        ];

        container_left.animate(
            moveup,
            {
                duration : 1300,
                easing : 'ease-in-out'
            }
        );

    }





   
    parallax.onmousemove = function(e){
        var moveX = e.pageX ;
        var moveY = e.pageY ;
        //parallax1.style["transform"] = "translateX(" + moveX + "px)" ;
        parallax1.style["transform"] = "scale(0.65) translate3d(-" + (e.clientX - 600 ) + 'px,-' + (e.clientY - 200) + 'px,0)    ' ;
        parallax3.style["transform"] = "scale(0.6) translate3d(-" + (e.clientX - 600 ) + 'px,-' + (e.clientY - 200) + 'px,0)    ' ;
        
       // parallax1.style["transform"] = "translateY(" + e.clientY + 'px)' ;
       // parallax1.style["transform"] = "scale(0.5)" ;

    }


   
    popup1.onmouseenter = function(){
        
        var rotate = [
             {
                 transform : "rotate(0deg) "
             },
             {
                 transform : "rotate(90deg) "
             }
        ];
        var antirotate = [
             {
                 transform : "rotate(90deg) translate3d(25px,10px,0)"
             },
             {
                 transform : "rotate(0deg) translate3d(25px,10px,0)"
             }
        ];
        if(popup_anim==0)
        {
            
            popup.animate(
               rotate,
               {
                   duration : 1000,
                   easing : 'ease-in-out'
               }
            );
            popup.style["transform"] = "rotate(90deg) " ;
            popup_anim = 1 ;
            popuptext.style["visibility"] = "visible" ;
            popuptext.style["opacity"] = "1" ;
        }
       

    }
    popup1.onmouseout = function(){
        var antirotate = [
            {
                transform : "rotate(90deg) "
            },
            {
                transform : "rotate(0deg) "
            }
       ];
       if(popup_anim)
       {
           popup.animate(
              antirotate,
              {
                  duration : 1000,
                  easing : 'ease-in-out'
              }
           );
           popup.style["transform"] = "rotate(0deg) " ;
           popup_anim = 0 ;
           popuptext.style["visibility"] = "hidden" ;
            popuptext.style["opacity"] = "0" ;
       }
    }

    //parallax1.addEventListener("mousemove",showmouse,false);
    //parallax1.addEventListener("mouseenter",showmouse,false);
    //parallax1.addEventListener("mouseleave",showmouse,false)







    pg1_2.onclick = function(){

        document.getElementById('pg2').scrollIntoView(
            {
                behavior : "smooth"
            }
        );
    }
    

    pg1.onmouseenter = function(){

        anim_pg2 = 0 ;
        anim_pg3 = 0 ;
        pg2.style.opacity = 0 ;
        pg3.style.opacity = 0 ;

    }

  
      

     
    //pg2.onmouseenter = function(){
    function page2(){ 
        anim_pg3=0;
        document.getElementById('pg3').style.opacity = 0 ;
      /*  var zoom = [
         {
             width : "550px"
         },
         {
             width: "600px"
         }


        ];

        document.getElementById('pg2image').animate(
           zoom,
           1000
        );
        document.getElementById('pg2image').style["width"] = "600px" ;*/
         
        var slidein = [
            { marginRight : "50%" ,
              width: "200%",
              color : "#fff"
            },
            {
                marginRight: "0%" ,
                width: "100%",
                color:"#000"
            
            }
          ];  
          
          if(anim_pg2==0)
          {
              var el = document.getElementById('pg2text') ;
              pg2.animate(
              slidein,
              { duration:1300,
                easing : 'ease-in-out'
              
              }
              ) ;
             anim_pg2=1 ;
             pg2.style.opacity = 1 ; 

            }
          
       
        
         

     }   
     /*pg2.onmouseout = function(){
       //document.getElementById('pg2image').style["width"] = "600px" ;
     
       anim_pg2=0;
     }*/
     pg2img.onmouseenter = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                boxShadow: "-5px 5px grey"
             },
             {
                 boxShadow: "-10px 10px 10px grey"
             }
        ];
        if(anim_pg2img==0)
        {pg2img.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_pg2img = 1  ;
        pg2img.style["boxShadow"] = "-10px 10px 10px grey" ;
        }

    }
    pg2img.onmouseout = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                
                boxShadow: "-10px 10px 10px grey"
             },
             {
                boxShadow: "-5px 5px grey"
             }
        ];
        if(anim_pg2img)
        {pg2img.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_pg2img = 0  ;
        pg2img.style["boxShadow"] = "-5px 5px grey" ;
        }

    }

    pg3img.onmouseenter = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                boxShadow: "5px 5px grey"
             },
             {
                 boxShadow: "10px 10px 10px grey"
             }
        ];
        if(anim_pg3img==0)
        {pg3img.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_pg3img = 1  ;
        pg3img.style["boxShadow"] = "10px 10px 10px grey" ;
        }

    }
    pg3img.onmouseout = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                
                boxShadow: "10px 10px 10px grey"
             },
             {
                boxShadow: "5px 5px grey"
             }
        ];
        if(anim_pg3img)
        {pg3img.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_pg3img = 0  ;
        pg3img.style["boxShadow"] = "5px 5px grey" ;
        }

    }



 






    
    
    //pg3.onmouseenter = function(){
      function page3(){
        anim_pg2=0;
        pg2.style.opacity = 0 ;
        var slidein = [
            { marginLeft : "50%" ,
              width: "200%",
             
              opacity:0 ,
              color : "#fff"
            },
            {
                marginLeft: "0%" ,
                width: "100%",
                opacity : 1,
                color:"#000"
            
            }
          ];  
        if(anim_pg3==0)  
        {
          
            
            pg3.animate(
           slidein,
           { 
               duration:1300,
              easing : 'ease-in-out'
           }
        );
           anim_pg3=1 ;
           pg3.style.opacity = 1 ;   
        }

    }
    
    pg4.onmouseenter = function(){
        anim_pg3=0 ;
        document.getElementById('pg3').style.opacity = 0 ;
    }

    img07.onmouseenter = function(){
       var slideinleft = [
           {
               marginLeft: "-100%" ,
               opacity: 0
           },
           {
               marginLeft: "10%",
               opacity: 1
           }

       ];
       if(anim_img07==0)
       {img07.animate(
           slideinleft,
           {
               duration : 1300,
               easing: 'ease-in-out'
           }
       );
       img07.style.opacity = 1 ;
       anim_img07=1;
        }

    }
    index07.onmouseenter = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                boxShadow: "-5px 5px grey"
             },
             {
                 boxShadow: "-10px 10px 10px grey"
             }
        ];
        if(anim_index07==0)
        {index07.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_index07 = 1  ;
        index07.style["boxShadow"] = "-10px 10px 10px grey" ;
        }

    }
    index07.onmouseout = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                
                boxShadow: "-10px 10px 10px grey"
             },
             {
                boxShadow: "-5px 5px grey"
             }
        ];
        if(anim_index07)
        {index07.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_index07 = 0  ;
        index07.style["boxShadow"] = "-5px 5px grey" ;
        }

    }



    index08.onmouseenter = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                boxShadow: "5px 5px grey"
             },
             {
                 boxShadow: "10px 10px 10px grey"
             }
        ];
        if(anim_index08==0)
        {index08.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_index08 = 1  ;
        index08.style["boxShadow"] = "10px 10px 10px grey" ;
        }

    }
    index08.onmouseout = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                
                boxShadow: "10px 10px 10px grey"
             },
             {
                boxShadow: "5px 5px grey"
             }
        ];
        if(anim_index08)
        {index08.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_index08 = 0  ;
        index08.style["boxShadow"] = "5px 5px grey" ;
        }

    }









    index09.onmouseenter = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                boxShadow: "-5px 5px grey"
             },
             {
                 boxShadow: "-10px 10px 10px grey"
             }
        ];
        if(anim_index09==0)
        {index09.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_index09 = 1  ;
        index09.style["boxShadow"] = "-10px 10px 10px grey" ;
        }

    }
    index09.onmouseout = function(){
       
        //index07.style["boxShadow"] = "5px 5px 5px grey" ;
        var shadow = [
             {
                
                boxShadow: "-10px 10px 10px grey"
             },
             {
                boxShadow: "-5px 5px grey"
             }
        ];
        if(anim_index09)
        {index09.animate(
             shadow,
             {
                 duration: 250
               // easing : 'ease-in-out' 
             }
        );
        anim_index09 = 0  ;
        index09.style["boxShadow"] = "-5px 5px grey" ;
        }

    }

    


















    img08.onmouseenter = function(){
        var slideinleft = [
            {
                //marginRight: "-100%" ,
                
                transform : "translate3d(100%,0,0)",
                opacity: 0
            },
            {
                //marginRight: "10%",
                transform:"translate3d(0,0,0)",
                opacity: 1
            }
 
        ];
        if(anim_img08==0)
        {img08.animate(
            slideinleft,
            {
                duration : 1300,
                easing: 'ease-in-out'
            }
        );
        img08.style.opacity = 1 ;
        anim_img08=1;
         }
 
     }

     img09.onmouseenter = function(){
        var slideinleft = [
            {
                marginLeft: "-100%" ,
                opacity: 0
            },
            {
                marginLeft: "10%",
                opacity: 1
            }
 
        ];
        if(anim_img09==0)
        {img09.animate(
            slideinleft,
            {
                duration : 1300,
                easing: 'ease-in-out'
            }
        );
        img09.style.opacity = 1 ;
        anim_img09=1;
         }
 
     }


     abtprjct.onmouseenter = function(){
         var slideinleft = [
             {
                 marginRight : "-50%" ,
                 opacity : 0  
             },
             {
                 marginRight : "0%" ,
                 opacity : 1
             }
         ];
         if(anim_index02==0)
         {
           img02.animate(
               slideinleft,
               {
                   duration : 1300 ,
                   easing : 'ease-in-out'
               }

           );
           anim_index02 = 1 ;
           img02.style.opacity = 1 ;

         }





     }
     

     signup.onmousemove = function(){
         signup.style["background"] = "aqua";

     }
     signup.onmouseout = function(){
         signup.style["background"] = "white" ;
     }


     signup2.onmousemove = function(){
        signup2.style["background"] = "aqua";

    }
    signup2.onmouseout = function(){
        signup2.style["background"] = "white" ;
    }




    


    pg2_3.onclick = function(){

        document.getElementById('pg3').scrollIntoView(
            {
                behavior : "smooth"
            }
        ) ;

    }



    pg3_4.onclick = function(){

        document.getElementById('pg4').scrollIntoView(
            {
                behavior : "smooth"
            }
        ) ;
    }
    
    pg4_1.onclick = function(){

        document.getElementById('pg1').scrollIntoView(
            {
                behavior : "smooth"
            }
        ) ;
    }
    var clc = -1 ; 
    var sc = 0 ;
    next.onclick = function(){
        clc++ ;
        
        var el  =  document.getElementById('carousel-circle') ; 
        var el1 = document.getElementById('carousel-border') ;
        var el2 = document.getElementById('carousel-border') ;
        if(clc==0)   
        document.getElementById('carousel-circle').innerHTML = "<img src='bb.jpg'>" ;
        else if(clc==1)
        {
            document.getElementById('carousel-circle').innerHTML = "<img src='bb1.jpg'>" ;   
            clc=-1;
        }

        var scalingDown = [
           {
               width: "350px",
               height: "350px",
               transform : "translateX(0px) translateY(0) "
              
              
           },
           {
               width: "320px",
               height: "320px",
               transform : "translateX(17.7px) translateY(15px)"
              
           }
        ];

        var scalingUp = [
           {
            width: "320px",
            height: "320px",
            transform : "translateX(17.7px) translateY(15px)"
           },
           {
            width: "350px",
            height: "350px",
            transform : "translateX(0px) translateY(0) "
           }
        ];
        
        var zoom = [
         {
             scale : "0" ,
             opacity : "0"
         },
         {
             scale : "1",
             opacity : "1"
         }
        ];
        el.animate(
            zoom,
            {
                duration : 1300,
                easing : 'ease-in-out'
            }
        );
        
        /*el1.animate(
            scalingDown,
            {
              duration : 800,
              easing: 'ease-in-out'
              
            }
        );*/
        if(anim_carousel==0)
        {el1.animate(
            scalingDown,
            {
                duration: 800,
                easing: 'ease-in-out'
            }
        );
        
        el1.style["width"] = "320px";
        el1.style["height"] = "320px" ;
        el1.style.transform = "translateX(17.7px) translateY(15px) " ;
        anim_carousel=1
        }
        if(anim_carousel==1)
        {setTimeout( function(){ el1.animate(
            scalingUp,
            {
                duration:800 ,
                easing: 'ease-in-out'
            }
        ); } ,770) ;
        el1.style["width"] = "350px";
        el1.style["height"] = "350px" ;
        el1.style.transform = "translateX(0px) translateY(0px) " ;
        anim_carousel=0 ;     
       }
        


       
       

       /* for(sc;sc<3;sc++)
        {
            if(sc==1)
            {
                el1.animate(
                  scalingDown,
                  {
                    duration : 800,
                    easing: 'ease-in-out'
                    
                  }
                );
            }
            else
            {
                el1.animate(
                    scalingUp,
                    {
                        duration : 800,
                        easing : 'ease-in-out'
                    }
                );
            }
           
            
        }*/

      

        

    }
    
    prev.onclick = function(){
        
        if(clc==-1)
        {
            clc=1 ;
        }

        clc-- ;
        
        var el  =  document.getElementById('carousel-circle') ; 
        var el1 = document.getElementById('carousel-border') ;
        var el2 = document.getElementById('carousel-border') ;
        if(clc==0)   
        {document.getElementById('carousel-circle').innerHTML = "<img src='bb.jpg'>" ;
          
        }
        else if(clc==1)
        {
            document.getElementById('carousel-circle').innerHTML = "<img src='bb1.jpg'>" ;   
            
        }

        var scalingDown = [
           {
               width: "350px",
               height: "350px",
               transform : "translateX(0px) translateY(0) "
              
              
           },
           {
               width: "320px",
               height: "320px",
               transform : "translateX(17.7px) translateY(15px)"
              
           }
        ];

        var scalingUp = [
           {
            width: "320px",
            height: "320px",
            transform : "translateX(17.7px) translateY(15px)"
           },
           {
            width: "350px",
            height: "350px",
            transform : "translateX(0px) translateY(0) "
           }
        ];
        
        var zoom = [
         {
             scale : "0" ,
             opacity : "0"
         },
         {
             scale : "1",
             opacity : "1"
         }
        ];
        el.animate(
            zoom,
            {
                duration : 1300,
                easing : 'ease-in-out'
            }
        );
        
        /*el1.animate(
            scalingDown,
            {
              duration : 800,
              easing: 'ease-in-out'
              
            }
        );*/
        if(anim_carousel==0)
        {el1.animate(
            scalingDown,
            {
                duration: 800,
                easing: 'ease-in-out'
            }
        );
        
        el1.style["width"] = "320px";
        el1.style["height"] = "320px" ;
        el1.style.transform = "translateX(17.7px) translateY(15px) " ;
        anim_carousel=1
        }
        if(anim_carousel==1)
        {setTimeout( function(){ el1.animate(
            scalingUp,
            {
                duration:800 ,
                easing: 'ease-in-out'
            }
        ); } ,770) ;
        el1.style["width"] = "350px";
        el1.style["height"] = "350px" ;
        el1.style.transform = "translateX(0px) translateY(0px) " ;
        anim_carousel=0 ;     
       }
        


       
      

        

    }
    





    /*next.onclick = function{
  
        

    }*/



     


}
