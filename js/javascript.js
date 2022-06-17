let myBriefParagraph = document.querySelector(".my-brief-paragraph");
let myBriefParagraphText = "i'm a front-end developer to see my work you can go to my";
let myFeatureSpan = "<span class='feature-word'>features</span>";
let myFeatureSpinner = "<span class='spinner-grow spin-style'></span>"
let i = 0;
let featuresSection = document.querySelector(".features-section");
let cardParent = document.querySelectorAll(".card-parent");
let featuresSectionPagination = document.querySelectorAll(".features-section .pagination .page-link");
let cardParentViewPageBtn = document.querySelectorAll(".card-parent .btn-view-website");

let autoTyping = setInterval(()=>{

myBriefParagraph.innerHTML += myBriefParagraphText[i];
i++;
if(i >= myBriefParagraphText.length){
    clearInterval(autoTyping);

    myBriefParagraph.innerHTML = myBriefParagraph.innerHTML + " " + myFeatureSpan + " "  + myFeatureSpinner
}
},100)

window.onscroll = ()=>{
    if(window.scrollY >= (featuresSection.offsetTop - 200)){
        featuresSection.style.opacity = "1";
        featuresSection.style.transform = "scale(1)";
    }else{
        featuresSection.style.opacity = "0";
        featuresSection.style.transform = "scale(.1)";
    }
}

cardParent.forEach((card)=>{
    card.addEventListener("mouseover",()=>{
        card.children[1].classList.remove("disable-top");
        card.children[1].classList.add("active-top");
    });
    card.addEventListener("mouseleave",()=>{
        card.children[1].classList.remove("active-top");
        card.children[1].classList.add("disable-top");
    });
})

featuresSectionPagination.forEach((pageLink)=>{
    pageLink.addEventListener("click",()=>{
        cardParent.forEach((card)=>{
            if(pageLink.getAttribute("data-name") == card.children[1].children[0].getAttribute("data-name") || pageLink.textContent == "all"){
                card.classList.remove("hide")
            }else{
                card.classList.add("hide")
            }
            
        })
        
    })
});


fetch("jsonData.json")

.then(
    (results)=>{
        let res = results.json()
        return res
    }
)
.then(
    (links)=>{
        cardParentViewPageBtn.forEach((viewBtn,index)=>{
            viewBtn.onclick = ()=>{
                window.open(`${links[index].Link}`,"_blank");
            }
        })
    }
)
