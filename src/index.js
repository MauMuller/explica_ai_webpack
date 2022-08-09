import Planet from "./models/planet";
import solar_system from "./models/solar_system";

const planet = new Planet("Terra", "342323m²");

alert(JSON.stringify(solar_system));
alert(JSON.stringify(planet));

planet.rotate();
console.log(planet);
console.log(solar_system);
