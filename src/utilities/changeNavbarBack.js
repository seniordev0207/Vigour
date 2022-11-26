
export default function changeNavbarBack() {
    const headerElement = document.querySelector('header')
    const navElement = document.querySelector('header>nav')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            headerElement.classList.add('scrolling')
            window.location.pathname === '/covid19' && navElement.classList.replace('navbar-dark', 'navbar-light')
        } else {
            headerElement.classList.remove('scrolling');
            window.location.pathname === '/covid19' && navElement.classList.replace('navbar-light', 'navbar-dark')
        }
    })
}