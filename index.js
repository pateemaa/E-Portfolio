function changeColor(element) {
    var navOptions = document.getElementsByClassName('nav-option');
    for (var i = 0; i < navOptions.length; i++) {
        navOptions[i].classList.remove('active');
    }
    
    element.classList.add('active');
}

function highlightNavLink() {
    var sections = document.querySelectorAll('.content-section');
    var navOptions = document.getElementsByClassName('nav-option');

    sections.forEach(function(section, index) {
        var rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom > 0) {
            for (var i = 0; i < navOptions.length; i++) {
                navOptions[i].classList.remove('active');
            }
            navOptions[index].classList.add('active');
        }
    });
}

window.addEventListener('scroll', function() {
    highlightNavLink();
});
