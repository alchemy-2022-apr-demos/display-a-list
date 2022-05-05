// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDog } from '../utils.js';
import { dogs } from '../dogs.js';

const test = QUnit.test;

test('test dog render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dog"><h1>Benny</h1><img src="./assets/benny.png"><p>Benny is 6 years old with a cuteness factor of 10</p><h2>Breeds</h2><ul><li>Pekingese</li><li>Terrier</li><li>Chihauhau</li></ul></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderDog(dogs[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
