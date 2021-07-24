//creating the elements

const nav = document.createElement('nav');
    nav.setAttribute("id" , 'nav-container');
const ul = document.createElement('ul');
    ul.setAttribute("class", "link-test");
const FirstLi = document.createElement('li');
const SecondLi = document.createElement('li');
const ThirdLi = document.createElement('li');
const ForthLi = document.createElement('li');

//add any nav item name in datalist in HTML sheet it will appear automatically with the new section 
let navList = [];   
let itemNames = Array.from(document.getElementsByTagName("datalist")); 
itemNames.forEach((Name,index)=>{
    let List = itemNames[index];
    navList.push(List.textContent)
});


const listSections = Array.from(document.getElementsByTagName("section"));

listSections.forEach((section ,index)=>{
    const listItem  = document.createElement('li');
    // console.log(listSections);
    for(let x=0;x<navList.length;x++){
        if(index == x){
    listItem.innerHTML = '<a href="#newItem">'+navList[x]+'</a>';
}
    ul.appendChild(listItem);
    }
    
  });

nav.append(ul);
let currentDiv = document.querySelector(".container");
document.body.insertBefore(nav, currentDiv);




/////////////////////////////////////
let sections = document.querySelectorAll(".home");
let link = document.querySelectorAll('.link-test li a'); 
let myButton = document.getElementById('clicked'); 



for (let i =0; i<sections.length; i++){ // for loop to show the section when moseover
    sections[i].addEventListener("mouseenter", ()=>{
        for (let j=0;j<sections.length;j++){
            sections[j].classList.remove('activity');
        }
        link.forEach((element,i) => { //add and remove the item color depend on the section pointed at
            link[i].classList.remove('active');
            
        });
        console.log(this);
        sections[i].classList.add("activity");
        link[i].classList.add('active');
        continues();

    });
}

for (let i =0; i<sections.length; i++){ // for mobile touch pad
    sections[i].addEventListener("touchmove", ()=>{
        for (let j=0;j<sections.length;j++){
            sections[j].classList.remove('activity');
        }
        link.forEach((element,i) => { 
            link[i].classList.remove('active');
            
        });
        console.log(this);
        sections[i].classList.add("activity");
        link[i].classList.add('active');
    });
}

/////////////////////////////



for (let j = 0; j < link.length; j++) { // for loop to switch the color on each selected item
    link[j].addEventListener('click', function() {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('active');
        }
        console.log('button clicked');
        this.classList.add('active');
        

        for (let index=0;index<sections.length;index++){ // for loop to scroll the the chosen section 
            if (index == j){
                sections[index].scrollIntoView({behavior: "smooth", block: 'center'}) ;
                console.log('sucsess');
                sections[index].classList.add("activity");
            }else{
                console.log('not scrolled');
                sections[index].classList.remove('activity');
            }
        }
    })
}

///////////////////////////////////////



window.onscroll = function() { // function to show Go Top button when scrolling down

    let space = currentDiv.lastElementChild;
    // console.log(space);
    const result= space.offsetHeight;
    // console.log(result)
    

    if (document.body.scrollTop > result*2 || document.documentElement.scrollTop > result*2){
        myButton.style.display = "block";
        // console.log('done');
    }else {
        myButton.style.display = "none";
    }
}

function clickFunction() { // onClick function of the button to get you up to the top
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

/////////////////////////





// NAV-HIDE 
/////////////////////////////////

let scrollF;

(function hide(){ //this is a self invoked method to hide the nav_bar first time we open the window
    let navBar = document.querySelector('.link-test');
     setTimeout(function(){
        navBar.style.cssText ='opacity: 0; transition: opacity 1s ease;';
    }, 600);
})();

 window.addEventListener('scroll' , function () { // function to manipulate the nav while scrolling.

    window.clearTimeout(scrollF);
    
    scrollF = setTimeout(function () {
        stopScrolling();
       console.log('scrol stopped');
    }, 5000);
    continues();
}, false);


let stopScrolling = (function () {  // function to fadeOut when stop scrolling
    let navBar = document.querySelector('.link-test');
    navBar.style.cssText ='opacity: 0; transition: opacity 1s ease;';
    
});

let continues = (function () { // function to fadeIn when scrolling
    let navBar = document.querySelector('.link-test');
    navBar.style.cssText ='opacity: 100%; transition: opacity 1s ease;';
    
});
///////////////////////////////////








