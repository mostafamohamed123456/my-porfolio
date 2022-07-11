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

let backgroundColor = document.documentElement;
let darkModeBtn = document.querySelector(".dark-mode")

let autoTyping = setInterval(()=>{
    myBriefParagraph.innerHTML += myBriefParagraphText[i];
    i++;
    if(i >= myBriefParagraphText.length){
        clearInterval(autoTyping);
        myBriefParagraph.innerHTML = myBriefParagraph.innerHTML + " " + myFeatureSpan + " "  + myFeatureSpinner;
        let myFeatureSpanBtn = document.querySelector(".feature-word");
        myFeatureSpanBtn.addEventListener("click",()=>{
            window.open("#features","_self");
        })
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
        
        for(let x = 0; x <= 4; x++){
            let listItems = document.createElement("li");
            groupList.appendChild(listItems);
            listItems.classList.add("listItems")
        }
        let listGroupItems = document.querySelectorAll(".listItems");
        listGroupItems.forEach((listGroupItem, index)=>{
            listGroupItem.textContent = navListItems[index].children[0].textContent;
            listGroupItem.addEventListener("click",()=>{
                if(listGroupItem.textContent !== "settings"){
                    navListItems[index].children[0].click();
                    responsiveGroup.remove();
                }else{
                    let settingsBox = document.createElement("div");
                    settingsBox.classList.add("settingsBox");

                    let settingsBoxList = document.createElement("ul");
                    settingsBoxList.classList.add("settingsBoxList");

                    settingsBox.appendChild(settingsBoxList);
                    responsiveGroup.appendChild(settingsBox);

                    for(let y =0; y <= 2; y++){
                        let settingsBoxListItems = document.createElement("li");
                        settingsBoxListItems.classList.add("settingsBoxListItems");
                        settingsBoxList.appendChild(settingsBoxListItems);
                    }
                    let settingsBoxListGroup = document.querySelectorAll(".settingsBoxListItems");
                    settingsBoxListGroup[0].textContent = "Arabic";
                    settingsBoxListGroup[1].textContent = "change website view";
                    if(darkModeBtn.children[0].classList.contains("fa-toggle-on")){
                        settingsBoxListGroup[2].textContent = "Reset";
                    }else{
                        settingsBoxListGroup[2].textContent = "dark mode";
                    }
                    //Activate Dark Mode
                    settingsBoxListGroup[2].addEventListener("click",()=>{
                        darkModeBtn.click();
                        responsiveGroup.remove();
                    })
                }
                
                
            })
            listGroupItems[4].textContent = "settings";
            
        });
        let closeBtn = document.createElement("li");
        groupList.appendChild(closeBtn);
        closeBtn.classList.add("closeResponsiveGroup");
        closeBtn.textContent = "Close X"
        closeBtn.addEventListener("click",()=>{
            responsiveGroup.remove()
        })
    });
}

window.onresize = ()=>{
    if(navCont.lastElementChild.classList.contains("responsive-group")){
        navCont.lastElementChild.remove()
    }
}



let progressBarAnimation = ["firstProgressBars","secProgressBars","thirdProgressBars","forthProgressBars"];
skillsProgress.forEach((skillProgress,skillsProgressIndex)=>{
    skillProgress.style.animationName = progressBarAnimation[skillsProgressIndex]
});

let educationChild = document.querySelector(".education");

let eduHeader = document.createElement("header");
eduHeader.textContent = "Education";
eduHeader.classList.add("eduHeader");
educationChild.appendChild(eduHeader);

let leftHand = document.createElement("div");
leftHand.classList.add("leftHand")
let rightHand = document.createElement("div");
rightHand.classList.add("rightHand");
let bothHand = document.createElement("bothHand");
bothHand.classList.add("bothHand");

bothHand.appendChild(leftHand);
bothHand.appendChild(rightHand);
educationChild.appendChild(bothHand);

let leftHandParagraph = document.createElement("p");
let leftHandParagraphText = document.createTextNode("Culture and Science City");
leftHandParagraph.appendChild(leftHandParagraphText);
leftHandParagraph.setAttribute("class","leftHandText");
leftHand.appendChild(leftHandParagraph);

let rightHandParagraph = document.createElement("p");
let rightHandParagraphText = document.createTextNode("Bachelor's degree from the Higher Institute of Computer Science and Information Systems, Department of Information Systems, with a good grade.");
rightHandParagraph.appendChild(rightHandParagraphText);
rightHandParagraph.setAttribute("class","rightHandText");
rightHand.appendChild(rightHandParagraph);


