const ANIMATIONS = {
    'fadeIn': {
        initial: ['transition-opacity', 'ease-out', 'duration-1000'],
        in: ['opacity-1'],
        out: ['opacity-0']
    },
    'slideInRightToLeft': {
        initial: ['transition-all', 'ease-out', 'duration-1000'],
        in: ['opacity-1', 'transform', 'translate-x-0'],
        out: ['opacity-0', 'transform', 'translate-x-20']
    },
    'slideLeftToRight': {
        initial: ['transition-all', 'ease-out', 'duration-1000'],
        in: ['opacity-1', 'transform', 'translate-x-0'],
        out: ['opacity-0', 'transform', '-translate-x-20']
    },
    'slideBottomToTop': {
        initial: ['ease-out', 'duration-1000', 'transform'],
        in: ['opacity-1', 'translate-y-0'],
        out: ['opacity-0', 'translate-y-20']
    }
}

//instanciate init
export const init = () => {
    let ticking = false;
    const animateElements = document.querySelectorAll('.animate')

    setInitialAnimations(animateElements)

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                animateBlocks(animateElements);
                ticking = false;
            });

            ticking = true;
        }

    });
}

const setInitialAnimations = (animateElements: NodeListOf<HTMLElement>) => {

    console.log('initial', animateElements)

    for (const block of animateElements) {
        const animationType = block.dataset.animation ?? 'fadeIn'
        const animation = ANIMATIONS[animationType]
        block.classList.add(...animation.initial, ...animation.out)
    }

    animateBlocks(animateElements);
}

const animateBlocks = (animateElements: NodeListOf<HTMLElement>) => {

    for (const block of animateElements) {
        const animationType = block.dataset.animation ?? 'fadeIn'

        const boundingBox = block.getBoundingClientRect()

        const isVisible = boundingBox.y < (window.innerHeight * .75)

        if (isVisible) {
            const animation = ANIMATIONS[animationType]

            block.classList.add(...animation.in)
            block.classList.remove(...animation.out)
        }

    }
}
