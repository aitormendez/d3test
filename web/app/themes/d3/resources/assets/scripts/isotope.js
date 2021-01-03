var Isotope = require('isotope-layout');
require('isotope-packery');

var iso = new Isotope( '.tags', {
  itemSelector: '.tag',
  layoutMode: 'packery'
});

let escamaWow = document.getElementById('escama-wow');
let escamaAltertime = document.getElementById('escama-altertime');
let escamaOverwatch = document.getElementById('escama-overwatch');
let escamaHeroes = document.getElementById('escama-heroes');
let escamaDiablo = document.getElementById('escama-diablo');
let escamaHearthstone = document.getElementById('escama-hearthstone');
let escamaStarcraft = document.getElementById('escama-starcraft');

escamaAltertime.addEventListener('click', function() {
  iso.arrange({
    filter: '*',
  })
})

escamaWow.addEventListener('click', function() {
  iso.arrange({
    filter: '.tag.wow',
  })
})

escamaOverwatch.addEventListener('click', function() {
  iso.arrange({
    filter: '.tag.overwatch',
  })
})

escamaHeroes.addEventListener('click', function() {
  iso.arrange({
    filter: '.tag.heroes',
  })
})

escamaDiablo.addEventListener('click', function() {
  iso.arrange({
    filter: '.tag.diablo',
  })
})

escamaHearthstone.addEventListener('click', function() {
  iso.arrange({
    filter: '.tag.hearthstone',
  })
})

escamaStarcraft.addEventListener('click', function() {
  iso.arrange({
    filter: '.tag.starcraft',
  })
})
