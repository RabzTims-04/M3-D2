const loadSecondary = () =>{
   
    let search = document.querySelector(".search-input").value;
    if(search.length != 0){
        fetch(`http://www.splashbase.co/api/v1/images/search?query="+${search}`)
        .then((response) => response.json())
        .then((images)=>{
            console.log(images);
            // console.log(images.images.length);
            for(let i = 0; i< 10; i++){
                let image = images.images[i]

                let img = document.createElement("img");
                let container = document.querySelectorAll(".image-conatiner")
                let cards = document.querySelectorAll(".card");
                
                img.classList.add("img-fluid");
                img.src  = image.url;

                container[i].appendChild(img);
                document.querySelectorAll(".card-img-top")[i].style.display = "none"
                // cards[i].appendChild("container");
                
                
            }

        })
        search = " "
    }
   
   
}


