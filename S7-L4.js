
// Funzione per creare le card
const createCardWithCats = function(kittiesArray) {
    const catsRow = document.getElementById('unicorns-row');
    kittiesArray.forEach(kitty => {
        const newCatCol = document.createElement('div');
        newCatCol.classList.add('col');
        newCatCol.innerHTML = `
            <div class="card mb-4 shadow-sm h-100 d-flex flex-column">
                <img src="${kitty.src.medium}" alt="${kitty.photographer}" class="h-50">
                <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${kitty.id}</h5>
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="remove(event)"" onclick="remove(event)">Hide</button>
                            <a href="details.html?eventId=${kitty.url}" class="btn btn-secondary">Info</a>
                        </div>
                        <small class="text-muted">${kitty.id}</small>
                    </div>
                </div>
            </div>
        `;
        catsRow.appendChild(newCatCol);
    });
};
// 4) Quando si preme "Hide", l'intera card dovrebbe scomparire.
const remove = function(e) {
    console.log(e.target.closest('.col'))
    console.log('RIMUOVO CARD')
    e.target.closest('.col').remove()
}


// Richiesta e chiamata alla funzione per creare le card
const loadImages = function() {
    fetch('https://api.pexels.com/v1/search?query=kitties', {  
        method: 'GET',
        headers: {
            Authorization: '3mOMoosJtL6s0Odaxaw5c1HPiWFLfEL5CS3Jjm3mZuga4O6i7u4xjNO4'
        }
    })
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Errore');
        }
    })
    .then((data) => {
        console.log('Array', data);
        const kittiesArray = data.photos;
        createCardWithCats(kittiesArray); 
    })
    .catch((error) => {
        console.log('Errore', error);
    });
};

loadImages();

// 1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina

const createCardWithDog = function(dogsArray) {
    const unicornsRow = document.getElementById('unicorns-row');
    

    unicornsRow.innerHTML = '';

    // Aggiungi le card dei cani
    dogsArray.forEach(dog => {
        const newDogCol = document.createElement('div');
        newDogCol.classList.add('col');
        newDogCol.innerHTML = `
            <div class="card mb-4 shadow-sm h-100 d-flex flex-column">
                <img src="${dog.src.medium}" alt="${dog.photographer}" class="h-50">
                <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${dog.id}</h5>
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="remove(event)">Hide</button>
                            <a href="details.html?eventId=${dog.url}" class="btn btn-secondary">Info</a>
                        </div>
                        <small class="text-muted">${dog.id}</small>
                    </div>
                </div>
            </div>
        `;
        unicornsRow.appendChild(newDogCol);
    });
};

const loadImagesUno = function() {
    fetch('https://api.pexels.com/v1/search?query=dogs', {  
        method: 'GET',
        headers: {
            Authorization: '3mOMoosJtL6s0Odaxaw5c1HPiWFLfEL5CS3Jjm3mZuga4O6i7u4xjNO4'
        }
    })
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Errore');
        }
    })
    .then((data) => {
        console.log('Array', data);
        const dogsArray = data.photos;
        createCardWithDog(dogsArray); 
    })
    .catch((error) => {
        console.log('Errore', error);
    });
};


document.getElementById('loadImgUno').addEventListener('click', function() {
    loadImagesUno();
});

// 2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa

const createCardWithHam = function(hamsterArray) {
    const unicornsRow = document.getElementById('unicorns-row');
    

    unicornsRow.innerHTML = '';

    // Aggiungi le card dei cani
    hamsterArray.forEach(ham => {
        const newHamCol = document.createElement('div');
        newHamCol.classList.add('col');
        newHamCol.innerHTML = `
            <div class="card mb-4 shadow-sm h-100 d-flex flex-column">
                <img src="${ham.src.medium}" alt="${ham.photographer}" class="h-50">
                <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${ham.id}</h5>
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="remove(event)">Hide</button>
                            <a href="details.html?eventId=${ham.url}" class="btn btn-secondary">Info</a>
                        </div>
                        <small class="text-muted">${ham.id}</small> 
                    </div>
                </div>
            </div>
        `;
        unicornsRow.appendChild(newHamCol);
    });
};

const loadImagesDue = function() {
    fetch('https://api.pexels.com/v1/search?query=hamster', {  
        method: 'GET',
        headers: {
            Authorization: '3mOMoosJtL6s0Odaxaw5c1HPiWFLfEL5CS3Jjm3mZuga4O6i7u4xjNO4'
        }
    })
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Errore');
        }
    })
    .then((data) => {
        console.log('Array', data);
        const hamsterArray = data.photos;
        createCardWithHam(hamsterArray); 
    })
    .catch((error) => {
        console.log('Errore', error);
    });
};


document.getElementById('loadImgDue').addEventListener('click', function() {
    loadImagesDue();
});
