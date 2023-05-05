const carListed = document.querySelector('.carList');
console.log(cars);

cars.forEach((coches) =>{
    const div = document.createElement('div');
    div.classList.add('coches');
    div.innerHTML = `
        <div class="carCard">
            <img src="${coches.carImg}" alt="">
            <h2>${coches.brand+' '+coches.model}</h2>
            <p class='carKm'>${coches.km}</p>
            <p class='carPrice'>${coches.price}</p>
            <a class='rsvBtn' id='${coches.id}'>Reservar</a>
        </div>
    `  
    carListed.appendChild(div);

})

