//display the image here
const imageContainer = document.getElementById('image-container');
//const loader = document.getElementById('loader');

//empty array to handle the image
let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'HHpPAGcc6csyN3bUswHgMr0VHKIcil55eBPFafjroNc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//helper function to set attribute, Add to Dom
function setAtrributes(element, attributes){
    for (const key in attributes){
        element.setAtrribute(key, attributes[key])
    }
}

//Create Elements for links & Photos, Add to Dom
function displayPhotos(){
    //run function for thr forEach method
    photosArray.forEach((photo) => {
        //create an anchot element to link unsplash
        // const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank')
        setAtrributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
            //create <img> for photo
            const img = document.createElement('img');
            // img.setAttribute('src', photo.urls.regular);
            // img.setAttribute('alt', photo.alt_description);
            // img.setAttribute('title', photo.alt_description);
            setAtrributes(img, {
                src: photo.urls.regular,
                alt: photo.alt_description,
                title: photo.alt_description,
            });
                //put image inside the <a>, then put both inside in imageContainer Element
                item.appendChild(img);
                imageContainer.appendChild(item);
    });
};

// Get photos from the Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json()
        // console.log(photosArray);
        displayPhotos();
    }catch (error){
        //catch error here

    }
}

//on Load call the function
getPhotos();