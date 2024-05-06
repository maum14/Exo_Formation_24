// Test lien HTML et JS //
// alert('ops')

let team = document.querySelectorAll(".image");
console.log(team);

team[0].addEventListener('mouseover',()=>{
    team[0].style.backgroundImage = 'url(assets/img/joanne.jpg)';        
})
team[1].addEventListener('mouseover',()=>{
    team[1].style.backgroundImage = 'url(assets/img/gaston.jpg)';        

})
team[2].addEventListener('mouseover',()=>{
    team[2].style.backgroundImage = 'url(assets/img/manuel.jpg)';        

})
team[3].addEventListener('mouseover',()=>{
    team[3].style.backgroundImage = 'url(assets/img/tracy.jpg)';        

})





team[0].addEventListener('mouseout',()=>{
    team[0].style.backgroundImage = "";

})

team[1].addEventListener('mouseout',()=>{
    team[1].style.backgroundImage = "";

})
team[2].addEventListener('mouseout',()=>{
    team[2].style.backgroundImage = "";

})
team[3].addEventListener('mouseout',()=>{
    team[3].style.backgroundImage = "";

})