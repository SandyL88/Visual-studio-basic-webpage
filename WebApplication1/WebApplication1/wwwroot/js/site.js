// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// JavaScript
// JavaScript
function loadText() {
    const paragraph = document.getElementById('video_discription');
    const text = paragraph.innerText;
    paragraph.innerText = '';


    let index = 0;
    const interval = 100;
    const timer = setInterval(function () {
        paragraph.textContent += text[index++];
        if (index >= text.length) {
            clearInterval(timer);
        }
    }, interval);
};
document.addEventListener('DOMContentLoaded', loadText);
