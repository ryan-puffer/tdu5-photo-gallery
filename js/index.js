function searchBar() {
    let input = document.querySelector('#search-photos');   //selects input
    let filter = input.value.toLowerCase();                 //gets value of input
    let gallery = document.querySelector('.gallery');       //selects gallery container
    let image = gallery.querySelectorAll('a');              //selects each a tag in gallery container
    for(let i = 0; i < image.length; i++){                  //loops through a tags
        let item = image[i];                                //sets item to be individual a tag
        let caption = item.getAttribute('data-title');      //gets caption of each image and stores in caption variable
        let txtValue = caption.toLowerCase();               //converts captions to lowercase
        console.log(item);
        // if(txtValue.indexOf(filter) > -1) {
        //     image[i].style.display = "";
        // } else {
        //     image[i].style.display = "none";
        // }

        }
    }
