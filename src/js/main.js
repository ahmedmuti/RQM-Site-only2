
const sideMenu = document.getElementById('side-menu')
const closeIcon = document.getElementById('close')
const openIcon = document.getElementById('open')
const modeIcon = document.getElementById('mode')

closeIcon.addEventListener('click', function () {
    sideMenu.style.left = "100%"
})
openIcon.addEventListener('click', function () {
    sideMenu.style.left = "0%"

})


//click toggle
modeIcon.addEventListener('click', function () {
    if (localStorage.theme === 'light') {
        modeIcon.innerHTML = '<i class="ri-moon-line mx-3 text-xl cursor-pointer"></i>'
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        modeIcon.innerHTML = '<i class="ri-moon-fill mx-3 text-xl cursor-pointer"></i>'
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
})
if (localStorage.theme && localStorage.theme == "dark") {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
    modeIcon.innerHTML = '<i class="ri-moon-line mx-3 text-xl cursor-pointer"></i>'

} else if (localStorage.theme && localStorage.theme == "light") {
    document.documentElement.classList.remove('dark')
    modeIcon.innerHTML = '<i class="ri-moon-fill mx-3 text-xl cursor-pointer"></i>'
    localStorage.theme = 'light'
}
// reload toggle
if (!localStorage.theme) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
        modeIcon.innerHTML = '<i class="ri-moon-line mx-3 text-xl cursor-pointer"></i>'

    } else {
        document.documentElement.classList.remove('dark')
        modeIcon.innerHTML = '<i class="ri-moon-fill mx-3 text-xl cursor-pointer"></i>'
        localStorage.theme = 'light'
    }
}
//system toggle
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
        document.documentElement.classList.add('dark')
        modeIcon.innerHTML = '<i class="ri-moon-line mx-3 text-xl cursor-pointer"></i>'

        localStorage.theme = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        modeIcon.innerHTML = '<i class="ri-moon-fill mx-3 text-xl cursor-pointer"></i>'

        localStorage.theme = 'light'

    }
})


$('.carousel-one').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.owl-carousel2').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    rtl: true,
    slideTransition: 'linear',
    smartSpeed: 1700,

    autoplay: true,
    autoplayTimeout: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1000: {
            items: 8
        }
    }
})