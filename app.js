window.addEventListener('scroll', function () {
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var rec = reveals[i].getBoundingClientRect();
        // console.log(rec);
        // console.log(revealtop);
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }

    }
})  