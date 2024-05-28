function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
    function updateCounter() {
        if (currentValue === 100) {
            return
        }
        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }
        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;

        setTimeout(updateCounter, delay);
    }
    updateCounter();
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("hahaha")
    const menu = document.querySelector(".menu");
    const toggeleButton = document.querySelector(".toggle");
    const closeButton = document.querySelector(".close-btn");

    let isOpen = false;

    const timeline = gsap.timeline({ paused: true });

    timeline.to(menu, {
        duration: 0.3,
        opacity: 1,
    })
    timeline.to(menu, {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "polygon(49.75% 0%, 50.25% 0%, 50.25% 100%,49.75% 100%)"
    },
        "-=0.3"
    )
    timeline.to(menu, {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        pointerEvent: "all"
    })
    timeline.to(".divider", {
        duration: 1,
        ease: "power3.inOut",
        height: "100%"
    },
        "-=0.75"
    );
    console.log("mh")

    toggeleButton.addEventListener("click", function () {
        console.log("no")
        if (isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen
    })

    closeButton.addEventListener("click", function () {
        if (isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen
    })
})

function hidePreloader() {
    const overlay = document.querySelector('.overlay');
    const counter = document.querySelector('.counter');
    overlay.classList.add('hidden');
    counter.classList.add('hidden');
}


function pageTransition() {
    let t1 = gsap.timeline();

    t1.to(".transition", {
        duration: 0.7,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: "power4.inOut",
        delay: 0.3
    })
    t1.to(".transition", {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: "top",
        ease: "power4.inOut",
    })
}
function delay(n) {
    n = n || 0;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        });
    })
}