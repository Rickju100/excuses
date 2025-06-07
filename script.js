let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];



    const pickRandomElementOf = (list) => list[Math.floor(Math.random() * list. length)]
    let excuse = `${pickRandomElementOf(who)} ${pickRandomElementOf(action)} ${pickRandomElementOf(what)} ${pickRandomElementOf(when)} ` 
    

function onloading() {
    document.getElementById("excuse").innerHTML = excuse;
}

onloading();
