export const initNavigation = () => {
    const btn = document.getElementById('hamburger-mobile-navigation')
    const page = document.getElementById('page')
    const siteNavigation = document.getElementById('site-navigation')
    const mobileSiteNavigation = document.getElementById('mobile-site-navigation')
    let closed = true

    btn.addEventListener('click', () => {
        closed = !closed

        if (closed) {
            page.classList.remove('slide')
            siteNavigation.classList.remove('slide')

            btn.querySelectorAll('.hamburger-parent')[0].classList.remove('close')
            btn.querySelectorAll('.hamburger-sr')[0].textContent = 'Open'
            mobileSiteNavigation.setAttribute('aria-expanded', 'false')
        } else {
            page.classList.add('slide')
            siteNavigation.classList.add('slide')

            btn.querySelectorAll('.hamburger-parent')[0].classList.add('close')
            btn.querySelectorAll('.hamburger-sr')[0].textContent = 'Close'
            mobileSiteNavigation.setAttribute('aria-expanded', 'true')
        }
    })
}
