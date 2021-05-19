
const laptopImg = function(){
fetch("http://www.splashbase.co/api/v1/images/search?query=laptop" )
.then((response) => response.json())
.then((laptop) => {
    console.log(laptop);
    

    let cardImage = document.querySelectorAll('.card img')
    let smallString = document.querySelectorAll('.card small')
    let viewButton = document.querySelectorAll('.card button:first-of-type')
    let EditButton = document.querySelectorAll('.card button:last-of-type')
    let modalBody = document.querySelector('.modal-body')
    console.log(cardImage[0]);
    for(let i=0; i<cardImage.length; i++){
        document.querySelectorAll(".card-img-top")[i].style.display = "none"
        let id = laptop.images[i].id
        EditButton[i].innerText ="Hide"
        cardImage[i].classList.add('img-fluig')
        cardImage[i].src = laptop.images[i].url
        viewButton[i].setAttribute("data-toggle","modal")
        viewButton[i].setAttribute("data-target", "#exampleModal")
        viewButton[i].setAttribute("id", `${i}`) 
        let modalImg = document.createElement('img')
        modalImg.classList.add('img-fluid')
        viewButton[i].addEventListener('click', function(e){
           let currentId =  e.currentTarget
           let currentCard = currentId.closest('.card')
           let currentCardImage = currentCard.querySelector('img')
           
          /*  console.log(e);
           console.log(e.target.id, currentId)
           let currentImg = laptop.images.filter((laptop_image)=> laptop_image === currentId)
           currentImg = currentImg.url */
           modalImg.src = "" 
           modalImg.src = currentCardImage.src 
           
        })
        modalBody.appendChild(modalImg)
        /* let currentImg = laptop.images.filter((laptop_image)=> laptop_image.id === id)[0]
        currentImg = currentImg.url
        console.log(currentImg) */
        modalBody.appendChild(modalImg)
        let closebutton = document.querySelector('.closebutton')
        closebutton.addEventListener('click', function(e){
            modalImg.src =""
        })
        
        smallString[i].innerText = laptop.images[i].id
       
    }
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
            
            // cards[i].appendChild("container");
       
           
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
        let EditButton = document.querySelectorAll('.card button:last-of-type')
        let modalBody = document.querySelector('.modal-body')
        console.log(viewButton[0]);
           for(let i=0; i<cardImage.length; i++){
            
            let id = flower.images[i].id
            EditButton[i].innerText ="Hide"
            //console.log("id ", card_id)
             cardImage[i].classList.add('img-fluig', 'flower-image')
             cardImage[i].src = flower.images[i].url
             document.querySelectorAll(".card-img-top")[i].style.display = "none"
             viewButton[i].setAttribute("data-toggle","modal")
             viewButton[i].setAttribute("data-target", "#exampleModal")
             viewButton[i].setAttribute("id", `${flower.images[i].id}`)       
             let modalImg = document.createElement('img')
             modalImg.classList.add('img-fluid')
             viewButton[i].addEventListener('click', function(e){
                let currentId =  e.currentTarget
                let currentCard = currentId.closest('.card')
                let currentCardImage = currentCard.querySelector('img')
               
                modalImg.src = currentCardImage.src 
                       
        })
         
        modalBody.appendChild(modalImg)
        let closebutton = document.querySelector('.closebutton')
        closebutton.addEventListener('click', function(e){
             modalImg.src =""
        })

     /*      let currentImg = flower.images.filter((flower_image)=> flower_image.id === id)[0]
             currentImg = currentImg.url             
             modalImg.src = currentImg */
             
             smallString[i].innerText = flower.images[i].id 
             
            
            // cards[i].appendChild("container");
       
           
        }
          
    })
    .catch(err => {
        console.error(err);
    })
}
}




