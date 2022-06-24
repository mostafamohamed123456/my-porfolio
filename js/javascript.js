let navCont = document.querySelector(".nav-cont");
let navListItems = document.querySelectorAll(".navigation-bar-list-items");
let responsiveBtn = document.querySelector(".responsive-btn");

let myBriefParagraph = document.querySelector(".my-brief-paragraph");
let myBriefParagraphText = "i'm a front-end developer to see my work you can go to my";
let i = 0;


let myFeatureSpan = "<span class='feature-word'>features</span>";
let myFeatureSpinner = "<span class='spinner-grow spin-style'></span>"
let featuresSection = document.querySelector(".features-section");
let cardParent = document.querySelectorAll(".card-parent");
let featuresSectionPagination = document.querySelectorAll(".features-section .pagination .page-link");
let cardParentViewPageBtn = document.querySelectorAll(".card-parent .btn-view-website");

let contactSection = document.querySelector(".contact-section");

let aboutMeItems = document.querySelectorAll(".about-me-section .main-child");
let skillsProgress = document.querySelectorAll(".skills-progress .progress .progress-text");
let skillsSectionPagination = document.querySelectorAll(".about-me-section .pagination .page-link");
let skills = document.querySelector(".skills");
let education = document.querySelector(".education");
let graduation = document.querySelector(".graduation");

let autoTyping = setInterval(()=>{
    myBriefParagraph.innerHTML += myBriefParagraphText[i];
    i++;
    if(i >= myBriefParagraphText.length){
        clearInterval(autoTyping);
        myBriefParagraph.innerHTML = myBriefParagraph.innerHTML + " " + myFeatureSpan + " "  + myFeatureSpinner
    }
},100)


window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop >= (featuresSection.offsetTop - document.documentElement.scrollTop)){
        featuresSection.style.opacity = "1";
        featuresSection.style.transform = "scale(1)";
    }else{
        featuresSection.style.opacity = "0";
        featuresSection.style.transform = "scale(.1)";
    }

    if (document.documentElement.scrollTop >= (contactSection.offsetTop - document.documentElement.scrollTop)){
        contactSection.style.opacity = "1";
        contactSection.style.transform = "scale(1)";
    }else{
        contactSection.style.opacity = "0";
        contactSection.style.transform = "scale(.5)";
    }

})

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
if(window.getComputedStyle(responsiveBtn).display === "flex"){
    responsiveBtn.addEventListener("click",()=>{
        let responsiveGroup = document.createElement("div");
        let groupList = document.createElement("ul");
        responsiveGroup.classList.add("responsive-group");
        groupList.classList.add("group-list");
        responsiveGroup.appendChild(groupList);
        navCont.appendChild(responsiveGroup);
        let getResponsiveGroup = document.querySelector(".responsive-group");
        let listItems;
        for(let x = 0; x <= 4; x++){
            listItems = document.createElement("li");
            groupList.appendChild(listItems);
            listItems.classList.add("listItems")
        }
        let listGroupItems = document.querySelectorAll(".listItems");
        listGroupItems.forEach((listGroupItem, index)=>{
            for(let i = 0; i < navListItems.length; i++){
                listGroupItem.textContent = navListItems[index].children[0].textContent;
                listGroupItem.addEventListener("click",()=>{
                    navListItems[index].children[0].click();
                    navCont.removeChild(responsiveGroup)

                })
            }
            listGroupItems[4].textContent = "settings"
        });
        
    });
}
window.onresize = ()=>{
    if(navCont.lastElementChild.classList.contains("responsive-group")){
        navCont.lastElementChild.remove()
    }
}


skillsSectionPagination.forEach((pageItem,pageItemIndex)=>{
    pageItem.addEventListener("click",function(){
        aboutMeItems.forEach((aboutItem)=>{
            console.log(aboutItem.classList.contains(pageItem.textContent))
            if(aboutItem.classList.contains(pageItem.textContent)){
                aboutItem.style.display = "block";
                aboutItem.style.opacity = "1";
                if(aboutItem.classList.contains('skills')){
                    skillsProgress.forEach((skillProgress)=>{
                        skillProgress.style.width = skillProgress.previousElementSibling.textContent
                    })
                }
            }else{
                aboutItem.style.display = "none";
                aboutItem.style.opacity = "1";
            }
        })
    })
})