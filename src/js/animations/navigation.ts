export const init = () => {
    hamburger()
}

const hamburger = () => {
    const button: HTMLElement = document.getElementById('hamburger-mobile-navigation') as HTMLElement
    const page: HTMLElement = document.getElementById('page') as HTMLElement
    const siteNavigation: HTMLElement = document.getElementById('site-navigation') as HTMLElement
    const mobileSiteNavigation: HTMLElement = document.getElementById('mobile-site-navigation') as HTMLElement
    let closed = true

    if (button) {

        button.addEventListener('click', () => {
            closed = !closed

            if (closed) {
                slideOpen(page, siteNavigation, button, mobileSiteNavigation)
            } else {
                slideClose(page, siteNavigation, button, mobileSiteNavigation)
            }
        })

    }
}

const slideOpen = (page: HTMLElement, siteNavigation: HTMLElement, button: HTMLElement, mobileSiteNavigation: HTMLElement) => {
    page.classList.remove('slide')
    siteNavigation.classList.remove('slide')

    button.querySelectorAll('.hamburger-parent')[0].classList.remove('close')
    button.querySelectorAll('.hamburger-sr')[0].textContent = 'Open'
    mobileSiteNavigation.setAttribute('aria-expanded', 'false')
}

const slideClose = (page: HTMLElement, siteNavigation: HTMLElement, button: HTMLElement, mobileSiteNavigation: HTMLElement) => {
    page.classList.add('slide')
    siteNavigation.classList.add('slide')
    button.querySelectorAll('.hamburger-parent')[0].classList.add('close')
    button.querySelectorAll('.hamburger-sr')[0].textContent = 'Close'
    mobileSiteNavigation.setAttribute('aria-expanded', 'true')
}
