let liEls = document.querySelectorAll("nav > ul > li");
let divEls = document.querySelectorAll("#container-navitems > div");

for(let i=0; i<liEls.length;i++){
    liEls[i].addEventListener("mouseover",()=>{
        divEls[i].style.height = "270px";
   liEls[i].addEventListener("mouseout",()=>{
            divEls[i].style.height = "0px";
        });
    });
    
};

// liEls.forEach((element,index)=>{
//     element.addEventListener("mouseover",()=>{
//         console.log(element);
//         divEls[index].style.height = "270px";
//     });
    
//     element.addEventListener("mouseout",()=>{
//         divEls[index].style.height = "0px";
//     });
// })


divEls.forEach((element,index)=>{
    divEls[index].addEventListener("mouseover",()=>{
        divEls[index].style.height = "270px";
    });
    
    divEls[index].addEventListener("mouseout",()=>{
        divEls[index].style.height = "0px";
    });
});