skillsSectionPagination.forEach((pageItem)=>{
    pageItem.addEventListener("click",function(){
        aboutMeItems.forEach((aboutItem)=>{
            if(aboutItem.classList.contains(pageItem.textContent)){
                aboutItem.style.display = "block";
                aboutItem.style.opacity = "1";
                if(aboutItem.classList.contains('skills')){
                    skillsProgress.forEach((skillProgress,skillsProgressIndex)=>{
                        skillProgress.style.animationName = progressBarAnimation[skillsProgressIndex]
                    })
                }
            }else{
                aboutItem.style.display = "none";
                aboutItem.style.opacity = "1";
            }
        })
    })
});


//Dark Mode
darkModeBtn.addEventListener("click",()=>{
    backgroundColor.style.setProperty("--backgroundColor","#111");
    darkModeBtn.children[0].classList.toggle("fa-toggle-off");
    darkModeBtn.children[0].classList.toggle("fa-toggle-on");
    if(darkModeBtn.children[0].classList.contains("fa-toggle-off")){
        backgroundColor.style.setProperty("--backgroundColor","#10576f");
    }
})

//translate into arabic
let translateArabic = document.querySelector(".lang");

translateArabic.addEventListener("click",()=>{
    clearInterval(autoTyping);
    myBriefParagraph.innerHTML = "";
    translateArabic.classList.toggle("arabic");
    if(translateArabic.classList.contains("arabic")){
        translateArabic.textContent = "English";
        fetch("translateLang.json")
        .then(
            (res)=>{
                let result = res.json()
                return result;
            }
        )
        .then(
            (navBarTranslate)=>{
                navListItems[0].children[0].textContent = navBarTranslate[0].home;
                navListItems[1].children[0].textContent = navBarTranslate[0].features;
                navListItems[2].children[0].textContent = navBarTranslate[0].contact;
                navListItems[3].children[0].textContent = navBarTranslate[0].aboutMe;
                return navBarTranslate
            }

        )
        .then(
            (translateBriefSection)=>{
                let myBriefParagraph = document.querySelector(".my-brief-paragraph");
                let myAutoTypingHead = document.querySelector(".my-auto-typing-name");
                let myBriefParagraphText = translateBriefSection[1].myBriefParagraph;
                let i = 0;
                let myFeatureSpan = "<span class='feature-word'>مميزاتي</span>";
                let myFeatureSpinner = "<span class='spinner-grow spin-style'></span>"
                myAutoTypingHead.textContent = translateBriefSection[1].myAutoTypingName
                
                let autoTyping = setInterval(()=>{
                    myBriefParagraph.innerHTML += myBriefParagraphText[i];
                    i++;
                    if(i >= myBriefParagraphText.length){
                        clearInterval(autoTyping);
                        myBriefParagraph.innerHTML = myFeatureSpinner + " " + myBriefParagraph.innerHTML + " " + myFeatureSpan;
                        let myFeatureSpanBtn = document.querySelector(".feature-word");
                        myFeatureSpanBtn.addEventListener("click",()=>{
                            window.open("#features","_self");
                        })
                    }
                },100);
                return translateBriefSection;
            }
        )
        .then(
            (translateFeaturesSection)=>{
                featuresSection.children[0].textContent = translateFeaturesSection[2].features; 
                featuresSection.children[1].textContent = translateFeaturesSection[2].featuresParagraph;
                return translateFeaturesSection; 
            }
        )
        .then(
            (translateContactSection)=>{
                let legendTrans = document.querySelector("form legend");
                let labels = document.querySelectorAll("label");
                let submitBtn = document.querySelector("input[type='submit']");
                legendTrans.textContent = translateContactSection[3].contactMeLegend;
                labels[0].textContent = translateContactSection[3].username
                labels[1].textContent = translateContactSection[3].password
                labels[2].textContent = translateContactSection[3].email
                labels[3].textContent = translateContactSection[3].sendMeMessage
                submitBtn.setAttribute("value",translateContactSection[3].submit);
                return translateContactSection;
            }
        )
        .then(
            (translateAboutMeSection)=>{
                let aboutMeHeader = document.querySelector(".about-me-header");
                let aboutMeEducationP = document.querySelector(".rightHandText");
                let aboutMeEducationCollege = document.querySelector(".leftHandText");
                aboutMeHeader.textContent = translateAboutMeSection[4].about;
                aboutMeEducationP.textContent = translateAboutMeSection[4].educationParagraph;
                aboutMeEducationCollege.textContent = translateAboutMeSection[4].educationCollege;
            }
        )
    }else{
        window.location.reload();
    }
    
})