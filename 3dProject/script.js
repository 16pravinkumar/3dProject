
let greenCursor = document.querySelector(".cursor") 
let blurCursor = document.querySelector(".blur-cursor") 

document.addEventListener("mousemove",(delts)=>{
    greenCursor.style.left = delts.x +13 +"px";
    greenCursor.style.top = delts.y -13+"px";
   
    // console.log(delts.x,delts.y);
    blurCursor.style.left = delts.x - 100+"px";
    blurCursor.style.top = delts.y - 100 +"px";
    // console.log(delts.x -100,delts.y-100);

})




gsap.to("#navbar",{
    backgroundColor : "#000",
    height : "100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1,
    }
    
})

gsap.to(".main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
        
    }

})

// navbar hover effect

let allElementsNav = document.querySelectorAll('#navbar li ');
// console.log(allElementsNav);
allElementsNav.forEach((elm)=>{
    // console.log(elm);
    elm.addEventListener("mouseenter",()=>{
        greenCursor.style.width = "50px";
        greenCursor.style.height = "50px";
        greenCursor.style.backgroundColor = "transparent";
        greenCursor.style.border = "0.1px solid white";
        greenCursor.style.transition = "0.1s";
   

    })
    elm.addEventListener("mouseleave",()=>{
        greenCursor.style.width = "15px";
        greenCursor.style.height = "15px";
        greenCursor.style.backgroundColor = "#96C11e";
        greenCursor.style.border = "0px solid #96C11e";
        greenCursor.style.transition = "0.1s";
  


    })
})

gsap.from(".page-2-sub-div img , .center-about",{
    y:50,
    
    duration:1,
    stagger:0.2,
    opacity:0,
    scrollTrigger:{
        trigger:".page-2-sub-div",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 65%",
        // scrub: 2,    
        // start:"top 25%",
        // end:"top -70%",
        // scrub:1
        
    }
})

// gsap.from(".card-container .card ",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger : ".card",
//         scroller : "body",
//         // marker  : true,
//         start:"top 80%",
//         end: 'top 60%',
//         scrub : 1
//     }

// })

gsap.from(".green-color-div img",{
    scale:3,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger : ".green-color-div",
        scroller : "body",
        // marker  : true,
        start:"top 80%",
        end: 'top 60%',
        // scrub : 1
    }
    
})

gsap.from(".page3-sub .page3-img-1",{
    x:-50,
    y:-50,
    scrollTrigger:{
        trigger:".page3-img-1",
        scroller:"body",
        // marker:true,
        start:"top 90%",
        end:"top 60%",
        scrub:3

    }
})
gsap.from(".page3-sub .page3-img-2",{
    x:50,
    y:50,
    scrollTrigger:{
        trigger:".page3-img-2",
        scroller:"body",
        // marker:true,
        start:"top 90%",
        end:"top 45%",
        scrub:3

    }
})


// waiting for
gsap.from(".waiting_for h2",{
    y : 30,
    scrollTrigger:{
        trigger:".waiting_for h2",
        scroller:"body",
        // marker:true, 
        start:"top 100%",
        end:"top 70%",
        scrub:2

    }
})