'use strict'

const swtcher = document.querySelector('.bnt');

swtcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }

console.log('current class name: ' + className);
});