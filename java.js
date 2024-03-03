document.addEventListener('DOMContentLoaded', function() {

    const animeIds = [20, 16870, 28755, 13667, 2472]
    let isLightMode = true;

    const changebackground = () => {
        const body = document.body;

        const lightMode = 'antiquewhite';
        const darkMode = 'darkgray';

        if (isLightMode) {
            body.style.backgroundColor = darkMode;
        } else {
            body.style.backgroundColor = lightMode;
        }

        isLightMode = !isLightMode;
    };  

     const getData = (animeId) => {
     fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
        .then((res) => res.json())
        .then((obj) => {
            console.log(animeId, 'responding', obj); displayAnimeData(obj)})
        .catch((error) => console.error('Could Not Get The URL', error));
    };


    const displayAnimeData = (obj) => { console.log(obj.data.url)
    const animeContainer = document.getElementById('animeContainer');
    const titleElement = document.createElement('p');
    const image = document.createElement('img');

    image.src = obj.data.images.jpg.image_url
    
    titleElement.textContent = obj.data.titles[0].title.toUpperCase() +" | "+ obj.data.url 

    animeContainer.appendChild(titleElement);

    animeContainer.appendChild(image);
    }

    const btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        const animeContainer = document.getElementById('animeContainer');

        animeContainer.innerHTML = '';

        animeIds.forEach((animeId) => {
                getData(animeId)
            });
        });

    const dblclick = document.getElementById('dblClick');
    const hoverBox = document.getElementById('hoverBox');
        
        dblclick.addEventListener('dblclick', function() {
        changebackground();
    }); 

        hoverBox.addEventListener('mouseover', function() {
            hoverBox.style.background = 'lightcoral';
        });

        hoverBox.addEventListener('mouseout', function() {
            hoverBox.style.background = 'aquamarine';
        });

})

