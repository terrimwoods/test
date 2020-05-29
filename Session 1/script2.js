let band="Metallica", 
song="Enter Sandman";

let name;

name=band + ":" + song;
console.log(name);

console.log(name.length);

name=name.concat(" ", "and it's cool...");
console.log(name);

name=name.toUpperCase();

name=name.toLowerCase();
console.log(name);

let activity="I'm learning JS";

name=activity.split(" ");// divide a String
console.log(name);

let hobbies = "read, walk, drink, coffee, play volleyball, netflix";
name = hobbies.split(",");

name=activity.replace("JS", "JavaScript");//replaced a value
name=activity.includes("JS");

console.log(name);

let email= "terriw27us@yahoo.com";

name = email.includes("@");

console.log(name);
