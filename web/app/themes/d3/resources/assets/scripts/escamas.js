// console.log('kljjhlkjlj');
// import * as d3 from 'd3';

// d3.select('#contenedor')
//   .append('h5')
//   .append('text')
//   .text(`D3 version: ${d3.version}`)
//   .style("background-color", "gray")

import anime from 'animejs';

// logo banner

let alterTime = document.getElementById('altertime');
let ojoDragon = document.getElementById('ojodragon');
let dragonDiv = document.getElementById('dragondiv');
let dur2 = 300;

alterTime.addEventListener('mouseover', function() {
  anime({
    targets: dragonDiv,
    backgroundColor: '#E0C1F5',
    duration: dur2,
    easing: 'easeInQuad'
  });
})

alterTime.addEventListener('mouseout', function() {
  anime({
    targets: dragonDiv,
    backgroundColor: '#411E5A',
    duration: dur2,
    easing: 'easeInQuad'
  });
})


// iconos juegos

let rebote = 'easeOutElastic(1, 0.2)'
let dur = 2000;
let wow = document.getElementById('wow');
let wowIcon = wow.querySelector('svg');
let wowSpan = wow.querySelector('span');
let wowLink = wow.querySelector('a');


wowLink.addEventListener('mouseover', function() {
  anime({
    targets: wowSpan,
    opacity: 1,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: wowIcon,
    rotate: '360deg',
    duration: dur,
    easing: rebote
  });
})

wowLink.addEventListener('mouseout', function() {
  anime({
    targets: wowSpan,
    opacity: 0,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: wowIcon,
    rotate: '0deg',
    duration: dur,
    easing: rebote
  });
})

let overwatch = document.getElementById('overwatch');
let overwatchIcon = overwatch.querySelector('svg');
let overwatchSpan = overwatch.querySelector('span');
let overwatchLink = overwatch.querySelector('a');


overwatchLink.addEventListener('mouseover', function() {
  anime({
    targets: overwatchSpan,
    opacity: 1,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: overwatchIcon,
    rotate: '360deg',
    duration: dur,
    easing: rebote
  });
})

overwatchLink.addEventListener('mouseout', function() {
  anime({
    targets: overwatchSpan,
    opacity: 0,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: overwatchIcon,
    rotate: '0deg',
    duration: dur,
    easing: rebote
  });
})

let heroes = document.getElementById('heroes');
let heroesIcon = heroes.querySelector('svg');
let heroesSpan = heroes.querySelector('span');
let heroesLink = heroes.querySelector('a');


heroesLink.addEventListener('mouseover', function() {
  anime({
    targets: heroesSpan,
    opacity: 1,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: heroesIcon,
    rotate: '360deg',
    duration: dur,
    easing: rebote
  });
})

heroesLink.addEventListener('mouseout', function() {
  anime({
    targets: heroesSpan,
    opacity: 0,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: heroesIcon,
    rotate: '0deg',
    duration: dur,
    easing: rebote
  });
})

let diablo = document.getElementById('diablo');
let diabloIcon = diablo.querySelector('svg');
let diabloSpan = diablo.querySelector('span');
let diabloLink = diablo.querySelector('a');


diabloLink.addEventListener('mouseover', function() {
  anime({
    targets: diabloSpan,
    opacity: 1,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: diabloIcon,
    rotate: '360deg',
    duration: dur,
    easing: rebote
  });
})

diabloLink.addEventListener('mouseout', function() {
  anime({
    targets: diabloSpan,
    opacity: 0,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: diabloIcon,
    rotate: '0deg',
    duration: dur,
    easing: rebote
  });
})


let hearthstone = document.getElementById('hearthstone');
let hearthstoneIcon = hearthstone.querySelector('svg');
let hearthstoneSpan = hearthstone.querySelector('span');
let hearthstoneLink = hearthstone.querySelector('a');


hearthstoneLink.addEventListener('mouseover', function() {
  anime({
    targets: hearthstoneSpan,
    opacity: 1,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: hearthstoneIcon,
    rotate: '360deg',
    duration: dur,
    easing: rebote
  });
})

hearthstoneLink.addEventListener('mouseout', function() {
  anime({
    targets: hearthstoneSpan,
    opacity: 0,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: hearthstoneIcon,
    rotate: '0deg',
    duration: dur,
    easing: rebote
  });
})

let starcraft = document.getElementById('starcraft');
let starcraftIcon = starcraft.querySelector('svg');
let starcraftSpan = starcraft.querySelector('span');
let starcraftLink = starcraft.querySelector('a');


starcraftLink.addEventListener('mouseover', function() {
  anime({
    targets: starcraftSpan,
    opacity: 1,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: starcraftIcon,
    rotate: '360deg',
    duration: dur,
    easing: rebote
  });
})

starcraftLink.addEventListener('mouseout', function() {
  anime({
    targets: starcraftSpan,
    opacity: 0,
    duration: dur,
    easing: 'cubicBezier(0.000, 0.720, 0.435, 0.800)'
  });
  anime({
    targets: starcraftIcon,
    rotate: '0deg',
    duration: dur,
    easing: rebote
  });
})
