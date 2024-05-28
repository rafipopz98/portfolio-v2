const data = [
    {
        itemName: "Twitter Clone",
        itemCategory: "Solidity.Ethereum",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Created a robust twitter clone using solidity. Added validations for security.",
        itemImg: "https://lh4.googleusercontent.com/e4VEfVTw8ii_mu4Ucza-iUy8u0nsFlDQHyqkkzc5HL1Vs4d3bWdrx7Uf5N9F1PRR7OzNgFuyUHslu-PQ9osxoaFJ0MFl7iEtMGQ1AJhBEaAFtrmHxdIUs4kDS9SRXLJGe-YinB4BE14LkxLbew"
    },
    {
        itemName: "Amazon Clone",
        itemCategory: "Solidity.React",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Buy Stuff using cryptocurrency",
        itemImg: "https://blog.withpaper.com/content/images/size/w2000/2023/05/Group-124--1-.png"
    },
    {
        itemName: "Voting System",
        itemCategory: "Solidity.React",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Cretaed a Real time voting system, where users can cast their votes and updated realtime",
        itemImg: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-981-19-8406-8_44/MediaObjects/538247_1_En_44_Fig1_HTML.png"
    },
    {
        itemName: "Crypto Exchange",
        itemCategory: "Blockchain.Solidity.React",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Created a simple crypto exchange, where users can buy sell their crypto currencies",
        itemImg: "https://cdn.dribbble.com/userupload/9833567/file/original-0c6d9d134ef3a176f8c9ffc59c279eac.png?resize=752x"
    },
    {
        itemName: "Market Place",
        itemCategory: "Solidity.Blockchain.React",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Market place where users can rent, buy/sell products for side income",
        itemImg: "https://cdn.fs.teachablecdn.com/VKuwMO4iQvetvleoZjzv"
    },
    {
        itemName: "More on Github",
        itemCategory: "Check out my github page",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Explore other web3 projects on my github page.",
        itemImg: "github.png"
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