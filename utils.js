export function renderDog(dog) {
    const div = document.createElement('div');
    div.classList.add('dog');

    const h1 = document.createElement('h1');
    h1.textContent = dog.name;

    const img = document.createElement('img');
    img.src = dog.image;

    const p = document.createElement('p');
    p.textContent = `${dog.name} is ${dog.age} years old with a cuteness factor of ${dog.cutenessFactor}`;

    div.append(h1, img, p);
    return div;
}
