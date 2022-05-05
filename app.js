import { dogs } from './dogs.js';
import { renderDog } from './utils.js';

const dogListElem = document.getElementById('dogs');

for (let dog of dogs) {
    const dogDiv = renderDog(dog);
    dogListElem.append(dogDiv);
}
