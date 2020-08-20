'use strict'

var btn = document.getElementById('clNaviBtn');
var menu = document.getElementById('clSpMenu');
var close = document.getElementById('clNaviBg');

btn.addEventListener('click' , () =>{
menu.classList.toggle('open');
btn.classList.toggle('active');
close.classList.toggle('open');
});

close.addEventListener('click' , () =>{
    menu.classList.remove('open');
    btn.classList.remove('active');
    close.classList.remove('open');
});