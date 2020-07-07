function searchBar() {
    let input = document.getElementById('search-photos').value.toLowerCase();   //selects input
    let imageLinks = document.querySelectorAll('.gallery a');
    for(let i = 0; i < imageLinks.length; i++){                  //loops through a tags
        let link = imageLinks[i];                            //sets item to be individual a tag
        let caption = link.getAttribute('data-title').toLowerCase();      //gets caption of each image and stores in caption variable
        
//if the input does not match any part of the caption that will be set to display none


        if(caption.indexOf(input) > -1) {
            link.style.display = "";
        } else {
            link.style.display = "none";
        }

        }
    }
