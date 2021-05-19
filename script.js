
    let modalImg = document.createElement('img')
    modalImg.classList.add('img-fluid') 
   let closebutton = document.querySelector('.closebutton')
   closebutton.addEventListener('click', function(e){
    modalImg.src.remove()
}) 

const laptopImg = function(){
fetch("http://www.splashbase.co/api/v1/images/search?query=laptop")
.then((response) => response.json())
.then((laptop) => {
    console.log(laptop);
    let cardImage = document.querySelectorAll('.card img')
    let smallString = document.querySelectorAll('.card small')
    let viewButton = document.querySelectorAll('.card button:first-of-type')
    let modalBody = document.querySelector('.modal-body')
    console.log(cardImage[0]);
    for(let i=0; i<cardImage.length; i++){
        document.querySelectorAll(".card-img-top")[i].style.display = "none"
        let id = laptop.images[i].id
        cardImage[i].classList.add('img-fluid')
        cardImage[i].src = laptop.images[i].url
        viewButton[i].setAttribute("data-toggle","modal")
        viewButton[i].setAttribute("data-target", "#exampleModal")
        viewButton[i].setAttribute("id", `${i}`)     
        smallString[i].innerText = laptop.images[i].id 
    }
    viewButton.forEach((viewbtn)=>{
        viewbtn.addEventListener('click',(e)=>{
            let currentId =  e.currentTarget
            let currentCard = currentId.closest('.card')
            let currentCardImage = currentCard.querySelector('img')  
            modalImg.src = currentCardImage.src  
        })
    })
          
 modalBody.appendChild(modalImg)
   let closebutton = document.querySelector('.closebutton')
   closebutton.addEventListener('click', function(e){
     modalImg.src.remove()
}) 
})
.catch(err => {
    console.error(err);
})

}

const flowerImg = function(){
    let search = document.querySelector(".search-input").value;
    if(search.length != 0){
    fetch(`http://www.splashbase.co/api/v1/images/search?query="+${search}`)
    .then((response) => response.json())
    .then((flower) => {
        console.log(flower);
        for(let i = 0; i< 10; i++){
            let image = flower.images[i]
            document.querySelectorAll('.card .flower-image')[i].style.display = "none"
            let img = document.createElement("img");
            let container = document.querySelectorAll(".image-conatiner")
            let cards = document.querySelectorAll(".card");            
            img.classList.add("img-fluid");
            img.src  = image.url;            
            container[i].innerHTML = " "
            container[i].appendChild(img);
            document.querySelectorAll(".card-img-top")[i].style.display = "none"
        }          
    })
    .catch(err => {
        console.error(err);
    })
}
else {
    fetch("http://www.splashbase.co/api/v1/images/search?query=flower")
    .then((response) => response.json())
    .then((flower) => {
        let cardImage = document.querySelectorAll('.card img')
        let smallString = document.querySelectorAll('.card small')
        let viewButton = document.querySelectorAll('.card button:first-of-type')
        let modalBody = document.querySelector('.modal-body')
        console.log(viewButton[0]);
           for(let i=0; i<cardImage.length; i++){            
            let id = flower.images[i].id
             cardImage[i].classList.add('img-fluid', 'flower-image')
             cardImage[i].src = flower.images[i].url
             document.querySelectorAll(".card-img-top")[i].style.display = "none"
             viewButton[i].setAttribute("data-toggle","modal")
             viewButton[i].setAttribute("data-target", "#exampleModal")
             viewButton[i].setAttribute("id", `${flower.images[i].id}`)          
             smallString[i].innerText = flower.images[i].id 
        }

      
        viewButton.forEach((viewbtn)=>{
            viewbtn.addEventListener('click',(e)=>{
                let currentId =  e.currentTarget
                let currentCard = currentId.closest('.card')
                let currentCardImage = currentCard.querySelector('img')  
                modalImg.src = currentCardImage.src  
            })
        })
              
     modalBody.appendChild(modalImg)
       let closebutton = document.querySelector('.closebutton')
       closebutton.addEventListener('click', function(e){
         modalImg.src.remove()
   }) 
          
    })
    .catch(err => {
        console.error(err);
    })
}
      
}

window.onload = function(){
    let EditButton = document.querySelectorAll('.card button:last-of-type')
    EditButton.forEach((btn)=> {
        btn.innerText="Hide"
    btn.addEventListener('click', (e)=>{
        e.target.closest('.card').remove()
    })})
}    




