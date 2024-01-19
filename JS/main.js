//animation & nav
let nav = document.querySelector('nav');
let BoxesAnimations = document.querySelectorAll('.ani');
window.onscroll = function() {
    nav.style.position = 'fixed';
    BoxesAnimations.forEach ((animation) => {
        let OffsetTop = animation.offsetTop;
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        if (windowScrollTop > (OffsetTop - windowHeight)) {
            animation.classList.add('animation');
        }
    })
}