function changeColor(element) {
    var navOptions = document.getElementsByClassName('nav-option');
    for (var i = 0; i < navOptions.length; i++) {
        navOptions[i].classList.remove('active');
    }
    
    element.classList.add('active');
    }