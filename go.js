const data = [
    {
        itemName: "Restuarant Management",
        itemCategory: "Go.MongoDB",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Restaurant Management system developed with Go and MongoDB for efficient operations and data handling.",
        itemImg: "https://media.licdn.com/dms/image/D5622AQEfEqCf9mnCfA/feedshare-shrink_800/0/1704266895863?e=1720051200&v=beta&t=0GO7Ou23O1CqlsQkOzBpwF46dVw56d2jHblnb5yA9jE"
    },
    {
        itemName: "Distributed FileSystem",
        itemCategory: "Go",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Blazingly fast Distributed File System crafted with Go for unparalleled speed and efficiency in data storage and retrieval.",
        itemImg: "https://external-preview.redd.it/10-hours-free-course-distributed-file-system-by-anthony-gg-v0-uq6bchj9sgLg8EwDAdq7cnW0OFYldmJQUmNAUCWRjQI.jpg?format=pjpg&auto=webp&s=7d759174a79bda0417830bc44c7c34732259c220"
    },
    {
        itemName: "Go Bank",
        itemCategory: "Go,MongoDB",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Banking infrastructure developed using Go and MongoDB, encompassing account management, transactions, security, and more for a robust banking experience.",
        itemImg: "https://imgopt.infoq.com/fit-in/3000x4000/filters:quality(85)/filters:no_upscale()/news/2017/03/monzo-bank-golang/en/resources/monzo_request_trace.jpg"
    },
    {
        itemName: "Reddis Clone",
        itemCategory: "Go",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Blazingly fast Redis Clone implemented in Go for lightning-speed caching and data storage solutions.",
        itemImg: "https://media.geeksforgeeks.org/wp-content/uploads/20230315145951/redis(2).png"
    },
    {
        itemName: "Kafla",
        itemCategory: "Go",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Kafla, a system developed in Go, offers versatile capabilities for various applications or services.",
        itemImg: "https://miro.medium.com/v2/resize:fit:1400/0*z3nQB8zQjQCRhrDG.png"
    },
    {
        itemName: "Trading Platform",
        itemCategory: "Go",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "High-Frequency Trading (HFT) platform powered by Go, ensuring lightning-fast execution and optimal performance in financial markets.",
        itemImg: "https://miro.medium.com/v2/resize:fit:2000/1*MNAhnNhouKr7soxeAT_CZw.png"
    }
];




const overlay = document.querySelector(".web2_overlay")
const closeBtn = document.querySelector(".web2_close_btn")
const bodyClose = document.querySelector('.menu-clos')

const t1 = gsap.timeline({
    paused: true, overwrite: "auto"
});

t1.to(overlay, {
    duration: 0.5,
    bottom: "0px",
    rotation: 0,
    transformOrigin: "bottom center",
    ease: "power3.inOut"
})

const items = document.querySelectorAll(".web2_item");

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        updateOverlay(data[index])

        t1.play();
    })
})

closeBtn.addEventListener("click", () => {
    t1.reverse();
})

bodyClose.addEventListener("click", () => {
    t1.reverse();
})

function updateOverlay(dataItem) {
    const itemName = document.querySelector(".web2_item_category").previousElementSibling;
    const itemCategory = document.querySelector(".web2_item_category")

    const itemLink = document.querySelector("#web2_item_link");
    const itemCopy = document.querySelector(".web2_item_copy");
    const itemImg = document.querySelector("#web2_item_img");
    itemName.textContent = dataItem.itemName;
    itemCategory.textContent = dataItem.itemCategory;
    itemLink.href = dataItem.itemLink;
    itemCopy.textContent = dataItem.itemCopy;
    itemImg.src = dataItem.itemImg;

}

document.addEventListener("click", (e) => {
    if (!overlay.contains(e.target) && !isItem(e.target)) {
        t1.reverse();
    }
})

function isItem(target) {
    return target.closet('.web2_item')
}