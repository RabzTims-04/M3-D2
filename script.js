const loadSecondary = () =>{
    const cards = document.querySelector(".card");
    let search = document.querySelector(".search-input").value;
    if(search.length != 0){
        fetch(`http://www.splashbase.co/api/v1/images/search?query="+${search}`)
        .then((response) => response.json())
        .then((images)=>{
            console.log(images);
            // console.log(images.images.length);
            for(let i = 0; i< images.images.length; i++){
                const image = images.images[i]
                const img = document.createElement("img");
                img.classList.add("img-fluid")
                img.src  = image.url;

                cards.appendChild(img);
            }

        })
    }
}


