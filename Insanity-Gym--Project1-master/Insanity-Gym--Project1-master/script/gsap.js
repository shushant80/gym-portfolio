window.addEventListener('load', () => {
    const timeline = gsap.timeline()
    timeline
        .to('.main-title', {
            duration: 1,
            x: '0',
            ease: "sine.in",
        })
        .to('.title-area h3', {
            duration: 1,
            x: '0',
            ease: "sine.in",
        })
        .to('.button-area', {
            delay: 0.5,
            duration: 1,
            opacity: 1,
        })
        .to('.highlight', {
            duration: 1,
            color: '#e65f21'
        })
})

// Features animation
gsap.from('.feature', {
    scrollTrigger: '.feature-trigger',
    duration: 1,
    opacity: 0,
    y: '30px'
})
gsap.from('.learn-more', {
    scrollTrigger: '.feature-trigger',
    duration: 1,
    opacity: 0,
    y: '30px'
})

gsap.from('.image-container img', {
    scrollTrigger: '.feature-trigger2',
    delay: 0.5,
    duration: 1,
    opacity: 0,
    x: '100vh',
    ease: "power1",
})

// Gym shop animation
gsap.from('.shop-description', {
    scrollTrigger: '.feature-trigger2',
    duration: 1,
    opacity: 0,
    y: '50px'
})

// Gym membership animation
gsap.from('.membership', {
    scrollTrigger: '.membership-trigger',
    stagger: 0.3,
    duration: 0.7,
    opacity: 0,
    y: '50px'
})

// Join us animation
gsap.from('.banner-title', {
    scrollTrigger: '.join-us',
    duration: 1,
    opacity: 0,
    y: '50px'
})
gsap.to(' .highlight-1', {
    scrollTrigger: '.join-trigger',
    delay: 1.3,
    duration: 1,
    color: '#e65f21',
})
gsap.from('.join', {
    scrollTrigger: '.join-us',
    duration: 1,
    opacity: 0,
})

// Contact us animation
gsap.from('.contact-info h3', {
    scrollTrigger: '.footer-trigger',
    duration: 1,
    opacity: 0,
    x: '-100vh'
})

gsap.from('.connect-us h3', {
    scrollTrigger: '.footer-trigger',
    duration: 1,
    opacity: 0,
    x: '100vh'
})

gsap.from('.method', {
    scrollTrigger: '.footer-trigger',
    stagger: 0.3,
    delay: 1,
    duration: 0.7,
    opacity: 0,
    y: '50px'
})

gsap.from('.fab', {
    scrollTrigger: '.footer-trigger',
    stagger: 0.3,
    delay: 1,
    duration: 0.7,
    opacity: 0,
    y: '50px'
})

// Footer animation

gsap.from('footer', {
    scrollTrigger: '.footer-trigger',
    stagger: 0.3,
    delay: 2.3,
    duration: 0.7,
    opacity: 0,
})

// Sign up area
window.addEventListener('load', () => {
    gsap.from('form', {
        duration: 1,
        x: '-100vh',
        opacity: 0
    })
})