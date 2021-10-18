
export default function changeNavbarBack() {
    window.addEventListener('scroll', () => {
        (window.scrollY) > 100 ?
            document.querySelector('header').classList.add('scrolling')
            : document.querySelector('header').classList.remove('scrolling');
    })
}