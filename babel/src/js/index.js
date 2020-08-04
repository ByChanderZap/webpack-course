import '../css/index.css'
import search from './search.js'
import render from './render.js'


const id = prompt('quien es ese pokemon');

search(id)
    .then((data) => {
        console.log(data)
        render(data);
    })
    .catch(() => {
        console.log('Pokemon doesnt exist')
    })