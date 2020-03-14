import { Animal } from "./animal.js"

let cat = new Animal('cat', 4);

console.log(cat.metaData)

const apiUrl = 'https://jsonplaceholder.typicode.com/comments/1';

function getTop100Campers() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json)
    }).catch((error) => {
            console.log('fail')
    });
}

getTop100Campers();