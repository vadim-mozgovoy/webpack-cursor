import '../src/styles/style-hw10.css'
import '../src/img/dj-playing-music-at-sound-mixer-in-night-club_53876-18678.jpg'
import '../src/modules/hw-10.js'
import '../src/modules/hw-9.js'
import '../src/sounds'
import {getRandomNumber} from "./modules/hw-3";
import {apple,orange,lemon} from "./modules/hw-1";
import {sumProducts} from "./modules/hw-1";


console.log(`HW 3: ${getRandomNumber(10,100)}`);

const div = document.querySelector('#hw-01')
const p = document.createElement('p')
const span = document.createElement('span')
const info = `apple = ${apple}, orange = ${orange}, lemon = ${lemon}`
const maxPrice = `Сума всiх фруктiв = ${sumProducts(apple,orange,lemon)} грн. `
p.append(info)
span.append(maxPrice)
div.append(p)
div.append(span)


